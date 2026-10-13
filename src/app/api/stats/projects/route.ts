import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    let completedCount = 4; // Live completed projects > 6000 (currently 4 = 6004)

    try {
      const rows = await query<{ count: number }>(
        `SELECT COUNT(*) as count FROM projekti WHERE projekat_id > 6000 AND status_id IN (7, 8, 9, 10)`
      );
      if (rows && rows.length > 0 && rows[0].count !== undefined && rows[0].count !== null) {
        completedCount = Number(rows[0].count);
      }
    } catch (err) {
      console.error("Error querying live projekti count:", err);
    }

    const totalProjects = 6000 + completedCount;

    return NextResponse.json({
      ok: true,
      count: totalProjects,
      baseHistoric: 6000,
      recentCompleted: completedCount,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      ok: true,
      count: 6004,
      baseHistoric: 6000,
      recentCompleted: 4,
      lastUpdated: new Date().toISOString(),
    });
  }
}
