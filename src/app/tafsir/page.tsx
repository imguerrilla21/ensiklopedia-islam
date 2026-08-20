import TafsirUnified from "@/components/tafsir/tafsir-unified"

export const dynamic = "force-dynamic"

export default function DaftarSurahPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-3 py-6 sm:px-6 sm:py-8">
      <TafsirUnified initialSurahNomor={1} initialRange="1-7" />
    </main>
  )
}
