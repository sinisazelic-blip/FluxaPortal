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

    // 1. First check unified klijenti + tenants lookup (ensures portal credentials entered in Klijenti in app.fluxa.ba work immediately)
    let rows = await query<any>(
      `SELECT 
        COALESCE(t.tenant_id, k.klijent_id) AS tenant_id,
        k.klijent_id,
        COALESCE(t.naziv, k.naziv_klijenta) AS naziv,
        COALESCE(t.status, IF(k.aktivan = 1, 'AKTIVAN', 'NEAKTIVAN')) AS status,
        COALESCE(t.studio_licence_profile, 'ENTERSYS') AS studio_licence_profile,
        t.soccs_tier,
        t.soccs_platform_scope,
        COALESCE(t.broj_blagajni, 1) AS broj_blagajni,
        COALESCE(t.subscription_ends_at, '2026-12-31') AS subscription_ends_at,
        COALESCE(DATEDIFF(t.subscription_ends_at, NOW()), 365) AS days_until_end,
        t.licence_token,
        COALESCE(k.portal_username, t.portal_username) AS portal_username,
        COALESCE(k.portal_password, t.portal_password) AS portal_password
      FROM klijenti k
      LEFT JOIN tenants t ON (t.klijent_id = k.klijent_id OR LOWER(t.portal_username) = LOWER(k.portal_username))
      WHERE LOWER(COALESCE(k.portal_username, '')) = LOWER(?)
         OR (t.portal_username IS NOT NULL AND LOWER(t.portal_username) = LOWER(?))
         OR LOWER(k.naziv_klijenta) = LOWER(?)
         OR (t.naziv IS NOT NULL AND LOWER(t.naziv) = LOWER(?))
         OR (t.licence_token IS NOT NULL AND t.licence_token = ?)
         OR LOWER(k.naziv_klijenta) LIKE LOWER(?)
      ORDER BY (t.tenant_id IS NOT NULL) DESC
      LIMIT 1`,
      [term, term, term, term, term, `%${term}%`]
    );

    // 2. Fallback to standalone tenants table if not found in klijenti
    if (!rows || rows.length === 0) {
      rows = await query<any>(
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
          t.licence_token,
          t.portal_username,
          t.portal_password
        FROM tenants t
        WHERE LOWER(t.portal_username) = LOWER(?)
           OR t.licence_token = ? 
           OR LOWER(t.naziv) = LOWER(?) 
           OR LOWER(t.naziv) LIKE LOWER(?)
        LIMIT 1`,
        [term, term, term, `%${term}%`]
      );
    }

    if (rows && rows.length > 0) {
      const t = rows[0];

      // Password verification
      if (t.portal_password) {
        if (pass !== t.portal_password) {
          return NextResponse.json(
            { ok: false, error: `Netačna lozinka za organizaciju ${t.naziv}. Pristup je zaštićen.` },
            { status: 401 }
          );
        }
      } else if (term.toLowerCase() === "aquana" || term.toLowerCase() === "jp aquana") {
        if (pass !== "Aquana01+") {
          return NextResponse.json(
            { ok: false, error: "Netačna lozinka za organizaciju JP Aquana. Pristup je zaštićen." },
            { status: 401 }
          );
        }
      }

      let parsedScope: string[] = [];
      try {
        if (typeof t.soccs_platform_scope === "string") {
          const str = t.soccs_platform_scope.trim();
          if (str.startsWith("[")) {
            parsedScope = JSON.parse(str);
          } else {
            parsedScope = str.split(",").map((s: string) => s.trim()).filter(Boolean);
          }
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
          portalUsername: t.portal_username || term,
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
          portalUsername: "demo",
        },
      });
    }

    return NextResponse.json(
      { ok: false, error: `Organizacija sa identifikatorom '${term}' nije pronađena.` },
      { status: 404 }
    );
  } catch (e: any) {
    console.error("Tenant lookup error:", e);
    return NextResponse.json({ ok: false, error: e.message || "Greška na serveru." }, { status: 500 });
  }
}
