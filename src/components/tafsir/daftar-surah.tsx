"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { SURAH_DETAIL_LIST, type SurahDetailMeta } from "@/lib/tafsir-metadata"

export default function DaftarSurah() {
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState<"semua" | "juz30" | "makkiyah" | "madaniyah">("semua")

  const filteredSurah = useMemo(() => {
    return SURAH_DETAIL_LIST.filter((s) => {
      // Filter Type
      if (filterType === "juz30" && s.nomor < 78) return false
      if (filterType === "makkiyah" && s.tempatTurun !== "Makkiyah") return false
      if (filterType === "madaniyah" && s.tempatTurun !== "Madaniyah") return false

      // Search Query
      if (!search.trim()) return true
      const q = search.toLowerCase()
      return (
        s.namaLatin.toLowerCase().includes(q) ||
        s.arti.toLowerCase().includes(q) ||
        s.nomor.toString() === q ||
        s.namaArab.includes(q)
      )
    })
  }, [search, filterType])

  return (
    <div className="space-y-6">
      {/* 1. Hero Banner Header with Gold Calligraphy */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-800/40 bg-gradient-to-b from-[#061e1a] via-[#051b17] to-[#041411] p-6 sm:p-10 shadow-2xl text-center">
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl space-y-4">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-3xl sm:text-4xl font-bold leading-relaxed text-amber-400 drop-shadow-md"
          >
            الْقُرْآنُ الْكَرِيمُ • التَّفْسِيرُ وَالتَّدَبُّرُ
          </p>

          <h1 className="font-serif-title text-2xl sm:text-3xl font-black tracking-widest text-white uppercase drop-shadow-sm">
            Tafsir Al-Qur&apos;an
          </h1>

          <p className="text-xs sm:text-sm leading-relaxed text-emerald-200/85">
            Baca 114 Surah, 6.236 Ayat lengkap dengan Teks Arab berharakat,
            Terjemahan Kemenag RI, Tafsir Wajiz, dan Asisten AI Tadabbur.
          </p>

          {/* Search Input */}
          <div className="mx-auto max-w-lg pt-2">
            <div className="flex items-center rounded-2xl border border-emerald-700/50 bg-[#041411]/90 p-1.5 shadow-xl transition focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400/40">
              <span className="pl-3.5 pr-2 text-emerald-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Cari nama surah (cth: Al-Kahf, Yasin, 18, Sapi)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent px-2 py-1.5 text-xs sm:text-sm font-medium text-emerald-100 placeholder-emerald-700 outline-none"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="px-3 text-xs text-emerald-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setFilterType("semua")}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                filterType === "semua"
                  ? "bg-[#e5a93c] text-slate-950 shadow-md"
                  : "border border-emerald-800/50 bg-[#061e1a] text-emerald-300 hover:bg-[#082621]"
              }`}
            >
              Semua Surah (114)
            </button>
            <button
              type="button"
              onClick={() => setFilterType("juz30")}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                filterType === "juz30"
                  ? "bg-[#e5a93c] text-slate-950 shadow-md"
                  : "border border-emerald-800/50 bg-[#061e1a] text-emerald-300 hover:bg-[#082621]"
              }`}
            >
              Juz &apos;Amma (Juz 30)
            </button>
            <button
              type="button"
              onClick={() => setFilterType("makkiyah")}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                filterType === "makkiyah"
                  ? "bg-[#e5a93c] text-slate-950 shadow-md"
                  : "border border-emerald-800/50 bg-[#061e1a] text-emerald-300 hover:bg-[#082621]"
              }`}
            >
              Makkiyah (86)
            </button>
            <button
              type="button"
              onClick={() => setFilterType("madaniyah")}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                filterType === "madaniyah"
                  ? "bg-[#e5a93c] text-slate-950 shadow-md"
                  : "border border-emerald-800/50 bg-[#061e1a] text-emerald-300 hover:bg-[#082621]"
              }`}
            >
              Madaniyah (28)
            </button>
          </div>
        </div>
      </section>

      {/* 2. Surah Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Daftar Surah ({filteredSurah.length})
          </span>
          <span className="text-xs text-emerald-500">
            Klik surah untuk membuka ayat & tafsir
          </span>
        </div>

        {filteredSurah.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-emerald-800/40 bg-[#061e1a] p-10 text-center text-sm text-emerald-400">
            Tidak ditemukan surah dengan kata kunci &quot;{search}&quot;.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSurah.map((s) => (
              <Link
                key={s.id}
                href={`/tafsir/${s.id}`}
                className="group relative flex items-center justify-between rounded-2xl border border-emerald-800/40 bg-[#061e1a] p-4 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/50 hover:bg-[#082621] hover:shadow-xl"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Number Badge */}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-700/50 bg-[#041411] font-mono text-xs font-bold text-amber-400 shadow-inner group-hover:border-amber-400/60 group-hover:bg-[#0c2b23] transition">
                    {s.nomor}
                  </span>

                  <div className="min-w-0 space-y-0.5">
                    <h3 className="truncate font-bold text-white group-hover:text-amber-300 transition text-sm sm:text-base">
                      {s.namaLatin}
                    </h3>
                    <p className="truncate text-xs text-emerald-300/80">
                      {s.arti}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-emerald-500 font-medium">
                      <span>{s.jumlahAyat} Ayat</span>
                      <span>•</span>
                      <span>{s.tempatTurun}</span>
                    </div>
                  </div>
                </div>

                {/* Arabic Surah Name */}
                <div className="shrink-0 pl-2 text-right">
                  <span
                    dir="rtl"
                    lang="ar"
                    className="font-arabic text-xl font-bold text-amber-400 drop-shadow-sm group-hover:scale-105 transition block"
                  >
                    {s.namaArab}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
