import { searchContent } from "@/lib/search-service"
import { cariJawaban, type TanyaAiRujukan } from "@/lib/tanya-ai-data"

export type GeneratedAiResponse = {
  jawaban: string
  rujukan: TanyaAiRujukan[]
  saran: string[]
  provider?: string
}

const SYSTEM_ISLAMIC_PROMPT = `Anda adalah asisten kecerdasan buatan (Generative AI) ilmiah untuk Ensiklopedia Islam Klasik & Kontemporer.
Tugas Anda adalah memberikan jawaban yang mendalam, terstruktur, beradab, dan berbobot ilmiah mengenai pertanyaan hukum Islam, fiqih, tafsir Al-Qur'an, syarah hadis, aqidah, tasawuf, dan akhlak.
Selalu tulis jawaban Anda sepenuhnya dalam Bahasa Indonesia yang fasih, baku, dan santun.

PANDUAN STRUKTUR JAWABAN (WAJIB DITERAPKAN SECARA KONSISTEN UNTUK SETIAP PERTANYAAN):

1. **Intisari & Dalil Pokok**:
   - Berikan definisi konseptual yang padat dan jelas.
   - Cantumkan dalil Al-Qur'an (nama surah & nomor ayat) dan Hadis Shahih (sebutkan perawi seperti HR. Bukhari, HR. Muslim, HR. Tirmidzi, dll.).

2. **Rincian Pembahasan / Urutan Langkah**:
   - Paparkan secara sistematis dalam poin-poin bernomor (1, 2, 3...) yang jelas, runtut, dan mudah dipraktikkan.

3. **Keterangan & Pendalaman Ulama**:
   - Jelaskan status hukum fiqih (membedakan antara Rukun/Wajib vs Sunnah vs Pembatal).
   - Sertakan pandangan ulama mu'tamad (seperti Imam An-Nawawi, Ibnu Hajar, Imam Asy-Syafi'i, Imam Al-Ghazali, Ibnu Katsir, dll.).

4. **Faidah & Hikmah Amalan**:
   - Akhiri dengan nasihat praktis, adab, serta hikmah spiritual bagi kehidupan seorang muslim sehari-hari.`

const STOP_WORDS = new Set([
  "bagaimana", "tata", "cara", "sesuai", "sunnah", "apa", "apakah", "mengapa",
  "siapa", "kapan", "dimana", "dalam", "menurut", "tentang", "hukum", "adalah",
  "dan", "atau", "yang", "untuk", "dengan", "dari", "pada", "ke", "di", "ini",
  "itu", "saya", "kita", "bisa", "harus", "boleh", "wajib", "tidak"
])

function extractKeySubject(query: string): string {
  const words = query
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w))

  return words.join(" ") || query
}

/**
 * Call Google Gemini Public REST API with auto model fallback
 */
/**
 * Call Google Gemini Public REST API with auto model fallback
 */
async function callGeminiApi(
  prompt: string,
  apiKey: string,
): Promise<{ text: string; modelName: string } | null> {
  const candidateModels = [
    "gemini-3.6-flash",
    "gemini-3.5-flash",
    "gemini-3-flash-preview",
    "gemini-flash-latest",
  ]

  for (const model of candidateModels) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_ISLAMIC_PROMPT }],
          },
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 8192,
          },
        }),
        signal: AbortSignal.timeout(20000),
      })

      if (res.ok) {
        const json = await res.json()
        const text = json?.candidates?.[0]?.content?.parts?.[0]?.text
        if (text && text.trim().length > 20) {
          const displayModel = model === "gemini-flash-latest" ? "Gemini Flash Latest" : model
          return { text: text.trim(), modelName: `Google ${displayModel}` }
        }
      }
    } catch {
      // try next candidate model
    }
  }

  return null
}

/**
 * Call Groq / OpenAI-compatible Public REST API
 */
async function callOpenAiCompatibleApi(
  prompt: string,
  endpoint: string,
  apiKey: string,
  model: string,
): Promise<string | null> {
  try {
    const messages = [
      { role: "system", content: SYSTEM_ISLAMIC_PROMPT },
      { role: "user", content: prompt },
    ]

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.5,
        max_tokens: 8192,
      }),
      signal: AbortSignal.timeout(20000),
    })

    if (!res.ok) return null
    const json = await res.json()
    const text = json?.choices?.[0]?.message?.content
    return text ? text.trim() : null
  } catch {
    return null
  }
}

/**
 * Deep Generative Synthesis Engine (Offline/Fallback High-Quality RAG Generator)
 */
function synthesizeGenerativeAnswer(
  query: string,
  searchResults: Array<{ title: string; snippet: string; source: string; href: string; type: string }>,
): string {
  // Filter search results that actually share terms with the query
  const queryTerms = query.toLowerCase().split(/\s+/).filter((w) => w.length > 2 && !STOP_WORDS.has(w))
  
  const relevantResults = searchResults.filter((r) => {
    const text = (r.title + " " + r.snippet + " " + r.source).toLowerCase()
    return queryTerms.some((t) => text.includes(t))
  })

  if (relevantResults.length > 0) {
    const primary = relevantResults[0]
    const secondary = relevantResults[1]

    return `Berdasarkan penelaahan khazanah pustaka Ensiklopedia Islam mengenai **"${query}"**:

1. **Intisari & Dalil Pokok**:
Pembahasan ini bersumber dari rujukan mu'tamad **${primary.source}**, sebagaimana tercantum dalam *${primary.title}*:
> "${primary.snippet}"

2. **Rincian Pembahasan & Kaidah**:
Para ulama menerangkan bahwa setiap perkara ibadah maupun muamalah memiliki rincian syarat, rukun, dan adab yang wajib dipenuhi agar amalan tersebut sah dan diterima di sisi Allah Ta'ala.

3. **Keterangan & Pendalaman Ulama**:
${
  secondary
    ? `Di samping itu, dalam *${secondary.title}* (${secondary.source}), diterangkan bahwa:\n> "${secondary.snippet}"\n\nKeterpaduan dalil ini menunjukkan bahwa syariat Islam senantiasa memberikan panduan komprehensif bagi setiap hamba dalam meniti jalan ketaatan.`
    : `Para fuqaha dan ulama salaf menjelaskan bahwa setiap perkara syariat dibangun di atas pondasi ilmu dan keikhlasan, sehingga amalan seorang hamba mendatangkan pahala serta keberkahan yang hakiki di dunia dan akhirat.`
}

4. **Faidah & Hikmah Amalan**:
Hendaknya setiap penuntut ilmu senantiasa mengutamakan adab, mempelajari rincian hukum dari sumber yang shahih, serta mengamalkannya dengan penuh keikhlasan semata-mata mengharap ridha Allah Subhanahu wa Ta'ala.`
  }

  // General scholarly response with 4-part structure
  return `Mengenai pertanyaan Anda tentang **"${query}"**:

1. **Intisari & Dalil Pokok**:
Dalam disiplin ilmu keislaman, setiap persoalan syariat, aqidah, maupun akhlak senantiasa ditimbang berdasarkan dalil Al-Qur'an dan Sunnah Rasulullah shallallahu 'alaihi wa sallam yang shahih.

2. **Rincian Pembahasan**:
Untuk mendalami rincian hukum terkait perkara ini, para penuntut ilmu dianjurkan mengkaji bab-bab fiqih dan syarah hadis yang relevan secara bertahap dan terbimbing.

3. **Keterangan Ulama Mazhab**:
Para ulama menasihatkan agar penuntut ilmu senantiasa merujuk kepada kitab-kitab induk (Kutubus Sittah untuk Hadis, Tafsir Mu'tamad untuk Al-Qur'an, dan Matan Fiqih) guna memperoleh pemahaman yang muttasil dan kokoh.

4. **Faidah & Hikmah Amalan**:
Menuntut ilmu syar'i dan mengamalkannya dengan ikhlas merupakan jalan utama meraih keridhaan Allah Subhanahu wa Ta'ala. Anda dapat menelaah dalil lengkapnya pada menu **Tafsir**, **Hadis**, dan **Kitab Ulama**.`
}

/**
 * Main Generator Function for Tanya AI
 */
export async function generateTanyaAiResponse(query: string): Promise<GeneratedAiResponse> {
  const trimmed = query.trim()
  if (!trimmed) {
    return {
      jawaban: "Silakan masukkan pertanyaan seputar ibadah, tafsir, hadis, atau kitab ulama.",
      rujukan: [],
      saran: ["Apa itu niat?", "Bagaimana tata cara wudhu sesuai sunnah?", "Apa syarat sah shalat?"],
      provider: "local",
    }
  }

  // 1. Check curated domain knowledge first (provides instant, 100% accurate, authoritative step-by-step guidance)
  const baseTemplate = cariJawaban(trimmed)
  const subjectKey = extractKeySubject(trimmed)

  // 2. Retrieve strictly relevant context from search engine
  const searchResults = await searchContent({ q: subjectKey, limit: 6 })

  // 3. Try External Public Generative AI Providers if API keys are set in environment
  const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY
  const groqKey = process.env.GROQ_API_KEY
  const openaiKey = process.env.OPENAI_API_KEY
  const openrouterKey = process.env.OPENROUTER_API_KEY

  const contextData = searchResults
    .map(
      (r, i) =>
        `[Dokumen ${i + 1}] (${r.type.toUpperCase()}) ${r.title} - Sumber: ${r.source}\nKutipan Teks: ${r.snippet}`,
    )
    .join("\n\n")

  // Attempt A: Google Gemini API (Public Generative AI)
  if (geminiKey) {
    const geminiResult = await callGeminiApi(trimmed, geminiKey)
    if (geminiResult) {
      const rujukan =
        baseTemplate.rujukan.length > 0
          ? baseTemplate.rujukan
          : extractDynamicRujukan(searchResults, subjectKey)
      return {
        jawaban: geminiResult.text,
        rujukan,
        saran: generateDynamicSaran(trimmed, baseTemplate.lanjutan),
        provider: geminiResult.modelName,
      }
    }
  }

  // Attempt B: Groq API
  if (groqKey) {
    const groqText = await callOpenAiCompatibleApi(
      trimmed,
      "https://api.groq.com/openai/v1/chat/completions",
      groqKey,
      "llama-3.3-70b-versatile",
    )
    if (groqText) {
      const rujukan =
        baseTemplate.rujukan.length > 0
          ? baseTemplate.rujukan
          : extractDynamicRujukan(searchResults, subjectKey)
      return {
        jawaban: groqText,
        rujukan,
        saran: generateDynamicSaran(trimmed, baseTemplate.lanjutan),
        provider: "Groq Llama 3.3",
      }
    }
  }

  // Attempt C: OpenRouter / OpenAI API
  if (openrouterKey) {
    const openrouterText = await callOpenAiCompatibleApi(
      trimmed,
      "https://openrouter.ai/api/v1/chat/completions",
      openrouterKey,
      "google/gemini-2.0-flash-exp:free",
    )
    if (openrouterText) {
      const rujukan =
        baseTemplate.rujukan.length > 0
          ? baseTemplate.rujukan
          : extractDynamicRujukan(searchResults, subjectKey)
      return {
        jawaban: openrouterText,
        rujukan,
        saran: generateDynamicSaran(trimmed, baseTemplate.lanjutan),
        provider: "OpenRouter Generative AI",
      }
    }
  }

  if (openaiKey) {
    const openaiText = await callOpenAiCompatibleApi(
      trimmed,
      "https://api.openai.com/v1/chat/completions",
      openaiKey,
      "gpt-4o-mini",
    )
    if (openaiText) {
      const rujukan =
        baseTemplate.rujukan.length > 0
          ? baseTemplate.rujukan
          : extractDynamicRujukan(searchResults, subjectKey)
      return {
        jawaban: openaiText,
        rujukan,
        saran: generateDynamicSaran(trimmed, baseTemplate.lanjutan),
        provider: "OpenAI Model",
      }
    }
  }

  // 4. Default: Return direct curated scholarly explanation if matched
  if (baseTemplate.jawaban && baseTemplate.jawaban.length > 30) {
    return {
      jawaban: baseTemplate.jawaban,
      rujukan: baseTemplate.rujukan,
      saran: baseTemplate.lanjutan,
      provider: "Ensiklopedia Generative AI Engine",
    }
  }

  // 5. Dynamic Fallback: Synthesize RAG answer strictly matching query subject
  const synthesized = synthesizeGenerativeAnswer(trimmed, searchResults)
  const rujukan = extractDynamicRujukan(searchResults, subjectKey)
  const saran = generateDynamicSaran(trimmed, baseTemplate.lanjutan)

  return {
    jawaban: synthesized,
    rujukan,
    saran,
    provider: "Ensiklopedia Generative AI Engine",
  }
}

function extractDynamicRujukan(
  searchResults: Array<{ title: string; href: string; type: string; snippet?: string; source?: string }>,
  subjectKey: string,
): TanyaAiRujukan[] {
  const result: TanyaAiRujukan[] = []
  const seen = new Set<string>()
  const subjectTerms = subjectKey.toLowerCase().split(/\s+/).filter((w) => w.length > 2)

  // Filter only relevant results
  const filtered = searchResults.filter((r) => {
    const text = (r.title + " " + (r.snippet || "") + " " + (r.source || "")).toLowerCase()
    return subjectTerms.length === 0 || subjectTerms.some((t) => text.includes(t))
  })

  for (const r of filtered.length > 0 ? filtered : searchResults) {
    if (!seen.has(r.href)) {
      seen.add(r.href)
      const prefix = r.type === "ayat" ? "Tafsir" : r.type === "hadis" ? "Hadis" : "Kitab"
      result.push({
        label: `${prefix}: ${r.title}`,
        href: r.href,
      })
    }
    if (result.length >= 4) break
  }

  if (result.length === 0) {
    return [
      { label: "Tafsir Al-Qur'an", href: "/tafsir" },
      { label: "Hadis & Syarah", href: "/hadis" },
      { label: "Kitab Ulama", href: "/kitab" },
    ]
  }

  return result
}

function generateDynamicSaran(query: string, defaultLanjutan: string[]): string[] {
  if (defaultLanjutan && defaultLanjutan.length > 0) {
    return defaultLanjutan.slice(0, 3)
  }

  const q = query.toLowerCase()
  if (q.includes("sholat") || q.includes("shalat")) {
    return ["Apa saja rukun shalat?", "Apa yang membatalkan shalat?", "Bagaimana bacaan sujud sahwi?"]
  }
  if (q.includes("wudhu") || q.includes("thaharah")) {
    return ["Apa saja hal yang membatalkan wudhu?", "Apa syarat sah dan rukun shalat?", "Bagaimana tata cara tayamum?"]
  }
  if (q.includes("puasa") || q.includes("ramadhan")) {
    return ["Apa syarat wajib puasa?", "Siapa yang boleh tidak puasa?", "Bagaimana cara bayar fidyah?"]
  }
  if (q.includes("niat") || q.includes("ikhlas")) {
    return ["Kapan waktu melafalkan niat?", "Bagaimana hukum berniat dalam hati?", "Apa tanda amalan yang ikhlas?"]
  }

  return [
    "Bagaimana pandangan para ulama tentang ini?",
    "Apa dalil Al-Qur'an dan Hadis terkait?",
    "Bagaimana penerapannya dalam kehidupan sehari-hari?",
  ]
}
