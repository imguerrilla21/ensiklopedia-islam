import { db } from "@/db"
import { hadis } from "@/db/schema"
import { eq, and } from "drizzle-orm"
import {
  hadisList,
  getPerawiList,
  getTemaList,
  type HadisItem,
} from "@/lib/hadis-data"

function toItem(r: typeof hadis.$inferSelect): HadisItem {
  return {
    id: r.id,
    perawi: r.perawi,
    tema: r.tema ?? "",
    judul: r.judul ?? "",
    arab: r.arab,
    terjemah: r.terjemah,
    takhrij: r.takhrij,
    derajat: r.derajat ?? "",
    syarah: r.syarah ?? "",
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const perawiQ = url.searchParams.get("perawi")
  const temaQ = url.searchParams.get("tema")
  const filterPerawi = perawiQ && perawiQ !== "all" ? perawiQ : null
  const filterTema = temaQ && temaQ !== "all" ? temaQ : null

  if (db) {
    try {
      const rows = await db.select().from(hadis).orderBy(hadis.perawi, hadis.id)
      if (rows.length > 0) {
        const conditions = []
        if (filterPerawi) conditions.push(eq(hadis.perawi, filterPerawi))
        if (filterTema) conditions.push(eq(hadis.tema, filterTema))
        const filtered =
          conditions.length > 0
            ? await db
                .select()
                .from(hadis)
                .where(and(...conditions))
                .orderBy(hadis.perawi, hadis.id)
            : rows
        const perawiOptions = (
          await db.selectDistinct({ v: hadis.perawi }).from(hadis)
        )
          .map((r: any) => r.v)
          .filter(Boolean)
        const temaOptions = (
          await db.selectDistinct({ v: hadis.tema }).from(hadis)
        )
          .map((r: any) => r.v)
          .filter(Boolean)

        return Response.json({
          count: filtered.length,
          hadis: filtered.map(toItem),
          perawi: perawiOptions,
          tema: temaOptions,
        })
      }
    } catch {
      // Fallback to in-memory
    }
  }

  const data = hadisList.filter(
    (h) =>
      (!filterPerawi || h.perawi === filterPerawi) &&
      (!filterTema || h.tema === filterTema),
  )

  return Response.json({
    count: data.length,
    hadis: data,
    perawi: getPerawiList(),
    tema: getTemaList(),
  })
}
