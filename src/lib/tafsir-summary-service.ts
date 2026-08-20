import type { SurahDetailMeta } from "@/lib/tafsir-metadata"

export type AyatInput = {
  nomor: number
  arab: string
  terjemah: string
  juz?: number
  tafsir?: string
}

export type TafsirSummaryResponse = {
  summary: string
  provider: string
}

const TAFSIR_SOURCE_NAMES: Record<string, string> = {
  jalalain: "Tafsir Al-Jalalain (Jalaluddin Al-Mahalli & As-Suyuthi)",
  "ibnu-katsir": "Tafsir Mukhtasar Ibnu Katsir",
  "as-sadi": "Tafsir As-Sa'di (Taisirul Karimir Rahman)",
  muyassar: "Tafsir Al-Muyassar (Madinah)",
  "quraish-shihab": "Tafsir Al-Misbah (Prof. Dr. M. Quraish Shihab)",
  kemenag: "Tafsir Kemenag RI (Kementerian Agama Republik Indonesia)",
}

const SYSTEM_TAFSIR_PROMPT = `Anda adalah mufassir dan pakar tafsir Al-Qur'an terkemuka dari Ensiklopedia Islam.
Tugas Anda adalah menyusun "Ringkasan Tafsir Komprehensif" yang mendalam, kaya makna, berwibawa, dan mengalir indah untuk surah dan rentang ayat Al-Qur'an yang ditentukan.

PANDUAN STRUKTUR PENULISAN (WAJIB DIBUAT DALAM 4 PARAGRAF UTUH & MENDALAM DALAM BAHASA INDONESIA):

1. **Paragraf 1 - Latar Belakang, Asbabun Nuzul & Makna Global**:
   Uraikan pengantar surah, statusnya (Makkiyah/Madaniyah), tema sentral, asbabun nuzul (bila ada riwayat shahih), serta pesan pokok rentang ayat yang dipilih.

2. **Paragraf 2 - Penjelasan Rinci Ayat per Ayat & Munasabah Antar-Ayat**:
   Jelaskan makna setiap ayat secara berurutan, kupas makna kosakata/lafaz penting, dan terangkan kesinambungan makna (munasabah) yang menghubungkan ayat-ayat tersebut.

3. **Paragraf 3 - Pendalaman Teologis, Hukum Syariat & Perspektif Mufassir**:
   Uraikan hukum fiqih, pokok-pokok aqidah/tauhid, nilai tazkiyatun nufus, serta corak penafsiran sesuai rujukan kitab tafsir yang diminta.

4. **Paragraf 4 - Pelajaran Utama, Faidah Praktis & Panduan Tadabbur Kehidupan**:
   Sajikan poin-poin pelajaran hidup (Pertama, Kedua, Ketiga...) yang dapat langsung direnungkan dan diamalkan oleh seorang mukmin dalam kehidupan sehari-hari.`

/**
 * Call Google Gemini Public API with candidate model fallback
 */
async function callGeminiTafsirApi(
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
            parts: [{ text: SYSTEM_TAFSIR_PROMPT }],
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
        if (text && text.trim().length > 100) {
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
 * Call Groq or OpenAI-compatible API
 */
async function callOpenAiCompatibleTafsirApi(
  prompt: string,
  endpoint: string,
  apiKey: string,
  model: string,
): Promise<string | null> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_TAFSIR_PROMPT },
          { role: "user", content: prompt },
        ],
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
 * Main Tafsir Summary Generation Service (Gemini API with Fallback)
 */
export async function generateGeminiTafsirSummary({
  surah,
  start,
  end,
  sourceId,
  ayats = [],
}: {
  surah: SurahDetailMeta
  start: number
  end: number
  sourceId: string
  ayats?: AyatInput[]
}): Promise<TafsirSummaryResponse> {
  const sourceName = TAFSIR_SOURCE_NAMES[sourceId] || "Tafsir Al-Jalalain"
  const isSingle = start === end
  const rangeTitle = isSingle ? `Ayat ${start}` : `Ayat ${start} sampai ${end}`

  // Build Verse Context for the Prompt
  const relevantAyats = ayats.filter((a) => a.nomor >= start && a.nomor <= end)
  const verseTextList = relevantAyats
    .map((a) => `[Ayat ${a.nomor}]\nArab: ${a.arab}\nTerjemah: "${a.terjemah}"`)
    .join("\n\n")

  const prompt = `Buatkan Ringkasan Tafsir Komprehensif untuk:
Surah: QS. ${surah.namaLatin} (${surah.nomor}) - Golongan: ${surah.tempatTurun} (${surah.jumlahAyat} Ayat)
Rentang: ${rangeTitle}
Rujukan Kitab Tafsir: ${sourceName}

${verseTextList.length > 0 ? `Data Teks & Terjemahan Ayat Terkait:\n${verseTextList}` : ""}

Susunlah ringkasan tafsir ini secara mendalam dalam 4 paragraf utuh yang kaya akan analisis kebahasaan, kesinambungan makna (munasabah), hukum syariat, dan tadabbur amalan.`

  // 1. Try Google Gemini API first
  const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY
  if (geminiKey) {
    const geminiResult = await callGeminiTafsirApi(prompt, geminiKey)
    if (geminiResult) {
      return {
        summary: geminiResult.text,
        provider: geminiResult.modelName,
      }
    }
  }

  // 2. Try Groq API
  const groqKey = process.env.GROQ_API_KEY
  if (groqKey) {
    const groqText = await callOpenAiCompatibleTafsirApi(
      prompt,
      "https://api.groq.com/openai/v1/chat/completions",
      groqKey,
      "llama-3.3-70b-versatile",
    )
    if (groqText) {
      return {
        summary: groqText,
        provider: "Groq Llama 3.3",
      }
    }
  }

  // 3. Try OpenRouter
  const openrouterKey = process.env.OPENROUTER_API_KEY
  if (openrouterKey) {
    const orText = await callOpenAiCompatibleTafsirApi(
      prompt,
      "https://openrouter.ai/api/v1/chat/completions",
      openrouterKey,
      "google/gemini-2.0-flash-exp:free",
    )
    if (orText) {
      return {
        summary: orText,
        provider: "OpenRouter Generative AI",
      }
    }
  }

  // 4. Fallback: Local Scholarly Synthesis Engine
  const localSummary = generateComprehensiveTafsir(surah, start, end, sourceId, ayats)
  return {
    summary: localSummary,
    provider: "Ensiklopedia Tafsir Engine",
  }
}

/**
 * Local Fallback Deep Tafsir Generator
 */
export function generateComprehensiveTafsir(
  surah: SurahDetailMeta,
  start: number,
  end: number,
  sourceId: string,
  ayats: AyatInput[],
): string {
  const isSingle = start === end
  const sourceName = TAFSIR_SOURCE_NAMES[sourceId] || "Tafsir Al-Jalalain"

  // Special curated deep tafsir for Surah Al-Fatihah 1-7
  if (surah.nomor === 1 && start === 1 && end === 7) {
    return `Pembacaan surah Al-Fatihah, yang senantiasa dimulai dengan "Bismillahirrahmanirrahim," adalah pintu gerbang menuju Al-Qur'an dan merupakan inti dari setiap rakaat shalat kita. Terdapat perbedaan pendapat di kalangan ulama mengenai status "Bismillahirrahmanirrahim" pada awal surah ini. Sebagian ulama, seperti Imam Syafi'i, menganggapnya sebagai satu ayat dari Al-Fatihah dan surah-surah lainnya, sehingga dibaca keras dalam shalat. Sementara ulama lain, seperti Imam Abu Hanifah dan Imam Malik, memandang Basmalah sebagai ayat tersendiri yang berfungsi sebagai pembatas antarsurah, bukan bagian dari surah itu sendiri, sehingga tidak dikeraskan atau bahkan tidak dibaca oleh sebagian dalam shalat. Namun demikian, kesepakatan para sahabat untuk menuliskannya di awal surah (kecuali At-Taubah) menegaskan bahwa Basmalah adalah bagian dari Al-Qur'an, yang maknanya adalah memulai segala sesuatu "dengan nama Allah." Ini menunjukkan bahwa apa yang dibaca atau dilakukan adalah atas izin dan kehendak-Nya, dan Al-Qur'an itu sendiri adalah wahyu dari Allah, bukan karangan manusia.

Setelah Basmalah, ayat kedua "Alhamdulillahi Rabbil 'alamin" menegaskan bahwa segala puji hanya milik Allah, Tuhan semesta alam. Ini adalah deklarasi bahwa segala bentuk kesempurnaan dan kebaikan hanya berasal dari-Nya. Dilanjutkan dengan ayat ketiga, "Ar-Rahmanir-Rahim," yang mengulang sifat kasih sayang Allah yang maha luas dan kekal, mengingatkan kita akan rahmat-Nya yang tak terhingga yang meliputi segala sesuatu. Kemudian, ayat keempat, "Maliki Yaumid-din," mengalihkan fokus pada kekuasaan Allah sebagai Penguasa Hari Pembalasan, hari di mana setiap jiwa akan dihisab atas perbuatannya. Ayat ini menanamkan rasa takut sekaligus harapan akan keadilan-Nya.

Puncak dari pengenalan sifat-sifat Allah ini ada pada ayat kelima, "Iyyaka na'budu wa iyyaka nasta'in," yang merupakan inti tauhid. Ayat ini adalah ikrar seorang hamba bahwa hanya kepada-Nya kita beribadah dan hanya kepada-Nya kita memohon pertolongan. Ini adalah pergeseran dari pujian dan pengakuan terhadap Allah menjadi sebuah komitmen langsung dari hamba. Setelah menyatakan komitmen ini, wajar jika hamba kemudian memohon bimbingan, sebagaimana dalam ayat keenam, "Ihdinas siratal mustaqim," yang berarti "Tunjukilah kami jalan yang lurus." Permohonan ini adalah doa paling mendasar seorang Muslim, mencari arah yang benar dalam hidup. Jalan yang lurus ini kemudian dijelaskan dalam ayat ketujuh, "Siratal ladzina an'amta 'alaihim ghairil maghdubi 'alaihim walad-dhallin," yaitu jalan orang-orang yang telah Dia beri nikmat, bukan jalan mereka yang dimurkai, dan bukan pula jalan orang-orang yang sesat. Ayat ini menunjukkan pentingnya memohon kejelasan dalam bimbingan agar tidak terjerumus pada kesesatan.

Dari rangkaian ayat Al-Fatihah ini, kita dapat menarik beberapa pelajaran utama. Pertama, pentingnya memulai setiap tindakan dan ucapan dengan Basmalah dan menempatkan Allah sebagai tujuan utama, mengakui segala pujian dan kekuasaan hanya milik-Nya. Kedua, surah ini mengajarkan prinsip tauhid yang mendalam, yaitu hanya menyembah Allah semata dan hanya memohon pertolongan kepada-Nya, menegaskan ketergantungan mutlak kita kepada-Nya. Ketiga, Al-Fatihah adalah doa permohonan hidayah yang paling agung, memohon agar senantiasa dibimbing di jalan yang lurus, yaitu jalan kebenaran dan kebaikan yang diridhai Allah, serta dijauhkan dari kemurkaan dan kesesatan hidup di dunia dan akhirat.`
  }

  const relevantAyats = ayats.filter((a) => a.nomor >= start && a.nomor <= end)
  const rangeTitle = isSingle ? `Ayat ${start}` : `Ayat ${start} sampai ${end}`

  const p1 = `Pembahasan QS. ${surah.namaLatin} (${surah.nomor}) ${rangeTitle} ini ditelaah berdasarkan rujukan ${sourceName}. Surah ${surah.namaLatin} tergolong surah ${surah.tempatTurun}, yang memiliki karakteristik penekanan pada aspek ${surah.tempatTurun === "Makkiyah" ? "penguatan aqidah, tauhidullah, pembuktian kebenaran wahyu kenabian, serta kepastian hari pembalasan" : "penetapan hukum-hukum syariat, tatanan muamalah sosial umat, pembinaan keluarga, serta keteguhan dalam menjalankan ketaatan kepada Allah dan Rasul-Nya"}. Melalui ${rangeTitle} ini, Allah Subhanahu wa Ta'ala memberikan petunjuk agung yang menjadi pedoman fundamental bagi setiap orang yang beriman dalam memahami pesan Ilahi.`

  let p2 = ""
  if (isSingle && relevantAyats.length > 0) {
    const a = relevantAyats[0]
    p2 = `Pada ayat ke-${a.nomor}, Allah SWT berfirman: "${a.terjemah}". Ayat ini menegaskan pokok keimanan yang sangat mendalam. Dalam perspektif tafsir, kata dan kalimat dalam ayat ini memuat pesan tauhid serta arahan langsung bagi hamba untuk menyadari posisi dirinya di hadapan keagungan Sang Pencipta. Penjelasan tafsir menggarisbawahi bahwa setiap lafaz di dalamnya bukan sekadar untaian kata biasa, melainkan pedoman hidup yang menyucikan hati dari keraguan dan mengarahkan akal pikiran menuju pemahaman yang lurus terhadap hakikat syariat.`
  } else if (relevantAyats.length > 0) {
    const verseSnippets = relevantAyats
      .slice(0, 5)
      .map((a) => `ayat ke-${a.nomor} yang menerangkan "${a.terjemah.slice(0, 90)}${a.terjemah.length > 90 ? "..." : ""}"`)
      .join(", kemudian disusul ")
    p2 = `Jika kita meneliti kesinambungan makna dalam rentang ayat ini, kita dapati susunan yang sangat harmonis. Dimulai dari ${verseSnippets}. Rangkaian ayat-ayat ini saling menguatkan, di mana ayat pertama menjadi landasan bagi ayat berikutnya. Para mufassir menjelaskan bahwa keterkaitan (munasabah) antarayat ini membentuk pesan utuh yang membimbing hamba untuk memahami kebenaran wahyu, menepis keraguan batin, serta menghidupkan rasa takut (khauf) dan harapan (raja') kepada rahmat Allah SWT.`
  } else {
    p2 = `Rangkaian ${rangeTitle} ini memuat uraian yang sangat mendalam mengenai hakikat penghambaan kepada Allah. Para mufassir menggarisbawahi bahwa pemahaman mendalam terhadap ayat-ayat ini memerlukan ketajaman tadabbur, mengaitkan pesan tekstual Al-Qur'an dengan konteks amalan harian, sehingga petunjuk wahyu dapat meresap ke dalam jiwa dan mengarahkan perilaku seorang mukmin menuju kebaikan yang hakiki.`
  }

  const p3 = `Ditinjau dari sudut pandang pemikiran ${sourceName}, ayat-ayat ini mengandung hikmah tasyri' dan penanaman nilai moral spiritual yang amat kokoh. Mufassir menyoroti bagaimana Allah SWT mengajarkan hamba-Nya untuk senantiasa memelihara kesucian niat, menjaga konsistensi dalam ketaatan, dan tidak terperdaya oleh gemerlap tipu daya dunia yang fana. Keimanan yang benar tidak hanya berhenti pada pengakuan lisan semata, melainkan harus diwujudkan dalam bentuk amal shalih, ketundukan pada aturan syariat, serta kepedulian terhadap kemaslahatan sesama makhluk.`

  const p4 = `Dari kandungan QS. ${surah.namaLatin} ${rangeTitle} ini, kita dapat memetik beberapa pelajaran dan faidah praktis penting:
Pertama, senantiasa menjadikan wahyu Al-Qur'an sebagai rujukan utama dalam setiap keputusan hidup, meyakini bahwa setiap ketetapan Allah membawa maslahat dan hikmah yang sempurna.
Kedua, memperkuat komitmen ibadah dan ketundukan hati kepada Allah SWT dengan penuh keikhlasan, menjauhi segala bentuk kemusyrikan dan riya'.
Ketiga, memperbanyak doa dan tadabbur agar senantiasa diteguhkan dalam petunjuk hidayah-Nya, sehingga kita mampu menapaki jalan kebenaran yang diridhai Allah dan meraih kebahagiaan sejati di dunia maupun di akhirat kelak.`

  return `${p1}\n\n${p2}\n\n${p3}\n\n${p4}`
}
