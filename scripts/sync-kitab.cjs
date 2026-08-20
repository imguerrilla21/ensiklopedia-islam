const Database = require("better-sqlite3")
const path = require("path")

const dbPath = path.resolve(__dirname, "../ensiklopedi.db")
const db = new Database(dbPath)

const allKitab = [
  {
    id: "riyadhush-shalihin",
    ulama: "Imam Yahya bin Syaraf An-Nawawi",
    kategori: "Hadits & Akhlak",
    judul: "Riyadhus Shalihin",
    deskripsi:
      "Kitab taman orang-orang saleh, berisi hadits-hadits pilihan tentang akhlak mulia, adab, dan amalan-amalan Islami yang dikelompokkan secara tematik.",
  },
  {
    id: "bulughul-maram",
    ulama: "Ibnu Hajar Al-Asqalani",
    kategori: "Hadits & Fiqih",
    judul: "Bulughul Maram",
    deskripsi:
      "Kitab hadits pilihan yang berhubungan dengan hukum fiqih Islam. Berisi hadits-hadits tentang ibadah, muamalah, jinayat, dan berbagai hukum syariat Islam.",
  },
  {
    id: "al-hikam",
    ulama: "Ibnu Athaillah As-Sakandari",
    kategori: "Tasawuf",
    judul: "Al-Hikam",
    deskripsi:
      "Kumpulan hikmah (kebijaksanaan) spiritual dari Ibnu Athaillah As-Sakandari, salah satu karya tasawuf Islam yang paling terkenal dan banyak dipelajari.",
  },
  {
    id: "bidayatul-hidayah",
    ulama: "Imam Al-Ghazali",
    kategori: "Tasawuf & Akhlak",
    judul: "Bidayatul Hidayah",
    deskripsi:
      "Kitab panduan permulaan dalam menempuh jalan hidayah karangan Imam Al-Ghazali. Berisi adab-adab dalam ibadah, pergaulan, dan cara menghindari maksiat.",
  },
  {
    id: "safinatun-najah",
    ulama: "Syaikh Salim bin Samir Al-Hadhrami",
    kategori: "Fiqih",
    judul: "Safinah An-Najah",
    deskripsi:
      "Kitab fiqih ringkas mazhab Syafi'i yang membahas pokok-pokok ibadah: Thaharah, Wudhu, Mandi Wajib, Tayamum, Shalat, Jenazah, Zakat, dan Puasa.",
  },
  {
    id: "al-aqidah-al-wasithiyyah",
    ulama: "Ibnu Taimiyah",
    kategori: "Aqidah",
    judul: "Al-Aqidah Al-Wasithiyyah",
    deskripsi:
      "Risalah akidah Ahlus Sunnah wal Jama'ah yang merangkum keyakinan yang lurus berdasarkan Al-Qur'an dan Sunnah, meliputi rukun iman, nama dan sifat Allah.",
  },
  {
    id: "umdatul-ahkam",
    ulama: "Al-Hafizh Abdul Ghani Al-Maqdisi",
    kategori: "Hadits & Fiqih",
    judul: "Umdatul Ahkam",
    deskripsi:
      "Kumpulan hadits-hadits hukum yang disepakati kesahihannya oleh Imam Bukhari dan Muslim, tersusun berdasarkan sistematika bab-bab fikih ibadah dan muamalah.",
  },
  {
    id: "kifayatul-atiq",
    ulama: "Syeikh Ahmad Dimyathi",
    kategori: "Aqidah",
    judul: "Kifayatul Atiq",
    deskripsi:
      "Kitab akidah dan tauhid Ahlus Sunnah (Asy'ariyah/Maturidiyah) yang lazim dikaji di pesantren sebagai pondasi keimanan dan pemahaman sifat-sifat Allah.",
  },
]

const extraBab = {
  "safinatun-najah": [
    {
      nomor: 1,
      judul: "Muqaddimah & Rukun Islam",
      teks: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Rukun Islam ada lima perkara: 1. Bersaksi bahwa tiada Tuhan selain Allah dan Nabi Muhammad utusan Allah, 2. Mendirikan shalat, 3. Menunaikan zakat, 4. Puasa di bulan Ramadhan, 5. Haji ke Baitullah bagi yang mampu menempuh jalannya.",
    },
    {
      nomor: 2,
      judul: "Rukun Iman & Makna Syahadat",
      teks: "Rukun Iman ada enam perkara: 1. Beriman kepada Allah, 2. Beriman kepada Malaikat-malaikat-Nya, 3. Beriman kepada Kitab-kitab-Nya, 4. Beriman kepada Rasul-rasul-Nya, 5. Beriman kepada Hari Kiamat, 6. Beriman kepada Takdir yang baik dan buruk dari Allah Ta'ala.",
    },
    {
      nomor: 3,
      judul: "Tanda-Tanda Baligh",
      teks: "Tanda-tanda baligh bagi laki-laki dan perempuan ada tiga: 1. Sempurna umur 15 tahun qamariyah, 2. Bermimpi basah (ihtilam) pada usia 9 tahun bagi laki-laki dan perempuan, 3. Mengeluarkan darah haid pada usia 9 tahun bagi perempuan.",
    },
    {
      nomor: 4,
      judul: "Istinja' & Syarat Bersuci dengan Batu",
      teks: "Syarat bersuci (istinja') dengan batu ada delapan: 1. Menggunakan 3 buah batu atau 1 batu dengan 3 sisi, 2. Membersihkan tempat keluar kotoran, 3. Kotoran belum kering, 4. Kotoran belum berpindah tempat, 5. Tidak terkena benda najis lain, 6. Kotoran tidak melampaui batas lubang pelepasan, 7. Tidak terkena air, 8. Batunya suci.",
    },
    {
      nomor: 5,
      judul: "Fardhu & Rukun Wudhu",
      teks: "Fardhu wudhu ada enam perkara: 1. Niat saat membasuh muka, 2. Membasuh seluruh muka, 3. Membasuh kedua tangan sampai siku, 4. Mengusap sebagian kepala, 5. Membasuh kedua kaki sampai mata kaki, 6. Tertib (berurutan sesuai urutan).",
    },
    {
      nomor: 6,
      judul: "Hal-Hal yang Membatalkan Wudhu",
      teks: "Pembatal wudhu ada empat perkara: 1. Keluarnya sesuatu dari salah satu jalan (kubul/dubur), 2. Hilang akal karena tidur atau selainnya kecuali tidur duduk yang mantap posisinya, 3. Bersentuhan kulit laki-laki dan perempuan yang bukan mahram tanpa penghalang, 4. Menyentuh kemaluan manusia atau lingkaran dubur dengan telapak tangan atau bagian dalam jari.",
    },
    {
      nomor: 7,
      judul: "Fardhu & Syarat Mandi Wajib",
      teks: "Fardhu mandi janabat/wajib ada dua perkara: 1. Niat menghilangkan hadats besar, 2. Meratakan air ke seluruh tubuh termasuk rambut dan kulit.",
    },
    {
      nomor: 8,
      judul: "Syarat & Rukun Tayamum",
      teks: "Fardhu tayamum ada lima perkara: 1. Memindahkan debu, 2. Niat memperbolehkan shalat, 3. Mengusap muka, 4. Mengusap kedua tangan sampai siku, 5. Tertib antara mengusap muka dan tangan.",
    },
    {
      nomor: 9,
      judul: "Najis & Cara Menghilangkannya",
      teks: "Najis terbagi menjadi tiga macam: 1. Mughalladhah (najis berat dari anjing dan babi), disucikan dengan 7 kali basuhan salah satunya dicampur debu tanah suci; 2. Mukhaffafah (najis ringan air kencing bayi laki-laki yang belum makan selain ASI), disucikan dengan memercikkan air merata; 3. Mutawassithah (najis pertengahan seperti darah, kotoran, nanah), disucikan dengan membasuhnya hingga hilang warna, bau, dan rasanya.",
    },
    {
      nomor: 10,
      judul: "Syarat Sah & Rukun Shalat",
      teks: "Rukun shalat ada 17 perkara: 1. Niat, 2. Takbiratul Ihram, 3. Berdiri bagi yang mampu, 4. Membaca surah Al-Fatihah, 5. Ruku', 6. Thuma'ninah dalam ruku', 7. I'tidal, 8. Thuma'ninah dalam i'tidal, 9. Sujud dua kali, 10. Thuma'ninah dalam sujud, 11. Duduk antara dua sujud, 12. Thuma'ninah saat duduk, 13. Duduk tasyahhud akhir, 14. Membaca tasyahhud akhir, 15. Membaca shalawat kepada Nabi, 16. Salam pertama, 17. Tertib.",
    },
    {
      nomor: 11,
      judul: "Pengurusan Jenazah Muslim",
      teks: "Kewajiban kifayah terhadap jenazah muslim ada empat perkara: 1. Memandikannya, 2. Mengkafaninya, 3. Menshalatkannya (dengan 4 kali takbir), 4. Menguburkannya di liang lahat menghadap kiblat.",
    },
    {
      nomor: 12,
      judul: "Zakat & Puasa Ramadhan",
      teks: "Syarat wajib puasa Ramadhan ada lima: Islam, mukallaf (baligh & berakal), mampu, sehat, dan mukim (tidak bepergian jauh). Rukun puasa ada tiga: 1. Niat pada malam hari sebelum terbit fajar, 2. Menahan diri dari segala hal yang membatalkan puasa sejak terbit fajar shadiq hingga terbenam matahari, 3. Orang yang berpuasa suci dari haid dan nifas.",
    },
  ],
  "al-aqidah-al-wasithiyyah": [
    {
      nomor: 1,
      judul: "Muqaddimah & Dasar Aqidah Ahlus Sunnah",
      teks: "Segala puji bagi Allah Rabb semesta alam. Ini adalah akidah golongan yang selamat (Al-Firqah An-Najiyah), Al-Manshurah hingga hari kiamat, yaitu Ahlus Sunnah wal Jama'ah. Dasar akidah ini adalah beriman kepada Allah, Malaikat-malaikat-Nya, Kitab-kitab-Nya, Rasul-rasul-Nya, Kebangkitan setelah mati, dan Takdir yang baik maupun yang buruk.",
    },
    {
      nomor: 2,
      judul: "Iman Kepada Allah & Kaidah Asma' wa Sifat",
      teks: "Termasuk beriman kepada Allah adalah beriman kepada apa yang Allah sifatkan untuk Diri-Nya dalam Kitab-Nya (Al-Qur'an) dan apa yang disifatkan oleh Rasul-Nya Muhammad SAW, tanpa tahrif (mengubah makna), tanpa ta'thil (menolak sifat), tanpa takyif (menanyakan 'bagaimana' hakikatnya), dan tanpa tamtsil (menyerupakan dengan makhluk).",
    },
    {
      nomor: 3,
      judul: "Ayat-Ayat Sifat: Ketinggian Allah (Al-Uluw & Al-Istiwa')",
      teks: "Ahlus Sunnah menetapkan bahwa Allah Maha Tinggi di atas seluruh makhluk-Nya dan beristiwa' (bersemayam) di atas 'Arsy sesuai keagungan-Nya, sebagaimana firman-Nya: 'Ar-Rahmanu 'alal 'arsyistawa' (QS. Thaha: 5). Ketinggian dzat dan sifat Allah tidak menafikan bahwa Allah Maha Mengetahui dan bersama hamba-Nya dengan ilmu dan pengawasan-Nya.",
    },
    {
      nomor: 4,
      judul: "Sifat Kalam (Bicara) & Al-Qur'an Kalamullah",
      teks: "Al-Qur'an adalah firman Allah (Kalamullah) yang hakiki, bukan makhluk. Diturunkan kepada Nabi Muhammad SAW melalui Malaikat Jibril, berlafaz dan bermakna bahasa Arab, dibaca dengan lisan, ditulis dalam mushaf, dan dihafal dalam dada manusia.",
    },
    {
      nomor: 5,
      judul: "Iman Kepada Malaikat, Kitab-Kitab, & Para Rasul",
      teks: "Beriman bahwa para malaikat adalah hamba-hamba Allah yang dimuliakan, tidak pernah bermaksiat kepada-Nya. Beriman kepada seluruh kitab samawi (Taurat, Zabur, Injil, Shuhuf, dan penyempurnanya Al-Qur'an) dan beriman kepada seluruh rasul dari Nabi Adam AS hingga penutup para nabi, Muhammad SAW.",
    },
    {
      nomor: 6,
      judul: "Iman Kepada Hari Akhir, Azab Kubur, & Melihat Allah di Surga",
      teks: "Termasuk iman kepada Hari Akhir adalah beriman kepada fitnah kubur, nikmat dan azab kubur, kebangkitan (al-ba'ats), hisab, mizan (timbangan amal), sirath, telaga (haudh), syafa'at Nabi SAW, serta kenikmatan tertinggi bagi kaum mukminin yaitu memandang wajah Allah Ta'ala di surga kelak.",
    },
    {
      nomor: 7,
      judul: "Iman Kepada Qadha dan Qadar",
      teks: "Beriman kepada takdir mencakup empat tingkatan (maratib al-qadar): 1. Ilmu Allah yang meliputi segala sesuatu, 2. Penulisan di Lauhul Mahfuzh, 3. Kehendak (Masyi'ah) Allah yang pasti terlaksana, 4. Penciptaan (Khalq) Allah terhadap seluruh alam dan perbuatan hamba-Nya.",
    },
    {
      nomor: 8,
      judul: "Sikap Terhadap Sahabat Nabi & Ahlul Bait",
      teks: "Ahlus Sunnah mencintai dan memuliakan seluruh sahabat Rasulullah SAW, meyakini keutamaan Khulafaur Rasyidin (Abu Bakar, Umar, Utsman, Ali), menghormati Ahlul Bait (keluarga Nabi) dan Ummahatul Mukminin (istri-istri Nabi), serta menahan diri dari perselisihan yang terjadi di antara para sahabat.",
    },
    {
      nomor: 9,
      judul: "Amar Ma'ruf Nahi Munkar & Akhlak Ahlus Sunnah",
      teks: "Ahlus Sunnah menyerukan amar ma'ruf nahi munkar sesuai syariat, menjaga persatuan kaum muslimin, menegakkan shalat berjamaah dan shalat Jum'at, berakhlak mulia, berbakti kepada orang tua, menyambung silaturahim, dan sabar menghadapi ujian.",
    },
  ],
  "umdatul-ahkam": [
    {
      nomor: 1,
      judul: "Kitab Thaharah: Niat, Siwak, dan Wudhu",
      teks: "Hadits Umar bin Al-Khaththab: 'Sesungguhnya segala perbuatan tergantung pada niatnya.' Hadits Abu Hurairah tentang menyempurnakan wudhu dan mencuci anggota wudhu hingga bersih, serta keutamaan bersiwak sebelum setiap shalat.",
    },
    {
      nomor: 2,
      judul: "Kitab Shalat: Waktu-Waktu Shalat Fardhu",
      teks: "Hadits Abdullah bin Amr dan Jabir bin Abdillah mengenai rincian awal dan akhir waktu shalat Zhuhur, Ashar, Maghrib, Isya, dan Shubuh, serta anjuran mendirikan shalat pada awal waktunya.",
    },
    {
      nomor: 3,
      judul: "Kitab Shalat: Sifat Shalat Nabi SAW",
      teks: "Hadits Abu Humaid As-Sa'idi dan Aisyah RA tentang tata cara shalat Rasulullah SAW: bertakbir, mengangkat tangan sejajar pundak/telinga, membaca doa iftitah, ta'awwudz, Al-Fatihah, ruku' dengan punggung lurus, i'tidal, sujud pada 7 anggota tubuh, hingga salam.",
    },
    {
      nomor: 4,
      judul: "Kitab Shalat Berjamaah & Imamah",
      teks: "Hadits Ibnu Umar RA: 'Shalat berjamaah lebih utama daripada shalat sendirian dengan selisih dua puluh tujuh derajat.' Syarat orang yang berhak menjadi imam adalah yang paling paham Al-Qur'an dan sunnah.",
    },
    {
      nomor: 5,
      judul: "Kitab Shalat Jum'at & Shalat Hari Raya",
      teks: "Kewajiban menghadiri shalat Jum'at bagi laki-laki muslim, anjuran mandi Jum'at, memakai wewangian, mendengarkan khutbah dengan tenang, serta tata cara takbir dan shalat Idul Fitri dan Idul Adha di tanah lapang.",
    },
    {
      nomor: 6,
      judul: "Kitab Pengurusan Janazah",
      teks: "Hadits Ummu Athiyyah RA mengenai tata cara memandikan jenazah dengan air daun bidara dan kapur barus, menyegerakan pemakaman, serta pahala besar mengiringi jenazah hingga selesai dimakamkan.",
    },
    {
      nomor: 7,
      judul: "Kitab Zakat & Sedekah",
      teks: "Hadits Ibnu Abbas saat Mu'adz bin Jabal diutus ke Yaman: mengajarkan tauhid, shalat lima waktu, dan zakat yang diambil dari orang kaya mereka lalu dibagikan kepada kaum fakir miskin.",
    },
    {
      nomor: 8,
      judul: "Kitab Shiyam (Puasa Ramadhan & Puasa Sunnah)",
      teks: "Hadits Abu Hurairah RA: 'Barangsiapa berpuasa Ramadhan karena iman dan mengharap pahala dari Allah, niscaya diampuni dosa-dosanya yang telah lalu.' Petunjuk hisab dan rukyatul hilal untuk memulai puasa.",
    },
    {
      nomor: 9,
      judul: "Kitab Haji & Umrah: Miqat dan Thawaf",
      teks: "Penetapan miqat makani bagi penduduk Madinah (Dzulhulaifah), Syam (Al-Juhfah), Najd (Qarnul Manazil), dan Yaman (Yalamlam), serta manasik thawaf mengelilingi Ka'bah dan sa'i antara Shafa dan Marwah.",
    },
    {
      nomor: 10,
      judul: "Kitab Jual Beli (Buyu') & Riba",
      teks: "Hadits Hakim bin Hizam RA tentang khiyar dalam jual beli: 'Penjual dan pembeli memiliki hak khiyar selama belum berpisah.' Pengharaman riba, penipuan (gharar), dan monopoli harga.",
    },
    {
      nomor: 11,
      judul: "Kitab Nikah & Hak Suami Istri",
      teks: "Hadits Abdullah bin Mas'ud RA: 'Wahai para pemuda, barangsiapa di antara kalian telah mampu menikah maka hendaklah ia menikah.' Anjuran memilih pasangan yang baik agamanya agar beruntung.",
    },
    {
      nomor: 12,
      judul: "Kitab Ath'imah & Sembelihan Halal",
      teks: "Hadits Syaddad bin Aus RA: 'Sesungguhnya Allah mewajibkan berbuat ihsan dalam segala hal, maka jika kalian menyembelih, sembelihlah dengan cara yang baik dan pertajamlah pisaunya.'",
    },
  ],
  "kifayatul-atiq": [
    {
      nomor: 1,
      judul: "Muqaddimah Tauhid & Kewajiban Mengenal Allah",
      teks: "Wajib syar'i bagi setiap mukallaf (orang berakal dan baligh) untuk mengetahui akidah tauhid dan mengenal apa yang wajib, mustahil, dan jaiz bagi hak Allah Ta'ala dan para Rasul-Nya dengan dalil aqli dan naqli.",
    },
    {
      nomor: 2,
      judul: "Sifat Wajib Bagi Allah Ta'ala (20 Sifat)",
      teks: "Sifat wajib bagi Allah ada dua puluh sifat: 1. Wujud (Ada), 2. Qidam (Terdahulu tanpa awal), 3. Baqa' (Kekal tanpa akhir), 4. Mukhalafatu lil hawaditsi (Berbeda dengan makhluk), 5. Qiyamuhu binafsihi (Berdiri sendiri), 6. Wahdaniyah (Esa), 7. Qudrah (Maha Kuasa), 8. Iradah (Maha Berkehendak), 9. Ilmu (Maha Mengetahui), 10. Hayat (Maha Hidup), 11. Sama' (Maha Mendengar), 12. Bashar (Maha Melihat), 13. Kalam (Maha Berfirman), 14. Qadiran, 15. Muridan, 16. 'Aliman, 17. Hayyan, 18. Sami'an, 19. Bashiran, 20. Mutakalliman.",
    },
    {
      nomor: 3,
      judul: "Sifat Mustahil Bagi Allah Ta'ala",
      teks: "Sifat mustahil bagi Allah adalah lawan dari sifat wajib-Nya: 1. 'Adam (Tiada), 2. Huduts (Baru), 3. Fana' (Binasah/Rusak), 4. Mumatsalatu lil hawaditsi (Serupa dengan makhluk), 5. Ihtiyaj ila ghairihi (Membutuhkan selain-Nya), 6. Ta'addud (Berbilang/Sekutu), 7. 'Ajz (Lemah), 8. Karahah (Terpaksa), 9. Jahl (Bodoh), 10. Mawt (Mati), 11. Shamam (Tuli), 12. 'Ama (Buta), 13. Bakam (Bisu), dan keadaannya yang mustahil lainnya.",
    },
    {
      nomor: 4,
      judul: "Sifat Jaiz Bagi Allah Ta'ala",
      teks: "Sifat jaiz bagi Allah Ta'ala ada satu, yaitu: Memperbuat setiap perkara yang mungkin (mumkinat) atau meninggalkannya, seperti menciptakan makhluk, memberi rizki, menghidupkan dan mematikan tanpa ada kewajiban atas-Nya.",
    },
    {
      nomor: 5,
      judul: "Sifat Wajib, Mustahil, & Jaiz Bagi Para Rasul",
      teks: "Bagi para Rasul ada 4 sifat wajib: Shiddiq (Jujur), Amanah (Dapat dipercaya), Tabligh (Menyampaikan wahyu), dan Fathanah (Cerdas bijaksana). 4 sifat mustahil bagi Rasul: Kidzib (Dusta), Khianat, Kitman (Menyembunyikan), dan Baladah (Bodoh). Sifat jaiz bagi Rasul: Memiliki sifat-sifat kemanusiaan yang tidak mengurangi derajat kerasulan (seperti makan, minum, tidur, sakit biasa).",
    },
    {
      nomor: 6,
      judul: "Aqidatul Khamsin (Simpulan 50 Aqidah)",
      teks: "Simpulan akidah tauhid berjumlah 50 perkara (Aqidatul Khamsin): 20 sifat wajib Allah + 20 sifat mustahil Allah + 1 sifat jaiz Allah + 4 sifat wajib Rasul + 4 sifat mustahil Rasul + 1 sifat jaiz Rasul = 50 simpul keyakinan yang terkandung dalam kalimat Lailahaillallah Muhammadur Rasulullah.",
    },
    {
      nomor: 7,
      judul: "Kalimat Tauhid Lailahaillallah & Konsekuensinya",
      teks: "Makna hakiki kalimat La ilaha illallah adalah: 'Tidak ada yang tidak membutuhkan segala sesuatu selain-Nya dan yang dibutuhkan oleh segala sesuatu selain-Nya kecuali Allah Ta'ala.' Menghayati makna ini menghantarkan seorang hamba kepada tauhid yang murni dan keselamatan di akhirat.",
    },
  ],
}

console.log("Memulai sinkronisasi Kitab Ulama...")

const insertKitabStmt = db.prepare(`
  INSERT INTO kitab (id, ulama, kategori, judul, deskripsi)
  VALUES (@id, @ulama, @kategori, @judul, @deskripsi)
  ON CONFLICT(id) DO UPDATE SET
    ulama = excluded.ulama,
    kategori = excluded.kategori,
    judul = excluded.judul,
    deskripsi = excluded.deskripsi
`)

const insertBabStmt = db.prepare(`
  INSERT INTO kitab_bab (id, kitab_id, nomor, judul, teks)
  VALUES (@id, @kitab_id, @nomor, @judul, @teks)
  ON CONFLICT(id) DO UPDATE SET
    judul = excluded.judul,
    teks = excluded.teks
`)

// 1. Sinkronisasi metadata kitab
for (const k of allKitab) {
  insertKitabStmt.run(k)
  console.log(`Kitab synced: ${k.id} (${k.judul})`)
}

// 2. Sinkronisasi bab tambahan untuk kitab-kitab yang belum ada atau perlu diperkaya
for (const [kitabId, babs] of Object.entries(extraBab)) {
  for (const b of babs) {
    insertBabStmt.run({
      id: `${kitabId}-${b.nomor}`,
      kitab_id: kitabId,
      nomor: b.nomor,
      judul: b.judul,
      teks: b.teks,
    })
  }
  console.log(`Synced ${babs.length} bab untuk ${kitabId}`)
}

// 3. Untuk bab-bab di bulughul-maram, riyadhush-shalihin, al-hikam, bidayatul-hidayah yang teksnya masih kosong,
// berikan ringkasan tematik informatif agar pembaca mendapatkan keterangan yang jelas.
const emptyBabRows = db.prepare(`
  SELECT kb.id, kb.kitab_id, kb.nomor, kb.judul, kb.teks, k.judul as kitab_judul, k.ulama, k.kategori
  FROM kitab_bab kb
  JOIN kitab k ON kb.kitab_id = k.id
  WHERE length(trim(kb.teks)) = 0
`).all()

console.log(`Mengisi deskripsi tematik untuk ${emptyBabRows.length} bab yang kosong...`)

const updateBabTeksStmt = db.prepare(`
  UPDATE kitab_bab SET teks = ? WHERE id = ?
`)

for (const row of emptyBabRows) {
  let penjelasan = ""
  if (row.kitab_id === "bulughul-maram") {
    penjelasan = `Bab "${row.judul}" dalam Kitab ${row.kitab_judul} karya ${row.ulama}. Bab ini menghimpun hadits-hadits shahih dan hasan yang menjadi landasan hukum fikih (${row.kategori}) seputar ${row.judul}, mencakup dalil-dalil pokok, ketentuan hukum syariat, dan petunjuk amalan Rasulullah SAW.`
  } else if (row.kitab_id === "riyadhush-shalihin") {
    penjelasan = `Bab "${row.judul}" dalam Kitab ${row.kitab_judul} karya ${row.ulama}. Bab ini memuat kumpulan ayat Al-Qur'an dan hadits-hadits pilihan Nabi SAW mengenai keutamaan, adab, serta amalan praktis seputar tema "${row.judul}" guna membina akhlak mulia dan ketakwaan hamba.`
  } else if (row.kitab_id === "al-hikam") {
    penjelasan = `Untaian hikmah spiritual nomor ${row.nomor}: "${row.judul}" dalam Kitab ${row.kitab_judul} karya ${row.ulama}. Mutiara hikmah tasawuf ini membimbing hati penempuh jalan spiritual (salik) dalam memahami tauhid, kebergantungan kepada Allah, keikhlasan batin, dan adab ma'rifatullah.`
  } else if (row.kitab_id === "bidayatul-hidayah") {
    penjelasan = `Bab "${row.judul}" dalam Kitab ${row.kitab_judul} karya Hujjatul Islam ${row.ulama}. Menguraikan adab-adab lahiriah dan batiniah, tata krama ibadah harian, serta panduan praktis menjauhi maksiat menuju hidayah Allah Ta'ala.`
  } else {
    penjelasan = `Bab "${row.judul}" dalam Kitab ${row.kitab_judul} karya ${row.ulama}, membahas pokok bahasan penting dalam ${row.kategori}.`
  }

  updateBabTeksStmt.run(penjelasan, row.id)
}

// 4. Ringkasan hasil
const finalKitab = db.prepare(`SELECT id, judul, ulama, kategori FROM kitab ORDER BY judul`).all()
const finalBabCount = db.prepare(`SELECT kitab_id, count(*) as count FROM kitab_bab GROUP BY kitab_id`).all()

console.log("\n=== HASIL SINKRONISASI KITAB ULAMA ===")
console.table(finalKitab)
console.log("\n=== JUMLAH BAB / TEMA TERDAFTAR ===")
console.table(finalBabCount)
