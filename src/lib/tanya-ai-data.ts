export type TanyaAiRujukan = { label: string; href: string }

export type TanyaAiItem = {
  id: string
  keywords: string[]
  jawaban: string
  rujukan: TanyaAiRujukan[]
  lanjutan: string[]
}

export const tanyaAiList: TanyaAiItem[] = [
  {
    id: "surah-al-kahfi",
    keywords: ["kahfi", "al-kahfi", "alkahfi", "jumat", "jum'at", "surah kahfi", "keutamaan kahfi", "keutamaan al-kahfi"],
    jawaban: `Membaca **Surah Al-Kahfi pada hari Jum'at** merupakan salah satu amalan sunnah mu'akkadah yang memiliki fadhilah (keutamaan) yang sangat agung berdasarkan hadis-hadis shahih Rasulullah shallallahu 'alaihi wa sallam.

Berikut rincian keutamaan membaca Surah Al-Kahfi di hari Jum'at:

1. **Dipancarkan Cahaya Petunjuk Antara Dua Jum'at**:
   Rasulullah shallallahu 'alaihi wa sallam bersabda:
   *“Barangsiapa membaca Surah Al-Kahfi pada hari Jum'at, maka akan memancarkan cahaya baginya di antara dua Jum'at.”* (HR. An-Nasa'i, Al-Baihaqi no. 5996, dan dishahihkan oleh Syaikh Al-Albani dalam *Shahihut Targhib* no. 736).
   Para ulama menjelaskan bahwa cahaya (*nur*) ini adalah petunjuk hati, penjagaan dari perbuatan dosa, serta ketenteraman batin sepanjang pekan.

2. **Perlindungan dan Benteng dari Fitnah Dajjal**:
   Rasulullah shallallahu 'alaihi wa sallam bersabda:
   *“Barangsiapa menghafal sepuluh ayat pertama dari Surah Al-Kahfi, maka ia akan terlindungi dari fitnah Dajjal.”* Dalam riwayat lain disebutkan *“sepuluh ayat terakhir”*. (HR. Muslim no. 809 dan Abu Dawud no. 4323).

3. **Mengandung 4 Kisah Pengokoh Iman Menghadapi 4 Fitnah Terbesar**:
   - **Kisah Ashabul Kahfi (Pemuda Gua)**: Ujian dan keteguhan **Iman & Aqidah**.
   - **Kisah Pemilik Dua Kebun**: Ujian **Harta & Kekayaan**.
   - **Kisah Nabi Musa & Khidir 'alaihimas salam**: Ujian **Ilmu & Kerendahan Hati**.
   - **Kisah Raja Dzulqarnain**: Ujian **Kekuasaan & Keadilan**.

4. **Waktu Pelaksanaan yang Disunnahkan**:
   Waktu membaca Surah Al-Kahfi membentang luas:
   - Dimulai sejak **terbenamnya matahari pada hari Kamis sore** (masuknya malam Jum'at).
   - Berakhir hingga **terbenamnya matahari pada hari Jum'at sore** (menjelang waktu Maghrib).

**Faidah & Hikmah Amalan**:
Bagi yang belum lancar membaca sekaligus 110 ayat, diperbolehkan mencicil bacaannya (misalnya separuh di malam Jum'at dan separuhnya lagi setelah Shalat Subuh atau Shalat Jum'at). Hendaknya kita juga merenungi maknanya sebagai bekal membentengi diri dan keluarga dari fitnah akhir zaman.`,
    rujukan: [
      { label: "Tafsir Surah Al-Kahfi (110 Ayat)", href: "/tafsir/18" },
      { label: "Hadis Shahih Muslim — Keutamaan Al-Kahfi", href: "/hadis/muslim-1" },
      { label: "Kitab Riyadhush Shalihin — Amalan Hari Jum'at", href: "/kitab/riyadhush-shalihin" },
    ],
    lanjutan: [
      "Mengapa Surah Al-Kahfi dapat melindungi dari Dajjal?",
      "Apa saja amalan sunnah utama di hari Jum'at lainnya?",
      "Bagaimana tafsir 10 ayat pertama Surah Al-Kahfi?",
    ],
  },
  {
    id: "wudhu",
    keywords: ["wudhu", "wudu", "tata cara wudhu", "cara wudhu", "bersuci", "thaharah", "air wudhu", "rukun wudhu", "sunnah wudhu"],
    jawaban: `Tata cara berwudhu yang sempurna sesuai sunnah Rasulullah shallallahu 'alaihi wa sallam bersumber dari dalil Al-Qur'an (QS. Al-Ma'idah: 6) dan hadis shahih riwayat Utsman bin Affan radhiyallahu 'anhu (HR. Bukhari no. 159 & Muslim no. 226).

Berikut urutan tata cara wudhu sesuai sunnah dari awal hingga akhir:

1. **Niat & Membaca Basmalah**:
   Berniat di dalam hati untuk menghilangkan hadas kecil semata-mata karena Allah Ta'ala, disertai membaca *Bismillāh*.

2. **Mencuci Kedua Telapak Tangan (3x)**:
   Membasuh kedua telapak tangan hingga pergelangan sebanyak 3 kali dan menyela-nyela jemari tangan.

3. **Berkumur-kumur & Istinsyaq (3x)**:
   Mengambil air dengan telapak tangan kanan, lalu berkumur-kumur (*madhmadhah*) dan menghirup air ke hidung (*istinsyaq*), kemudian menghembuskannya keluar dengan tangan kiri (*istintsar*). Dilakukan sebanyak 3 kali.

4. **Membasuh Seluruh Wajah (3x)**:
   Membasuh wajah secara merata mulai dari batas tumbuhnya rambut kepala bagian atas hingga bawah dagu, dan dari daun telinga kanan hingga daun telinga kiri.

5. **Membasuh Kedua Tangan Hingga Siku (3x)**:
   Membasuh tangan kanan dari ujung jari hingga melewati siku sebanyak 3 kali, kemudian dilanjutkan membasuh tangan kiri dengan cara yang sama.

6. **Mengusap Seluruh Kepala & Telinga (1x)**:
   Membasahi kedua tangan, lalu mengusapkannya ke kepala mulai dari bagian depan ditarik ke tengkuk belakang, lalu dikembalikan lagi ke depan. Tanpa mengambil air baru, langsung usapkan jari telunjuk ke bagian dalam daun telinga dan ibu jari ke bagian luar telinga.

7. **Membasuh Kedua Kaki Hingga Mata Kaki (3x)**:
   Membasuh kaki kanan hingga di atas mata kaki sebanyak 3 kali sambil menyela-nyela jari kaki dengan jari kelingking tangan kiri, dilanjutkan membasuh kaki kiri dengan cara serupa.

8. **Membaca Doa Setelah Wudhu**:
   Menghadap kiblat dan membaca doa ma'tsur:
   *"Asyhadu allā ilāha illallāh wahdahū lā syarīka lah, wa asyhadu anna Muhammadan 'abduhū wa rasūluh. Allāhummaj'alnī minat-tawwābīna waj'alnī minal-mutathahhirīn."*

**Catatan Fiqih Ulama**:
Dalam Mazhab Syafi'i, rukun fardhu wudhu ada 6 (Niat, Membasuh Muka, Membasuh Tangan hingga Siku, Mengusap Sebagian Kepala, Membasuh Kaki hingga Mata Kaki, dan Tertib). Sedangkan membasuh 3 kali, berkumur, istinsyaq, mengusap seluruh kepala & telinga, dan membaca doa adalah sunnah mu'akkadah yang menyempurnakan pahala.`,
    rujukan: [
      { label: "Kitab Safinatun Najah — Bab Thaharah", href: "/kitab/safinatun-najah" },
      { label: "Kitab Bulughul Maram — Bab Wudhu", href: "/kitab/bulughul-maram" },
      { label: "Tafsir QS. Al-Ma'idah Ayat 6", href: "/tafsir/5" },
    ],
    lanjutan: [
      "Apa saja hal yang membatalkan wudhu?",
      "Apa syarat sah dan rukun shalat?",
      "Bagaimana tata cara tayamum?",
    ],
  },
  {
    id: "shalat",
    keywords: ["shalat", "salat", "sholat", "tata cara shalat", "rukun shalat", "syarat shalat", "sembahyang"],
    jawaban: `Shalat adalah tiang agama dan rukun Islam kedua yang paling utama setelah dua kalimat syahadat. Rasulullah shallallahu 'alaihi wa sallam bersabda: *"Shalatlah kalian sebagaimana kalian melihat aku shalat."* (HR. Bukhari no. 631).

Berikut rincian syarat sah dan rukun shalat menurut jumhur ulama fikih:

**A. Syarat Sah Shalat (Sebelum Memulai Shalat)**:
1. Suci dari hadas kecil (dengan wudhu) dan hadas besar (dengan mandi wajib).
2. Suci badan, pakaian, dan tempat shalat dari najis yang tidak dimaafkan.
3. Menutup aurat secara sempurna.
4. Telah masuk waktu shalat yang ditentukan.
5. Menghadap ke arah kiblat (Ka'bah di Masjidil Haram).

**B. Rukun Shalat (13 Rukun Pokok Mazhab Syafi'i)**:
1. **Niat** di dalam hati berbarengan dengan takbiratul ihram.
2. **Takbiratul Ihram** mengucapkan *"Allāhu Akbar"*.
3. **Berdiri** tegak bagi yang mampu pada shalat fardhu.
4. **Membaca Surah Al-Fatihah** secara tartil dan lengkap dengan basmalah pada setiap rakaat.
5. **Ruku'** dengan punggung lurus disertai **Thuma'ninah** (diam tenang sejenak).
6. **I'tidal** (bangkit dari ruku') disertai **Thuma'ninah**.
7. **Sujud dua kali** dengan menempelkan 7 anggota sujud disertai **Thuma'ninah**.
8. **Duduk di antara dua sujud** disertai **Thuma'ninah**.
9. **Duduk untuk Tasyahhud Akhir**.
10. **Membaca Tasyahhud Akhir**.
11. **Membaca Shalawat kepada Nabi** pada tasyahhud akhir.
12. **Salam yang pertama** menoleh ke arah kanan.
13. **Tertib** (melaksanakan seluruh rukun sesuai urutannya).

Kekhusyukan dalam shalat dapat diraih dengan memahami makna bacaan yang dilafalkan serta menghadirkan rasa pengagungan kepada Allah Subhanahu wa Ta'ala.`,
    rujukan: [
      { label: "Kitab Safinatun Najah — Bab Shalat", href: "/kitab/safinatun-najah" },
      { label: "Kitab Bulughul Maram — Shalat", href: "/kitab/bulughul-maram" },
      { label: "Tafsir QS. Al-Baqarah Ayat 43", href: "/tafsir/2" },
    ],
    lanjutan: [
      "Bagaimana tata cara sujud sahwi?",
      "Apa saja hal yang membatalkan shalat?",
      "Bagaimana bacaan tasyahhud akhir lengkap?",
    ],
  },
  {
    id: "ayat-kursi",
    keywords: ["ayat kursi", "kursi", "keutamaan ayat kursi", "ayat teragung", "baqarah 255"],
    jawaban: `**Ayat Kursi (Surah Al-Baqarah: 255)** adalah ayat yang paling agung (*A'zhamu Ayatin fil Qur'an*) dalam Kitab Suci Al-Qur'an sebagaimana ditegaskan oleh Rasulullah shallallahu 'alaihi wa sallam kepada sahabat Ubay bin Ka'ab radhiyallahu 'anhu (HR. Muslim no. 810).

Berikut keutamaan istimewa Ayat Kursi:

1. **Ayat Paling Agung dalam Al-Qur'an**:
   Mengandung nama-nama Allah yang paling mulia (*Al-Ismul A'zham*), yaitu **Al-Hayyu** (Maha Hidup Kekal) dan **Al-Qayyum** (Maha Mandiri Mengurus Makhluk-Nya), serta menegaskan kemutlakan kekuasaan dan ilmu Allah atas langit dan bumi.

2. **Jaminan Surga Setelah Shalat Fardhu**:
   Rasulullah shallallahu 'alaihi wa sallam bersabda:
   *“Barangsiapa membaca Ayat Kursi setiap selesai shalat fardhu, maka tidak ada yang menghalanginya masuk surga melainkan kematian.”* (HR. An-Nasa'i dalam *Amalul Yaum wal Lailah* no. 100 dan dishahihkan Ibnu Hibban).

3. **Benteng Perlindungan dari Gangguan Setan**:
   Membaca Ayat Kursi sebelum tidur di malam hari akan mendatangkan penjagaan malaikat dari Allah dan setan tidak akan mampu mendekatinya hingga waktu pagi (HR. Bukhari no. 2311).

**Faidah & Hikmah Amalan**:
Dianjurkan merutinkan membaca Ayat Kursi pada 3 waktu utama: (1) Ba'da shalat fardhu lima waktu, (2) Dzikir pagi dan petang, serta (3) Sebelum berbaring tidur di malam hari.`,
    rujukan: [
      { label: "Tafsir QS. Al-Baqarah Ayat 255 (Ayat Kursi)", href: "/tafsir/2" },
      { label: "Hadis Bukhari no. 2311 — Penjagaan Ayat Kursi", href: "/hadis/bukhari-1" },
      { label: "Kitab Riyadhush Shalihin — Bab Dzikir", href: "/kitab/riyadhush-shalihin" },
    ],
    lanjutan: [
      "Apa makna kalimat 'Wasi'a Kursiyyuhus Samawati wal Ardh'?",
      "Bagaimana bacaan dzikir ba'da shalat fardhu lengkap?",
      "Apa keutamaan Surah Al-Ikhlas, Al-Falaq, dan An-Nas?",
    ],
  },
  {
    id: "shalat-tahajjud",
    keywords: [
      "tahajjud",
      "tahajud",
      "shalat tahajjud",
      "sholat tahajjud",
      "shalat tahajud",
      "tata cara shalat tahajjud",
      "tata cara tahajjud",
      "shalat malam",
      "qiyamul lail",
      "waktu tahajud",
      "tata cara tahajud",
    ],
    jawaban: `Shalat Tahajjud adalah shalat sunnah mu'akkadah yang dikerjakan pada malam hari setelah bangun dari tidur. Allah Subhanahu wa Ta'ala berfirman:
*“Dan pada sebagian malam, lakukanlah shalat tahajjud (sebagai suatu ibadah) tambahan bagimu; mudah-mudahan Tuhanmu mengangkatmu ke tempat yang terpuji (maqaman mahmuda).”* (QS. Al-Isra': 79).

**Tata Cara Shalat Tahajjud Sesuai Sunnah**:
1. **Waktu Terbaik**: Sepertiga malam terakhir (antara pukul 02.00 dini hari hingga menjelang subuh), saat Allah Ta'ala turun ke langit dunia melimpahkan ampunan dan mengijabah doa (HR. Bukhari no. 1145 & Muslim no. 758).
2. **Jumlah Rakaat**: Minimal 2 rakaat dan tidak ada batas maksimal (biasanya dikerjakan 8 rakaat atau 10 rakaat, ditutup dengan Shalat Witir 1 atau 3 rakaat).
3. **Pelaksanaan**: Dilakukan 2 rakaat-2 rakaat dengan salam pada setiap 2 rakaat (*matsna matsna*).
4. **Kekhusyukan**: Disunnahkan memperpanjang ruku' dan sujud, serta memperbanyak istighfar dan doa hajat di waktu sahur.

**Keutamaan Shalat Tahajjud**:
- Diberikan kedudukan terpuji (*Maqaman Mahmuda*) di dunia dan akhirat.
- Merupakan kebiasaan orang-orang shalih terdahulu (*da'bush shalihin*).
- Penghapus dosa-dosa dan pencegah dari berbuat maksiat.
- Cahaya di wajah dan ketenangan batin yang luar biasa.`,
    rujukan: [
      { label: "Kitab Riyadhush Shalihin — Qiyamul Lail", href: "/kitab/riyadhush-shalihin" },
      { label: "Tafsir QS. Al-Isra' Ayat 79", href: "/tafsir/17" },
      { label: "Hadis Bukhari — Shalat Malam", href: "/hadis/bukhari-1" },
    ],
    lanjutan: [
      "Bagaimana niat dan doa setelah shalat tahajjud?",
      "Apa perbedaan shalat tahajjud, qiyamul lail, dan witir?",
      "Bagaimana cara shalat dhuha dan keutamaannya?",
    ],
  },
  {
    id: "shalat-dhuha",
    keywords: [
      "dhuha",
      "duha",
      "shalat dhuha",
      "sholat dhuha",
      "tata cara shalat dhuha",
      "keutamaan dhuha",
      "tata cara dhuha",
      "keutamaan shalat dhuha",
      "rezeki dhuha",
    ],
    jawaban: `Shalat Dhuha adalah shalat sunnah yang dikerjakan saat matahari mulai naik setinggi tombak hingga menjelang waktu zawal (masuknya waktu Dzuhur). Rasulullah shallallahu 'alaihi wa sallam mewasiatkan shalat Dhuha kepada sahabat Abu Hurairah radhiyallahu 'anhu sebagai amalan yang tidak pernah beliau tinggalkan (HR. Bukhari no. 1981).

**Tata Cara & Waktu Shalat Dhuha**:
1. **Waktu Pelaksanaan**: Dimulai sekitar 15-20 menit setelah terbit matahari (*syuruq*) hingga 10 menit sebelum adzan Dzuhur. Waktu paling utama (*afdal*) adalah ketika matahari mulai terasa panas terik (*shalatul awwabin*, sekitar pukul 08.30 - 10.30 pagi).
2. **Jumlah Rakaat**: Minimal 2 rakaat, dan dapat dikerjakan 4, 6, hingga 8 rakaat dengan salam tiap 2 rakaat.
3. **Bacaan Surah**: Disunnahkan membaca Surah Asy-Syams dan Ad-Dhuha, atau surah-surah lainnya dari Al-Qur'an.

**Keutamaan Utama Shalat Dhuha**:
- **Sedekah bagi 360 Persendian Tubuh**: Menunaikan 2 rakaat Dhuha mencukupi sedekah harian bagi seluruh persendian tubuh manusia (HR. Muslim no. 720).
- **Dicukupkan Kebutuhan di Akhir Hari**: Allah berfirman dalam Hadits Qudsi: *“Wahai anak Adam, janganlah engkau luput dari 4 rakaat di awal harimu, niscaya Aku cukupkan keperluanmu hingga akhir hari.”* (HR. Tirmidzi no. 475).
- **Gelar Shalat Awwabin**: Shalatnya orang-orang yang senantiasa kembali bertaubat kepada Allah.`,
    rujukan: [
      { label: "Kitab Riyadhush Shalihin — Shalat Dhuha", href: "/kitab/riyadhush-shalihin" },
      { label: "Kitab Bulughul Maram — Shalat Sunnah", href: "/kitab/bulughul-maram" },
      { label: "Tafsir Surah Ad-Dhuha", href: "/tafsir/93" },
    ],
    lanjutan: [
      "Bagaimana bacaan doa setelah shalat dhuha?",
      "Berapa rakaat maksimal shalat dhuha menurut ulama?",
      "Apa saja amalan pembuka pintu rezeki yang berkah?",
    ],
  },
  {
    id: "sujud-sahwi",
    keywords: ["sujud sahwi", "sahwi", "lupa rakaat", "lupa shalat", "tata cara sujud sahwi"],
    jawaban: `Sujud Sahwi adalah dua sujud yang dilakukan untuk mengganti kelalaian, keraguan, atau kekurangan yang terjadi di dalam shalat karena lupa (*sahw*). Hukumnya adalah sunnah mu'akkadah menurut jumhur ulama.

**4 Sebab Terjadinya Sujud Sahwi**:
1. **Kelebihan Gerakan Shalat**: Seperti menambah rakaat, ruku', atau sujud karena lupa.
2. **Kekurangan Rukun Shalat**: Jika teringat saat masih shalat, segera lakukan rukun yang tertinggal lalu sujud sahwi di akhir.
3. **Tertinggal Sunnah Ab'adh**: Seperti lupa duduk tasyahhud awal atau doa qunut (dalam mazhab Syafi'i).
4. **Ragu-Ragu Jumlah Rakaat**: Misalnya ragu apakah sudah 3 atau 4 rakaat, maka tetapkan jumlah yang paling meyakinkan (yaitu jumlah terkecil/3 rakaat), sempurnakan shalat, lalu lakukan sujud sahwi.

**Tata Cara Sujud Sahwi**:
- Dilakukan dengan **dua kali sujud** seperti sujud biasa, disertai takbir saat turun dan bangkit, serta duduk di antara dua sujud.
- Bacaan sujud sahwi: *“Subhāna man lā yanāmu wa lā yashū”* (Maha Suci Dzat yang tidak tidur dan tidak pernah lupa) atau bacaan sujud biasa *“Subhāna rabbiyal a'lā wa bihamdih”*.
- **Letak Sujud**: Umumnya dilakukan **sebelum salam** (setelah tasyahhud akhir dan shalawat), lalu mengucapkan salam. Jika karena kelebihan rakaat atau salam mendahului waktu, dapat dilakukan **setelah salam**.`,
    rujukan: [
      { label: "Kitab Safinatun Najah — Bab Sujud Sahwi", href: "/kitab/safinatun-najah" },
      { label: "Kitab Bulughul Maram — Sujud Sahwi", href: "/kitab/bulughul-maram" },
      { label: "Hadis Shahih Bukhari — Sahw", href: "/hadis/bukhari-1" },
    ],
    lanjutan: [
      "Apa perbedaan Sunnah Ab'adh dan Sunnah Hai'ah?",
      "Bagaimana jika imam lupa sujud sahwi, apakah makmum mengikutinya?",
      "Apa yang harus dilakukan jika ragu rakaat shalat?",
    ],
  },
  {
    id: "mandi-wajib",
    keywords: ["mandi wajib", "mandi junub", "mandi besar", "tata cara mandi wajib", "hadas besar", "janabah"],
    jawaban: `Mandi Wajib (*Ghusl*) adalah mengalirkan air suci ke seluruh anggota badan mulai dari ujung rambut hingga ujung kaki untuk bersuci dari hadas besar sesuai tuntunan Rasulullah shallallahu 'alaihi wa sallam (QS. An-Nisa': 43 & HR. Bukhari no. 248 dari Sayyidah 'Aisyah radhiyallahu 'anha).

**A. Dua Rukun Fardhu Mandi Wajib (Wajib Dipenuhi)**:
1. **Niat**: Berniat dalam hati untuk menghilangkan hadas besar karena Allah saat air pertama kali menyentuh tubuh.
2. **Meratakan Air ke Seluruh Tubuh**: Membasahi seluruh kulit dan pangkal rambut secara merata tanpa ada bagian yang terlewat.

**B. Tata Cara Mandi Wajib Sesuai Sunnah yang Sempurna**:
1. Membaca *Bismillāh* dan mencuci kedua telapak tangan 3 kali.
2. Membersihkan kemaluan dan kotoran najis dengan tangan kiri.
3. Mencuci tangan kiri dengan sabun atau menggosokkannya ke tanah/lantai.
4. Berwudhu secara sempurna sebagaimana wudhu untuk shalat.
5. Menyela-nyela pangkal rambut kepala dengan jari jemari yang basah sebanyak 3 kali hingga kulit kepala basah.
6. Menyiramkan air ke atas kepala sebanyak 3 kali siraman.
7. Mengalirkan air ke seluruh badan, dimulai dari sisi tubuh bagian kanan lalu sisi bagian kiri, serta membersihkan lipatan-lipatan tubuh.`,
    rujukan: [
      { label: "Kitab Safinatun Najah — Bab Mandi Wajib", href: "/kitab/safinatun-najah" },
      { label: "Kitab Bulughul Maram — Bab Janabah", href: "/kitab/bulughul-maram" },
      { label: "Tafsir QS. Al-Ma'idah Ayat 6", href: "/tafsir/5" },
    ],
    lanjutan: [
      "Apa saja perkara yang mewajibkan mandi besar?",
      "Apakah sah shalat setelah mandi wajib tanpa berwudhu lagi?",
      "Bagaimana tata cara tayamum pengganti mandi wajib?",
    ],
  },
  {
    id: "tayamum",
    keywords: ["tayamum", "tayammum", "tata cara tayamum", "syarat tayamum", "debu suci"],
    jawaban: `Tayamum adalah rukhsah (keringanan syariat) bersuci menggunakan debu tanah yang suci sebagai pengganti wudhu atau mandi wajib ketika ada uzur syar'i (QS. Al-Ma'idah: 6).

**Sebab-Sebab Diperbolehkannya Tayamum**:
1. Tidak ada air setelah berusaha mencarinya hingga masuk waktu shalat.
2. Mengalami sakit atau luka yang jika terkena air dapat memperparah penyakit.
3. Ketersediaan air sangat terbatas dan hanya cukup untuk kebutuhan minum yang mendesak.

**Tata Cara Tayamum Sesuai Sunnah**:
1. **Niat**: Berniat di dalam hati untuk diperbolehkan menunaikan shalat (*istibahatus shalah*).
2. **Menepukkan Tangan ke Debu (Pertama)**: Menepukkan kedua telapak tangan ke permukaan tanah/dinding yang berdebu suci, lalu meniupnya perlahan agar debu tidak terlalu tebal.
3. **Mengusap Seluruh Wajah**: Mengusapkan kedua telapak tangan ke seluruh permukaan wajah secara merata.
4. **Menepukkan Tangan ke Debu (Kedua)**: Menepuk debu kembali lalu mengusapkannya ke kedua tangan hingga siku (dimulai tangan kanan lalu tangan kiri).
5. **Tertib**: Melaksanakan urutan tersebut secara berurutan.`,
    rujukan: [
      { label: "Kitab Safinatun Najah — Bab Tayamum", href: "/kitab/safinatun-najah" },
      { label: "Kitab Bulughul Maram — Bab Tayamum", href: "/kitab/bulughul-maram" },
      { label: "Tafsir QS. An-Nisa' Ayat 43", href: "/tafsir/4" },
    ],
    lanjutan: [
      "Berapa kali shalat fardhu yang boleh dilakukan dengan satu tayamum?",
      "Apa saja hal yang membatalkan tayamum?",
      "Bagaimana cara bersuci bagi orang yang sakit di rumah sakit?",
    ],
  },
  {
    id: "surah-al-mulk",
    keywords: ["al-mulk", "al mulk", "tabarak", "keutamaan al-mulk", "siksa kubur", "surah mulk"],
    jawaban: `**Surah Al-Mulk (Tabarak)** yang terdiri dari 30 ayat memiliki fadhilah agung sebagai penyelamat dan pembela pembacanya dari siksa kubur.

Rasulullah shallallahu 'alaihi wa sallam bersabda:
*“Sesungguhnya ada satu surah dalam Al-Qur'an yang berisi 30 ayat; ia akan memberi syafaat bagi pembacanya hingga diampuni dosanya, yaitu Surah Tabarakallazi bi yadihil mulk (Surah Al-Mulk).”* (HR. Abu Dawud no. 1400, Tirmidzi no. 2891, dan dishahihkan oleh Al-Hakim).

Dalam hadis riwayat Ibnu Mas'ud radhiyallahu 'anhu disebutkan bahwa surah ini disebut sebagai *Al-Mani'ah* (penghalang/benteng pencegah siksa kubur). Rasulullah SAW senantiasa membacanya setiap malam sebelum berbaring tidur (HR. Tirmidzi no. 2892).

**Faidah & Hikmah Amalan**:
Dianjurkan membaca dan mentadabburi 30 ayat Surah Al-Mulk secara istiqamah setiap malam bakda Isya atau sebelum tidur agar meraih perlindungan di alam barzakh.`,
    rujukan: [
      { label: "Tafsir Surah Al-Mulk (30 Ayat)", href: "/tafsir/67" },
      { label: "Hadis Riyadhush Shalihin — Surah Al-Mulk", href: "/kitab/riyadhush-shalihin" },
      { label: "Tafsir Al-Qur'an", href: "/tafsir" },
    ],
    lanjutan: [
      "Apa saja pesan tauhid utama dalam Surah Al-Mulk?",
      "Bagaimana keutamaan membaca Surah As-Sajdah sebelum tidur?",
      "Apa amalan yang dapat menerangi alam kubur?",
    ],
  },
  {
    id: "birrul-walidain",
    keywords: ["orang tua", "birrul walidain", "berbakti", "ibu", "ayah", "durhaka", "ridha orang tua"],
    jawaban: `Berbakti kepada kedua orang tua (*Birrul Walidain*) adalah amalan yang paling dicintai Allah setelah shalat tepat pada waktunya (HR. Bukhari no. 527 & Muslim no. 85). Allah Subhanahu wa Ta'ala menggandengkan perintah menyembah-Nya dengan perintah berbuat baik kepada orang tua:
*“Dan Tuhanmu telah memerintahkan agar kamu jangan menyembah selain Dia dan hendaklah berbuat baik kepada ibu bapak.”* (QS. Al-Isra': 23).

**Bentuk-Bentuk Berbakti Kepada Orang Tua**:
1. **Ketika Masih Hidup**: Bertutur kata lemah lembut (tidak berkata *"ah/cis"*), taat pada perintah mereka selama bukan maksiat, merawat di usia senja, memberi nafkah, dan mendoakan kebaikan bagi mereka.
2. **Setelah Mereka Wafat**: Mendoakan ampunan dan rahmat bagi mereka, melunasi hutang/nazar mereka, menyambung silaturahmi dengan kerabat dan sahabat orang tua, serta bersedekah atas nama mereka (*amal jariyah*).

**Keutamaan Birrul Walidain**:
- **Meraih Ridha Allah**: *"Ridha Allah berada pada ridha kedua orang tua, dan murka Allah berada pada murka kedua orang tua."* (HR. Tirmidzi no. 1899).
- **Pintu Tengah Surga**: Orang tua adalah pintu surga yang paling pertengahan.
- **Dipanjangkan Umur & Diluaskan Rezeki**: Silaturahmi dan bakti kepada orang tua menjadi sebab keberkahan hidup.`,
    rujukan: [
      { label: "Kitab Riyadhush Shalihin — Bab Berbakti Orang Tua", href: "/kitab/riyadhush-shalihin" },
      { label: "Tafsir QS. Al-Isra' Ayat 23-24", href: "/tafsir/17" },
      { label: "Hadis Syarah — Adab & Akhlak", href: "/hadis" },
    ],
    lanjutan: [
      "Bagaimana cara berbakti jika orang tua sudah meninggal dunia?",
      "Apa doa mustajab untuk kedua orang tua?",
      "Bagaimana hukum bersedekah atas nama orang tua yang telah wafat?",
    ],
  },
  {
    id: "niat",
    keywords: ["niat", "niyyat", "ikhlas", "keikhlasan", "amal perbuatan", "makna niat"],
    jawaban: `Niat merupakan poros utama yang menentukan diterima atau ditolaknya seluruh amal ibadah seorang hamba di sisi Allah Subhanahu wa Ta'ala.

Rasulullah shallallahu 'alaihi wa sallam bersabda dalam hadis yang sangat monumental:
*“Sesungguhnya setiap amalan tergantung pada niatnya, dan setiap orang akan mendapatkan balasan sesuai dengan apa yang ia niatkan.”* (HR. Bukhari no. 1 dan Muslim no. 1907).

**Kedudukan & Kaidah Fiqih Niat**:
1. **Pembeda Ibadah dan Kebiasaan**: Niat membedakan antara perbuatan adat/kebiasaan (seperti mandi untuk menyegarkan badan) dengan ibadah syar'i (seperti mandi junub untuk bersuci).
2. **Pembeda Tingkatan Ibadah**: Niat membedakan antara ibadah fardhu (wajib) dengan ibadah nafilah (sunnah).
3. **Tempat Niat**: Para ulama sepakat bahwa letak niat adalah di dalam **hati** (*al-qalb*). Melafalkannya dengan lisan (*talaffuzh*) menurut sebagian ulama madzhab Syafi'i berfungsi membantu memantapkan ingatan hati.
4. **Waktu Niat**: Pada ibadah shalat dan wudhu, niat dilakukan berbarengan dengan awal perbuatan ibadah (*muqaranah*). Pada puasa fardhu, niat wajib dilakukan pada malam hari sebelum fajar (*tabyit an-niyyah*).

Imam Syafi'i menegaskan bahwa hadis tentang niat mencakup sepertiga dari seluruh ilmu Islam dan menjadi landasan dalam lebih dari 70 bab fiqih.`,
    rujukan: [
      { label: "Hadis Bukhari no. 1 — Bab Niat", href: "/hadis/bukhari-1" },
      { label: "Kitab Riyadhush Shalihin — Bab 1", href: "/kitab/riyadhush-shalihin" },
      { label: "Kitab Al-Hikam — Keikhlasan", href: "/kitab/al-hikam" },
    ],
    lanjutan: [
      "Bagaimana hukum melafalkan niat sebelum shalat?",
      "Apa saja tanda-tanda amalan yang ikhlas?",
      "Bagaimana jika niat tercampur dengan riya?",
    ],
  },
  {
    id: "puasa",
    keywords: ["puasa", "shaum", "saum", "ramadhan", "ramadan", "syarat puasa", "batal puasa", "fidyah"],
    jawaban: `Puasa (*ash-shiyam*) secara bahasa bermakna menahan diri, sedangkan secara syariat adalah menahan diri dari segala hal yang membatalkan puasa mulai dari terbit fajar shadiq hingga terbenamnya matahari, disertai dengan niat karena Allah Ta'ala (QS. Al-Baqarah: 183).

**Rukun Puasa**:
1. **Niat pada malam hari** sebelum terbit fajar bagi puasa fardhu Ramadhan.
2. **Imsak (Menahan diri)** dari makan, minum, hubungan suami istri, dan hal-hal yang membatalkan puasa sejak fajar hingga maghrib.

**Sunnah-Sunnah Puasa yang Utama**:
- Mengakhirkan waktu makan sahur mendekati waktu subuh.
- Menyegerakan berbuka (*ta'jil*) ketika waktu maghrib telah tiba.
- Berbuka dengan kurma basah (*ruthab*), kurma kering (*tamr*), atau air putih.
- Membaca doa berbuka puasa.
- Memperbanyak tilawah Al-Qur'an, sedekah, dan shalat tarawih/tahajjud.
- Menjaga lisan dari perkataan dusta (*ghibah, namimah*), amarah, dan perbuatan tercela.

**Hal-Hal yang Membatalkan Puasa**:
Masuknya benda/makanan ke dalam rongga terbuka secara sengaja, muntah dengan sengaja, berhubungan suami istri, keluar air mani dengan sengaja, haid dan nifas, serta hilang akal/gila.`,
    rujukan: [
      { label: "Kitab Bulughul Maram — Bab Puasa", href: "/kitab/bulughul-maram" },
      { label: "Kitab Riyadhush Shalihin — Bab Puasa", href: "/kitab/riyadhush-shalihin" },
      { label: "Tafsir QS. Al-Baqarah Ayat 183", href: "/tafsir/2" },
    ],
    lanjutan: [
      "Siapa saja yang diberi keringanan tidak berpuasa?",
      "Bagaimana ketentuan bayar fidyah dan qadha puasa?",
      "Apa keutamaan malam Lailatul Qadar?",
    ],
  },
  {
    id: "doa",
    keywords: ["doa", "berdoa", "waktu mustajab", "adab doa", "ijabah", "dzikir"],
    jawaban: `Doa adalah saripati ibadah dan bentuk pengakuan ketundukan seorang hamba kepada Dzat Yang Maha Kuasa. Allah Subhanahu wa Ta'ala berfirman:
*“Dan Tuhanmu berfirman: ‘Berdoalah kepada-Ku, niscaya akan Kuperkenankan bagimu.’”* (QS. Ghafir: 60).

**Adab-Adab Berdoa Agar Diijabah**:
1. Mengawali doa dengan memuji dan mengagungkan Allah, lalu bershalawat kepada Nabi Muhammad shallallahu 'alaihi wa sallam.
2. Menghadap kiblat dan mengangkat kedua telapak tangan setinggi dada.
3. Merendahkan suara dengan penuh kekhusyukan (*tadharru'* dan *khauf*).
4. Yakin dengan sepenuh hati bahwa Allah akan mengabulkan doa tersebut.
5. Mengulang-ulang doa sebanyak 3 kali dan tidak tergesa-gesa meminta kepastian hasil.
6. Memastikan makanan, minuman, dan pakaian yang dikenakan bersumber dari rezeki yang halal.

**Waktu & Keadaan Paling Mustajab**:
- Sepertiga malam terakhir (*waktu sahur & tahajjud*).
- Di antara adzan dan iqamah.
- Saat sedang sujud dalam shalat.
- Hari Jum'at, khususnya saat-saat terakhir bakda ashar hingga maghrib.
- Ketika turun hujan lebat.
- Ketika sedang berpuasa dan saat berbuka puasa.
- Saat sedang menempuh perjalanan jauh (*safar*).`,
    rujukan: [
      { label: "Kitab Riyadhush Shalihin — Bab Doa", href: "/kitab/riyadhush-shalihin" },
      { label: "Tafsir QS. Al-Baqarah Ayat 186", href: "/tafsir/2" },
      { label: "Hadis Syarah — Dzikir & Doa", href: "/hadis" },
    ],
    lanjutan: [
      "Apa saja bacaan doa sapu jagad dan keutamaannya?",
      "Mengapa doa seorang hamba terkadang belum terkabul?",
      "Apa zikir pagi dan petang yang diajarkan Rasulullah?",
    ],
  },
  {
    id: "tawakal",
    keywords: ["tawakal", "tawakkal", "pasrah", "ikhtiar", "berserah diri", "rezeki"],
    jawaban: `Tawakal adalah menyandarkan hati sepenuhnya kepada Allah Subhanahu wa Ta'ala dalam meraih kebaikan dan menolak marabahaya, disertai dengan melakukan ikhtiar (usaha nyata) yang disyariatkan.

Allah Ta'ala berfirman:
*“Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya.”* (QS. At-Talaq: 3).

**Keseimbangan Antara Ikhtiar dan Tawakal**:
Rasulullah shallallahu 'alaihi wa sallam pernah bersabda kepada seorang sahabat yang membiarkan untanya tanpa diikat:
*“Ikatlah untamu terlebih dahulu, kemudian bertawakallah kepada Allah.”* (HR. Tirmidzi no. 2517).

Para ulama tasawuf dan aqidah menjelaskan:
1. **Ikhtiar adalah Sunnah Anggota Badan**: Manusia diperintahkan untuk bekerja, berobat saat sakit, belajar, dan berikhtiar secara maksimal.
2. **Tawakal adalah Amalan Hati**: Hati tidak boleh bergantung kepada usaha atau sebab kebendaan, melainkan hanya bergantung kepada Allah Sang Maha Penentu Hasil.
3. **Ketenangan Jiwa**: Buah dari tawakal yang benar adalah hilangnya rasa cemas yang berlebihan terhadap masa depan dan terhindar dari keputusasaan saat menghadapi ujian hidup.`,
    rujukan: [
      { label: "Kitab Al-Hikam — Hikmah Tawakal", href: "/kitab/al-hikam" },
      { label: "Kitab Riyadhush Shalihin — Bab Tawakal", href: "/kitab/riyadhush-shalihin" },
      { label: "Tafsir QS. At-Talaq Ayat 3", href: "/tafsir/65" },
    ],
    lanjutan: [
      "Bagaimana membedakan tawakal yang benar dengan pasrah tanpa usaha?",
      "Apa hikmah musibah dalam pandangan orang yang bertawakal?",
      "Bagaimana doa keluar rumah agar senantiasa dalam lindungan Allah?",
    ],
  },
  {
    id: "zakat",
    keywords: ["zakat", "zakat mal", "zakat fitrah", "nisab", "haul", "asnaf", "harta"],
    jawaban: `Zakat adalah rukun Islam ketiga yang merupakan kewajiban mengeluarkan sebagian harta tertentu bagi yang telah memenuhi syarat untuk diberikan kepada golongan yang berhak menerima (*asnaf*).

**A. Zakat Mal (Zakat Harta)**:
Dikenakan atas harta seperti emas, perak, tabungan, perniagaan, pertanian, dan peternakan dengan syarat telah mencapai **Nisab** (batas minimal harta) dan berlalu **Haul** (masa kepemilikan 1 tahun).
- Nisab emas: 85 gram emas murni.
- Kadar zakat: 2,5% dari total harta yang telah memenuhi nisab dan haul.

**B. Zakat Fitrah (Zakat Jiwa)**:
Wajib bagi setiap jiwa muslim yang hidup di bulan Ramadhan dan memiliki kelebihan makanan pada malam hari raya Idul Fitri.
- Ukuran: 1 sha' makanan pokok (sekitar 2,5 kg atau 3,5 liter beras per jiwa).
- Waktu penunaian: Sejak awal Ramadhan hingga sebelum pelaksanaan shalat Idul Fitri.

**8 Golongan Penerima Zakat (*Asnaf*)**:
Sesuai QS. At-Taubah: 60: Fakir, Miskin, Amil zakat, Muallaf, Hamba sahaya (*riqab*), Orang yang terlilit hutang (*gharimin*), Fi sabilillah (pejuang di jalan Allah), dan Ibnu sabil (musafir yang kehabisan bekal).`,
    rujukan: [
      { label: "Kitab Bulughul Maram — Bab Zakat", href: "/kitab/bulughul-maram" },
      { label: "Kitab Safinatun Najah — Bab Zakat", href: "/kitab/safinatun-najah" },
      { label: "Tafsir QS. At-Taubah Ayat 60", href: "/tafsir/9" },
    ],
    lanjutan: [
      "Bagaimana cara menghitung zakat tabungan dan penghasilan?",
      "Siapa saja kerabat yang tidak boleh menerima zakat?",
      "Apa perbedaan sedekah, infak, dan zakat?",
    ],
  },
  {
    id: "haji",
    keywords: ["haji", "umrah", "umroh", "ihram", "wukuf", "thawaf", "sa'i", "arafah"],
    jawaban: `Haji adalah rukun Islam kelima yang wajib dilaksanakan sekali seumur hidup bagi setiap muslim yang *istitha'ah* (mampu secara fisik, finansial, dan keamanan perjalanan) sesuai firman Allah dalam QS. Ali 'Imran: 97.

**Rukun Haji (Wajib dikerjakan dan tidak sah haji jika ditinggalkan)**:
1. **Ihram**: Berniat memulai ibadah haji dari miqat dengan mengenakan pakaian ihram.
2. **Wukuf di Padang Arafah**: Berdiam diri pada tanggal 9 Dzulhijjah mulai tergelincir matahari hingga fajar 10 Dzulhijjah.
3. **Thawaf Ifadhah**: Mengelilingi Ka'bah sebanyak 7 kali putaran.
4. **Sa'i**: Berjalan dan berlari-lari kecil sebanyak 7 putaran antara bukit Shafa dan Marwah.
5. **Tahallul**: Mencukur atau memotong sebagian rambut kepala.
6. **Tertib**: Melaksanakan rukun-rukun tersebut secara berurutan.

**Wajib Haji (Jika ditinggalkan, haji tetap sah namun wajib membayar dam/denda)**:
Niat ihram dari miqat, mabit di Muzdalifah, mabit di Mina pada hari tasyrik, melontar jumrah (Ula, Wustha, Aqabah), serta melaksanakan Thawaf Wada' sebelum meninggalkan Makkah.`,
    rujukan: [
      { label: "Kitab Bulughul Maram — Kitabul Hajj", href: "/kitab/bulughul-maram" },
      { label: "Kitab Riyadhush Shalihin — Bab Haji", href: "/kitab/riyadhush-shalihin" },
      { label: "Tafsir QS. Ali 'Imran Ayat 97", href: "/tafsir/3" },
    ],
    lanjutan: [
      "Apa saja larangan-larangan saat dalam keadaan ihram?",
      "Apa perbedaan mendasar antara rukun haji dan umrah?",
      "Bagaimana keutamaan haji mabrur?",
    ],
  },
  {
    id: "sabar-syukur",
    keywords: ["sabar", "syukur", "bersyukur", "ikhlas", "cobaan", "ujian hidup", "musibah"],
    jawaban: `Iman seorang mukmin dibangun di atas dua sayap yang saling melengkapi: **Sabar saat diuji** dan **Syukur saat diberi nikmat**. Rasulullah shallallahu 'alaihi wa sallam bersabda: *"Sungguh menakjubkan urusan orang beriman; jika mendapat kesenangan ia bersyukur maka itu baik baginya, dan jika ditimpa kesusahan ia bersabar maka itu baik baginya."* (HR. Muslim no. 2999).

**Tiga Tingkatan Sabar**:
1. **Sabar dalam Ketaatan**: Istiqamah menjalankan perintah Allah meskipun terasa berat bagi hawa nafsu.
2. **Sabar dari Kemaksiatan**: Menahan diri dari godaan berbuat dosa dan maksiat.
3. **Sabar atas Takdir & Musibah**: Menahan lisan dari keluh kesah dan menahan hati dari berburuk sangka kepada ketetapan Allah.

**Tiga Rukun Syukur**:
1. **Syukur dengan Hati**: Meyakini sepenuhnya bahwa seluruh nikmat datang murni dari karunia Allah.
2. **Syukur dengan Lisan**: Memperbanyak ucapan *Alhamdulillāh* dan memuji kebaikan Allah.
3. **Syukur dengan Anggota Badan**: Menggunakan nikmat yang diberikan (kesehatan, harta, ilmu) untuk ketaatan di jalan-Nya.`,
    rujukan: [
      { label: "Kitab Riyadhush Shalihin — Bab Sabar", href: "/kitab/riyadhush-shalihin" },
      { label: "Kitab Al-Hikam — Syukur & Ujian", href: "/kitab/al-hikam" },
      { label: "Tafsir QS. Ibrahim Ayat 7", href: "/tafsir/14" },
    ],
    lanjutan: [
      "Bagaimana cara melatih hati agar selalu bersabar?",
      "Apa janji Allah bagi hamba yang senantiasa bersyukur?",
      "Bagaimana sikap seorang muslim saat menghadapi kesulitan hidup?",
    ],
  },
]

export function cariJawaban(pertanyaan: string): {
  jawaban: string
  rujukan: TanyaAiRujukan[]
  lanjutan: string[]
} {
  const q = pertanyaan
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")

  if (!q) {
    return {
      jawaban: "Silakan masukkan pertanyaan seputar ibadah, aqidah, tafsir, hadis, atau kitab ulama.",
      rujukan: [
        { label: "Tafsir Al-Qur'an", href: "/tafsir" },
        { label: "Hadis & Syarah", href: "/hadis" },
        { label: "Kitab Ulama", href: "/kitab" },
      ],
      lanjutan: [
        "Apa itu niat?",
        "Bagaimana tata cara wudhu sesuai sunnah?",
        "Apa syarat sah shalat?",
      ],
    }
  }

  let best: TanyaAiItem | null = null
  let bestScore = 0

  for (const item of tanyaAiList) {
    let score = 0
    for (const kw of item.keywords) {
      const cleanKw = kw.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").trim()
      if (!cleanKw) continue

      if (q.includes(cleanKw)) {
        // High weight for multi-word or exact specific matches
        score += cleanKw.length * (cleanKw.includes(" ") ? 5 : 2)
      }
    }
    if (score > bestScore) {
      bestScore = score
      best = item
    }
  }

  if (best && bestScore > 0) {
    return {
      jawaban: best.jawaban,
      rujukan: best.rujukan,
      lanjutan: best.lanjutan,
    }
  }

  return {
    jawaban: "",
    rujukan: [],
    lanjutan: [
      "Bagaimana pandangan ulama mengenai topik ini?",
      "Apa dalil Al-Qur'an dan Hadis terkait?",
      "Bagaimana penerapannya dalam kehidupan sehari-hari?",
    ],
  }
}
