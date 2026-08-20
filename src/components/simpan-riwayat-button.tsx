"use client"

import { useState, useEffect } from "react"
import { simpanKeRiwayat, isItemInRiwayat, type RiwayatItem } from "@/lib/riwayat-storage"

type SimpanRiwayatButtonProps = {
  item: Omit<RiwayatItem, "createdAt" | "formattedTime">
  variant?: "button" | "pill" | "compact" | "icon"
  label?: string
  className?: string
}

export default function SimpanRiwayatButton({
  item,
  variant = "button",
  label = "Simpan Riwayat",
  className = "",
}: SimpanRiwayatButtonProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [justSaved, setJustSaved] = useState(false)

  useEffect(() => {
    setIsSaved(isItemInRiwayat(item.id))

    const handleUpdate = () => {
      setIsSaved(isItemInRiwayat(item.id))
    }

    window.addEventListener("riwayat-updated", handleUpdate)
    return () => window.removeEventListener("riwayat-updated", handleUpdate)
  }, [item.id])

  const handleSimpan = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const ok = simpanKeRiwayat(item)
    if (ok) {
      setIsSaved(true)
      setJustSaved(true)
      setTimeout(() => setJustSaved(false), 2500)
    }
  }

  if (variant === "compact" || variant === "pill") {
    return (
      <button
        type="button"
        onClick={handleSimpan}
        title={isSaved ? "Tersimpan di Riwayat" : "Simpan ke Riwayat"}
        className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition active:scale-95 cursor-pointer shadow-sm ${
          justSaved
            ? "bg-amber-500 text-slate-950 border border-amber-400 font-bold animate-pulse"
            : isSaved
              ? "bg-emerald-900/80 text-amber-300 border border-emerald-700/60 hover:bg-emerald-800"
              : "bg-[#071915] text-emerald-300 border border-[#1a4438] hover:border-amber-400 hover:text-white hover:bg-[#092822]"
        } ${className}`}
      >
        <span>{justSaved ? "✓" : isSaved ? "🔖" : "📑"}</span>
        <span>{justSaved ? "Tersimpan!" : isSaved ? "Tersimpan di Riwayat" : label}</span>
      </button>
    )
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleSimpan}
        title={isSaved ? "Tersimpan di Riwayat" : "Simpan ke Riwayat"}
        className={`flex h-9 w-9 items-center justify-center rounded-xl transition active:scale-95 cursor-pointer shadow-sm ${
          justSaved
            ? "bg-amber-400 text-slate-950 border border-amber-300"
            : isSaved
              ? "bg-emerald-900 text-amber-300 border border-emerald-700"
              : "bg-[#071915] text-emerald-300 border border-[#1a4438] hover:border-amber-400 hover:text-white"
        } ${className}`}
      >
        <span className="text-sm">{justSaved ? "✓" : isSaved ? "🔖" : "📑"}</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleSimpan}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition active:scale-95 cursor-pointer shadow-md ${
        justSaved
          ? "bg-amber-400 text-slate-950 border border-amber-300 shadow-amber-500/20"
          : isSaved
            ? "bg-emerald-900/90 text-amber-300 border border-emerald-700/80 hover:bg-emerald-800"
            : "bg-[#071915] text-emerald-200 border border-emerald-700/60 hover:border-amber-400 hover:text-white hover:bg-[#0a2c24]"
      } ${className}`}
    >
      <span className="text-sm">{justSaved ? "✓" : isSaved ? "🔖" : "📑"}</span>
      <span>{justSaved ? "Berhasil Disimpan!" : isSaved ? "Tersimpan di Riwayat" : label}</span>
    </button>
  )
}
