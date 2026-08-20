import { db } from "@/db"
import { kitab, kitabBab } from "@/db/schema"
import { eq } from "drizzle-orm"
import { fetchKitabList, fetchKitabDetail } from "@/lib/ahmad-sanusi"
import {
  kitabList as fallbackKitabList,
  allKitabRegistry,
  type KitabItem,
} from "@/lib/kitab-data"

const KUTUBUS_SITTAH_IDS = new Set([
  "bukhari",
  "muslim",
  "abu-dawud",
  "tirmidzi",
  "nasai",
  "ibnu-majah",
])

export async function getKitabListFromDb(): Promise<KitabItem[]> {
  try {
    const rows = await db.select().from(kitab).orderBy(kitab.judul)
    // Exclude Kutubus Sittah from general Kitab list because they belong to the Hadis section
    const nonKutubRows = rows.filter((r) => !KUTUBUS_SITTAH_IDS.has(r.id))

    if (nonKutubRows.length === 0) return fallbackKitabList

    const babCounts = await db
      .select({
        kitabId: kitabBab.kitabId,
        nomor: kitabBab.nomor,
        judul: kitabBab.judul,
        teks: kitabBab.teks,
      })
      .from(kitabBab)
      .orderBy(kitabBab.nomor)

    const babByKitab = new Map<string, typeof babCounts>()
    for (const b of babCounts) {
      const list = babByKitab.get(b.kitabId) ?? []
      list.push(b)
      babByKitab.set(b.kitabId, list)
    }

    const dbItems: KitabItem[] = nonKutubRows.map((k) => {
      const fallback = fallbackKitabList.find((fb) => fb.id === k.id)
      const bList = babByKitab.get(k.id) ?? []
      return {
        id: k.id,
        ulama: k.ulama,
        kategori: k.kategori,
        judul: k.judul,
        deskripsi: k.deskripsi,
        bab: fallback && fallback.bab.length > bList.length ? fallback.bab : bList,
      }
    })

    // Merge any items in fallbackKitabList not yet in db
    for (const fb of fallbackKitabList) {
      if (!dbItems.some((item) => item.id === fb.id)) {
        dbItems.push(fb)
      }
    }

    return dbItems.filter((item) => !KUTUBUS_SITTAH_IDS.has(item.id))
  } catch {
    return fallbackKitabList
  }
}

export async function getKitabDetailFromDb(
  id: string,
): Promise<KitabItem | null> {
  const fallback = allKitabRegistry.find((k) => k.id === id)
  if (KUTUBUS_SITTAH_IDS.has(id) && fallback) {
    return fallback
  }

  try {
    const rows = await db.select().from(kitab).where(eq(kitab.id, id))
    if (rows.length === 0) {
      return fallback ?? null
    }

    const bRows = await db
      .select()
      .from(kitabBab)
      .where(eq(kitabBab.kitabId, id))
      .orderBy(kitabBab.nomor)

    if (fallback && fallback.bab.length > bRows.length) {
      return fallback
    }

    return {
      id: rows[0].id,
      ulama: rows[0].ulama,
      kategori: rows[0].kategori,
      judul: rows[0].judul,
      deskripsi: rows[0].deskripsi,
      bab: bRows.map((b) => ({
        nomor: b.nomor,
        judul: b.judul,
        teks: b.teks,
      })),
    }
  } catch {
    return fallback ?? null
  }
}

export async function getUlamaListFromDb(): Promise<string[]> {
  try {
    const rows = await db.selectDistinct({ ulama: kitab.ulama }).from(kitab)
    return rows.map((r) => r.ulama).filter(Boolean).sort()
  } catch {
    return Array.from(new Set(fallbackKitabList.map((k) => k.ulama))).sort()
  }
}

export async function getKategoriListFromDb(): Promise<string[]> {
  try {
    const rows = await db
      .selectDistinct({ kategori: kitab.kategori })
      .from(kitab)
    return rows.map((r) => r.kategori).filter(Boolean).sort()
  } catch {
    return Array.from(new Set(fallbackKitabList.map((k) => k.kategori))).sort()
  }
}

export async function syncKitabList(): Promise<boolean> {
  const list = await fetchKitabList()
  if (!list) return false
  for (const k of list) {
    await db
      .insert(kitab)
      .values({
        id: k.slug,
        ulama: k.pengarang,
        kategori: k.kategori,
        judul: k.nama,
        deskripsi: k.deskripsi,
      })
      .onConflictDoUpdate({
        target: kitab.id,
        set: {
          ulama: k.pengarang,
          kategori: k.kategori,
          judul: k.nama,
          deskripsi: k.deskripsi,
        },
      })
  }
  return true
}

export async function syncKitabDetail(
  slug: string,
  targetId: string = slug,
): Promise<boolean> {
  const det = await fetchKitabDetail(slug)
  if (!det) return false
  const k = det.kitab
  await db
    .insert(kitab)
    .values({
      id: targetId,
      ulama: k.pengarang,
      kategori: k.kategori,
      judul: k.nama,
      deskripsi: k.deskripsi,
    })
    .onConflictDoUpdate({
      target: kitab.id,
      set: {
        ulama: k.pengarang,
        kategori: k.kategori,
        judul: k.nama,
        deskripsi: k.deskripsi,
      },
    })
  for (const b of det.bab) {
    await db
      .insert(kitabBab)
      .values({
        id: `${targetId}-${b.nomor}`,
        kitabId: targetId,
        nomor: b.nomor,
        judul: b.judul,
        teks: b.keterangan ?? "",
      })
      .onConflictDoUpdate({
        target: kitabBab.id,
        set: {
          judul: b.judul,
          teks: b.keterangan ?? "",
        },
      })
  }
  return true
}

