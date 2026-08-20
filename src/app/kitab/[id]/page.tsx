import { notFound } from "next/navigation"
import { getKitabDetailFromDb, getKitabListFromDb } from "@/lib/kitab-repo"
import KitabReader from "@/components/kitab/kitab-reader"

type PageProps = { params: Promise<{ id: string }> }

export const dynamic = "force-dynamic"

export default async function KitabBacaPage({ params }: PageProps) {
  const { id } = await params
  const [kitab, allKitab] = await Promise.all([
    getKitabDetailFromDb(id),
    getKitabListFromDb(),
  ])

  if (!kitab) notFound()

  const index = allKitab.findIndex((k) => k.id === id)
  const prevKitab = index > 0 ? allKitab[index - 1] : null
  const nextKitab =
    index >= 0 && index < allKitab.length - 1 ? allKitab[index + 1] : null

  return (
    <KitabReader
      kitab={kitab}
      allKitab={allKitab}
      prevKitab={prevKitab}
      nextKitab={nextKitab}
    />
  )
}

