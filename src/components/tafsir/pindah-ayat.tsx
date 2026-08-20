"use client"

import { useEffect, useState } from "react"

export default function PindahAyat({ total }: { total: number }) {
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id^='ayat-']"),
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const nomor = Number(entry.target.id.replace("ayat-", ""))
            if (!Number.isNaN(nomor)) setCurrent(nomor)
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [total])

  const go = (target: number) => {
    const clamped = Math.min(Math.max(target, 1), total)
    document
      .getElementById(`ayat-${clamped}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className="sticky bottom-4 z-40 mx-auto mt-6 flex w-full max-w-4xl flex-wrap items-center justify-center gap-3 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 shadow-md backdrop-blur">
      <button
        type="button"
        onClick={() => go(current - 1)}
        disabled={current <= 1}
        className="rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-200"
      >
        ‹ Sebelumnya
      </button>
      <span className="text-sm font-medium text-emerald-800">
        Ayat {current} / {total}
      </span>
      <button
        type="button"
        onClick={() => go(current + 1)}
        disabled={current >= total}
        className="rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-200"
      >
        Berikutnya ›
      </button>
    </div>
  )
}
