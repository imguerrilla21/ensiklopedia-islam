import { db } from "@/db"
import { surah, ayat, tafsir, hadis, kitab, kitabBab } from "@/db/schema"
import { and, eq, like, or, type Column } from "drizzle-orm"

export type SearchType = "ayat" | "hadis" | "kitab"

export type SearchResult = {
  type: SearchType
  title: string
  snippet: string
  source: string
  category?: string
  href: string
}

export type SearchOptions = {
  q?: string
  type?: "all" | SearchType
  category?: string
  limit?: number
}

function escapeLike(value: string): string {
  return value.replace(/[\\%_]/g, "\\$&")
}

function termConditions(columns: Column[], rawQuery: string) {
  const terms = rawQuery
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map(escapeLike)
  if (terms.length === 0) return undefined
  const conditions = terms.map((t) => {
    const perTerm = columns.map((c) => like(c, `%${t}%`))
    return or(...perTerm)
  })
  return and(...conditions)
}

export function createSmartSnippet(
  text: string,
  query: string,
  maxLength = 220,
): string {
  if (!text) return ""
  const cleanText = text.replace(/\s+/g, " ").trim()
  if (!query || !query.trim()) {
    return cleanText.length > maxLength
      ? cleanText.slice(0, maxLength) + "…"
      : cleanText
  }
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  const lowerText = cleanText.toLowerCase()
  let firstIdx = -1
  for (const term of terms) {
    const idx = lowerText.indexOf(term)
    if (idx !== -1 && (firstIdx === -1 || idx < firstIdx)) {
      firstIdx = idx
    }
  }
  if (firstIdx === -1) {
    return cleanText.length > maxLength
      ? cleanText.slice(0, maxLength) + "…"
      : cleanText
  }
  const start = Math.max(0, firstIdx - 50)
  const end = Math.min(cleanText.length, start + maxLength)
  let snippet = cleanText.slice(start, end)
  if (start > 0) snippet = "…" + snippet
  if (end < cleanText.length) snippet = snippet + "…"
  return snippet
}

async function searchAyat(
  q: string,
  category: string,
  limit: number,
): Promise<SearchResult[]> {
  if (
    category !== "all" &&
    category !== "Al-Qur'an & Tafsir" &&
    category !== "Tafsir" &&
    category !== "Al-Qur'an"
  ) {
    return []
  }

  const where = termConditions(
    [
      ayat.arab,
      ayat.terjemah,
      surah.namaLatin,
      surah.arti,
      surah.nama,
      tafsir.teks,
    ],
    q,
  )
  const rows = await db
    .selectDistinct({
      surahId: surah.id,
      namaLatin: surah.namaLatin,
      nomor: ayat.nomor,
      terjemah: ayat.terjemah,
      arab: ayat.arab,
      tafsirTeks: tafsir.teks,
    })
    .from(ayat)
    .innerJoin(surah, eq(ayat.surahId, surah.id))
    .leftJoin(tafsir, eq(tafsir.ayatId, ayat.id))
    .where(where)
    .limit(limit)

  return rows.map((r) => {
    let snippet = createSmartSnippet(r.terjemah, q)
    if (
      q.trim() &&
      r.tafsirTeks &&
      !r.terjemah.toLowerCase().includes(q.toLowerCase()) &&
      r.tafsirTeks.toLowerCase().includes(q.toLowerCase())
    ) {
      snippet = `Tafsir: ${createSmartSnippet(r.tafsirTeks, q)}`
    }
    return {
      type: "ayat" as const,
      title: `QS. ${r.namaLatin}: ${r.nomor}`,
      snippet,
      source: `Surah ${r.namaLatin}`,
      category: "Al-Qur'an & Tafsir",
      href: `/tafsir/${r.surahId}#ayat-${r.nomor}`,
    }
  })
}

async function searchHadis(
  q: string,
  category: string,
  limit: number,
): Promise<SearchResult[]> {
  const conds = []
  const terms = termConditions(
    [
      hadis.arab,
      hadis.terjemah,
      hadis.judul,
      hadis.tema,
      hadis.takhrij,
      hadis.perawi,
    ],
    q,
  )
  if (terms) conds.push(terms)
  if (category !== "all") {
    conds.push(or(eq(hadis.tema, category), eq(hadis.perawi, category)))
  }
  const rows = await db
    .select()
    .from(hadis)
    .where(conds.length > 0 ? and(...conds) : undefined)
    .limit(limit)
  return rows.map((h) => ({
    type: "hadis" as const,
    title: `${h.perawi} — ${h.judul ?? h.takhrij}`,
    snippet: createSmartSnippet(h.terjemah, q),
    source: h.takhrij,
    category: h.tema ?? h.perawi ?? "Hadis",
    href: `/hadis/${h.id}`,
  }))
}

async function searchKitab(
  q: string,
  category: string,
  limit: number,
): Promise<SearchResult[]> {
  const results: SearchResult[] = []
  const kitabConds = []
  const kitabTerms = termConditions(
    [kitab.judul, kitab.deskripsi, kitab.ulama, kitab.kategori],
    q,
  )
  if (kitabTerms) kitabConds.push(kitabTerms)
  if (category !== "all") kitabConds.push(eq(kitab.kategori, category))
  const kRows = await db
    .select()
    .from(kitab)
    .where(kitabConds.length > 0 ? and(...kitabConds) : undefined)
    .limit(limit)
  for (const k of kRows) {
    results.push({
      type: "kitab",
      title: `${k.judul} (${k.ulama})`,
      snippet: createSmartSnippet(k.deskripsi, q),
      source: k.kategori,
      category: k.kategori,
      href: `/kitab/${k.id}`,
    })
  }

  const babTerms = termConditions([kitabBab.judul, kitabBab.teks], q)
  if (babTerms || (!q && category !== "all")) {
    const babConds = []
    if (babTerms) babConds.push(babTerms)
    if (category !== "all") babConds.push(eq(kitab.kategori, category))
    const bRows = await db
      .select({
        kitabId: kitabBab.kitabId,
        kitabJudul: kitab.judul,
        kitabDeskripsi: kitab.deskripsi,
        nomor: kitabBab.nomor,
        judul: kitabBab.judul,
        teks: kitabBab.teks,
        kategori: kitab.kategori,
      })
      .from(kitabBab)
      .innerJoin(kitab, eq(kitabBab.kitabId, kitab.id))
      .where(babConds.length > 0 ? and(...babConds) : undefined)
      .limit(limit)
    for (const b of bRows) {
      const snippet = b.teks?.trim()
        ? createSmartSnippet(b.teks, q)
        : `${b.kitabJudul} — ${b.kitabDeskripsi || b.kategori}`
      results.push({
        type: "kitab",
        title: `${b.kitabJudul} — Bab ${b.nomor}: ${b.judul}`,
        snippet,
        source: b.kategori,
        category: b.kategori,
        href: `/kitab/${b.kitabId}#bab-${b.nomor}`,
      })
    }
  }
  return results
}

export async function searchContent({
  q = "",
  type = "all",
  category = "all",
  limit = 50,
}: SearchOptions): Promise<SearchResult[]> {
  const tasks: Promise<SearchResult[]>[] = []
  if (type === "all" || type === "ayat")
    tasks.push(searchAyat(q, category, limit))
  if (type === "all" || type === "hadis")
    tasks.push(searchHadis(q, category, limit))
  if (type === "all" || type === "kitab")
    tasks.push(searchKitab(q, category, limit))
  const lists = await Promise.all(tasks)
  return lists.flat()
}

export async function getSearchCategories(): Promise<string[]> {
  const [kitabKategori, hadisPerawi] = await Promise.all([
    db.selectDistinct({ kategori: kitab.kategori }).from(kitab),
    db.selectDistinct({ perawi: hadis.perawi }).from(hadis),
  ])
  const set = new Set<string>()
  set.add("Al-Qur'an & Tafsir")
  for (const k of kitabKategori) if (k.kategori) set.add(k.kategori)
  for (const h of hadisPerawi) if (h.perawi) set.add(h.perawi)
  return Array.from(set).sort((a, b) => a.localeCompare(b, "id"))
}

