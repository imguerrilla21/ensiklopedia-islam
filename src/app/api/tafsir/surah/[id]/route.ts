import { db } from "@/db"
import { surah, ayat, tafsir } from "@/db/schema"
import { eq } from "drizzle-orm"
import { getSurah } from "@/lib/tafsir-data"
import { syncSurahDetail } from "@/lib/tafsir-repo"
import { surahIndex } from "@/lib/surah-index"

type PageProps = { params: Promise<{ id: string }> }

export async function GET(_req: Request, { params }: PageProps) {
  const { id: rawId } = await params
  const num = parseInt(rawId, 10)
  let id = rawId
  if (!isNaN(num)) {
    const found = surahIndex.find((s) => s.nomor === num)
    if (found) id = found.id
  }

  let surahRow = await db.select().from(surah).where(eq(surah.id, id))
  let ayatRows = await db
    .select()
    .from(ayat)
    .where(eq(ayat.surahId, id))
    .orderBy(ayat.nomor)
  let tafsirRows = await db.select().from(tafsir).where(eq(tafsir.surahId, id))

  if (surahRow.length === 0 || ayatRows.length === 0) {
    const result = await syncSurahDetail(id)
    if (result === "synced") {
      surahRow = await db.select().from(surah).where(eq(surah.id, id))
      ayatRows = await db
        .select()
        .from(ayat)
        .where(eq(ayat.surahId, id))
        .orderBy(ayat.nomor)
      tafsirRows = await db.select().from(tafsir).where(eq(tafsir.surahId, id))
    }
  }

  if (surahRow.length === 0 || ayatRows.length === 0) {
    const mock = getSurah(id)
    if (!mock) {
      return Response.json(
        { error: "Surah tidak ditemukan" },
        { status: 404 },
      )
    }
    return Response.json({
      surah: {
        nomor: 0,
        id: mock.id,
        nama: mock.nama,
        namaLatin: mock.namaLatin,
        arti: mock.arti,
        jumlahAyat: mock.jumlahAyat,
      },
      ayat: mock.ayat,
    })
  }

  const tafsirByNomor = new Map(tafsirRows.map((t) => [t.ayatNomor, t.teks]))

  return Response.json({
    surah: {
      nomor: surahRow[0].nomor,
      id: surahRow[0].id,
      nama: surahRow[0].nama,
      namaLatin: surahRow[0].namaLatin,
      arti: surahRow[0].arti,
      jumlahAyat: surahRow[0].jumlahAyat,
    },
    ayat: ayatRows.map((a) => ({
      nomor: a.nomor,
      arab: a.arab,
      terjemah: a.terjemah,
      juz: a.juz,
      tafsir: tafsirByNomor.get(a.nomor) ?? "",
    })),
  })
}
