import { db } from "@/db"
import { kitab } from "@/db/schema"
import { eq, and } from "drizzle-orm"
import { kitabList, getUlamaList, getKategoriList } from "@/lib/kitab-data"
import { syncKitabList } from "@/lib/kitab-repo"
import { isApiConfigured } from "@/lib/ahmad-sanusi"

type KitabListItem = {
  id: string
  ulama: string
  kategori: string
  judul: string
  deskripsi: string
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const kategoriQ = url.searchParams.get("kategori")
  const ulamaQ = url.searchParams.get("ulama")
  const filterKategori = kategoriQ && kategoriQ !== "all" ? kategoriQ : null
  const filterUlama = ulamaQ && ulamaQ !== "all" ? ulamaQ : null

  let rows = await db.select().from(kitab).orderBy(kitab.judul)
  if (rows.length === 0 && isApiConfigured()) {
    await syncKitabList()
    rows = await db.select().from(kitab).orderBy(kitab.judul)
  }

  let data: KitabListItem[]
  let ulamaOptions: string[]
  let kategoriOptions: string[]

  if (rows.length === 0) {
    data = kitabList
      .filter(
        (k) =>
          (!filterKategori || k.kategori === filterKategori) &&
          (!filterUlama || k.ulama === filterUlama),
      )
      .map((k) => ({
        id: k.id,
        ulama: k.ulama,
        kategori: k.kategori,
        judul: k.judul,
        deskripsi: k.deskripsi,
      }))
    ulamaOptions = getUlamaList()
    kategoriOptions = getKategoriList()
  } else {
    const conditions = []
    if (filterKategori) conditions.push(eq(kitab.kategori, filterKategori))
    if (filterUlama) conditions.push(eq(kitab.ulama, filterUlama))
    data =
      conditions.length > 0
        ? (
            await db
              .select()
              .from(kitab)
              .where(and(...conditions))
              .orderBy(kitab.judul)
          ).filter((k) => !["bukhari", "muslim", "abu-dawud", "tirmidzi", "nasai", "ibnu-majah"].includes(k.id))
        : rows.filter((k) => !["bukhari", "muslim", "abu-dawud", "tirmidzi", "nasai", "ibnu-majah"].includes(k.id))
    ulamaOptions = (await db.selectDistinct({ v: kitab.ulama }).from(kitab))
      .map((r) => r.v)
      .filter((u) => !["Imam Al-Bukhari", "Imam Muslim", "Imam Abu Dawud", "Imam At-Tirmidzi", "Imam An-Nasa'i", "Imam Ibnu Majah"].some((kU) => u.includes(kU)))
      .sort()
    kategoriOptions = (
      await db.selectDistinct({ v: kitab.kategori }).from(kitab)
    )
      .map((r) => r.v)
      .sort()
  }

  return Response.json({
    count: data.length,
    kitab: data,
    ulama: ulamaOptions,
    kategori: kategoriOptions,
  })
}
