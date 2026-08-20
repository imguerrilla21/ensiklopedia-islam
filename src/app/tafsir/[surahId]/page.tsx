import { notFound } from "next/navigation"
import { SURAH_DETAIL_LIST } from "@/lib/tafsir-metadata"
import TafsirUnified from "@/components/tafsir/tafsir-unified"

type PageProps = { params: Promise<{ surahId: string }> }

export const dynamic = "force-dynamic"

export function generateStaticParams() {
  return SURAH_DETAIL_LIST.map((s) => ({ surahId: s.id }))
}

export default async function BacaTafsirPage({ params }: PageProps) {
  const { surahId } = await params
  const num = parseInt(surahId, 10)
  const surahMeta = SURAH_DETAIL_LIST.find(
    (s) => s.id === surahId || (!isNaN(num) && s.nomor === num),
  )

  if (!surahMeta) notFound()

  const defaultEnd = Math.min(7, surahMeta.jumlahAyat)
  const defaultRange = surahMeta.jumlahAyat === 1 ? "1" : `1-${defaultEnd}`

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-3 py-6 sm:px-6 sm:py-8">
      <TafsirUnified
        initialSurahNomor={surahMeta.nomor}
        initialRange={defaultRange}
      />
    </main>
  )
}
