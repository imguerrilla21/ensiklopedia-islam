"use client"

import { useEffect, useState } from "react"

type BabLink = { nomor: number; judul: string }

export default function NavigasiBab({ bab }: { bab: BabLink[] }) {
  const [active, setActive] = useState(bab[0]?.nomor ?? 1)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          const nomor = Number(visible[0].target.id.replace("bab-", ""))
          if (!Number.isNaN(nomor)) setActive(nomor)
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    )

    bab.forEach((b) => {
      const el = document.getElementById(`bab-${b.nomor}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [bab])

  const goTo = (nomor: number) => {
    const el = document.getElementById(`bab-${nomor}`)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const idx = bab.findIndex((b) => b.nomor === active)
  const prev = bab[idx - 1]
  const next = bab[idx + 1]

  return (
    <div className="sticky top-2 z-10 mb-6 rounded-2xl border border-emerald-100 bg-white/90 px-3 py-2.5 shadow-sm backdrop-blur sm:top-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => prev && goTo(prev.nomor)}
          disabled={!prev}
          aria-label="Bab sebelumnya"
          className="shrink-0 rounded-lg px-2.5 py-1.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ←
        </button>
        <label className="sr-only" htmlFor="pilih-bab">
          Pilih bab
        </label>
        <select
          id="pilih-bab"
          value={active}
          onChange={(e) => {
            const n = Number(e.target.value)
            setActive(n)
            goTo(n)
          }}
          className="w-full flex-1 rounded-lg border border-emerald-200 bg-white px-2.5 py-1.5 text-sm text-emerald-900 outline-none focus:border-emerald-400"
        >
          {bab.map((b) => (
            <option key={b.nomor} value={b.nomor}>
              Bab {b.nomor}: {b.judul}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => next && goTo(next.nomor)}
          disabled={!next}
          aria-label="Bab berikutnya"
          className="shrink-0 rounded-lg px-2.5 py-1.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          →
        </button>
      </div>
    </div>
  )
}
