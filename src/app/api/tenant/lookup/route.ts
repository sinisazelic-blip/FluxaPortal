import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { identifier, password } = await req.json();
    if (!identifier || typeof identifier !== "string") {
      return NextResponse.json(
        { ok: false, error: "Molimo unesite korisničko ime ili naziv organizacije." },
        { status: 400 }
      );
    }

    const term = identifier.trim();
    const pass = (password || "").trim();

    // Security authentication for Aquana
    if (term.toLowerCase() === "aquana" || term.toLowerCase() === "jp aquana") {
      if (pass !== "Aquana01+") {
        return NextResponse.json(
          { ok: false, error: "Netačna lozinka za organizaciju JP Aquana. Pristup je zaštićen." },
          { status: 401 }
        );
      }

      return NextResponse.json({
        ok: true,
        tenant: {
          id: 1,
          naziv: "JP Aquana Banja Luka",
          status: "AKTIVAN",
          profile: "ENTERSYS",
          modules: ["argus", "poolManager", "rentals", "locker", "fluxaPos", "dokumentArt"],
          subscriptionEndsAt: "2026-12-31",
          daysUntilEnd: 82,
          token: "AQUANA-ENTER-2026-TOKEN",
          brojBlagajni: 2,
        },
      });
    }

    // Demo Organization fallback
    if (term.toLowerCase() === "demo") {
      if (pass !== "demo" && pass !== "demo123" && pass !== "Demo01+") {
        return NextResponse.json(
          { ok: false, error: "Netačna lozinka za demo nalog (unesite 'demo123')." },
          { status: 401 }
        );
      }

      return NextResponse.json({
        ok: true,
        tenant: {
          id: 99,
          naziv: "Demo Organizacija",
          status: "AKTIVAN",
          profile: "ENTERSYS",
          modules: ["argus", "poolManager", "rentals", "locker", "fluxaPos"],
          subscriptionEndsAt: "2026-12-31",
          daysUntilEnd: 82,
          token: "DEMO-ENTER-2026-TOKEN",
          brojBlagajni: 1,
        },
      });
    }

    // Database lookup
    const rows = await query<any>(
      `SELECT 
        t.tenant_id, 
        t.naziv, 
        t.status, 
        t.studio_licence_profile, 
        t.soccs_tier,
        t.soccs_platform_scope,
        COALESCE(t.broj_blagajni, 1) AS broj_blagajni,
        t.subscription_ends_at,
        DATEDIFF(t.subscription_ends_at, NOW()) AS days_until_end,
        t.licence_token
      FROM tenants t
      WHERE t.licence_token = ? 
         OR LOWER(t.naziv) = LOWER(?) 
         OR LOWER(t.naziv) LIKE LOWER(?)
      LIMIT 1`,
      [term, term, `%${term}%`]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { ok: false, error: `Organizacija sa identifikatorom '${term}' nije pronađena.` },
        { status: 404 }
      );
    }

    const t = rows[0];
    let parsedScope: string[] = [];
    try {
      if (typeof t.soccs_platform_scope === "string") {
        parsedScope = JSON.parse(t.soccs_platform_scope);
      } else if (Array.isArray(t.soccs_platform_scope)) {
        parsedScope = t.soccs_platform_scope;
      }
    } catch {
      parsedScope = [];
    }

    return NextResponse.json({
      ok: true,
      tenant: {
        id: t.tenant_id,
        naziv: t.naziv,
        status: t.status || "AKTIVAN",
        profile: t.studio_licence_profile || "ENTERSYS",
        modules: parsedScope,
        subscriptionEndsAt: t.subscription_ends_at ? String(t.subscription_ends_at).slice(0, 10) : "2026-12-31",
        daysUntilEnd: Number(t.days_until_end ?? 0),
        token: t.licence_token,
        brojBlagajni: Number(t.broj_blagajni ?? 1),
      },
    });
  } catch (e: any) {
    console.error("Tenant lookup error:", e);
    return NextResponse.json({ ok: false, error: e.message || "Greška na serveru." }, { status: 500 });
  }
}
