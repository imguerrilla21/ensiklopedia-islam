import type { Metadata } from "next"
import Link from "next/link"
import TentangClientView from "@/components/tentang/tentang-client-view"

export const metadata: Metadata = {
  title: "Tentang Kami — almaktaba.id & Ensiklopedia Islam",
  description:
    "almaktaba.id hadir sebagai tempat membaca dan mencari Tafsir Al-Qur'an, Hadis beserta Syarah, dan Kitab Ulama Klasik dengan asisten AI terintegrasi — sepenuhnya gratis, tanpa berbayar.",
}

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#041411] text-emerald-100 pb-20">
      {/* Header Banner */}
      <div className="relative overflow-hidden border-b border-emerald-800/40 bg-gradient-to-b from-[#06241e] via-[#051c17] to-[#041411] px-4 py-12 sm:px-6 sm:py-16">
        {/* Subtle Background Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-10 h-64 w-64 rounded-full bg-amber-500/5 blur-2xl" />

        <div className="relative mx-auto max-w-4xl text-center space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300 shadow-sm">
            <span>✨</span>
            <span>Tentang Kami</span>
          </div>

          {/* Big Title */}
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl font-sans">
            almaktaba<span className="text-[#e5a93c]">.id</span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-emerald-200/90 font-medium">
            Tempat membaca dan mencari Tafsir Al-Qur'an, Hadis beserta Syarah, dan Kitab Ulama Klasik dengan asisten AI terintegrasi — sepenuhnya gratis, tanpa berbayar.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-emerald-400/80">
          <Link href="/" className="hover:text-amber-300 transition">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-white">Tentang</span>
        </nav>

        {/* Client Interactive View with Sections: Tentang kami, Aplikasi, Masukan */}
        <TentangClientView />
      </div>
    </main>
  )
}
