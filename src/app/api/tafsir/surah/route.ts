import { db } from "@/db"
import { surah } from "@/db/schema"
import { asc } from "drizzle-orm"
import { syncSurahList } from "@/lib/tafsir-repo"
import { surahIndex } from "@/lib/surah-index"
import { surahTafsirList } from "@/lib/tafsir-data"

export async function GET() {
  let rows = await db.select().from(surah).orderBy(asc(surah.nomor))
  if (rows.length === 0) {
    const ok = await syncSurahList()
    if (ok) rows = await db.select().from(surah).orderBy(asc(surah.nomor))
  }

  let data: {
    nomor: number
    id: string
    nama: string
    namaLatin: string
    arti: string
    jumlahAyat: number
  }[]

  if (rows.length > 0) {
    data = rows.map((r) => ({
      nomor: r.nomor,
      id: r.id,
      nama: r.nama,
      namaLatin: r.namaLatin,
      arti: r.arti,
      jumlahAyat: r.jumlahAyat,
    }))
  } else {
    const namaMap = new Map(surahTafsirList.map((s) => [s.id, s.nama]))
    data = surahIndex.map((s) => ({
      nomor: s.nomor,
      id: s.id,
      nama: namaMap.get(s.id) ?? "",
      namaLatin: s.namaLatin,
      arti: s.arti,
      jumlahAyat: s.jumlahAyat,
    }))
  }

  return Response.json({ count: data.length, surah: data })
}
