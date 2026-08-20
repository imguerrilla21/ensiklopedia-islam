import { notFound } from "next/navigation"
import { hadisList, getHadis } from "@/lib/hadis-data"
import HadisReader from "@/components/hadis/hadis-reader"

type PageProps = { params: Promise<{ id: string }> }

export const dynamic = "force-dynamic"

export function generateStaticParams() {
  return hadisList.map((h) => ({ id: h.id }))
}

export default async function HadisDetailPage({ params }: PageProps) {
  const { id } = await params
  const hadis = getHadis(id)
  if (!hadis) notFound()

  const index = hadisList.findIndex((h) => h.id === id)
  const prev = index > 0 ? hadisList[index - 1] : null
  const next = index < hadisList.length - 1 ? hadisList[index + 1] : null

  return <HadisReader hadis={hadis} prev={prev} next={next} />
}
