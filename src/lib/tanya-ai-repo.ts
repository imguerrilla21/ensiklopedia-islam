import { searchContent, type SearchResult } from "@/lib/search-service"
import { cariJawaban, type TanyaAiRujukan } from "@/lib/tanya-ai-data"

const TYPE_LABEL: Record<SearchResult["type"], string> = {
  ayat: "Tafsir",
  hadis: "Hadis",
  kitab: "Kitab",
}

const STOPWORDS = new Set([
  "apa",
  "itu",
  "ini",
  "dan",
  "atau",
  "yang",
  "untuk",
  "dengan",
  "dari",
  "pada",
  "ke",
  "di",
  "ada",
  "saya",
  "kami",
  "kita",
  "mereka",
  "bagaimana",
  "cara",
  "mengapa",
  "siapa",
  "kapan",
  "dimana",
  "jika",
  "maka",
  "akan",
  "sudah",
  "belum",
  "telah",
  "apa",
  "bagaimana",
  "the",
  "how",
  "what",
  "why",
  "who",
  "when",
  "where",
  "to",
  "of",
  "a",
  "an",
])

function extractTerms(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.replace(/[^\p{L}\p{N}]+/gu, ""))
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w))
}

export async function cariRujukan(
  query: string,
): Promise<TanyaAiRujukan[]> {
  const q = query.trim()
  if (!q) return []
  const terms = extractTerms(q)
  if (terms.length === 0) return []

  const byHref = new Map<string, { label: string; href: string; score: number }>()
  for (const term of terms) {
    const results = await searchContent({ q: term, limit: 4 })
    for (const r of results) {
      const existing = byHref.get(r.href)
      if (existing) {
        existing.score += 1
      } else {
        byHref.set(r.href, {
          label: `${TYPE_LABEL[r.type]}: ${r.title}`,
          href: r.href,
          score: 1,
        })
      }
    }
  }

  return Array.from(byHref.values())
    .sort((a, b) => b.score - a.score)
    .map(({ label, href }) => ({ label, href }))
}

export async function getTanyaAiResponse(query: string): Promise<{
  jawaban: string
  rujukan: TanyaAiRujukan[]
  saran: string[]
}> {
  const base = cariJawaban(query)
  const rujukan = await cariRujukan(query)
  return {
    jawaban: base.jawaban,
    rujukan: rujukan.length > 0 ? rujukan : base.rujukan,
    saran: base.lanjutan,
  }
}
