import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const profile = (searchParams.get("profile") || "ALL").toUpperCase();

    const packages = [
      {
        id: "entersys",
        name: "EnterSYS & ARGUS Master",
        version: "v2.0.24",
        releaseDate: "2026-10-09",
        size: "48.2 MB",
        description: "Kompletan paket kontrole pristupa (ARGUS), PoolManager, GymManager, HallManager, Locker i mrežnih servisa.",
        downloadUrl: "/downloads/entersys-latest.zip",
        profileRequired: "ENTERSYS",
        changelog: [
          "Optimizacija mrežnog ring protokola i Cisco ASA bypass recovery",
          "Automatska sinhronizacija sa Cloud bazom podataka",
          "Unapređen protokol za automatsku Prisma migraciju baze",
        ],
      },
      {
        id: "fluxapos",
        name: "FluxaPOS Maloprodajna Kasa",
        version: "v1.5.2",
        releaseDate: "2026-10-08",
        size: "32.6 MB",
        description: "Samostalna i mrežna fiskalna POS kasa sa direktnom podrškom za fiskalne printere i barkod skenere.",
        downloadUrl: "/downloads/fluxapos-latest.zip",
        profileRequired: "FLUXAPOS",
        changelog: [
          "Popravljen proračun i prikaz deviznih valuta (EUR/BAM)",
          "Integrisan novi modul brzog ažuriranja kroz Next.js backend",
          "Brža pretraga artikala i optimizacija memorije na Windows 10/11",
        ],
      },
      {
        id: "dokumentart",
        name: "DokumentArt (Javne Nabavke & Ugovori)",
        version: "v2.0.45",
        releaseDate: "2026-10-05",
        size: "24.1 MB",
        description: "Sistem za praćenje javnih nabavki, ugovora, garancija i tenderskih procedura sa automatskim podsjetnicima.",
        downloadUrl: "/downloads/dokumentart-latest.zip",
        profileRequired: "JAVNENABAVKE",
        changelog: [
          "Dodat izvoz evidencija u Excel i PDF formatu",
          "Optimizovano praćenje bankarskih garancija",
          "Prilagođavanje zakonskim izmjenama o javnim nabavkama",
        ],
      },
      {
        id: "logistix",
        name: "LogistiX Enterprise (Transport & Flota)",
        version: "v1.1.25",
        releaseDate: "2026-11-17",
        size: "36.4 MB",
        description: "Dispečerski kokpit, live GPS mapa, nalozi i CMR, 3-step PURS fiskalizacija, DKV/UTA gorivo, Euro-palete i QR tunel za vozače.",
        downloadUrl: "/downloads/logistix-latest.zip",
        profileRequired: "LOGISTIX",
        changelog: [
          "Live GPS mapa i praćenje svih faza ture do ovjerenog CMR-a",
          "3-step BiH/INO fakturisanje sa LPFR/PURS QR kodom i KIF izvozom",
          "Vozački i vlasnički QR tunel sa slanjem CMR-a i dvosmjernim chatom",
        ],
      },
    ];

    let filtered = packages;
    if (profile !== "ALL") {
      filtered = packages.filter(
        (p) => p.profileRequired === profile || (profile === "ENTERSYS" && p.id === "fluxapos")
      );
    }

    return NextResponse.json({
      ok: true,
      timestamp: new Date().toISOString(),
      packages: filtered,
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message || "Greška na serveru." }, { status: 500 });
  }
}
