"use client"

import { useEffect, useState } from "react"

export default function PindahJuz({ juzList }: { juzList: number[] }) {
  const [current, setCurrent] = useState(juzList[0] ?? 1)

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-juz]"),
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const juz = Number((entry.target as HTMLElement).dataset.juz)
            if (!Number.isNaN(juz)) setCurrent(juz)
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [juzList])

  const go = (target: number) => {
    const clamped = Math.min(
      Math.max(target, juzList[0]),
      juzList[juzList.length - 1],
    )
    document
      .querySelector<HTMLElement>(`section[data-juz="${clamped}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 px-3 py-2 sm:px-4">
      <button
        type="button"
        onClick={() => go(current - 1)}
        disabled={current <= juzList[0]}
        className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-emerald-700 shadow-sm transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
      >
        ‹ Juz Sebelumnya
      </button>
      <span className="text-sm font-semibold text-emerald-800">
        Juz {current}
      </span>
      <button
        type="button"
        onClick={() => go(current + 1)}
        disabled={current >= juzList[juzList.length - 1]}
        className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-emerald-700 shadow-sm transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
      >
        Juz Berikutnya ›
      </button>
    </div>
  )
}
