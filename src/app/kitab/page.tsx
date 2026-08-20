import {
  getKitabListFromDb,
  getUlamaListFromDb,
  getKategoriListFromDb,
} from "@/lib/kitab-repo"
import DaftarKitab from "@/components/kitab/daftar-kitab"

export const dynamic = "force-dynamic"

export default async function KitabUlamaPage() {
  const [kitab, ulama, kategori] = await Promise.all([
    getKitabListFromDb(),
    getUlamaListFromDb(),
    getKategoriListFromDb(),
  ])

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
      <DaftarKitab kitab={kitab} ulama={ulama} kategori={kategori} />
    </main>
  )
}

