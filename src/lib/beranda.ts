import { db } from "@/db"
import { readingProgress, users } from "@/db/schema"
import { eq } from "drizzle-orm"
import { kontenPilihanList, menuUtama } from "@/lib/mock-data"

export type BerandaMenuItem = (typeof menuUtama)[number]
export type BerandaKonten = (typeof kontenPilihanList)[number]

export type BerandaLanjutan = {
  id: string
  href: string
  title: string
  subtitle: string
  contentType: string
  contentId: string
  position: string
  lastReadAt: string
}

export type BerandaData = {
  menu: BerandaMenuItem[]
  kontenPilihan: BerandaKonten[]
  lanjutkanMembaca: BerandaLanjutan[]
}

const contentTypePath: Record<string, string> = {
  tafsir: "tafsir",
  hadis: "hadis",
  kitab: "kitab",
}

export async function getBerandaData(
  userId?: string,
): Promise<BerandaData> {
  let lanjutkanMembaca: BerandaLanjutan[] = []

  if (userId) {
    const rows = await db
      .select({
        id: readingProgress.id,
        userId: readingProgress.userId,
        contentType: readingProgress.contentType,
        contentId: readingProgress.contentId,
        position: readingProgress.position,
        lastReadAt: readingProgress.lastReadAt,
        name: users.name,
      })
      .from(readingProgress)
      .innerJoin(users, eq(users.id, readingProgress.userId))
      .where(eq(readingProgress.userId, userId))
      .orderBy(readingProgress.lastReadAt)

    lanjutkanMembaca = rows.map((row) => {
      const base = contentTypePath[row.contentType] ?? row.contentType
      return {
        id: row.id,
        href: `/${base}/${row.contentId}`,
        title: row.name ?? row.contentId,
        subtitle: row.position,
        contentType: row.contentType,
        contentId: row.contentId,
        position: row.position,
        lastReadAt: row.lastReadAt,
      }
    })
  }

  return {
    menu: menuUtama,
    kontenPilihan: kontenPilihanList,
    lanjutkanMembaca,
  }
}
