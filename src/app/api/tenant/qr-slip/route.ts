import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";

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

    // Determine estimated amount based on profile and period
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

    // Payment Receiver Info (Studio TAF / EnterSYS)
    const receiver = {
      name: "Studio TAF - Siniša Zelić s.p.",
      address: "Banja Luka, Bosna i Hercegovina",
      account: "555-007-00223344-55", // Nova Banka a.d. Banja Luka
      bankName: "Nova Banka a.d. Banja Luka",
      swift: "NOBABA22",
    };

    const purpose = `Obnova softverske licence: ${tenantName} (${months} mj)`;

    // EPC / IPS QR Code Payload string
    // Format compatible with regional mBanking & IPS scanning:
    const ipsPayload = [
      `K:PR`,
      `V:01`,
      `C:1`,
      `R:${receiver.account.replace(/-/g, "")}`,
      `N:${receiver.name}`,
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
        receiver,
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
