export type AyatTafsir = {
  nomor: number
  arab: string
  terjemah: string
  tafsir: string
  juz: number
}

export type SurahTafsir = {
  nomor?: number
  id: string
  nama: string
  namaLatin: string
  arti: string
  jumlahAyat: number
  ayat: AyatTafsir[]
}

export const surahTafsirList: SurahTafsir[] = [
  {
    id: "al-fatihah",
    nama: "الفاتحة",
    namaLatin: "Al-Fatihah",
    arti: "Pembukaan",
    jumlahAyat: 7,
    ayat: [
      {
        nomor: 1,
        arab: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
        terjemah:
          "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
        tafsir:
          "Ayat ini disebut basmalah, yang menunjukkan bahwa seluruh aktivitas seorang muslim hendaknya dimulai dengan menyebut nama Allah seraya memohon kasih dan sayang-Nya.",
        juz: 1,
      },
      {
        nomor: 2,
        arab: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
        terjemah: "Segala puji bagi Allah, Tuhan seluruh alam.",
        tafsir:
          "Pujian yang sempurna hanya layak bagi Allah sebagai Rabb yang menciptakan, menguasai, dan mengatur semua alam semesta.",
        juz: 1,
      },
      {
        nomor: 3,
        arab: "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
        terjemah: "Yang Maha Pengasih, Maha Penyayang.",
        tafsir:
          "Sifat ar-Rahman dan ar-Rahim menegaskan keluasan rahmat Allah yang mencakup seluruh makhluk dan yang khusus bagi orang beriman di akhirat.",
        juz: 1,
      },
      {
        nomor: 4,
        arab: "مَـٰلِكِ يَوْمِ ٱلدِّينِ",
        terjemah: "Pemilik hari pembalasan.",
        tafsir:
          "Allah adalah satu-satunya penguasa hari kiamat di mana setiap amal manusia akan dihisab dan dibalas.",
        juz: 1,
      },
      {
        nomor: 5,
        arab: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        terjemah:
          "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.",
        tafsir:
          "Ayat ini menegaskan tauhid ibadah: seluruh ibadah ditujukan kepada Allah semata dan segala pertolongan diminta hanya dari-Nya.",
        juz: 1,
      },
      {
        nomor: 6,
        arab: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
        terjemah: "Tunjukilah kami jalan yang lurus.",
        tafsir:
          "Doa inti umat Islam yang meminta petunjuk kepada jalan kebenaran, yaitu agama Islam yang lurus.",
        juz: 1,
      },
      {
        nomor: 7,
        arab:
          "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
        terjemah:
          "Yaitu jalan orang-orang yang telah Engkau beri nikmat, bukan jalan mereka yang dimurkai, dan bukan pula jalan mereka yang sesat.",
        tafsir:
          "Jalan lurus adalah jalan para nabi dan orang shalih, berbeda dengan jalan orang Yahudi yang dimurkai dan Nasrani yang tersesat.",
        juz: 1,
      },
    ],
  },
  {
    id: "al-ikhlas",
    nama: "الإخلاص",
    namaLatin: "Al-Ikhlas",
    arti: "Ikhlas",
    jumlahAyat: 4,
    ayat: [
      {
        nomor: 1,
        arab: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
        terjemah: "Katakanlah: Dia-lah Allah Yang Maha Esa.",
        tafsir:
          "Surat ini menegaskan tauhid uluhiyah dan dzat Allah; Dia esa dalam zat, sifat, dan perbuatan-Nya.",
        juz: 30,
      },
      {
        nomor: 2,
        arab: "ٱللَّهُ ٱلصَّمَدُ",
        terjemah: "Allah tempat meminta segala sesuatu.",
        tafsir:
          "As-Samad berarti yang disandarkan semua kebutuhan kepada-Nya karena kesempurnaan dan keagungan-Nya.",
        juz: 30,
      },
      {
        nomor: 3,
        arab: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        terjemah: "Dia tidak beranak dan tidak pula diperanakkan.",
        tafsir:
          "Menafikan adanya keturunan dan asal-usul bagi Allah, memurnikan kemahaesaannya dari sekutu.",
        juz: 30,
      },
      {
        nomor: 4,
        arab: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
        terjemah: "Dan tidak ada seorang pun yang setara dengan Dia.",
        tafsir:
          "Tidak ada satupun makhluk yang menyamai Allah dalam zat, sifat, maupun perbuatan-Nya.",
        juz: 30,
      },
    ],
  },
]

export function getSurah(id: string): SurahTafsir | undefined {
  return surahTafsirList.find((s) => s.id === id)
}

export function getSurahIndex(id: string): number {
  return surahTafsirList.findIndex((s) => s.id === id)
}

export function getJuzList(id: string): number[] {
  const surah = getSurah(id)
  if (!surah) return []
  return Array.from(new Set(surah.ayat.map((a) => a.juz))).sort(
    (a, b) => a - b,
  )
}
