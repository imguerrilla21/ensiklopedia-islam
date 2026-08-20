import { db } from "@/db"
import { hadis } from "@/db/schema"
import { eq } from "drizzle-orm"
import { getHadis } from "@/lib/hadis-data"
import { syncHadis } from "@/lib/hadis-repo"
import { isApiConfigured } from "@/lib/ahmad-sanusi"

type PageProps = { params: Promise<{ id: string }> }

export async function GET(_req: Request, { params }: PageProps) {
  const { id } = await params

  if (db) {
    try {
      const rows = await db.select().from(hadis).where(eq(hadis.id, id))
      if (rows.length > 0) {
        return Response.json({ hadis: rows[0] })
      }

      if (isApiConfigured()) {
        const synced = await syncHadis(id)
        if (synced) {
          const fresh = await db
            .select()
            .from(hadis)
            .where(eq(hadis.id, id))
          if (fresh.length > 0) {
            return Response.json({ hadis: fresh[0], fromApi: true })
          }
        }
      }
    } catch {
      // Fallback to in-memory
    }
  }

  const mock = getHadis(id)
  if (!mock) {
    return Response.json({ error: "Hadis tidak ditemukan" }, { status: 404 })
  }
  return Response.json({ hadis: mock })
}
