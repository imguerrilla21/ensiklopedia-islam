"use client"

import { useState } from "react"
import { kontenPilihanList } from "@/lib/mock-data"
import SimpanRiwayatButton from "@/components/simpan-riwayat-button"

const labels: Record<(typeof kontenPilihanList)[number]["kind"], string> = {
  ayat: "Ayat Al-Qur'an Pilihan",
  hadis: "Hadis Nabawi Pilihan",
  kitab: "Kalam Hikmah Kitab",
}

export default function KontenPilihan() {
  const [index, setIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const item = kontenPilihanList[index]
  const total = kontenPilihanList.length

  const go = (step: number) => {
    setIndex((i) => (i + step + total) % total)
    setCopied(false)
  }

  const handleCopy = () => {
    const text = `${item.arabic}\n\n${item.translation}\n\nSumber: ${item.source}`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <section aria-labelledby="konten-pilihan" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2
          id="konten-pilihan"
          className="text-lg font-bold text-white flex items-center gap-2"
        >
          <span className="text-amber-400">✨</span>
          <span>Inspirasi & Tadabbur Harian</span>
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Sebelumnya"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-800/40 bg-[#061e1a] text-emerald-300 transition hover:bg-emerald-900/40 hover:text-white cursor-pointer"
          >
            ‹
          </button>
          <span className="text-xs font-semibold text-emerald-400 px-1">
            {index + 1}/{total}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Berikutnya"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-800/40 bg-[#061e1a] text-emerald-300 transition hover:bg-emerald-900/40 hover:text-white cursor-pointer"
          >
            ›
          </button>
        </div>
      </div>

      <article className="relative overflow-hidden rounded-3xl border border-emerald-800/50 bg-gradient-to-b from-[#061e1a] to-[#041411] p-6 sm:p-8 shadow-2xl">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/5 blur-2xl" />

        <div className="flex flex-wrap items-center gap-2 border-b border-emerald-800/30 pb-3">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-[#0c2b23] px-3 py-1 text-xs font-semibold text-amber-300">
            <span>❖</span>
            <span>{labels[item.kind]}</span>
          </span>

          <div className="ml-auto flex items-center gap-2">
            <SimpanRiwayatButton
              item={{
                id: `harian-${item.kind}-${item.source.replace(/[^a-zA-Z0-9]/g, "-")}`,
                kategori: (item.kind === "ayat" ? "tafsir" : item.kind === "hadis" ? "hadis" : "kitab"),
                judul: `${labels[item.kind]}: ${item.source}`,
                subjudul: item.translation.slice(0, 80) + "...",
                ringkasan: item.arabic,
                url: item.kind === "ayat" ? "/tafsir" : item.kind === "hadis" ? "/hadis" : "/kitab",
              }}
              variant="compact"
              label="Simpan Riwayat"
            />

            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-emerald-800/40 bg-[#041411] px-3 py-1 text-xs font-semibold text-emerald-300 hover:border-emerald-600 hover:text-white transition cursor-pointer"
            >
              {copied ? (
                <span className="text-amber-400">✓ Tersalin</span>
              ) : (
                <span>Salin</span>
              )}
            </button>
          </div>
        </div>

        {/* Arabic Quote */}
        <div className="my-6 rounded-2xl bg-[#041411]/60 p-5">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-right text-xl sm:text-2xl font-normal leading-loose tracking-wide text-emerald-50"
          >
            {item.arabic}
          </p>
        </div>

        {/* Indonesian Translation */}
        <p className="text-sm sm:text-base leading-relaxed text-emerald-100/90 italic">
          &quot;{item.translation}&quot;
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-emerald-800/30 pt-3 text-xs">
          <span className="font-bold text-amber-400">
            {item.source}
          </span>
          <span className="text-emerald-400/70">
            Diperbarui harian
          </span>
        </div>
      </article>
    </section>
  )
}
