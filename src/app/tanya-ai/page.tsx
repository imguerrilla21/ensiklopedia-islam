"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { type TanyaAiRujukan } from "@/lib/tanya-ai-data"
import SimpanRiwayatButton from "@/components/simpan-riwayat-button"

type ChatMessage = {
  id: number
  role: "user" | "ai"
  text: string
  rujukan?: TanyaAiRujukan[]
  saran?: string[]
  time?: string
  provider?: string
}

const SAMBUTAN = `Assalamu'alaikum Warahmatullahi Wabarakatuh.
Ahlan wa Sahlan di Asisten Pintar Ensiklopedia Islam.

Saya siap membantu menjawab pertanyaan Anda seputar Fiqih Ibadah, Tafsir Al-Qur'an, Hadis & Syarah Nabawi, Aqidah, serta Akhlak Ulama Klasik dengan rujukan kitab mu'tamad.`

function formatTime() {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`
}

function TanyaAiContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      role: "ai",
      text: SAMBUTAN,
      time: formatTime(),
      provider: "Ensiklopedia Generative AI",
      rujukan: [
        { label: "Tafsir Al-Qur'an", href: "/tafsir" },
        { label: "Hadis & Syarah", href: "/hadis" },
        { label: "Kitab Ulama", href: "/kitab" },
      ],
      saran: [
        "Apa itu niat?",
        "Bagaimana tata cara wudhu?",
        "Apa syarat sah shalat?",
      ],
    },
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(1)
  const initialQuerySent = useRef(false)
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null)

  const showToast = (msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    setToastMessage(msg)
    toastTimerRef.current = setTimeout(() => setToastMessage(null), 3000)
  }

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading])

  async function kirim(pesan?: string) {
    const text = (pesan ?? input).trim()
    if (!text || loading) return

    const now = formatTime()
    const userMsg: ChatMessage = {
      id: (idRef.current += 1),
      role: "user",
      text,
      time: now,
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch(`/api/tanya-ai?q=${encodeURIComponent(text)}`)
      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        {
          id: (idRef.current += 1),
          role: "ai",
          text: data.jawaban ?? "Maaf, belum ditemukan jawaban spesifik untuk pertanyaan ini.",
          rujukan: Array.isArray(data.rujukan) ? data.rujukan : [],
          saran: Array.isArray(data.saran) ? data.saran : [],
          time: formatTime(),
          provider: data.provider || "Public Generative AI Engine",
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (idRef.current += 1),
          role: "ai",
          text: "Maaf, layanan asisten sedang mengalami gangguan jaringan. Silakan coba beberapa saat lagi.",
          rujukan: [],
          saran: [],
          time: formatTime(),
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  // Handle URL query on initial load if present
  useEffect(() => {
    if (initialQuery && !initialQuerySent.current) {
      initialQuerySent.current = true
      kirim(initialQuery)
    }
  }, [initialQuery])

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast("✓ Jawaban disalin ke clipboard!")
    })
  }

  const handleResetChat = () => {
    setMessages([
      {
        id: 0,
        role: "ai",
        text: SAMBUTAN,
        time: formatTime(),
        rujukan: [
          { label: "Tafsir Al-Qur'an", href: "/tafsir" },
          { label: "Hadis & Syarah", href: "/hadis" },
          { label: "Kitab Ulama", href: "/kitab" },
        ],
        saran: [
          "Apa itu niat?",
          "Bagaimana tata cara wudhu?",
          "Apa syarat sah shalat?",
        ],
      },
    ])
    showToast("Riwayat obrolan dibersihkan")
  }

  return (
    <div className="space-y-6">
      {/* Chat Header Bar with Reset Option */}
      <div className="flex items-center justify-between rounded-2xl border border-emerald-800/40 bg-gradient-to-r from-[#061e1a] via-[#051b17] to-[#041411] px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-sm text-slate-950 font-black shadow-md">
            ☪
          </span>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-white tracking-wide">
              Tanya Asisten AI &amp; Khazanah Pustaka
            </h1>
            <p className="text-[11px] text-emerald-300/80">
              Konsultasi Fiqih, Tafsir, Hadis &amp; Fatwa Ulama
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleResetChat}
          className="flex items-center gap-1.5 rounded-xl border border-emerald-800/60 bg-[#041411] px-3 py-1.5 text-xs font-medium text-emerald-400 hover:border-amber-400/40 hover:text-amber-300 transition cursor-pointer"
          title="Bersihkan riwayat percakapan"
        >
          <span>🗑️</span>
          <span className="hidden sm:inline">Reset Percakapan</span>
        </button>
      </div>

      {/* Chat Messages Stream */}
      <section className="min-h-[420px] rounded-3xl border border-emerald-800/40 bg-gradient-to-b from-[#061e1a] to-[#041411] p-4 sm:p-6 pb-12 sm:pb-16 shadow-2xl space-y-5">
        <div className="space-y-5">
          {messages.map((m) => {
            const isUser = m.role === "user"

            return (
              <div
                key={m.id}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex max-w-[92%] sm:max-w-[85%] flex-col gap-2 ${
                    isUser ? "items-end" : "items-start"
                  }`}
                >
                  {/* Sender Header */}
                  <div className="flex items-center gap-2 px-1 text-[11px] font-semibold text-emerald-400/80">
                    {!isUser ? (
                      <>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-[10px] text-slate-950 font-black">
                          ☪
                        </span>
                        <span className="text-amber-400 font-bold">Asisten Ensiklopedia AI</span>
                        {m.provider && (
                          <span className="rounded-full bg-emerald-950/80 px-2 py-0.5 text-[10px] font-medium text-amber-300/80 border border-emerald-800/40">
                            ✨ {m.provider}
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <span className="text-emerald-300">Anda</span>
                        <span>👤</span>
                      </>
                    )}
                    {m.time && (
                      <span className="text-[10px] text-emerald-600 font-mono">
                        • {m.time}
                      </span>
                    )}
                  </div>

                  {/* Message Body Card */}
                  <div
                    className={`relative rounded-3xl p-4 sm:p-6 text-sm leading-relaxed shadow-lg ${
                      isUser
                        ? "bg-gradient-to-r from-emerald-800 to-teal-900 text-white border border-emerald-600/50 rounded-tr-none"
                        : "bg-[#07241f] border border-emerald-800/60 text-emerald-50 rounded-tl-none"
                    }`}
                  >
                    <div className="space-y-3 text-xs sm:text-sm font-normal leading-relaxed">
                      {m.text.split("\n\n").map((para, pIdx) => {
                        const trimmed = para.trim()
                        if (!trimmed) return null

                        // Blockquote (starts with >)
                        if (trimmed.startsWith(">")) {
                          const quoteContent = trimmed
                            .split("\n")
                            .map((l) => l.replace(/^>\s*/, ""))
                            .join("\n")
                          return (
                            <blockquote
                              key={pIdx}
                              className="my-3 rounded-2xl border-l-4 border-amber-400/80 bg-[#041411]/90 p-3.5 sm:p-4 text-emerald-200/90 font-serif italic shadow-inner"
                            >
                              <div className="whitespace-pre-line leading-relaxed text-xs sm:text-sm">
                                {quoteContent}
                              </div>
                            </blockquote>
                          )
                        }

                        // Heading 3 (### Heading)
                        if (trimmed.startsWith("###")) {
                          const headingText = trimmed.replace(/^###\s*/, "")
                          return (
                            <h3
                              key={pIdx}
                              className="mt-4 mb-2 flex items-center gap-2 border-b border-emerald-800/40 pb-1.5 text-sm sm:text-base font-bold text-amber-300"
                            >
                              <span className="text-amber-400">✦</span>
                              <span>{headingText}</span>
                            </h3>
                          )
                        }

                        // Numbered section heading (e.g., 1. **Heading**)
                        if (/^\d+\.\s+\*\*/.test(trimmed)) {
                          return (
                            <div key={pIdx} className="pt-2">
                              <p className="whitespace-pre-line text-xs sm:text-sm leading-relaxed text-emerald-100 font-medium">
                                {trimmed}
                              </p>
                            </div>
                          )
                        }

                        // Standard Paragraph
                        return (
                          <p
                            key={pIdx}
                            className="whitespace-pre-line text-xs sm:text-sm leading-relaxed text-emerald-100/95"
                          >
                            {trimmed}
                          </p>
                        )
                      })}
                    </div>

                    {/* AI Rujukan Pustaka Badges */}
                    {!isUser && m.rujukan && m.rujukan.length > 0 && (
                      <div className="mt-4 border-t border-emerald-800/40 pt-3">
                        <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                          <span>📚</span> Rujukan Pustaka:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {m.rujukan.map((r, idx) => (
                            <Link
                              key={idx}
                              href={r.href}
                              className="group inline-flex items-center gap-1.5 rounded-xl border border-emerald-700/60 bg-[#041411] px-3 py-1.5 text-xs font-semibold text-emerald-300 transition hover:border-amber-400 hover:bg-[#082621] hover:text-amber-300"
                            >
                              <span>📖</span>
                              <span>{r.label}</span>
                              <span className="text-amber-400 transition group-hover:translate-x-0.5">➔</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* AI Card Action Buttons: Simpan Riwayat & Copy */}
                    {!isUser && (
                      <div className="mt-3 flex items-center justify-end gap-2 border-t border-emerald-800/20 pt-2">
                        {m.id > 0 && (
                          <SimpanRiwayatButton
                            item={{
                              id: `tanya-ai-${m.id}`,
                              kategori: "tanya-ai",
                              judul: `Tanya AI: ${(messages.find((p) => p.id === m.id - 1)?.text || "Konsultasi Islam").slice(0, 60)}`,
                              subjudul: `Asisten AI • ${m.provider || "Gemini Flash"}`,
                              ringkasan: m.text.slice(0, 130) + "...",
                              url: `/tanya-ai?q=${encodeURIComponent(messages.find((p) => p.id === m.id - 1)?.text || "")}`,
                            }}
                            variant="compact"
                            label="Simpan Riwayat"
                          />
                        )}

                        <button
                          type="button"
                          onClick={() => handleCopyText(m.text)}
                          className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-medium text-emerald-400 transition hover:bg-emerald-900/40 hover:text-white cursor-pointer"
                          title="Salin jawaban"
                        >
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Salin</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Saran Pertanyaan Lanjutan */}
                  {!isUser && m.saran && m.saran.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 pl-1">
                      <span className="text-[11px] font-bold text-amber-400/90 mr-1">
                        Lanjutan:
                      </span>
                      {m.saran.map((s, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => kirim(s)}
                          disabled={loading}
                          className="rounded-lg border border-emerald-800/60 bg-[#041411] px-2.5 py-1 text-[11px] font-medium text-emerald-300 transition hover:border-amber-400 hover:bg-[#082621] hover:text-white disabled:opacity-50 cursor-pointer"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* Typing Indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-2xl border border-emerald-800/60 bg-[#07241f] px-4 py-3 text-xs font-semibold text-amber-400">
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-amber-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-amber-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-amber-400" />
                </span>
                <span className="text-emerald-200">Asisten sedang menelaah kitab &amp; merumuskan jawaban…</span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </section>

      {/* 4. Chat Input Form (Sticky/Fixed Look) */}
      <section className="sticky bottom-4 z-30 rounded-3xl border border-emerald-700/60 bg-[#061e1a]/95 p-3 sm:p-4 shadow-2xl backdrop-blur-md">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            kirim()
          }}
          className="flex items-center gap-2"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              placeholder="Tuliskan pertanyaan hukum, tafsir ayat, atau hadis di sini..."
              className="w-full rounded-2xl border border-emerald-800/60 bg-[#041411] px-4 py-3.5 text-xs sm:text-sm font-medium text-emerald-100 placeholder-emerald-700 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="flex shrink-0 items-center gap-2 rounded-2xl bg-[#e5a93c] px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg transition hover:bg-[#d6982f] active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
          >
            <span>Kirim</span>
            <span>➔</span>
          </button>
        </form>
      </section>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-amber-400/40 bg-[#061e1a] px-4 py-3 text-sm font-semibold text-emerald-100 shadow-2xl backdrop-blur">
          <svg
            className="h-4 w-4 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  )
}

export default function TanyaAiPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
      <Suspense
        fallback={
          <div className="rounded-3xl border border-emerald-800/40 bg-[#061e1a] p-10 text-center text-sm text-emerald-400">
            Memuat Asisten AI Ensiklopedia Islam…
          </div>
        }
      >
        <TanyaAiContent />
      </Suspense>
    </main>
  )
}
