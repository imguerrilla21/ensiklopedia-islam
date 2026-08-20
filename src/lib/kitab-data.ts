import { KUTUBUS_SITTAH_KITAB_DATA } from "@/lib/kutubus-sittah-data"

export type KitabBab = {
  nomor: number
  judul: string
  teks: string
}

export type KitabItem = {
  id: string
  ulama: string
  kategori: string
  judul: string
  deskripsi: string
  bab: KitabBab[]
}

// -------------------------------------------------------------
// DAFTAR KITAB TURATS & KARYA ULAMA KLASIK (NON-KUTUBUS SITTAH)
// (Kutubus Sittah dikhususkan pada halaman Hadis)
// -------------------------------------------------------------
export const kitabList: KitabItem[] = [
  {
    id: "riyadhush-shalihin",
    ulama: "Imam An-Nawawi (631–676 H)",
    kategori: "Hadis",
    judul: "Riyadhush Shalihin",
    deskripsi:
      "Kumpulan hadis pilihan tentang keutamaan amal saleh, pembinaan akhlaq karimah, tarbiyah ruhiyah, dan adab bagi setiap penuntut ilmu.",
    bab: [
      {
        nomor: 1,
        judul: "Bab Niat & Menghadirkan Ikhlas dalam Segala Perbuatan",
        teks: `### Hadis #1: Keikhlasan Niat Pangkal Seluruh Amalan
عَنْ أَمِيرِ الْمُؤْمِنِينَ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ»

Terjemahan:
Dari Amirul Mukminin Umar bin Al-Khaththab radhiyallahu 'anhu berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sesungguhnya setiap amalan itu tergantung pada niatnya, dan setiap orang hanya akan mendapatkan apa yang ia niatkan. Maka barangsiapa yang hijrahnya karena Allah dan Rasul-Nya, maka hijrahnya kepada Allah dan Rasul-Nya. Dan barangsiapa yang hijrahnya karena dunia yang ingin diraihnya atau karena wanita yang ingin dinikahinya, maka hijrahnya kepada apa yang ia tuju." (Muttafaq 'Alaih)

Syarah:
Imam An-Nawawi menempatkan hadis ini di awal kitab sebagai landasan pokok bahwa diterimanya amal shalih di sisi Allah bergantung mutlak pada keikhlasan niat di dalam hati.

===

### Hadis #2: Niat Tulus Mengantarkan Pahala Meski Terhalang Udzur
عَنْ أَنَسٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ رَجَعَ مِنْ غَزْوَةِ تَبُوكَ فَدَنَا مِنَ الْمَدِينَةِ فَقَالَ:

«إِنَّ بِالْمَدِينَةِ أَقْوَامًا مَا سِرْتُمْ مَسِيرًا، وَلا قَطَعْتُمْ وَادِيًا، إِلا كَانُوا مَعَكُمْ، حَبَسَهُمُ الْعُذْرُ»

Terjemahan:
Dari Anas radhiyallahu 'anhu bahwa Rasulullah shallallahu 'alaihi wa sallam ketika kembali dari Perang Tabuk dan mendekati Madinah bersabda: "Sesungguhnya di Madinah ada orang-orang yang tidaklah kalian menempuh suatu perjalanan, dan tidaklah kalian menyeberangi suatu lembah, melainkan mereka senantiasa bersama kalian (dalam pahala), karena mereka tertahan oleh udzur sakit." (Shahih Bukhari No. 4423)

Syarah:
Seorang mukmin yang berniat sungguh-sungguh melakukan kebajikan namun terhalang oleh sakit atau udzur syar'i tetap dicatat memperoleh pahala sempurna di sisi Allah.`,
      },
      {
        nomor: 2,
        judul: "Bab Taubat & Memohon Ampunan kepada Allah",
        teks: `### Hadis #1: Kegembiraan Allah Atas Taubat Hamba-Nya
عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«لَلَّهُ أَشَدُّ فَرِحًا بِتَوْبَةِ عَبْدِهِ حِينَ يَتُوبُ إِلَيْهِ مِنْ أَحَدِكُمْ كَانَ عَلَى رَاحِلَتِهِ بِأَرْضِ فَلاةٍ، فَانْفَلَتَتْ مِنْهُ وَعَلَيْهَا طَعَامُهُ وَشَرَابُهُ فَأَيِسَ مِنْهَا... فَبَيْنَمَا هُوَ كَذَلِكَ إِذَا هُوَ بِهَا قَائِمَةً عِنْدَهُ»

Terjemahan:
Dari Anas bin Malik radhiyallahu 'anhu berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sungguh Allah lebih gembira dengan taubat hamba-Nya ketika ia bertaubat kepada-Nya daripada kegembiraan salah seorang di antara kalian yang berada di padang pasir bersama hewan tunggangannya, lalu tunggangannya lepas membawa makanan dan minumannya hingga ia putus asa... lalu tiba-tiba hewan itu kembali berdiri tegak di sisinya." (Muttafaq 'Alaih)

Syarah:
Luasnya pintu rahmat Allah bagi hamba-Nya yang bersungguh-sungguh menyesali maksiat dan kembali menuju ketaatan.`,
      },
      {
        nomor: 3,
        judul: "Bab Sabar dalam Menghadapi Cobaan Hidup",
        teks: `### Hadis #1: Keajaiban Urusan Orang Beriman dalam Syukur & Sabar
عَنْ صُهَيْبٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، وَلَيْسَ ذَاكَ لأَحَدٍ إِلا لِلْمُؤْمِنِ، إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ»

Terjemahan:
Dari Shuhaib radhiyallahu 'anhu berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sungguh menakjubkan urusan orang mukmin, sesungguhnya seluruh perkaranya adalah kebaikan, dan hal itu tidak dimiliki oleh siapa pun selain orang beriman: Jika ia mendapatkan kelapangan (kesenangan) ia bersyukur, maka itu adalah kebaikan baginya; dan jika ia ditimpa kesulitan (musibah) ia bersabar, maka itu pun adalah kebaikan baginya." (Shahih Muslim No. 2999)

Syarah:
Dua sayap keimanan seorang mukmin sejati: senantiasa bersyukur atas limpahan karunia nikmat dan teguh bersabar menghadapi ujian kehidupan.`,
      },
    ],
  },
  {
    id: "bulughul-maram",
    ulama: "Al-Hafizh Ibnu Hajar Al-Asqalani (773–852 H)",
    kategori: "Fiqh",
    judul: "Bulughul Maram",
    deskripsi:
      "Himpunan hadis hukum (Ahaditsul Ahkam) terpopuler yang menjadi rujukan dalil penetapan fiqih madzhab Syafi'i dan perbandingan madzhab.",
    bab: [
      {
        nomor: 1,
        judul: "Bab Thaharah & Hukum Air Bersuci (كتاب الطهارة)",
        teks: `### Hadis #1: Kesucian Air Laut & Kehalalan Bangkainya
عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي الْبَحْرِ:

«هُوَ الطَّهُورُ مَاؤُهُ، الْحِلُّ مَيْتَتُهُ»

Terjemahan:
Dari Abu Hurairah radhiyallahu 'anhu berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda tentang air laut: "Air laut itu suci lagi menyucikan, dan halal bangkai hewannya." (Riwayat Imam Empat & Ibnu Abi Syaibah)

Syarah:
Dalil pokok fiqih tentang keabsahan bersuci, wudhu, dan mandi janabah menggunakan air laut serta kehalalan memakan seluruh hewan buruan laut tanpa perlu disembelih.

===

### Hadis #2: Air Suci yang Tidak Dapat Dinajiskan Kecuali Berubah Sifat
عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«إِنَّ الْمَاءَ طَهُورٌ لا يُنَجِّسُهُ شَيْءٌ»

Terjemahan:
Dari Abu Sa'id Al-Khudri radhiyallahu 'anhu berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sesungguhnya air itu pada asalnya suci lagi menyucikan, tidak ada sesuatu pun yang menajiskannya (kecuali jika berubah rasa, warna, atau baunya)." (Riwayat Ahmad, Abu Dawud, At-Tirmidzi, dan An-Nasa'i)

Syarah:
Kaidah fiqih thaharah: air dalam jumlah banyak tetap berstatus suci dan menyucikan selama tidak mengalami perubahan rasa, warna, atau bau oleh najis.`,
      },
      {
        nomor: 2,
        judul: "Bab Wudhu & Pembatal-Pembatalnya (كتاب الوضوء)",
        teks: `### Hadis #1: Perintah Menyempurnakan Wudhu & Menyela-nyela Jari
عَنْ لَقِيطِ بْنِ صَبِرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«أَسْبِغِ الْوُضُوءَ، وَخَلِّلْ بَيْنَ الأَصَابِعِ، وَبَالِغْ فِي الاسْتِنْشَاقِ إِلا أَنْ تَكُونَ صَائِمًا»

Terjemahan:
Dari Laqith bin Shabirah radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Sempurnakanlah wudhu, sela-selailah antara jari-jemari, dan bersungguh-sungguhlah dalam menghirup air ke hidung kecuali jika engkau sedang berpuasa." (Riwayat Imam Empat)

Syarah:
Kewajiban meratakan air ke seluruh anggota wudhu wajib dan sunnah melebihkan basuhan di sela-sela jari tangan dan kaki.`,
      },
    ],
  },
  {
    id: "umdatul-ahkam",
    ulama: "Al-Hafizh Abdul Ghani Al-Maqdisi (541–600 H)",
    kategori: "Hadis",
    judul: "Umdatul Ahkam",
    deskripsi:
      "Kitab matan hadis-hadis hukum yang disepakati keshahihannya oleh Imam Bukhari dan Muslim (Muttafaq 'Alaih) sebagai fondasi dalil fiqih Islam.",
    bab: [
      {
        nomor: 1,
        judul: "Kitab Thaharah: Niat & Tata Cara Wudhu",
        teks: `### Hadis #1: Niat dalam Bersuci dan Segala Ibadah
عَنْ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«إِنَّمَا الأَعْمَالُ بِالنِّيَّةِ، وَإِنَّمَا لاِمْرِئٍ مَا نَوَى»

Terjemahan:
Dari Umar bin Al-Khaththab radhiyallahu 'anhu: Rasulullah SAW bersabda: "Sesungguhnya amalan-amalan itu bergantung pada niat, dan setiap orang hanya memperoleh apa yang ia niatkan." (Muttafaq 'Alaih)

Syarah:
Niat adalah syarat sah thaharah dan pembeda antara kebiasaan membersihkan diri biasa dengan ibadah bersuci lillahi ta'ala.`,
      },
      {
        nomor: 2,
        judul: "Kitab Shalat: Waktu-Waktu Shalat Fardhu",
        teks: `### Hadis #1: Menjaga Shalat Lima Waktu di Awal Waktu
عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَأَلْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَيُّ الْعَمَلِ أَحَبُّ إِلَى اللَّهِ؟ قَالَ:

«الصَّلاةُ عَلَى وَقْتِهَا»

Terjemahan:
Dari Abdullah bin Mas'ud berkata: Aku bertanya kepada Nabi SAW: "Amal apakah yang paling dicintai Allah?" Beliau menjawab: "Shalat tepat pada waktunya." (Muttafaq 'Alaih)

Syarah:
Keutamaan mendirikan shalat di awal waktu sebagai tanda penghambaan dan ketaatan tertinggi seorang mukmin.`,
      },
    ],
  },
  {
    id: "al-hikam",
    ulama: "Syeikh Ibnu Athaillah As-Sakandari (648–709 H)",
    kategori: "Tasawuf",
    judul: "Al-Hikam",
    deskripsi:
      "Untaian hikmah tasawuf murni dan ma'rifatullah yang membimbing pejalan ruhani (salik) membersihkan hati dari ketergantungan pada sebab duniawi.",
    bab: [
      {
        nomor: 1,
        judul: "Tentang Bersandar Pada Amal & Kemurnian Tauhid",
        teks: `### Hikmah #1: Bahaya Bersandar Pada Amal Perbuatan
مِنْ عَلاَمَاتِ الاِعْتِمَادِ عَلَى العَمَلِ: نُقْصَانُ الرَّجَاءِ عِنْدَ وُجُودِ الزَّلَلِ

Terjemahan:
"Di antara tanda seseorang bersandar pada kekuatan amalnya adalah berkurangnya pengharapan (raja') kepada rahmat Allah ketika ia tergelincir melakukan kesalahan."

Syarah:
Mukmin sejati menyandarkan keselamatannya semata-mata pada karunia dan rahmat Allah SWT, bukan karena membanggakan banyaknya ibadah lahiriahnya.`,
      },
      {
        nomor: 2,
        judul: "Tentang Ketetapan Takdir & Menyerahkan Diri Kepada Allah (Tadbir)",
        teks: `### Hikmah #1: Ketenangan Hati dalam Menjalani Takdir
أَرِحْ نَفْسَكَ مِنَ التَّدْبِيرِ، فَمَا قَامَ بِهِ غَيْرُكَ عَنْكَ لاَ تَقُمْ بِهِ لِنَفْسِكَ

Terjemahan:
"Istirahatkanlah dirimu dari keletihan mengatur (mengkhawatirkan hal yang sudah dijamin). Apa yang telah dijamin dan diatur oleh selainmu (Allah) untukmu, janganlah engkau sibukkan dirimu mengkhawatirkannya."

Syarah:
Perintah bertawakal penuh kepada Allah dalam urusan rezeki dan masa depan seraya terus berikhtiar dengan adab syariat.`,
      },
    ],
  },
  {
    id: "bidayatul-hidayah",
    ulama: "Hujjatul Islam Imam Al-Ghazali (450–505 H)",
    kategori: "Tasawuf",
    judul: "Bidayatul Hidayah",
    deskripsi:
      "Panduan praktis meniti jalan hidayah Allah melalui adab ibadah harian, penjagaan anggota badan dari dosa, dan pergaulan santun bersama sesama manusia.",
    bab: [
      {
        nomor: 1,
        judul: "Adab Bangun Tidur & Memulai Hari dengan Dzikir",
        teks: `### Hikmah & Adab: Menyambut Hari Baru dengan Syukur
«إِذَا اسْتَيْقَظْتَ مِنَ النَّوْمِ فَاجْتَهِدْ أَنْ تَبْتَدِئَ بِذِكْرِ اللَّهِ وَالثَّنَاءِ عَلَيْهِ، وَقُلْ: الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ»

Terjemahan:
"Apabila engkau bangun dari tidurmu, bersungguh-sungguhlah untuk memulai harimu dengan mengingat Allah dan memuji-Nya, seraya berdoa: 'Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami (tidur), dan hanya kepada-Nya lah tempat kembali.'"

Syarah:
Menjaga kesadaran ruhani bahwa hidup adalah kesempatan berharga untuk menambah bekal kebajikan menuju kampung akhirat.`,
      },
    ],
  },
  {
    id: "safinatun-najah",
    ulama: "Syeikh Salim bin Sumair Al-Hadhrami (1216–1271 H)",
    kategori: "Fiqh",
    judul: "Safinatun Najah",
    deskripsi:
      "Matan fiqih ibadah dasar madzhab Syafi'i yang sangat populer di Nusantara, mencakup rukun iman, rukun Islam, thaharah, dan shalat.",
    bab: [
      {
        nomor: 1,
        judul: "Fasal Dasar-Dasar Akidah & Rukun Islam",
        teks: `### Fasal #1: Rukun Islam & Pondasi Keimanan
أَرْكَانُ الإِسْلامِ خَمْسَةٌ: شَهَادَةُ أَنْ لا إِلَهَ إِلا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامُ الصَّلاةِ، وَإِيتَاءُ الزَّكَاةِ، وَصَوْمُ رَمَضَانَ، وَحَجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلاً

Terjemahan:
"Rukun Islam itu ada lima: bersaksi bahwa tiada tuhan selain Allah dan Muhammad adalah utusan Allah, mendirikan shalat, menunaikan zakat, berpuasa di bulan Ramadhan, dan menunaikan haji ke Baitullah bagi yang mampu menempuh perjalanannya."

Syarah:
Fondasi awal fiqih mukallaf yang wajib dipahami dan diamalkan oleh setiap muslim dalam kehidupan sehari-hari.`,
      },
      {
        nomor: 2,
        judul: "Fasal Thaharah & Syarat Sah Shalat",
        teks: `### Fasal #1: Syarat-Syarat Wudhu & Bersuci
شُرُوطُ الْوُضُوءِ عَشَرَةٌ: الإِسْلامُ، وَالتَّمْيِيزُ، وَالنَّقَاءُ عَنِ الْحَيْضِ وَالنِّفَاسِ، وَعَمَّا يَمْنَعُ وُصُولَ الْمَاءِ إِلَى الْبَشَرَةِ...

Terjemahan:
"Syarat-syarat wudhu ada sepuluh: Islam, tamyiz, suci dari haidh dan nifas, bersih dari apa yang menghalangi sampainya air ke kulit..."

Syarah:
Ketentuan mendasar keabsahan thaharah sebelum mendirikan shalat fardhu dan sunnah.`,
      },
    ],
  },
  {
    id: "al-aqidah-al-wasithiyyah",
    ulama: "Syaikhul Islam Ibnu Taimiyah (661–728 H)",
    kategori: "Aqidah",
    judul: "Al-Aqidah Al-Wasithiyyah",
    deskripsi:
      "Risalah akidah Ahlus Sunnah wal Jama'ah yang merangkum keyakinan murni terhadap nama dan sifat Allah (Asma wa Sifat) sesuai pemahaman Salafus Shalih.",
    bab: [
      {
        nomor: 1,
        judul: "Pondasi Aqidah Ahlus Sunnah dalam Asma' wa Sifat",
        teks: `### Matan Aqidah: Menetapkan Sifat Allah Tanpa Tahrif & Tanpa Ta'thil
«مِنَ الإِيمَانِ بِاللَّهِ: الإِيمَانُ بِمَا وَصَفَ بِهِ نَفْسَهُ فِي كِتَابِهِ، وَبِمَا وَصَفَهُ بِهِ رَسُولُهُ مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، مِنْ غَيْرِ تَحْرِيفٍ وَلا تَعْطِيلٍ، وَمِنْ غَيْرِ تَكْيِيفٍ وَلا تَمْثِيلٍ»

Terjemahan:
"Termasuk bagian dari beriman kepada Allah adalah mengimani apa yang Allah sifatkan untuk diri-Nya dalam Kitab-Nya (Al-Qur'an), dan apa yang disifatkan oleh Rasul-Nya Muhammad shallallahu 'alaihi wa sallam, tanpa mengubah maknanya (tahrif), tanpa menolak sifat-Nya (ta'thil), tanpa menggambarkan caranya (takyif), dan tanpa menyerupakan-Nya dengan makhluk (tamtsil)."

Syarah:
Kaidah emas Ahlus Sunnah dalam menetapkan sifat-sifat keagungan Allah SWT sebagaimana firman-Nya: 'Laisa kamitslihi syai'un wa huwas-sami'ul bashir' (Tidak ada sesuatu pun yang serupa dengan Dia, dan Dia Maha Mendengar lagi Maha Melihat).`,
      },
    ],
  },
]

// All Kitab items including Kutubus Sittah for individual reader lookups by ID
export const allKitabRegistry: KitabItem[] = [
  ...kitabList,
  ...KUTUBUS_SITTAH_KITAB_DATA,
]

export function getKitab(id: string): KitabItem | undefined {
  return allKitabRegistry.find((k) => k.id === id)
}

export function getUlamaList(): string[] {
  return Array.from(new Set(kitabList.map((k) => k.ulama))).sort()
}

export function getKategoriList(): string[] {
  return Array.from(new Set(kitabList.map((k) => k.kategori))).sort()
}
