"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getRiwayatList, type RiwayatItem } from "@/lib/riwayat-storage"
import { lanjutkanMembaca as defaultMock } from "@/lib/mock-data"

export default function LanjutkanMembaca() {
  const [riwayat, setRiwayat] = useState<RiwayatItem[]>([])

  useEffect(() => {
    const update = () => {
      setRiwayat(getRiwayatList())
    }
    update()
    window.addEventListener("riwayat-updated", update)
    window.addEventListener("storage", update)
    return () => {
      window.removeEventListener("riwayat-updated", update)
      window.removeEventListener("storage", update)
    }
  }, [])

  const displayed = riwayat.slice(0, 3)

  return (
    <section aria-labelledby="lanjutkan-membaca" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2
          id="lanjutkan-membaca"
          className="text-lg font-bold text-white flex items-center gap-2"
        >
          <span className="text-amber-400">⏱</span>
          <span>{riwayat.length > 0 ? "Riwayat & Aktivitas Terakhir" : "Aktivitas Membaca Terakhir"}</span>
        </h2>
        <Link
          href="/riwayat"
          className="text-xs font-semibold text-emerald-400 hover:text-amber-300 transition"
        >
          Lihat Semua Riwayat ➔
        </Link>
      </div>

      {riwayat.length === 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {defaultMock.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between rounded-2xl border border-emerald-800/40 bg-[#061e1a] p-4 shadow-md transition hover:-translate-y-0.5 hover:border-amber-400/50 hover:bg-[#082621]"
            >
              <div className="space-y-1">
                <span className="block font-bold text-white group-hover:text-amber-300 transition">
                  {item.title}
                </span>
                <span className="block text-xs text-emerald-300/80">
                  {item.subtitle}
                </span>
              </div>

              <div className="mt-4 space-y-1.5 border-t border-emerald-800/30 pt-3">
                <div className="flex items-center justify-between text-[11px] font-semibold">
                  <span className="text-emerald-400">Rekomendasi</span>
                  <span className="text-amber-400 font-mono">{item.progress}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#041411]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {displayed.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group flex flex-col justify-between rounded-2xl border border-emerald-800/60 bg-[#061e1a] p-4 shadow-md transition hover:-translate-y-0.5 hover:border-amber-400/60 hover:bg-[#082621]"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-emerald-700/50 bg-emerald-950 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-300">
                    {item.kategori}
                  </span>
                  <span className="text-[10px] text-emerald-500 font-mono">
                    {item.formattedTime.split(",")[0]}
                  </span>
                </div>

                <span className="block font-bold text-sm text-white group-hover:text-amber-300 transition line-clamp-1">
                  {item.judul}
                </span>

                {item.subjudul && (
                  <span className="block text-xs text-emerald-300/80 line-clamp-1">
                    {item.subjudul}
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-emerald-800/30 pt-2.5 text-xs">
                <span className="font-semibold text-emerald-400 group-hover:text-amber-300 transition">
                  Lanjutkan Baca ➔
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
