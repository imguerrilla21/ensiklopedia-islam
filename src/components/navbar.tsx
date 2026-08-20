"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menuUtama } from "@/lib/mock-data"
import { getRiwayatList } from "@/lib/riwayat-storage"

export default function Navbar() {
  const pathname = usePathname()
  const [riwayatCount, setRiwayatCount] = useState(0)

  useEffect(() => {
    const updateCount = () => {
      const list = getRiwayatList()
      setRiwayatCount(list.length)
    }

    updateCount()
    window.addEventListener("riwayat-updated", updateCount)
    window.addEventListener("storage", updateCount)

    return () => {
      window.removeEventListener("riwayat-updated", updateCount)
      window.removeEventListener("storage", updateCount)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-800/40 bg-[#061e1a]/95 backdrop-blur-md shadow-lg">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
        >
          {/* Logo: Open Quran on Rehal (Wooden Bookstand) */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-700/60 bg-[#041411] p-1 shadow-md transition group-hover:border-amber-400/80 group-hover:scale-105">
            <svg
              className="h-7 w-7"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Wooden Rehal / Bookstand */}
              <path
                d="M10 38L24 28L38 38"
                stroke="#F59E0B"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 30L19 34.5"
                stroke="#D97706"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <path
                d="M35 30L29 34.5"
                stroke="#D97706"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <path
                d="M16 41L24 35L32 41"
                stroke="#B45309"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Open Book / Quran Pages */}
              <path
                d="M24 14C21 11.5 15 11.5 8 13.5V29C15 27 21 27 24 29.5C27 27 33 27 40 29V13.5C33 11.5 27 11.5 24 14Z"
                fill="#FFFFFF"
                stroke="#059669"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M24 14V29.5"
                stroke="#047857"
                strokeWidth="1.2"
              />

              {/* Quran Lines */}
              <path
                d="M11 18C15 17 19 17 21 18.5"
                stroke="#059669"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M11 22C15 21 19 21 21 22.5"
                stroke="#94A3B8"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M11 25.5C15 24.5 19 24.5 21 26"
                stroke="#94A3B8"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M37 18C33 17 29 17 27 18.5"
                stroke="#059669"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M37 22C33 21 29 21 27 22.5"
                stroke="#94A3B8"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M37 25.5C33 24.5 29 24.5 27 26"
                stroke="#94A3B8"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Bookmark Ribbon */}
              <path
                d="M24 14V23L22.5 21.5L21 23V14"
                fill="#10B981"
              />
            </svg>
          </div>

          {/* Symmetrical Brand Title & Sub-Title */}
          <div className="flex flex-col justify-center">
            <span className="font-sans text-[13px] sm:text-[14px] font-black uppercase tracking-[0.22em] text-white leading-tight transition group-hover:text-emerald-100">
              ALMAKTABA
            </span>
            <span className="font-serif text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.02em] text-[#e5a93c] leading-tight transition group-hover:text-amber-300">
              Ensiklopedia Islam
            </span>
          </div>
        </Link>

        <ul className="flex items-center gap-1.5 overflow-x-auto py-1">
          {menuUtama.map((item) => {
            const active =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"))
            const isRiwayat = item.href === "/riwayat"

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? "bg-[#e5a93c] text-slate-950 shadow-md font-bold"
                      : "text-emerald-300/80 hover:bg-[#092822] hover:text-white"
                  }`}
                >
                  <span>{item.title}</span>
                  {isRiwayat && riwayatCount > 0 && (
                    <span
                      className={`inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                        active
                          ? "bg-slate-950 text-amber-300"
                          : "bg-amber-400 text-slate-950"
                      }`}
                    >
                      {riwayatCount}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
