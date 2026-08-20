import { db } from "@/db"
import { surah } from "@/db/schema"
import { asc } from "drizzle-orm"
import { SURAH_DETAIL_LIST } from "@/lib/tafsir-metadata"
import { surahIndex } from "@/lib/surah-index"

export async function GET() {
  try {
    const rows = await db.select().from(surah).orderBy(asc(surah.nomor))
    if (rows.length > 0) {
      return Response.json({
        count: rows.length,
        surah: rows.map((r: any) => ({
          nomor: r.nomor,
          id: r.id,
          nama: r.nama,
          namaLatin: r.namaLatin,
          arti: r.arti,
          jumlahAyat: r.jumlahAyat,
        })),
      })
    }
  } catch {
    // Ignore DB errors on serverless
  }

  const data = SURAH_DETAIL_LIST.map((s) => ({
    nomor: s.nomor,
    id: s.id,
    nama: s.namaArab,
    namaLatin: s.namaLatin,
    arti: s.arti,
    jumlahAyat: s.jumlahAyat,
  }))

  return Response.json({ count: data.length, surah: data })
}
