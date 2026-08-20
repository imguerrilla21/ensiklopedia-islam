import { getSurahDetailFromDb } from "@/lib/tafsir-repo"

type PageProps = { params: Promise<{ id: string }> }

export async function GET(_req: Request, { params }: PageProps) {
  const { id } = await params

  const surahData = await getSurahDetailFromDb(id)
  if (!surahData) {
    return Response.json(
      { error: "Surah tidak ditemukan" },
      { status: 404 },
    )
  }

  return Response.json({
    surah: {
      nomor: surahData.nomor || 0,
      id: surahData.id,
      nama: surahData.nama,
      namaLatin: surahData.namaLatin,
      arti: surahData.arti,
      jumlahAyat: surahData.jumlahAyat,
    },
    ayat: surahData.ayat,
  })
}
