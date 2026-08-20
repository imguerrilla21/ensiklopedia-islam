"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function TentangClientView() {
  const [activeTab, setActiveTab] = useState<"android" | "ios" | "pc">("android")
  const [installPrompt, setInstallPrompt] = useState<any>(null)
  const [installed, setInstalled] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e)
    }

    const handleAppInstalled = () => {
      setInstalled(true)
      setInstallPrompt(null)
      showToast("Aplikasi berhasil di-install ke perangkat Anda!")
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstall)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  const handleInstallClick = async () => {
    if (installPrompt) {
      installPrompt.prompt()
      const { outcome } = await installPrompt.userChoice
      if (outcome === "accepted") {
        setInstalled(true)
        showToast("Terima kasih! Hadits.id sedang di-install.")
      }
      setInstallPrompt(null)
    } else {
      showToast("Gunakan opsi 'Tambahkan ke Layar Utama' / 'Install' di menu browser Anda.")
    }
  }

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.origin)
      showToast("Tautan Hadits.id berhasil disalin ke clipboard!")
    }
  }

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-amber-400/40 bg-[#06241e] px-4 py-3 text-xs sm:text-sm font-bold text-amber-200 shadow-2xl backdrop-blur-md animate-bounce">
          <span className="text-base">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Section: Tentang Kami & Hadits.id */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-800/50 bg-[#061e1a] p-6 sm:p-10 shadow-2xl">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-400/5 blur-2xl" />
        
        <div className="relative space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 text-lg font-bold">
              ❖
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Profil Layanan
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Tentang kami
              </h2>
            </div>
          </div>

          {/* Primary Text from User Request */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-emerald-100/90">
            <div className="rounded-2xl border border-emerald-700/40 bg-[#041613] p-5 sm:p-6 shadow-inner space-y-3">
              <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                <span>Hadits.id</span>
              </h3>
              <p className="text-emerald-100 font-medium leading-relaxed">
                Hadits.id sudah ada sejak 2015, 11 tahun hadir sebagai tempat membaca dan mencari hadits — sepenuhnya gratis, tanpa berbayar.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-700/40 bg-[#041613] p-5 sm:p-6 shadow-inner space-y-3">
              <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                <span>Rujukan Terpercaya</span>
              </h3>
              <p className="text-emerald-100 leading-relaxed font-medium">
                Alhamdulillah, hari ini data hadits di Hadits.id merujuk pada{" "}
                <a
                  href="https://sunnah.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-400 underline underline-offset-4 hover:text-amber-300 transition"
                >
                  sunnah.com
                </a>
                . Insya Allah sumbernya lebih terpercaya dan mudah dilacak kembali.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-[#041613] to-emerald-950/30 p-5 sm:p-6 shadow-inner">
              <p className="text-amber-100/95 leading-relaxed font-medium">
                Terima kasih sudah menjadikan Hadits.id teman belajar teman-teman yang di rahmati Allah. Doa dan dukungan teman-teman yang membuat layanan ini tetap berjalan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Aplikasi & Install di HP atau Komputer */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-500/40 bg-[#061f1a] p-6 sm:p-10 shadow-2xl">
        <div className="relative space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5a93c] text-slate-950 text-lg font-black shadow-md">
                📱
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Aplikasi
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Install di HP atau komputer
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleInstallClick}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e5a93c] to-amber-500 px-4 py-2.5 text-xs sm:text-sm font-black text-slate-950 shadow-lg transition hover:from-amber-400 hover:to-amber-500 hover:scale-105 cursor-pointer"
              >
                <span>⚡</span>
                <span>{installed ? "Aplikasi Terpasang" : "Install Aplikasi"}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-700 bg-[#041613] px-3.5 py-2.5 text-xs font-bold text-emerald-300 hover:bg-[#07241e] hover:text-white transition cursor-pointer"
                title="Salin Tautan"
              >
                <span>🔗</span>
                <span className="hidden sm:inline">Bagikan</span>
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-emerald-100 font-medium">
            Hadits.id bisa di-install seperti aplikasi — buka lebih cepat, layar penuh, dan selalu ada di layar utama Android, iPhone, atau komputer.
          </p>

          {/* Interactive Platform Tabs */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 border-b border-emerald-800/40 pb-2">
              <button
                type="button"
                onClick={() => setActiveTab("android")}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeTab === "android"
                    ? "bg-[#e5a93c] text-slate-950 shadow-md"
                    : "bg-[#041613] text-emerald-300/80 hover:text-white"
                }`}
              >
                🤖 Android (Chrome)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("ios")}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeTab === "ios"
                    ? "bg-[#e5a93c] text-slate-950 shadow-md"
                    : "bg-[#041613] text-emerald-300/80 hover:text-white"
                }`}
              >
                🍏 iPhone / iPad (Safari)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("pc")}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                  activeTab === "pc"
                    ? "bg-[#e5a93c] text-slate-950 shadow-md"
                    : "bg-[#041613] text-emerald-300/80 hover:text-white"
                }`}
              >
                💻 Komputer / Desktop
              </button>
            </div>

            {/* Tab Details */}
            <div className="rounded-2xl border border-emerald-800/40 bg-[#041613] p-5 text-xs sm:text-sm leading-relaxed space-y-3">
              {activeTab === "android" && (
                <div className="space-y-2.5 text-emerald-200">
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">1.</span> Buka Hadits.id di browser Google Chrome pada Android Anda.
                  </p>
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">2.</span> Ketuk ikon menu titik tiga (<strong className="text-amber-300">⋮</strong>) di pojok kanan atas browser.
                  </p>
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">3.</span> Pilih menu <strong className="text-amber-300">"Install app"</strong> atau <strong className="text-amber-300">"Tambahkan ke Layar Utama"</strong>.
                  </p>
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">4.</span> Konfirmasi <strong className="text-amber-300">"Install"</strong>. Ikon Hadits.id akan langsung muncul di layar utama HP Anda!
                  </p>
                </div>
              )}

              {activeTab === "ios" && (
                <div className="space-y-2.5 text-emerald-200">
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">1.</span> Buka Hadits.id menggunakan browser <strong className="text-amber-300">Safari</strong> di iPhone atau iPad Anda.
                  </p>
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">2.</span> Ketuk tombol <strong className="text-amber-300">Share (Ikon Kotak Panah ke Atas ⎋)</strong> di bilah navigasi bawah Safari.
                  </p>
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">3.</span> Gulir ke bawah lalu pilih opsi <strong className="text-amber-300">"Add to Home Screen" (+ Tambahkan ke Layar Utama)</strong>.
                  </p>
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">4.</span> Ketuk <strong className="text-amber-300">"Add"</strong> di pojok kanan atas. Aplikasi Hadits.id siap digunakan dalam mode layar penuh!
                  </p>
                </div>
              )}

              {activeTab === "pc" && (
                <div className="space-y-2.5 text-emerald-200">
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">1.</span> Buka Hadits.id di browser Chrome, Edge, atau Brave pada komputer/laptop Anda.
                  </p>
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">2.</span> Klik tombol <strong className="text-amber-300">"Install Aplikasi"</strong> di atas atau klik ikon install di sebelah kanan kolom URL browser.
                  </p>
                  <p className="font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">3.</span> Hadits.id akan terbuka sebagai aplikasi desktop mandiri tanpa address bar, cepat, dan responsif!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <Link
          href="/tafsir"
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-emerald-800/40 bg-[#061e1a] p-4 text-center transition hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#082823] group"
        >
          <span className="text-2xl">📖</span>
          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300">
            Tafsir Al-Qur'an
          </span>
        </Link>

        <Link
          href="/hadis"
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-emerald-800/40 bg-[#061e1a] p-4 text-center transition hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#082823] group"
        >
          <span className="text-2xl">📜</span>
          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300">
            Koleksi Hadist
          </span>
        </Link>

        <Link
          href="/kitab"
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-emerald-800/40 bg-[#061e1a] p-4 text-center transition hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#082823] group"
        >
          <span className="text-2xl">📚</span>
          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300">
            Kitab Turats
          </span>
        </Link>

        <Link
          href="/tanya-ai"
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-emerald-800/40 bg-[#061e1a] p-4 text-center transition hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#082823] group"
        >
          <span className="text-2xl">🤖</span>
          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300">
            Tanya AI
          </span>
        </Link>
      </div>
    </div>
  )
}
