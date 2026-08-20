import { db } from "@/db"
import { surah, ayat, tafsir, hadis, kitab, kitabBab } from "@/db/schema"
import { and, eq, like, or, type Column } from "drizzle-orm"
import { SURAH_DETAIL_LIST } from "@/lib/tafsir-metadata"
import { hadisList } from "@/lib/hadis-data"
import { allKitabRegistry } from "@/lib/kitab-data"

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
  const start = Math.max(0, firstIdx - 40)
  const end = Math.min(cleanText.length, firstIdx + maxLength - 40)
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
  if (category !== "all" && category !== "Al-Qur'an & Tafsir") return []

  if (db) {
    try {
      const conds = []
      const terms = termConditions([ayat.terjemah, tafsir.teks, surah.namaLatin], q)
      if (terms) conds.push(terms)
      const rows = await db
        .select({
          surahId: surah.id,
          namaLatin: surah.namaLatin,
          nomorAyat: ayat.nomor,
          terjemah: ayat.terjemah,
          tafsirTeks: tafsir.teks,
        })
        .from(ayat)
        .innerJoin(surah, eq(ayat.surahId, surah.id))
        .leftJoin(tafsir, eq(tafsir.ayatId, ayat.id))
        .where(conds.length > 0 ? and(...conds) : undefined)
        .limit(limit)

      if (rows.length > 0) {
        return rows.map((r: any) => {
          const matchTafsir =
            q && r.tafsirTeks?.toLowerCase().includes(q.toLowerCase())
          const snippetText = matchTafsir
            ? `Tafsir: ${r.tafsirTeks}`
            : r.terjemah
          return {
            type: "ayat" as const,
            title: `QS. ${r.namaLatin}: ${r.nomorAyat}`,
            snippet: createSmartSnippet(snippetText, q),
            source: "Al-Qur'an & Tafsir",
            category: "Al-Qur'an & Tafsir",
            href: `/tafsir/${r.surahId}`,
          }
        })
      }
    } catch {
      // Fallback below
    }
  }

  // In-memory fallback for Surah metadata
  const lq = q.toLowerCase()
  return SURAH_DETAIL_LIST.filter(
    (s) =>
      !q ||
      s.namaLatin.toLowerCase().includes(lq) ||
      s.arti.toLowerCase().includes(lq),
  )
    .slice(0, limit)
    .map((s) => ({
      type: "ayat" as const,
      title: `QS. ${s.namaLatin} (${s.namaArab})`,
      snippet: `Surah ke-${s.nomor}, ${s.jumlahAyat} ayat (${s.tempatTurun}). Arti: ${s.arti}`,
      source: "Al-Qur'an & Tafsir",
      category: "Al-Qur'an & Tafsir",
      href: `/tafsir/${s.id}`,
    }))
}

async function searchHadis(
  q: string,
  category: string,
  limit: number,
): Promise<SearchResult[]> {
  if (db) {
    try {
      const conds = []
      const terms = termConditions(
        [
          hadis.judul,
          hadis.terjemah,
          hadis.syarah,
          hadis.takhrij,
          hadis.tema,
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

      if (rows.length > 0) {
        return rows.map((h: any) => ({
          type: "hadis" as const,
          title: `${h.perawi} — ${h.judul ?? h.takhrij}`,
          snippet: createSmartSnippet(h.terjemah, q),
          source: h.takhrij,
          category: h.tema ?? h.perawi ?? "Hadis",
          href: `/hadis/${h.id}`,
        }))
      }
    } catch {
      // Fallback below
    }
  }

  // In-memory fallback from hadisList
  const lq = q.toLowerCase()
  return hadisList
    .filter((h) => {
      if (category !== "all" && h.tema !== category && h.perawi !== category) {
        return false
      }
      if (!q) return true
      return (
        h.judul.toLowerCase().includes(lq) ||
        h.terjemah.toLowerCase().includes(lq) ||
        h.syarah.toLowerCase().includes(lq) ||
        h.perawi.toLowerCase().includes(lq) ||
        h.takhrij.toLowerCase().includes(lq)
      )
    })
    .slice(0, limit)
    .map((h) => ({
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

  if (db) {
    try {
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

      if (results.length > 0) return results
    } catch {
      // Fallback below
    }
  }

  // In-memory fallback from allKitabRegistry
  const lq = q.toLowerCase()
  for (const k of allKitabRegistry) {
    if (category !== "all" && k.kategori !== category) continue
    if (
      !q ||
      k.judul.toLowerCase().includes(lq) ||
      k.deskripsi.toLowerCase().includes(lq) ||
      k.ulama.toLowerCase().includes(lq)
    ) {
      results.push({
        type: "kitab",
        title: `${k.judul} (${k.ulama})`,
        snippet: createSmartSnippet(k.deskripsi, q),
        source: k.kategori,
        category: k.kategori,
        href: `/kitab/${k.id}`,
      })
    }

    for (const b of k.bab) {
      if (
        q &&
        (b.judul.toLowerCase().includes(lq) || b.teks.toLowerCase().includes(lq))
      ) {
        results.push({
          type: "kitab",
          title: `${k.judul} — Bab ${b.nomor}: ${b.judul}`,
          snippet: createSmartSnippet(b.teks, q),
          source: k.kategori,
          category: k.kategori,
          href: `/kitab/${k.id}#bab-${b.nomor}`,
        })
      }
    }
    if (results.length >= limit) break
  }

  return results.slice(0, limit)
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
  const set = new Set<string>()
  set.add("Al-Qur'an & Tafsir")

  for (const k of allKitabRegistry) {
    if (k.kategori) set.add(k.kategori)
  }
  for (const h of hadisList) {
    if (h.perawi) set.add(h.perawi)
    if (h.tema) set.add(h.tema)
  }

  return Array.from(set).sort((a, b) => a.localeCompare(b, "id"))
}
