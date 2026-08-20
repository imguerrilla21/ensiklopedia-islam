import { db } from "@/db"
import { kitab, kitabBab } from "@/db/schema"
import { eq } from "drizzle-orm"
import { getKitab } from "@/lib/kitab-data"
import { syncKitabDetail } from "@/lib/kitab-repo"
import { isApiConfigured } from "@/lib/ahmad-sanusi"

type PageProps = { params: Promise<{ id: string }> }

function toBab(rows: typeof kitabBab.$inferSelect[]) {
  return rows.map((b) => ({
    nomor: b.nomor,
    judul: b.judul,
    teks: b.teks,
  }))
}

export async function GET(_req: Request, { params }: PageProps) {
  const { id } = await params

  const mock = getKitab(id)
  if (mock) {
    return Response.json({ kitab: mock })
  }

  if (db) {
    try {
      const rows = await db.select().from(kitab).where(eq(kitab.id, id))
      if (rows.length > 0) {
        let babRows = await db
          .select()
          .from(kitabBab)
          .where(eq(kitabBab.kitabId, id))
          .orderBy(kitabBab.nomor)
        if (babRows.length === 0 && isApiConfigured()) {
          await syncKitabDetail(id)
          babRows = await db
            .select()
            .from(kitabBab)
            .where(eq(kitabBab.kitabId, id))
            .orderBy(kitabBab.nomor)
        }
        return Response.json({ kitab: { ...rows[0], bab: toBab(babRows) } })
      }

      if (isApiConfigured()) {
        const synced = await syncKitabDetail(id)
        if (synced) {
          const fresh = await db.select().from(kitab).where(eq(kitab.id, id))
          if (fresh.length > 0) {
            const babRows = await db
              .select()
              .from(kitabBab)
              .where(eq(kitabBab.kitabId, id))
              .orderBy(kitabBab.nomor)
            return Response.json({
              kitab: { ...fresh[0], bab: toBab(babRows) },
              fromApi: true,
            })
          }
        }
      }
    } catch {
      // Fallback
    }
  }

  return Response.json({ error: "Kitab tidak ditemukan" }, { status: 404 })
}
