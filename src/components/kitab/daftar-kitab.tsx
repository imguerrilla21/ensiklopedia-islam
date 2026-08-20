import Link from "next/link"
import type { KitabItem } from "@/lib/kitab-data"
import { KITAB_META_REGISTRY } from "@/lib/kitab-metadata"
import SimpanRiwayatButton from "@/components/simpan-riwayat-button"

export default function DaftarKitab({
  kitab,
}: {
  kitab: KitabItem[]
  ulama?: string[]
  kategori?: string[]
}) {
  return (
    <div className="space-y-6">
      {/* 1. Hero Banner Header */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-800/40 bg-gradient-to-b from-[#061e1a] via-[#051b17] to-[#041411] p-6 sm:p-10 shadow-2xl text-center">
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl space-y-4">
          <h1 className="font-serif-title text-2xl sm:text-3xl font-black tracking-widest text-white uppercase drop-shadow-sm">
            Kitab Turats &amp; Karya Ulama
          </h1>

          <p className="text-xs sm:text-sm leading-relaxed text-emerald-200/85">
            Pelajari kitab-kitab rujukan klasik karya para ulama terkemuka dalam bidang Hadis, Fiqih, Tasawuf, Aqidah, dan Akhlak, lengkap dengan Matan Arab, Terjemahan, dan Syarah Interaktif.
          </p>
        </div>
      </section>

      {/* 2. Results Header */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
          Daftar Kitab ({kitab.length})
        </span>
      </div>

      {/* 3. Kitab Grid */}
      {kitab.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-emerald-800/40 bg-[#061e1a] p-10 text-center text-sm text-emerald-400">
          Tidak ditemukan kitab.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {kitab.map((k) => {
            const meta = KITAB_META_REGISTRY[k.id]
            const arabicTitle = meta?.arabicTitle || ""
            const tag = meta?.tag || k.kategori
            const babCount = k.bab?.length || 0

            return (
              <Link
                key={k.id}
                href={`/kitab/${k.id}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-emerald-800/40 bg-[#061e1a] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#082621] hover:shadow-2xl"
              >
                <div className="space-y-3">
                  {/* Top Badges & Arabic Title */}
                  <div className="flex items-center justify-between border-b border-emerald-800/30 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-lg border border-amber-500/30 bg-[#0c2b23] px-2.5 py-0.5 text-xs font-bold text-amber-400">
                        {k.kategori}
                      </span>
                      <span className="rounded-lg border border-emerald-700/50 bg-[#041411] px-2 py-0.5 text-xs font-medium text-emerald-300">
                        {tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {arabicTitle && (
                        <span
                          dir="rtl"
                          lang="ar"
                          className="font-arabic text-xl font-bold text-amber-400/90 group-hover:scale-105 transition drop-shadow-sm"
                        >
                          {arabicTitle}
                        </span>
                      )}
                      <SimpanRiwayatButton
                        item={{
                          id: `kitab-${k.id}`,
                          kategori: "kitab",
                          judul: k.judul,
                          subjudul: `${k.ulama} • ${k.kategori}`,
                          ringkasan: k.deskripsi.slice(0, 100) + "...",
                          url: `/kitab/${k.id}`,
                        }}
                        variant="icon"
                      />
                    </div>
                  </div>

                  {/* Judul Kitab */}
                  <h2 className="font-serif-title text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition">
                    {k.judul}
                  </h2>

                  {/* Pengarang */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-300/90 font-medium">
                    <span>✍️</span>
                    <span>{k.ulama}</span>
                  </div>

                  {/* Deskripsi */}
                  <p className="line-clamp-2 text-xs sm:text-sm leading-relaxed text-emerald-200/85">
                    {k.deskripsi}
                  </p>
                </div>

                {/* Footer Stats & CTA */}
                <div className="mt-4 flex items-center justify-between border-t border-emerald-800/30 pt-3 text-xs">
                  <span className="text-[11px] text-emerald-400 font-medium">
                    📖 {babCount > 0 ? `${babCount} Bab / Fasal` : "Teks Lengkap"}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-400 group-hover:translate-x-0.5 transition">
                    <span>Buka Kitab</span>
                    <span>➔</span>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
