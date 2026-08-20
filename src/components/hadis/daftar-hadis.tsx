"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import type { HadisItem } from "@/lib/hadis-data"
import SimpanRiwayatButton from "@/components/simpan-riwayat-button"

export type KutubusSittahInfo = {
  id: string
  perawiKey: string
  judul: string
  arabic: string
  muallif: string
  wafat: string
  jumlahHadis: string
  derajat: string
  keistimewaan: string
  deskripsi: string
}

export const KUTUBUS_SITTAH_LIST: KutubusSittahInfo[] = [
  {
    id: "bukhari",
    perawiKey: "Bukhari",
    judul: "Shahih Al-Bukhari",
    arabic: "صَحِيحُ الْبُخَارِيِّ",
    muallif: "Imam Muhammad bin Ismail Al-Bukhari",
    wafat: "194–256 H (810–870 M)",
    jumlahHadis: "7.563 Hadits (97 Kitab)",
    derajat: "Shahih Mutlak (A'la Maratib)",
    keistimewaan: "Kitab paling otentik di muka bumi setelah Al-Qur'an dengan syarat sanad muttashil & perawi tsiqah liqa' (bertemu langsung).",
    deskripsi: "Disaring selama 16 tahun dari 600.000 hadis dengan shalat istikharah 2 rakaat pada setiap penulisan hadis.",
  },
  {
    id: "muslim",
    perawiKey: "Muslim",
    judul: "Shahih Muslim",
    arabic: "صَحِيحُ مُسْلِمٍ",
    muallif: "Imam Muslim bin Al-Hajjaj An-Naisaburi",
    wafat: "204–261 H (820–875 M)",
    jumlahHadis: "3.033 Hadits (54 Kitab)",
    derajat: "Shahih (Setingkat Bukhari)",
    keistimewaan: "Sistematika susunan matan dan perbandingan jalur sanad (turuq) terbaik tanpa pengulangan terpisah di berbagai bab.",
    deskripsi: "Disaring dari 300.000 hadis dengan metode penyajian sanad komparatif yang sangat mempermudah kajian takhrij.",
  },
  {
    id: "abu-dawud",
    perawiKey: "Abu Dawud",
    judul: "Sunan Abu Dawud",
    arabic: "سُنَنُ أَبِي دَاوُدَ",
    muallif: "Imam Abu Dawud Sulaiman bin Al-Asy'ats As-Sijistani",
    wafat: "202–275 H (817–889 M)",
    jumlahHadis: "5.274 Hadits (43 Kitab)",
    derajat: "Shahih & Hasan (Pokok Hadis Ahkam)",
    keistimewaan: "Rujukan induk terlengkap bagi para fuqaha dalam menetapkan hukum-hukum syariat dan fiqih amaliyah empat madzhab.",
    deskripsi: "Dipilih dari 500.000 hadis dengan fokus utama hadis hukum (*Ahaditsul Ahkam*) yang menjadi landasan ijtihad ulama.",
  },
  {
    id: "tirmidzi",
    perawiKey: "Tirmidzi",
    judul: "Jami' At-Tirmidzi",
    arabic: "جَامِعُ التِّرْمِذِيِّ",
    muallif: "Imam Abu Isa Muhammad bin Isa At-Tirmidzi",
    wafat: "209–279 H (824–892 M)",
    jumlahHadis: "3.956 Hadits (50 Kitab)",
    derajat: "Hasan Shahih & Kritik Sanad",
    keistimewaan: "Pelopor istilah 'Hasan', mencantumkan derajat hadis, perselisihan madzhab sahabat & tabi'in, serta penjelasan 'ilal.",
    deskripsi: "Sangat istimewa karena menjelaskan siapa saja ulama madzhab dan sahabat Nabi yang mengamalkan hadis tersebut.",
  },
  {
    id: "nasai",
    perawiKey: "An-Nasai",
    judul: "Sunan An-Nasa'i (Al-Mujtaba)",
    arabic: "سُنَنُ النَّسَائِيِّ (الْمُجْتَبَى)",
    muallif: "Imam Abu Abdirrahman Ahmad bin Syu'aib An-Nasa'i",
    wafat: "215–303 H (829–915 M)",
    jumlahHadis: "5.761 Hadits (51 Kitab)",
    derajat: "Shahih & Hasan (Kritik Terketat)",
    keistimewaan: "Tingkat seleksi kritik sanad paling ketat di antara kitab Sunan, membeberkan cacat tersembunyi ('ilal) dan perbedaan redaksi lafaz.",
    deskripsi: "Merupakan intisari pilihan (*al-Mujtaba*) dari karya Sunan Al-Kubra dengan sanad periwayatan yang sangat terjaga ketsiqahannya.",
  },
  {
    id: "ibnu-majah",
    perawiKey: "Ibnu Majah",
    judul: "Sunan Ibnu Majah",
    arabic: "سُنَنُ ابْنِ مَاجَهْ",
    muallif: "Imam Abu Abdillah Muhammad bin Yazid Ibnu Majah",
    wafat: "209–273 H (824–887 M)",
    jumlahHadis: "4.341 Hadits (37 Kitab)",
    derajat: "Shahih, Hasan & Zawa'id",
    keistimewaan: "Sistematika bab fiqih yang sangat rapi dan memuat hadis-hadis tambahan (*zawa'id*) penting yang melengkapi lima kitab lainnya.",
    deskripsi: "Melengkapi khazanah lima kitab induk hadis dengan bab-bab fiqih terperinci yang memudahkan pencarian tema hukum spesifik.",
  },
]

export default function DaftarHadis({
  hadis,
  tema,
}: {
  hadis: HadisItem[]
  perawi: string[]
  tema: string[]
}) {
  const [search, setSearch] = useState("")
  const [selectedKitabId, setSelectedKitabId] = useState<string>("all")
  const [filterTema, setFilterTema] = useState("all")

  // Selected Kutubus Sittah Info
  const activeKutubInfo = useMemo(() => {
    if (selectedKitabId === "all") return null
    return KUTUBUS_SITTAH_LIST.find((k) => k.id === selectedKitabId) || null
  }, [selectedKitabId])

  // Filtered Hadis List
  const filtered = useMemo(() => {
    return hadis.filter((h) => {
      // Filter Perawi based on Kutubus Sittah selection
      if (selectedKitabId !== "all" && activeKutubInfo) {
        if (h.perawi.toLowerCase() !== activeKutubInfo.perawiKey.toLowerCase()) {
          return false
        }
      }

      // Filter Tema
      if (filterTema !== "all" && h.tema !== filterTema) return false

      // Search Query
      if (!search.trim()) return true
      const q = search.toLowerCase()
      return (
        h.judul.toLowerCase().includes(q) ||
        h.terjemah.toLowerCase().includes(q) ||
        h.perawi.toLowerCase().includes(q) ||
        h.tema.toLowerCase().includes(q) ||
        h.takhrij.toLowerCase().includes(q) ||
        h.arab.includes(q)
      )
    })
  }, [hadis, selectedKitabId, activeKutubInfo, filterTema, search])

  const isFiltered =
    selectedKitabId !== "all" || filterTema !== "all" || Boolean(search.trim())

  return (
    <div className="space-y-8">
      {/* 1. Hero Banner Header with Gold Calligraphy */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-800/40 bg-gradient-to-b from-[#061e1a] via-[#051b17] to-[#041411] p-6 sm:p-10 shadow-2xl text-center">
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl space-y-4">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-3xl sm:text-5xl font-bold leading-relaxed text-amber-400 drop-shadow-md"
          >
            الْكُتُبُ السِّتَّةُ • وَالسُّنَّةُ النَّبَوِيَّةُ الْمُطَهَّرَةُ
          </p>

          <h1 className="font-serif-title text-2xl sm:text-3xl font-black tracking-widest text-white uppercase drop-shadow-sm">
            Hadis &amp; Syarah Nabawi
          </h1>

          <p className="text-xs sm:text-sm leading-relaxed text-emerald-200/85 max-w-2xl mx-auto">
            Pelajari khazanah sabda Rasulullah SAW dari Enam Kitab Induk Hadis Utama (*Kutubus Sittah*), lengkap dengan Matan Arab, Takhrij Sanad, Derajat Keshahihan, dan Syarah Ilmiah Para Ulama.
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
                placeholder="Cari hadis (misal: niat, shalat, akhlak, tetangga, ilmu)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent px-2 py-1.5 text-xs sm:text-sm font-medium text-emerald-100 placeholder-emerald-700 outline-none"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="px-3 text-xs text-emerald-400 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DAFTAR KUTUBUS SITTAH SECTION */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-800/40 pb-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-[#07241f] px-3 py-0.5 text-xs font-semibold text-amber-300 shadow-inner">
              <span>📜</span>
              <span>Enam Kitab Induk Hadis</span>
            </div>
            <h2 className="font-serif-title text-xl sm:text-2xl font-black tracking-wide text-white uppercase flex items-center gap-2">
              <span>DAFTAR KUTUBUS SITTAH</span>
              <span className="text-amber-400 font-arabic text-base sm:text-lg font-normal">
                (الْكُتُبُ السِّتَّةُ)
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedKitabId("all")}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition active:scale-95 cursor-pointer shadow-md ${
                selectedKitabId === "all"
                  ? "bg-[#e5a93c] text-slate-950"
                  : "border border-emerald-800/60 bg-[#071915] text-emerald-300 hover:border-amber-400 hover:text-white"
              }`}
            >
              Tampilkan Semua ({hadis.length})
            </button>
          </div>
        </div>

        {/* 6 Kutubus Sittah Interactive Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KUTUBUS_SITTAH_LIST.map((kitabItem, idx) => {
            return (
              <Link
                key={kitabItem.id}
                href={`/kitab/${kitabItem.id}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-emerald-800/50 bg-[#061e1a] p-5 transition-all duration-300 shadow-lg hover:-translate-y-1 hover:border-amber-400/80 hover:bg-[#07241f] hover:shadow-2xl"
              >
                <div className="space-y-3">
                  {/* Top: Number Badge & Arabic Title */}
                  <div className="flex items-start justify-between gap-2 border-b border-emerald-800/30 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-950 border border-amber-500/40 text-xs font-black text-amber-300">
                        {idx + 1}
                      </span>
                      <span className="rounded-md border border-emerald-700/50 bg-[#041411] px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-300">
                        {kitabItem.jumlahHadis}
                      </span>
                    </div>

                    <span
                      dir="rtl"
                      lang="ar"
                      className="font-arabic text-xl font-bold text-amber-400 group-hover:scale-105 transition drop-shadow-sm text-right"
                    >
                      {kitabItem.arabic}
                    </span>
                  </div>

                  {/* Title & Author */}
                  <div>
                    <h3 className="font-serif-title text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition">
                      {kitabItem.judul}
                    </h3>
                    <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                      {kitabItem.muallif} <span className="text-emerald-500 font-normal">({kitabItem.wafat})</span>
                    </p>
                  </div>

                  {/* Stats Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="rounded-md border border-amber-500/30 bg-[#0c2b23] px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                      📖 {kitabItem.jumlahHadis}
                    </span>
                    <span className="rounded-md border border-emerald-600/40 bg-emerald-950 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                      ✓ {kitabItem.derajat}
                    </span>
                  </div>

                  {/* Keistimewaan */}
                  <p className="text-xs leading-relaxed text-emerald-200/80 line-clamp-3">
                    {kitabItem.keistimewaan}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-emerald-800/30 pt-3 text-xs">
                  <span className="font-bold text-amber-400 group-hover:translate-x-1 transition inline-flex items-center gap-1">
                    <span>Buka Kitab &amp; Filter Bab</span>
                    <span>➔</span>
                  </span>

                  <SimpanRiwayatButton
                    item={{
                      id: `kutubus-sittah-${kitabItem.id}`,
                      kategori: "hadis",
                      judul: `Kutubus Sittah: ${kitabItem.judul}`,
                      subjudul: `${kitabItem.muallif} • ${kitabItem.jumlahHadis}`,
                      ringkasan: kitabItem.keistimewaan,
                      url: `/kitab/${kitabItem.id}`,
                    }}
                    variant="icon"
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 3. DAFTAR RIWAYAT HADIS SECTION */}
      <section className="space-y-4 pt-2">
        {/* Results Header & Tema Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-800/40 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Riwayat Hadis Terkait {activeKutubInfo ? `(${activeKutubInfo.judul})` : `(Semua Kitab)`}
            </span>
            <span className="rounded-full bg-emerald-950 border border-emerald-700/60 px-2 py-0.5 text-xs font-bold text-amber-300">
              {filtered.length} Hadis
            </span>
          </div>

          {/* Filter Tema Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider self-center mr-1">
              Tema:
            </span>
            <button
              type="button"
              onClick={() => setFilterTema("all")}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition cursor-pointer ${
                filterTema === "all"
                  ? "bg-[#e5a93c] text-slate-950 font-bold shadow-sm"
                  : "border border-emerald-800/50 bg-[#061e1a] text-emerald-300 hover:bg-[#082621]"
              }`}
            >
              Semua
            </button>
            {tema.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFilterTema(t)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition cursor-pointer ${
                  filterTema === t
                    ? "bg-[#e5a93c] text-slate-950 font-bold shadow-sm"
                    : "border border-emerald-800/50 bg-[#061e1a] text-emerald-300 hover:bg-[#082621]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {isFiltered && (
            <button
              type="button"
              onClick={() => {
                setSearch("")
                setSelectedKitabId("all")
                setFilterTema("all")
              }}
              className="text-xs font-semibold text-amber-400 hover:underline cursor-pointer self-start sm:self-center"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Hadis Items Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-emerald-800/40 bg-[#061e1a] p-10 sm:p-14 text-center space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-950/80 border border-emerald-800 text-2xl text-amber-400">
              📜
            </div>
            <h3 className="font-serif-title text-base sm:text-lg font-bold text-white">
              Tidak Ditemukan Hadis yang Sesuai
            </h3>
            <p className="text-xs text-emerald-300/70 max-w-md mx-auto leading-relaxed">
              Tidak ada hadis dengan kriteria pencarian atau filter yang dipilih. Silakan klik &quot;Reset Filter&quot; untuk melihat seluruh hadis.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {filtered.map((h) => (
              <Link
                key={h.id}
                href={`/hadis/${h.id}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-emerald-800/50 bg-[#061e1a] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:bg-[#082621] hover:shadow-2xl"
              >
                {/* Header Badges */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-emerald-800/30 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-lg border border-amber-500/30 bg-[#0c2b23] px-2.5 py-0.5 text-xs font-bold text-amber-400">
                        HR. {h.perawi}
                      </span>
                      <span className="rounded-lg border border-emerald-700/50 bg-[#041411] px-2 py-0.5 text-xs font-medium text-emerald-300">
                        {h.tema}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-emerald-950 border border-emerald-500/40 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
                        {h.derajat}
                      </span>
                      <SimpanRiwayatButton
                        item={{
                          id: `hadis-${h.id}`,
                          kategori: "hadis",
                          judul: `${h.judul} (HR. ${h.perawi})`,
                          subjudul: `Tema: ${h.tema} • ${h.derajat}`,
                          ringkasan: `"${h.terjemah.slice(0, 100)}${h.terjemah.length > 100 ? "..." : ""}"`,
                          url: `/hadis/${h.id}`,
                        }}
                        variant="icon"
                      />
                    </div>
                  </div>

                  {/* Judul Hadis */}
                  <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition line-clamp-1">
                    {h.judul}
                  </h3>

                  {/* Matan Arab Preview */}
                  <div className="rounded-xl bg-[#041411]/80 p-3.5 border border-emerald-800/30">
                    <p
                      dir="rtl"
                      lang="ar"
                      className="font-arabic text-lg sm:text-xl font-normal leading-relaxed text-emerald-50 text-right line-clamp-2"
                    >
                      {h.arab}
                    </p>
                  </div>

                  {/* Terjemahan */}
                  <p className="line-clamp-2 text-xs sm:text-sm leading-relaxed text-emerald-200/85">
                    &quot;{h.terjemah}&quot;
                  </p>
                </div>

                {/* Footer Takhrij & Link */}
                <div className="mt-4 flex items-center justify-between border-t border-emerald-800/30 pt-3 text-xs">
                  <span className="truncate text-[11px] text-emerald-500 max-w-[200px]">
                    {h.takhrij}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-400 group-hover:translate-x-0.5 transition">
                    <span>Baca Syarah</span>
                    <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
