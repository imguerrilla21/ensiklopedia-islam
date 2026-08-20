import {
  hadisList,
  getPerawiList,
  getTemaList,
} from "@/lib/hadis-data"
import DaftarHadis from "@/components/hadis/daftar-hadis"

export default function DaftarHadisPage() {
  const perawi = getPerawiList()
  const tema = getTemaList()

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
      <DaftarHadis hadis={hadisList} perawi={perawi} tema={tema} />
    </main>
  )
}
