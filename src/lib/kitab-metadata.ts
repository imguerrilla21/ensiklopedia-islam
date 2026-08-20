export type KitabMetaInfo = {
  arabicTitle: string
  fullAuthor: string
  hadisCountLabel: string
  babCountLabel: string
  defaultDerajat: string
  tag: string
}

export const KITAB_META_REGISTRY: Record<string, Partial<KitabMetaInfo>> = {
  "riyadhush-shalihin": {
    arabicTitle: "رياض الصالحين",
    fullAuthor: "Imam Abu Zakariya Yahya bin Syaraf An-Nawawi",
    hadisCountLabel: "1.221 Hadis",
    babCountLabel: "20 Bab Klasik",
    defaultDerajat: "Shahih",
    tag: "Hadis & Akhlak",
  },
  "bulughul-maram": {
    arabicTitle: "بلوغ المرام",
    fullAuthor: "Al-Hafizh Ibnu Hajar Al-Asqalani",
    hadisCountLabel: "1.596 Hadis",
    babCountLabel: "20 Kitab Fiqih",
    defaultDerajat: "Shahih",
    tag: "Hadis Hukum",
  },
  "al-hikam": {
    arabicTitle: "الحكم العطائية",
    fullAuthor: "Syaikh Ibnu Athaillah As-Sakandari",
    hadisCountLabel: "264 Hikmah",
    babCountLabel: "10 Kategori Hikmah",
    defaultDerajat: "Mu'tamad",
    tag: "Tasawuf & Ma'rifat",
  },
  "bidayatul-hidayah": {
    arabicTitle: "بداية الهداية",
    fullAuthor: "Hujjatul Islam Imam Al-Ghazali",
    hadisCountLabel: "Adab & Amalan",
    babCountLabel: "10 Bab Utama",
    defaultDerajat: "Mu'tamad",
    tag: "Tasawuf & Adab",
  },
  "safinatun-najah": {
    arabicTitle: "سفينة النجاة",
    fullAuthor: "Syaikh Salim bin Samir Al-Hadhrami",
    hadisCountLabel: "Matan Fiqih",
    babCountLabel: "10 Fasal Ibadah",
    defaultDerajat: "Syafi'iyah",
    tag: "Fiqih Ibadah",
  },
  "al-aqidah-al-wasithiyyah": {
    arabicTitle: "العقيدة الواسطية",
    fullAuthor: "Syaikhul Islam Ibnu Taimiyyah",
    hadisCountLabel: "Dalil Pokok",
    babCountLabel: "10 Bab Aqidah",
    defaultDerajat: "Ahlus Sunnah",
    tag: "Aqidah & Asma",
  },
  "umdatul-ahkam": {
    arabicTitle: "عمدة الأحكام",
    fullAuthor: "Al-Hafizh Abdul Ghani Al-Maqdisi",
    hadisCountLabel: "430 Hadis",
    babCountLabel: "10 Kitab Fiqih",
    defaultDerajat: "Shahih",
    tag: "Hadis Fiqih",
  },
  "kifayatul-atiq": {
    arabicTitle: "كفاية العوام",
    fullAuthor: "Syeikh Ahmad Dimyathi",
    hadisCountLabel: "Sifat Dua Puluh",
    babCountLabel: "Aqidah Sanusiyah",
    defaultDerajat: "Asy'ariyah",
    tag: "Ilmu Kalam",
  },
  bukhari: {
    arabicTitle: "صحيح البخاري",
    fullAuthor: "Imam Muhammad bin Ismail Al-Bukhari",
    hadisCountLabel: "7.563 Hadis",
    babCountLabel: "97 Kitab",
    defaultDerajat: "Shahih",
    tag: "Kutubus Sittah",
  },
  muslim: {
    arabicTitle: "صحيح مسلم",
    fullAuthor: "Imam Muslim bin Al-Hajjaj",
    hadisCountLabel: "3.033 Hadis",
    babCountLabel: "54 Kitab",
    defaultDerajat: "Shahih",
    tag: "Kutubus Sittah",
  },
  "abu-dawud": {
    arabicTitle: "سنن أبي داود",
    fullAuthor: "Imam Abu Dawud Sulaiman bin Al-Asy'ats",
    hadisCountLabel: "5.274 Hadis",
    babCountLabel: "43 Kitab",
    defaultDerajat: "Shahih & Hasan",
    tag: "Kutubus Sittah",
  },
  tirmidzi: {
    arabicTitle: "جامع الترمذي",
    fullAuthor: "Imam Abu Isa Muhammad At-Tirmidzi",
    hadisCountLabel: "3.956 Hadis",
    babCountLabel: "50 Kitab",
    defaultDerajat: "Hasan Shahih",
    tag: "Kutubus Sittah",
  },
  nasai: {
    arabicTitle: "سنن النسائي (المجتبى)",
    fullAuthor: "Imam Abu Abdirrahman Ahmad An-Nasa'i",
    hadisCountLabel: "5.761 Hadis",
    babCountLabel: "51 Kitab",
    defaultDerajat: "Shahih & Hasan",
    tag: "Kutubus Sittah",
  },
  "ibnu-majah": {
    arabicTitle: "سنن ابن ماجه",
    fullAuthor: "Imam Abu Abdillah Muhammad Ibnu Majah",
    hadisCountLabel: "4.341 Hadis",
    babCountLabel: "37 Kitab",
    defaultDerajat: "Shahih, Hasan & Zawa'id",
    tag: "Kutubus Sittah",
  },
  arbain: {
    arabicTitle: "الأربعون النووية",
    fullAuthor: "Imam Yahya bin Syaraf an-Nawawi",
    hadisCountLabel: "42 Hadis",
    babCountLabel: "Pokok Islam",
    defaultDerajat: "Shahih",
    tag: "Hadis Pilihan",
  },
  muwatta: {
    arabicTitle: "موطأ الإمام مالك",
    fullAuthor: "Imam Malik bin Anas",
    hadisCountLabel: "1.720 Riwayat",
    babCountLabel: "61 Kitab",
    defaultDerajat: "Shahih",
    tag: "Sunnah & Atsar",
  },
  jurumiyah: {
    arabicTitle: "الآجرومية",
    fullAuthor: "Syaikh Ibnu Ajurrum As-Shanhaji",
    hadisCountLabel: "Matan Nahwu",
    babCountLabel: "Qawaid",
    defaultDerajat: "Mu'tamad",
    tag: "Gramatika Arab",
  },
  alfiyah: {
    arabicTitle: "ألفية ابن مالك",
    fullAuthor: "Ibnu Malik Al-Andalusi",
    hadisCountLabel: "1.002 Bait",
    babCountLabel: "Nadzom Nahwu",
    defaultDerajat: "Mu'tamad",
    tag: "Sastra & Nahwu",
  },
  imriti: {
    arabicTitle: "الدرة البهية نظم الآجرومية",
    fullAuthor: "Syaikh Syarafuddin Yahya Al-Imriti",
    hadisCountLabel: "254 Bait",
    babCountLabel: "Nadzom Nahwu",
    defaultDerajat: "Mu'tamad",
    tag: "Gramatika Arab",
  },
  jalalain: {
    arabicTitle: "تفسير الجلالين",
    fullAuthor: "Imam Jalaluddin Al-Mahalli & Imam As-Suyuthi",
    hadisCountLabel: "30 Juz Al-Qur'an",
    babCountLabel: "114 Surah",
    defaultDerajat: "Mu'tamad",
    tag: "Tafsir Ringkas",
  },
  taklim: {
    arabicTitle: "تعليم المتعلم طريق التعلم",
    fullAuthor: "Syaikh Burhanuddin Az-Zarnuji",
    hadisCountLabel: "13 Fasal",
    babCountLabel: "Adab Tholibul Ilmi",
    defaultDerajat: "Mu'tamad",
    tag: "Adab Penuntut Ilmu",
  },
  aqidatul: {
    arabicTitle: "عقيدة العوام",
    fullAuthor: "Sayyid Ahmad Al-Marzuqi",
    hadisCountLabel: "57 Bait Nadzom",
    babCountLabel: "Manzhumah Tauhid",
    defaultDerajat: "Mu'tamad",
    tag: "Aqidah Asy'ariyah",
  },
  nashoihul: {
    arabicTitle: "نصائح العباد",
    fullAuthor: "Syaikh Nawawi Al-Bantani",
    hadisCountLabel: "214 Maqolah",
    babCountLabel: "10 Bab Nasihat",
    defaultDerajat: "Mu'tamad",
    tag: "Nasihat & Akhlak",
  },
  uyun: {
    arabicTitle: "قرة العيون",
    fullAuthor: "Syaikh Muhammad At-Tihami bin Al-Madani",
    hadisCountLabel: "Adab Pernikahan",
    babCountLabel: "Nadzom & Syarah",
    defaultDerajat: "Mu'tamad",
    tag: "Fiqih Rumah Tangga",
  },
  izar: {
    arabicTitle: "فتح الإزار",
    fullAuthor: "Syaikh Abdullah Fauzi Al-Pasuruani",
    hadisCountLabel: "Risalah Nikah",
    babCountLabel: "Adab Az-Zawaj",
    defaultDerajat: "Mu'tamad",
    tag: "Fiqih Nikah",
  },
  qarib: {
    arabicTitle: "فتح القريب المجيب",
    fullAuthor: "Syaikh Ibnu Qasim Al-Ghazi",
    hadisCountLabel: "Matan Taqrib",
    babCountLabel: "Fiqih Lengkap",
    defaultDerajat: "Syafi'iyah",
    tag: "Fiqih Mazhab",
  },
  minhaj: {
    arabicTitle: "منهاج الطالبين",
    fullAuthor: "Imam Yahya bin Syaraf An-Nawawi",
    hadisCountLabel: "Fiqih Mu'tamad",
    babCountLabel: "Umdah Syafi'iyah",
    defaultDerajat: "Syafi'iyah",
    tag: "Kaidah Fiqih",
  },
}

export const BAB_ARABIC_NAMES: Record<string, string> = {
  niat: "باب النية والإخلاص",
  sunnah: "باب وجوب اتباع السنة",
  akhlak: "باب حسن الخلق",
  thaharah: "كتاب الطهارة",
  wudhu: "باب الوضوء",
  shalat: "كتاب الصلاة",
  zakat: "كتاب الزكاة",
  puasa: "كتاب الصيام",
  haji: "كتاب الحج",
  nikah: "كتاب النكاح",
  jihad: "كتاب الجهاد",
}

export function getArabicBabName(judul: string, nomor: number): string {
  const lower = judul.toLowerCase()
  for (const [key, val] of Object.entries(BAB_ARABIC_NAMES)) {
    if (lower.includes(key)) {
      return val
    }
  }
  return `باب ${nomor}`
}

export function getKitabMetadata(
  id: string,
  defaultJudul: string = "",
  defaultUlama: string = "",
  totalBab: number = 0,
): KitabMetaInfo {
  const reg = KITAB_META_REGISTRY[id] || {}

  return {
    arabicTitle: reg.arabicTitle || defaultJudul,
    fullAuthor: reg.fullAuthor || defaultUlama,
    hadisCountLabel: reg.hadisCountLabel || `${totalBab} Hadis / Pasal`,
    babCountLabel: reg.babCountLabel || `${totalBab} Bab Klasik`,
    defaultDerajat: reg.defaultDerajat || "Shahih",
    tag: reg.tag || "Pustaka Klasik",
  }
}

export type ParsedHadisCard = {
  id: string
  nomorHadis: string | number
  subJudul: string
  teksArab: string
  teksIndo: string
  takhrij: string
  syarah: string
  derajat: string
}

export type ParsedBabItem = {
  nomor: number
  judul: string
  cleanJudul: string
  subBabArab: string
  teksArab: string
  teksIndo: string
  fullTeks: string
  hasArabic: boolean
  hasIndo: boolean
  hadisList: ParsedHadisCard[]
}

const ARABIC_CHAR_REGEX =
  /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/

export function isMostlyArabic(text: string): boolean {
  if (!text) return false
  let arabicCount = 0
  let latinCount = 0
  for (const ch of text) {
    if (ARABIC_CHAR_REGEX.test(ch)) arabicCount++
    else if (/[a-zA-Z]/.test(ch)) latinCount++
  }
  return arabicCount > latinCount || (arabicCount > 15 && arabicCount * 2 > latinCount)
}

export function cleanTextContent(raw: string): string {
  if (!raw) return ""
  return raw
    .replace(/^Riyadhus Sholihin\s+/gi, "")
    .replace(/^Riyadhus Shalihin\s+/gi, "")
    .replace(/^(Hadits Bukhari Muslim|bulughul maram|BULUGHUL MARAM)\s+/gim, "")
    .trim()
}

export function parseBabContent(
  nomor: number,
  judul: string,
  rawTeks: string,
  kitabId: string,
): ParsedBabItem {
  const cleanRaw = cleanTextContent(rawTeks)
  const subBabArab = getArabicBabName(judul, nomor)
  const meta = getKitabMetadata(kitabId)

  // Clean title
  let cleanJudul = judul
    .replace(/^Bab \d+[:.]?\s*/i, "")
    .replace(/^Fasal \d+[:.]?\s*/i, "")
    .replace(/^Al-Hikam \d+[:.]?\s*-\s*/i, "")
    .trim()
  if (!cleanJudul) cleanJudul = judul

  // Split multiple hadith blocks inside this Bab / Kitab
  // Delimiters can be "\n===\n" or "\n---\n" or "### Hadis" or "[HADIS]"
  let chunks: string[] = []
  if (cleanRaw.includes("\n===\n")) {
    chunks = cleanRaw.split("\n===\n")
  } else if (cleanRaw.includes("\n---\n")) {
    chunks = cleanRaw.split("\n---\n")
  } else if (cleanRaw.includes("### Hadis")) {
    chunks = cleanRaw.split(/(?=### Hadis)/gi)
  } else {
    chunks = [cleanRaw]
  }

  const parsedHadisCards: ParsedHadisCard[] = chunks
    .map((chunk, idx) => {
      const trimmed = chunk.trim()
      if (!trimmed) return null

      // Check if block has explicit Terjemahan / Syarah / Takhrij
      let subJudul = `${cleanJudul}`
      let teksArab = ""
      let teksIndo = ""
      let takhrij = ""
      let syarah = ""
      let nomorHadis: string | number = idx + 1

      // Match Sub-heading or Hadis number in block
      const subJudulMatch = trimmed.match(/^(?:###\s*)?(?:Hadis|Hadits|No\.|Nomor)\s*#?(\d+)?[:.\-–]?\s*([^\n]+)?/i)
      if (subJudulMatch) {
        if (subJudulMatch[1]) nomorHadis = subJudulMatch[1]
        if (subJudulMatch[2] && subJudulMatch[2].trim()) {
          subJudul = subJudulMatch[2].trim()
        }
      }

      // Check sections by keyword
      const terjemahIndex = trimmed.search(/\n\s*Terjemahan:?/i)
      const syarahIndex = trimmed.search(/\n\s*Syarah(?:\s*&\s*Pembahasan)?:?/i)
      const takhrijIndex = trimmed.search(/\n\s*Takhrij:?/i)

      if (terjemahIndex !== -1) {
        teksArab = trimmed.slice(0, terjemahIndex).replace(/^(?:###\s*)?(?:Hadis|Hadits|No\.)\s*#?\d*[:.\-–]?\s*[^\n]*\n+/i, "").trim()
        
        let afterTerjemah = trimmed.slice(terjemahIndex).replace(/^\n\s*Terjemahan:?\s*/i, "").trim()
        if (syarahIndex !== -1 && syarahIndex > terjemahIndex) {
          const splitSyarah = afterTerjemah.search(/\n\s*Syarah(?:\s*&\s*Pembahasan)?:?/i)
          if (splitSyarah !== -1) {
            teksIndo = afterTerjemah.slice(0, splitSyarah).trim()
            syarah = afterTerjemah.slice(splitSyarah).replace(/^\n\s*Syarah(?:\s*&\s*Pembahasan)?:?\s*/i, "").trim()
          } else {
            teksIndo = afterTerjemah
          }
        } else {
          teksIndo = afterTerjemah
        }
      } else {
        // Separate paragraphs by Arabic vs Indonesian
        const paragraphs = trimmed
          .split(/\n\s*\n/)
          .map((p) => p.trim())
          .filter(Boolean)

        const arabP: string[] = []
        const indoP: string[] = []

        for (const p of paragraphs) {
          if (isMostlyArabic(p)) {
            arabP.push(p)
          } else {
            indoP.push(p)
          }
        }

        teksArab = arabP.join("\n\n")
        teksIndo = indoP.join("\n\n")

        if (!teksArab && !teksIndo) {
          if (isMostlyArabic(trimmed)) teksArab = trimmed
          else teksIndo = trimmed
        }
      }

      // Extract takhrij if inside parenthesis e.g. (HR. Bukhari No. 1)
      const hrMatch = teksIndo.match(/\((HR\.[^)]+)\)/i)
      if (hrMatch) {
        takhrij = hrMatch[1]
      } else {
        takhrij = `${meta.fullAuthor || "Perawi Shahih"}`
      }

      return {
        id: `hadis-${kitabId}-${nomor}-${idx + 1}`,
        nomorHadis,
        subJudul,
        teksArab,
        teksIndo,
        takhrij,
        syarah,
        derajat: meta.defaultDerajat || "Shahih",
      }
    })
    .filter(Boolean) as ParsedHadisCard[]

  const firstCard = parsedHadisCards[0] || {
    teksArab: "",
    teksIndo: cleanRaw,
  }

  return {
    nomor,
    judul,
    cleanJudul,
    subBabArab,
    teksArab: firstCard.teksArab,
    teksIndo: firstCard.teksIndo,
    fullTeks: cleanRaw,
    hasArabic: Boolean(firstCard.teksArab && firstCard.teksArab.trim().length > 0),
    hasIndo: Boolean(firstCard.teksIndo && firstCard.teksIndo.trim().length > 0),
    hadisList: parsedHadisCards.length > 0 ? parsedHadisCards : [
      {
        id: `hadis-${kitabId}-${nomor}-1`,
        nomorHadis: 1,
        subJudul: cleanJudul,
        teksArab: firstCard.teksArab,
        teksIndo: firstCard.teksIndo,
        takhrij: meta.fullAuthor,
        syarah: "",
        derajat: meta.defaultDerajat || "Shahih",
      },
    ],
  }
}
