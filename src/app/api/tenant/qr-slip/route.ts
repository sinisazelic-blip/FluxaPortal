import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const {
      tenantName,
      token,
      profile = "ENTERSYS",
      months = 12,
      currency = "BAM",
      customPrice,
    } = await req.json();

    if (!tenantName) {
      return NextResponse.json(
        { ok: false, error: "Nedostaje naziv organizacije." },
        { status: 400 }
      );
    }

    // 1. Fetch dynamic active firm profile & primary bank account from Fluxa database
    let firmData = {
      name: "Studio TAF sp - Banja Luka",
      address: "Veljka Mlađenovića bb (bazen), 78000 Banja Luka",
      jib: "4509750610000",
      bankName: "Unicredit bank dd",
      account: "3383502257480994",
      accountFormatted: "338-350-22574809-94",
      iban: "BA39 3383 5048 5748 1313",
      swift: "UNCRBA22",
    };

    try {
      const firmRows = await query<any>(
        `SELECT * FROM firma_profile WHERE is_active = 1 ORDER BY firma_id DESC LIMIT 1`
      );
      if (firmRows && firmRows.length > 0) {
        const f = firmRows[0];
        const bankRows = await query<any>(
          `SELECT * FROM firma_bank_accounts WHERE firma_id = ? ORDER BY COALESCE(primary_rank, 99) ASC, bank_account_id ASC`,
          [f.firma_id]
        );
        // Find primary or invoice-shown bank (defaulting to Unicredit)
        const primaryBank =
          bankRows.find((b: any) => Number(b.primary_rank) === 1 || Number(b.show_on_invoice) === 1) ||
          bankRows.find((b: any) => String(b.bank_naziv || "").toLowerCase().includes("unicredit")) ||
          bankRows[0];

        if (primaryBank) {
          const rawAcc = String(primaryBank.bank_racun || "").replace(/[^0-9]/g, "");
          const fmtAcc =
            rawAcc.length === 16
              ? `${rawAcc.slice(0, 3)}-${rawAcc.slice(3, 6)}-${rawAcc.slice(6, 14)}-${rawAcc.slice(14)}`
              : primaryBank.bank_racun;

          firmData = {
            name: f.pravni_naziv || f.naziv || firmData.name,
            address: `${f.adresa || "Veljka Mlađenovića bb"}, ${f.postanski_broj || "78000"} ${f.grad || "Banja Luka"}`,
            jib: f.jib || firmData.jib,
            bankName: primaryBank.bank_naziv || firmData.bankName,
            account: rawAcc || firmData.account,
            accountFormatted: fmtAcc || firmData.accountFormatted,
            iban: primaryBank.iban || firmData.iban,
            swift: primaryBank.swift || firmData.swift,
          };
        }
      }
    } catch (dbErr) {
      console.warn("Could not query firma_profile, using UniCredit fallback:", dbErr);
    }

    // 2. Determine estimated amount based on profile and period
    let basePricePerMonth = 50; // BAM
    if (profile === "ENTERSYS") basePricePerMonth = 80;
    else if (profile === "FLUXAPOS") basePricePerMonth = 40;
    else if (profile === "JAVNENABAVKE") basePricePerMonth = 60;

    let discount = 1;
    if (months === 12) discount = 0.85; // 15% annual discount
    else if (months === 24) discount = 0.75; // 25% 2-year discount

    const totalAmount = customPrice ? Number(customPrice) : Math.round(basePricePerMonth * months * discount);

    // Reference code format: TAF-YYYYMM-TENANT_HASH
    const dateStr = new Date().toISOString().slice(0, 7).replace("-", "");
    const safeNameSlug = tenantName.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8).toUpperCase();
    const referenceNumber = `TAF-${dateStr}-${safeNameSlug}`;

    const purpose = `Obnova softverske licence: ${tenantName} (${months} mj)`;

    // EPC / IPS QR Code Payload string
    // Format compatible with regional mBanking & IPS scanning:
    const ipsPayload = [
      `K:PR`,
      `V:01`,
      `C:1`,
      `R:${firmData.account}`,
      `N:${firmData.name}`,
      `I:${currency}${totalAmount},00`,
      `SF:221`,
      `S:${purpose}`,
      `RO:${referenceNumber}`,
    ].join("\n");

    // Generate high quality QR code data URL
    const qrDataUrl = await QRCode.toDataURL(ipsPayload, {
      errorCorrectionLevel: "M",
      margin: 2,
      width: 320,
      color: {
        dark: "#0f172a",
        light: "#ffffff",
      },
    });

    return NextResponse.json({
      ok: true,
      slip: {
        receiver: {
          name: firmData.name,
          address: firmData.address,
          account: firmData.accountFormatted,
          rawAccount: firmData.account,
          bankName: firmData.bankName,
          iban: firmData.iban,
          swift: firmData.swift,
          jib: firmData.jib,
        },
        payer: {
          name: tenantName,
          token: token || "N/A",
        },
        purpose,
        amount: totalAmount,
        currency,
        referenceNumber,
        months,
        validUntil: new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10),
        qrCode: qrDataUrl,
      },
    });
  } catch (e: any) {
    console.error("QR slip generation error:", e);
    return NextResponse.json(
      { ok: false, error: e.message || "Greška pri generisanju uplatnice." },
      { status: 500 }
    );
  }
}
