import { NextRequest, NextResponse } from "next/server"
import { SURAH_DETAIL_LIST } from "@/lib/tafsir-metadata"
import { generateGeminiTafsirSummary, type AyatInput } from "@/lib/tafsir-summary-service"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      surahNomor = 1,
      start = 1,
      end = 7,
      sourceId = "jalalain",
      ayats = [],
    } = body

    const surah =
      SURAH_DETAIL_LIST.find((s) => s.nomor === Number(surahNomor)) ||
      SURAH_DETAIL_LIST[0]

    const result = await generateGeminiTafsirSummary({
      surah,
      start: Number(start),
      end: Number(end),
      sourceId: String(sourceId),
      ayats: ayats as AyatInput[],
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Tafsir ringkasan error:", error)
    return NextResponse.json(
      { error: "Gagal membuat ringkasan tafsir." },
      { status: 500 },
    )
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const surahNomor = Number(searchParams.get("surah") || 1)
  const start = Number(searchParams.get("start") || 1)
  const end = Number(searchParams.get("end") || 7)
  const sourceId = searchParams.get("source") || "jalalain"

  const surah =
    SURAH_DETAIL_LIST.find((s) => s.nomor === surahNomor) ||
    SURAH_DETAIL_LIST[0]

  const result = await generateGeminiTafsirSummary({
    surah,
    start,
    end,
    sourceId,
    ayats: [],
  })

  return NextResponse.json(result)
}
