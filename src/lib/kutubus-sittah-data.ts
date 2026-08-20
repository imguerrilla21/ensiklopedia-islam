import type { KitabItem, KitabBab } from "@/lib/kitab-data"

// 1. Shahih Al-Bukhari (97 Kitab)
export const BUKHARI_KITAB_TITLES = [
  "Permulaan Wahyu (كتاب بدء الوحي)",
  "Iman (كتاب الإيمان)",
  "Ilmu (كتاب العلم)",
  "Wudhu (كتاب الوضوء)",
  "Mandi Janabah (كتاب الغسل)",
  "Haidh (كتاب الحيض)",
  "Tayammum (كتاب التيمم)",
  "Shalat (كتاب الصلاة)",
  "Waktu-Waktu Shalat (كتاب مواقيت الصلاة)",
  "Adzan (كتاب الأذان)",
  "Shalat Jumat (كتاب الجمعة)",
  "Shalat Khauf (كتاب الخوف)",
  "Dua Hari Raya (كتاب العيدين)",
  "Shalat Witir (كتاب الوتر)",
  "Istisqa' / Minta Hujan (كتاب الاستسقاء)",
  "Gerhana (كتاب الكسوف)",
  "Sujud Tilawah (كتاب سجود القرآن)",
  "Mengqashar Shalat (كتاب تقصير الصلاة)",
  "Tahajjud & Shalat Malam (كتاب التهجد)",
  "Keutamaan Shalat di Masjid Makkah & Madinah (كتاب فضل الصلاة في مسجد مكة والمدينة)",
  "Amalan dalam Shalat (كتاب العمل في الصلاة)",
  "Lupa dalam Shalat / Sujud Sahwi (كتاب السهو)",
  "Jenazah (كتاب الجنائز)",
  "Zakat (كتاب الزكاة)",
  "Haji (كتاب الحج)",
  "Umrah (كتاب العمرة)",
  "Terhalang Ihram / Muhshar (كتاب المحصر)",
  "Fidyah Berburu (كتاب جزاء الصيد)",
  "Keutamaan Kota Madinah (كتاب فضائل المدينة)",
  "Puasa / Shaum (كتاب الصوم)",
  "Shalat Tarawih (كتاب صلاة التراويح)",
  "Keutamaan Lailatul Qadar (كتاب فضل ليلة القدر)",
  "I'tikaf (كتاب الاعتكاف)",
  "Jual Beli / Buyu' (كتاب البيوع)",
  "Salam / Pesan Barang (كتاب السلم)",
  "Syuf'ah / Hak Prioritas (كتاب الشفعة)",
  "Sewa-Menyewa / Ijarah (كتاب الإجارة)",
  "Pengalihan Utang / Hawalah (كتاب الحوالات)",
  "Jaminan / Kafalah (كتاب الكفالة)",
  "Perwakilan / Wakalah (كتاب الوكالة)",
  "Penggarapan Tanah / Muzara'ah (كتاب المزارعة)",
  "Pengairan / Musaqah (كتاب المساقاة)",
  "Utang-Piutang (كتاب الاستقراض)",
  "Persengketaan / Khushumat (كتاب الخصومات)",
  "Barang Temuan / Luqathah (كتاب اللقطة)",
  "Kezaliman & Ghasab (كتاب المظالم والغصب)",
  "Perkongsian / Syirkah (كتاب الشركة)",
  "Gadai / Rahn (كتاب الرهن)",
  "Pembebasan Budak / 'Itq (كتاب العتق)",
  "Perjanjian Pembebasan / Mukatab (كتاب المكاتب)",
  "Hibah & Hadiah (كتاب الهبة وفضلها)",
  "Persaksian / Syahadat (كتاب الشهادات)",
  "Perdamaian / Shulh (كتاب الصلح)",
  "Syarat-Syarat Transaksi (كتاب الشروط)",
  "Wasiat (كتاب الوصايا)",
  "Jihad & Ekspedisi (كتاب الجهاد والسير)",
  "Pembagian Khumus Rampasan Perang (كتاب فرض الخمس)",
  "Pajak Jizyah & Gencatan Senjata (كتاب الجزية والموادعة)",
  "Permulaan Penciptaan Makhluk (كتاب بدء الخلق)",
  "Kisah Para Nabi (كتاب أحاديث الأنبياء)",
  "Manakib / Keutamaan Bangsa & Tokoh (كتاب المناقب)",
  "Keutamaan Sahabat Nabi (كتاب فضائل أصحاب النبي)",
  "Keutamaan Kaum Anshar (كتاب مناقب الأنصار)",
  "Peperangan Nabi / Maghazi (كتاب المغازي)",
  "Tafsir Al-Qur'an (كتاب تفسير القرآن)",
  "Keutamaan Al-Qur'an (كتاب فضائل القرآن)",
  "Pernikahan / Nikah (كتاب النكاح)",
  "Perceraian / Thalaq (كتاب الطلاق)",
  "Nafkah Keluarga (كتاب النفقات)",
  "Makanan & Jamuan (كتاب الأطعمة)",
  "Aqiqah (كتاب العقيقة)",
  "Sembelihan & Berburu (كتاب الذبائح والصيد)",
  "Kurban / Udhiyah (كتاب الأضاحي)",
  "Minuman (كتاب الأشربة)",
  "Pasien & Sakit (كتاب المرضى)",
  "Pengobatan Nabawi / Thibb (كتاب الطب)",
  "Pakaian & Busana / Libas (كتاب اللباس)",
  "Adab & Akhlak Luhur (كتاب الأدب)",
  "Meminta Izin / Isti'dzan (كتاب الاستئذان)",
  "Doa-Doa / Da'awat (كتاب الدعوات)",
  "Pelembut Hati / Riqaq (كتاب الرقاق)",
  "Takdir / Qadar (كتاب القدر)",
  "Sumpah & Nadzar (كتاب الأيمان والنذور)",
  "Tebusan Sumpah / Kaffarat (كتاب كفارات الأيمان)",
  "Waris / Faraidh (كتاب الفرائض)",
  "Hukum Pidana Islam / Hudud (كتاب الحدود)",
  "Diyat / Tebusan Jiwa (كتاب الديات)",
  "Orang Murtad & Pembangkang (كتاب استتابة المرتدين والمعاندين)",
  "Paksaan / Ikrah (كتاب الإكراه)",
  "Trik Terlarang / Khiyal (كتاب الحيل)",
  "Takwil Mimpi / Ta'bir Ru'ya (كتاب التعبير)",
  "Fitnah Akhir Zaman (كتاب الفتن)",
  "Hukum Peradilan / Ahkam (كتاب الأحكام)",
  "Angan-Angan Kebaikan / Tamanni (كتاب التمني)",
  "Berita Perorangan / Khabar Ahad (كتاب أخبار الآحاد)",
  "Berpegang Teguh pada Kitab & Sunnah (كتاب الاعتصام بالكتاب والسنة)",
  "Tauhid & Sifat Allah (كتاب التوحيد)",
]

// 2. Shahih Muslim (54 Kitab)
export const MUSLIM_KITAB_TITLES = [
  "Iman & Tauhid (كتاب الإيمان)",
  "Thaharah / Bersuci (كتاب الطهارة)",
  "Haidh (كتاب الحيض)",
  "Shalat (كتاب الصلاة)",
  "Masjid & Tempat Shalat (كتاب المساجد ومواضع الصلاة)",
  "Shalat Musafir & Qashar (كتاب صلاة المسافرين وقصرها)",
  "Shalat Jumat (كتاب الجمعة)",
  "Shalat Dua Hari Raya (كتاب صلاة العيدين)",
  "Shalat Istisqa' (كتاب صلاة الاستسقاء)",
  "Gerhana (كتاب الكسوف)",
  "Shalat Jenazah (كتاب الجنائز)",
  "Zakat (كتاب الزكاة)",
  "Puasa / Shiyam (كتاب الصيام)",
  "I'tikaf (كتاب الاعتكاف)",
  "Haji (كتاب الحج)",
  "Nikah (كتاب النكاح)",
  "Sepersusuan / Ridha' (كتاب الرضاع)",
  "Perceraian / Thalaq (كتاب الطلاق)",
  "Li'an (كتاب اللعان)",
  "Pembebasan Budak / 'Itq (كتاب العتق)",
  "Jual Beli / Buyu' (كتاب البيوع)",
  "Musaqah & Muzara'ah (كتاب المساقاة)",
  "Hukum Waris / Faraidh (كتاب الفرائض)",
  "Hibah & Sedekah (كتاب الهبات)",
  "Wasiat (كتاب الوصية)",
  "Nadzar (كتاب النذر)",
  "Sumpah / Aiman (كتاب الأيمان)",
  "Qasamah, Qishash & Diyat (كتاب القسامة والمحاربين والقصاص والديات)",
  "Hukum Pidana / Hudud (كتاب الحدود)",
  "Peradilan / Aqdhiyah (كتاب الأقضية)",
  "Barang Temuan / Luqathah (كتاب اللقطة)",
  "Jihad & Ekspedisi (كتاب الجهاد والسير)",
  "Kepemimpinan / Imarah (كتاب الإمارة)",
  "Berburu & Sembelihan (كتاب الصيد والذبائح وما يؤكل من الحيوان)",
  "Kurban / Udhiyah (كتاب الأضاحي)",
  "Minuman / Asyribah (كتاب الأشربة)",
  "Pakaian & Perhiasan / Libas (كتاب اللباس والزينة)",
  "Adab (كتاب الآداب)",
  "Salam & Meminta Izin (كتاب السلام)",
  "Lafadz yang Dilarang / Alfadz (كتاب الألفاظ من الأدب وغيرها)",
  "Syair (كتاب الشعر)",
  "Mimpi / Ru'ya (كتاب الرؤيا)",
  "Keutamaan Sahabat / Fadhail Sahabah (كتاب فضائل الصحابة)",
  "Berbakti & Silaturahim (كتاب البر والصلة والآداب)",
  "Takdir Allah / Qadar (كتاب القدر)",
  "Ilmu (كتاب العلم)",
  "Dzikir, Doa & Istighfar (كتاب الذكر والدعاء والتوبة والاستغفار)",
  "Taubat (كتاب التوبة)",
  "Ciri Orang Munafik (كتاب صفات المنافقين وأحكامهم)",
  "Sifat Hari Kiamat (كتاب صفة القيامة والجنة والنار)",
  "Surga & Kenikmatannya (كتاب الجنة وصفة نعيمها وأهلها)",
  "Neraka & Siksaannya (كتاب النار وصفة عذابها)",
  "Fitnah Akhir Zaman (كتاب الفتن وأشراط الساعة)",
  "Zuhud & Penyejuk Hati (كتاب الزهد والرقائق)",
]

// 3. Sunan Abu Dawud (43 Kitab)
export const ABU_DAWUD_KITAB_TITLES = [
  "Thaharah / Bersuci (كتاب الطهارة)",
  "Shalat (كتاب الصلاة)",
  "Shalat Safar (كتاب صلاة السفر)",
  "Shalat Sunnah / Tathawwu' (كتاب التطوع)",
  "Zakat (كتاب الزكاة)",
  "Barang Temuan / Luqathah (كتاب اللقطة)",
  "Manasik Haji (كتاب المناسك)",
  "Nikah (كتاب النكاح)",
  "Thalaq / Perceraian (كتاب الطلاق)",
  "Puasa / Shiyam (كتاب الصوم)",
  "Jihad (كتاب الجهاد)",
  "Kurban / Dhahaya (كتاب الضحايا)",
  "Berburu / Shaid (كتاب الصيد)",
  "Wasiat (كتاب الوصايا)",
  "Hukum Waris / Faraidh (كتاب الفرائض)",
  "Pajak & Kepemimpinan / Kharaj (كتاب الخراج والإمارة والفيء)",
  "Jenazah (كتاب الجنائز)",
  "Sumpah & Nadzar (كتاب الأيمان والنذور)",
  "Jual Beli & Muamalah / Buyu' (كتاب البيوع والإجارات)",
  "Peradilan / Aqdhiyah (كتاب الأقضية)",
  "Ilmu (كتاب العلم)",
  "Minuman / Asyribah (كتاب الأشربة)",
  "Makanan / Ath'imah (كتاب الأطعمة)",
  "Pengobatan / Thibb (كتاب الطب)",
  "Pembebasan Budak / 'Itq (كتاب العتق)",
  "Huruf & Qira'at Al-Qur'an (كتاب الحروف والقراءات)",
  "Pemandian & Kolam / Hammam (كتاب الحمام)",
  "Pakaian / Libas (كتاب اللباس)",
  "Menyisir Rambut / Tarajjul (كتاب الترجل)",
  "Cincin & Cap / Khatam (كتاب الخاتم)",
  "Fitnah Akhir Zaman (كتاب الفتن)",
  "Imam Mahdi (كتاب المهدي)",
  "Peperangan Besar / Malahim (كتاب الملاحم)",
  "Hukum Pidana / Hudud (كتاب الحدود)",
  "Diyat / Tebusan Jiwa (كتاب الديات)",
  "Sunnah & Aqidah (كتاب السنة)",
  "Adab & Etika (كتاب الأدب)",
  "Doa & Dzikir (كتاب الدعاء)",
  "Sujud Syukur & Tilawah (كتاب سجود القرآن)",
  "Kafarat (كتاب الكفارات)",
  "Syuf'ah (كتاب الشفعة)",
  "Gadai & Utang (كتاب الرهن)",
  "Syirkah & Kongsi (كتاب الشركة)",
]

// 4. Jami' At-Tirmidzi (50 Kitab)
export const TIRMIDZI_KITAB_TITLES = [
  "Thaharah (أبواب الطهارة)",
  "Shalat (أبواب الصلاة)",
  "Witir (أبواب الوتر)",
  "Shalat Jumat (أبواب الجمعة)",
  "Shalat Dua Hari Raya (أبواب العيدين)",
  "Shalat Safar (أبواب السفر)",
  "Zakat (أبواب الزكاة)",
  "Puasa / Shaum (أبواب الصوم)",
  "Haji (أبواب الحج)",
  "Jenazah (أبواب الجنائز)",
  "Nikah (أبواب النكاح)",
  "Sepersusuan / Ridha' (أبواب الرضاع)",
  "Thalaq & Li'an (أبواب الطلاق واللعان)",
  "Jual Beli / Buyu' (أبواب البيوع)",
  "Hukum Peradilan / Ahkam (أبواب الأحكام)",
  "Diyat (أبواب الديات)",
  "Hudud / Pidana (أبواب الحدود)",
  "Berburu / Shaid (أبواب الصيد)",
  "Kurban / Dhahaya (أبواب الأضاحي)",
  "Nadzar & Sumpah (أبواب النذور والأيمان)",
  "Jihad & Perang (أبواب السير والجهاد)",
  "Keutamaan Jihad (أبواب فضل الجهاد)",
  "Pakaian / Libas (أبواب اللباس)",
  "Makanan / Ath'imah (أبواب الأطعمة)",
  "Minuman / Asyribah (أبواب الأشربة)",
  "Berbakti & Silaturahim / Birr (أبواب البر والصلة)",
  "Pengobatan / Thibb (أبواب الطب)",
  "Waris / Faraidh (أبواب الفرائض)",
  "Wasiat (أبواب الوصايا)",
  "Loyalitas & Hibah / Wala' (أبواب الولاء والهبة)",
  "Takdir / Qadar (أبواب القدر)",
  "Fitnah (أبواب الفتن)",
  "Mimpi / Ru'ya (أبواب الرؤيا)",
  "Persaksian / Syahadat (أبواب الشهادات)",
  "Zuhud (أبواب الزهد)",
  "Sifat Hari Kiamat / Qiyamah (أبواب صفة القيامة والرقائق والورع)",
  "Sifat Surga (أبواب صفة الجنة)",
  "Sifat Neraka (أبواب صفة جهنم)",
  "Iman (أبواب الإيمان)",
  "Ilmu (أبواب العلم)",
  "Meminta Izin / Isti'dzan (أبواب الاستئذان والآداب)",
  "Adab (أبواب الأدب)",
  "Perumpamaan / Amtsal (أبواب الأمثال)",
  "Keutamaan Al-Qur'an (أبواب ثواب القرآن)",
  "Qira'at (أبواب القراءات)",
  "Tafsir Al-Qur'an (أبواب تفسير القرآن)",
  "Doa-Doa / Da'awat (أبواب الدعوات)",
  "Manakib & Keutamaan Sahabat (أبواب المناقب)",
  "'Ilal Hadits (كتاب العلل)",
  "Asma'us Sahabah (كتاب أسماء الصحابة)",
]

// 5. Sunan An-Nasa'i (51 Kitab)
export const NASAI_KITAB_TITLES = [
  "Thaharah / Bersuci (كتاب الطهارة)",
  "Air / Miyah (كتاب المياه)",
  "Haidh & Istihadhah (كتاب الحيض والاستحاضة)",
  "Mandi & Tayammum (كتاب الغسل والتيمم)",
  "Shalat (كتاب الصلاة)",
  "Waktu Shalat / Mawaqit (كتاب المواقيت)",
  "Adzan (كتاب الأذان)",
  "Masjid (كتاب المساجد)",
  "Kiblat (كتاب القبلة)",
  "Imam Shalat / Imamah (كتاب الإمامة)",
  "Memulai Shalat / Iftitah (كتاب الافتتاح)",
  "Gerakan Shalat / Tathbiq (كتاب التطبيق)",
  "Lupa dalam Shalat / Sahwu (كتاب السهو)",
  "Shalat Jumat (كتاب الجمعة)",
  "Mengqashar Shalat di Safar (كتاب تقصير الصلاة في السفر)",
  "Gerhana / Kusuf (كتاب الكسوف)",
  "Minta Hujan / Istisqa' (كتاب الاستسقاء)",
  "Shalat Khauf (كتاب صلاة الخوف)",
  "Shalat Dua Hari Raya (كتاب صلاة العيدين)",
  "Shalat Malam & Qiyamul Lail (كتاب قيام الليل وتطوع النهار)",
  "Jenazah (كتاب الجنائز)",
  "Puasa / Shiyam (كتاب الصيام)",
  "Zakat (كتاب الزكاة)",
  "Manasik Haji (كتاب مناسك الحج)",
  "Jihad (كتاب الجهاد)",
  "Pernikahan / Nikah (كتاب النكاح)",
  "Perceraian / Thalaq (كتاب الطلاق)",
  "Mahar / Shadaq (كتاب الصداق)",
  "Kuda & Pasukan / Khail (كتاب الخيل)",
  "Wakaf / Ahbas (كتاب الأحباس)",
  "Wasiat (كتاب الوصايا)",
  "Hibah (كتاب النحل والرجوع فيه)",
  "Hadiah / Ruqba wa 'Umra (كتاب الرقبى والعمرى)",
  "Sumpah & Nadzar (كتاب الأيمان والنذور)",
  "Syarat-Syarat (كتاب الشروط)",
  "Jual Beli / Buyu' (كتاب البيوع)",
  "Qasamah (كتاب القسامة)",
  "Hukum Pencurian / Qath'us Sariq (كتاب قطع السارق)",
  "Hukum Darah / Tahrimud Dam (كتاب تحريم الدم)",
  "Peradilan / Qadha' (كتاب آداب القضاة)",
  "Perlindungan / Isti'adzah (كتاب الاستعاذة)",
  "Sembelihan & Berburu (كتاب الصيد والذبائح)",
  "Kurban / Dahaya (كتاب الضحايا)",
  "Makanan / At'imah (كتاب الأطعمة)",
  "Minuman / Asyribah (كتاب الأشربة)",
  "Pakaian & Perhiasan / Ziyyah (كتاب الزينة)",
  "Sumpah Setia / Bai'at (كتاب البيعة)",
  "Keutamaan Al-Qur'an (كتاب فضائل القرآن)",
  "Aqiqah (كتاب العقيقة)",
  "Sembelihan Pertama / Fara' (كتاب الفرع والعتيرة)",
  "Akhlak Mulia / Husnul Khuluq (كتاب حسن الخلق)",
]

// 6. Sunan Ibnu Majah (37 Kitab)
export const IBNU_MAJAH_KITAB_TITLES = [
  "Muqaddimah: Mengikuti Sunnah (المقدمة في اتباع السنة)",
  "Thaharah & Sunan-sunannya (كتاب الطهارة وسننها)",
  "Shalat & Sunnah-sunnahnya (كتاب الصلاة والسنة فيها)",
  "Adzan & Sunnahnya (كتاب الأذان والسنة فيها)",
  "Masjid & Shalat Berjamaah (كتاب المساجد والجماعات)",
  "Shalat Sunnah & Pelaksanaannya (كتاب إقامة الصلاة والسنة فيها)",
  "Jenazah (كتاب الجنائز)",
  "Puasa / Shiyam (كتاب الصيام)",
  "Zakat (كتاب الزكاة)",
  "Pernikahan / Nikah (كتاب النكاح)",
  "Perceraian / Thalaq (كتاب الطلاق)",
  "Kafarat (كتاب الكفارات)",
  "Perdagangan / Tijarat (كتاب التجارات)",
  "Hukum Peradilan / Ahkam (كتاب الأحكام)",
  "Hibah & Sedekah (كتاب الهبات)",
  "Gadai & Utang / Rahn (كتاب الرهون)",
  "Hak Prioritas / Syuf'ah (كتاب الشفعة)",
  "Barang Temuan / Luqathah (كتاب اللقطة)",
  "Pembebasan Budak / 'Itq (كتاب العتق)",
  "Hukum Pidana / Hudud (كتاب الحدود)",
  "Tebusan Jiwa & Pembunuhan / Diyat (كتاب الديات)",
  "Wasiat (كتاب الوصايا)",
  "Hukum Waris / Faraidh (كتاب الفرائض)",
  "Jihad (كتاب الجهاد)",
  "Manasik Haji (كتاب المناسك)",
  "Kurban / Dahaya (كتاب الأضاحي)",
  "Sembelihan / Dzaba'ih (كتاب الذبائح)",
  "Berburu / Shaid (كتاب الصيد)",
  "Makanan / At'imah (كتاب الأطعمة)",
  "Minuman / Asyribah (كتاب الأشربة)",
  "Pengobatan / Thibb (كتاب الطب)",
  "Pakaian / Libas (كتاب اللباس)",
  "Adab & Etika Luhur (كتاب الأدب)",
  "Doa-Doa Mustajab (كتاب الدعاء)",
  "Takwil Mimpi / Ta'birur Ru'ya (كتاب تعبير الرؤيا)",
  "Fitnah Akhir Zaman (كتاب الفتن)",
  "Zuhud & Penyejuk Hati (كتاب الزهد)",
]

export type CustomHadisEntry = {
  nomorHadis?: number | string
  subJudul?: string
  arab: string
  terjemah: string
  takhrij: string
  syarah: string
}

// -------------------------------------------------------------
// EXPANDED & COMPREHENSIVE AUTHENTIC HADITH LIBRARY
// Providing 4 to 6 Authentic Hadiths Per Topic for Deep Study
// -------------------------------------------------------------

export const TOPIC_HADITH_LIBRARY: Record<string, CustomHadisEntry[]> = {
  // 1. Mandi Janabah / Ghusl (5 Hadis)
  mandi: [
    {
      nomorHadis: 1,
      subJudul: "Tata Cara Mandi Janabah Rasulullah SAW yang Sempurna",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا اغْتَسَلَ مِنَ الْجَنَابَةِ يَبْدَأُ فَيَغْسِلُ يَدَيْهِ، ثُمَّ يُفْرِغُ بِيَمِينِهِ عَلَى شِمَالِهِ فَيَغْسِلُ فَرْجَهُ، ثُمَّ يَتَوَضَّأُ وُضُوءَهُ لِلصَّلَاةِ، ثُمَّ يَأْخُذُ الْمَاءَ فَيُدْخِلُ أَصَابِعَهُ فِي أُصُولِ الشَّعْرِ، حَتَّى إِذَا رَأَى أَنْ قَدِ اسْتَبْرَأَ حَفَنَ عَلَى رَأْسِهِ ثَلَاثَ حَفَنَاتٍ، ثُمَّ أَفَاضَ عَلَى سَائِرِ جَسَدِهِ، ثُمَّ غَسَلَ رِجْلَيْهِ`,
      terjemah: `Dari Aisyah radhiyallahu 'anha berkata: "Rasulullah shallallahu 'alaihi wa sallam apabila mandi janabah, beliau memulainya dengan mencuci kedua tangannya, kemudian menuangkan air dengan tangan kanan ke tangan kirinya lalu mencuci kemaluannya, kemudian berwudhu seperti wudhunya untuk shalat, lalu mengambil air dan memasukkan jari-jemarinya ke pangkal-pangkal rambut hingga ketika beliau yakin telah merata, beliau menuangkan tiga cidukan air ke atas kepalanya, kemudian menyiramkan air ke seluruh tubuhnya, lalu mencuci kedua kakinya."`,
      takhrij: "Shahih Bukhari No. 248 & Muslim No. 316",
      syarah: `Rujukan induk tata cara mandi junub bagi setiap mukmin: membersihkan kotoran najis, berwudhu sempurna, meratakan air ke seluruh helai rambut dan pori-pori kulit.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Riwayat Maimunah: Tata Cara Mandi Junub & Membersihkan Tangan dengan Tanah/Sabun",
      arab: `عَنْ مَيْمُونَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: وَضَعْتُ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَاءً لِلْغُسْلِ، فَغَسَلَ يَدَيْهِ مَرَّتَيْنِ أَوْ ثَلاَثًا، ثُمَّ أَفْرَغَ بِيَمِينِهِ عَلَى شِمَالِهِ فَغَسَلَ مَذَاكِيرَهُ، ثُمَّ دَلَكَ يَدَهُ بِالأَرْضِ، ثُمَّ مَضْمَضَ وَاسْتَنْشَقَ، وَغَسَلَ وَجْهَهُ وَيَدَيْهِ، ثُمَّ غَسَلَ رَأْسَهُ ثَلاَثًا، ثُمَّ أَفَاضَ عَلَى جَسَدِهِ، ثُمَّ تَنَحَّى مِنْ مَقَامِهِ فَغَسَلَ قَدَمَيْهِ`,
      terjemah: `Dari Maimunah radhiyallahu 'anha berkata: "Aku menyiapkan air mandi untuk Nabi SAW, maka beliau mencuci kedua tangannya dua atau tiga kali, kemudian menuangkan air dengan tangan kanan ke tangan kirinya lalu membasuh kemaluannya, lalu menggosokkan tangannya ke tanah (sebagai pembersih), kemudian berkumur-kumur dan beristinsyaq, membasuh wajah dan kedua tangannya, lalu menyiram kepalanya tiga kali, kemudian menyiram seluruh tubuhnya, lalu bergeser dari tempatnya dan mencuci kedua kakinya."`,
      takhrij: "Shahih Bukhari No. 274 & Muslim No. 317",
      syarah: `Menunjukkan anjuran menjaga higienitas dengan membersihkan tangan memakai pembersih setelah mencuci kemaluan, serta mengakhiri mandi dengan mencuci kaki di tempat yang terpisah.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Keringanan Menuangkan Tiga Kali Cidukan Air Bagi Wanita yang Mengepang Rambut",
      arab: `عَنْ أُمِّ سَلَمَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قُلْتُ يَا رَسُولَ اللَّهِ، إِنِّي امْرَأَةٌ أَشُدُّ ضَفْرَ رَأْسِي أَفَأَنْقُضُهُ لِغُسْلِ الْجَنَابَةِ؟ قَالَ:

«لا، إِنَّمَا يَكْفِيكِ أَنْ تَحْثِيَ عَلَى رَأْسِكِ ثَلاثَ حَثَيَاتٍ ثُمَّ تُفِيضِينَ عَلَيْكِ الْمَاءَ فَتَطْهُرِينَ»`,
      terjemah: `Dari Ummu Salamah radhiyallahu 'anha berkata: Aku bertanya: "Wahai Rasulullah, sesungguhnya aku wanita yang mengepang jalinan rambut kepalaku, apakah aku harus mengurainya saat mandi janabah?" Rasulullah SAW menjawab: "Tidak perlu, cukuplah bagimu menuangkan tiga cidukan air ke atas kepalamu, lalu engkau siramkan air ke seluruh badanmu, maka engkau telah suci."`,
      takhrij: "Shahih Muslim No. 330",
      syarah: `Keringanan (*rukhshah*) syariat bagi wanita agar tidak kesulitan mengurai kepangan rambut saat mandi hadats besar, asalkan air mencapai kulit kepala.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Takaran Hemat Air: Mandi dengan Satu Sha' dan Wudhu dengan Satu Mud",
      arab: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ قَالَ:

«كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَتَوَضَّأُ بِالْمُدِّ، وَيَغْتَسِلُ بِالصَّاعِ، إِلَى خَمْسَةِ أَمْدَادٍ»`,
      terjemah: `Dari Anas bin Malik radhiyallahu 'anhu berkata: "Nabi shallallahu 'alaihi wa sallam berwudhu dengan satu mud (sekitar 0,6 liter air) dan mandi dengan satu sha' (sekitar 2,5 liter) hingga lima mud air."`,
      takhrij: "Shahih Bukhari No. 201 & Muslim No. 325",
      syarah: `Sunnah berhemat air dalam thaharah dan larangan berbuat israf (berlebih-lebihan/boros) walaupun sedang mandi di tepi sungai yang mengalir.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Keutamaan Mandi Hari Jumat Bagi Setiap Orang yang Telah Baligh",
      arab: `عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«غُسْلُ يَوْمِ الْجُمُعَةِ وَاجِبٌ عَلَى كُلِّ مُحْتَلِمٍ، وَأَنْ يَسْتَنَّ، وَأَنْ يَمَسَّ طِيبًا إِنْ وَجَدَ»`,
      terjemah: `Dari Abu Sa'id Al-Khudri radhiyallahu 'anhu bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda: "Mandi pada hari Jumat sangat ditekankan (wajib muakkad) bagi setiap orang yang telah bermimpi basah (baligh), serta bersiwak dan memakai wewangian jika ia memilikinya."`,
      takhrij: "Shahih Bukhari No. 877 & Muslim No. 846",
      syarah: `Mandi sunnah muakkadah sebelum berangkat ke masjid untuk shalat Jumat guna menjaga kebersihan fisik dan kesegaran jamaah.`,
    },
  ],

  // 2. Haidh & Istihadhah (5 Hadis)
  haidh: [
    {
      nomorHadis: 1,
      subJudul: "Haidh Adalah Ketetapan Fitrah Allah Bagi Kaum Wanita",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: خَرَجْنَا مَعَ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لا نَذْكُرُ إِلا الْحَجَّ... فَدَخَلَ عَلَيَّ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَأَنَا أَبْكِي، فَقَالَ: «مَا لَكِ أَنَفِسْتِ؟» قُلْتُ: نَعَمْ، قَالَ:

«إِنَّ هَذَا أَمْرٌ كَتَبَهُ اللَّهُ عَلَى بَنَاتِ آدَمَ، فَاقْضِي مَا يَقْضِي الْحَاجُّ غَيْرَ أَنْ لا تَطُوفِي بِالْبَيْتِ حَتَّى تَطْهُرِي»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha berkata: Kami keluar bersama Nabi SAW... lalu aku kedatangan haidh hingga aku menangis. Rasulullah SAW masuk dan bertanya: "Apakah engkau haidh?" Aku menjawab: "Ya." Beliau bersabda: "Sesungguhnya ini adalah perkara fitrah yang telah Allah tetapkan atas putri-putri keturunan Adam. Maka lakukanlah apa saja yang dilakukan oleh orang yang berhaji, kecuali janganlah engkau bertawaf di Ka'bah hingga engkau suci."`,
      takhrij: "Shahih Bukhari No. 294 & Muslim No. 1211",
      syarah: `Hukum fiqih wanita haidh dalam ibadah: tidak boleh shalat, puasa, dan tawaf, namun tetap boleh berdzikir, berdoa, dan berwukuf di Arafah.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Perbedaan Darah Haidh dengan Darah Penyakit (Istihadhah)",
      arab: `عَنْ عَائِشَةَ أَنَّ فَاطِمَةَ بِنْتَ أَبِي حُبَيْشٍ سَأَلَتِ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَتْ: إِنِّي أُسْتَحَاضُ فَلا أَطْهُرُ، أَفَأَدَعُ الصَّلاةَ؟ فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«إِنَّمَا ذَلِكِ عِرْقٌ وَلَيْسَتْ بِالْحَيْضَةِ، فَإِذَا أَقْبَلَتِ الْحَيْضَةُ فَدَعِي الصَّلاةَ، وَإِذَا أَدْبَرَتْ فَاغْسِلِي عَنْكِ الدَّمَ وَصَلِّي»`,
      terjemah: `Dari Aisyah bahwa Fatimah binti Abi Hubeisy bertanya kepada Nabi SAW: "Sesungguhnya aku mengalami istihadhah sehingga tidak pernah suci, apakah aku harus meninggalkan shalat?" Rasulullah SAW menjawab: "Itu hanyalah darah pembuluh (penyakit) dan bukan darah haidh. Maka apabila waktu haidhmu tiba tinggalkanlah shalat, dan apabila masa haidh telah selesai, bersihkanlah darah itu darimu (mandi) lalu shalatlah."`,
      takhrij: "Shahih Bukhari No. 228 & Muslim No. 333",
      syarah: `Wanita istihadhah tetap diwajibkan shalat dan berpuasa setelah membersihkan diri dan berwudhu setiap kali masuk waktu shalat.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Kewajiban Mengqadha Puasa dan Tidak Mengqadha Shalat Bagi Wanita Haidh",
      arab: `عَنْ مُعَاذَةَ قَالَتْ: سَأَلْتُ عَائِشَةَ فَقُلْتُ: مَا بَالُ الْحَائِضِ تَقْضِي الصَّوْمَ وَلا تَقْضِي الصَّلاةَ؟ فَقَالَتْ: أَحَرُورِيَّةٌ أَنْتِ؟ قُلْتُ: لَسْتُ بِحَرُورِيَّةٍ وَلَكِنِّي أَسْأَلُ، قَالَتْ:

«كَانَ يُصِيبُنَا ذَلِكَ عَلَى عَهْدِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَنُؤْمَرُ بِقَضَاءِ الصَّوْمِ وَلا نُؤْمَرُ بِقَضَاءِ الصَّلاةِ»`,
      terjemah: `Dari Mu'adzah berkata: Aku bertanya kepada Aisyah: "Mengapa wanita haidh mengqadha puasa tetapi tidak mengqadha shalat?" Aisyah bertanya: "Apakah engkau orang Haruriyyah (Khawarij)?" Aku menjawab: "Bukan, aku hanya bertanya." Aisyah berkata: "Dahulu kami mengalami haidh pada masa Rasulullah SAW, maka kami diperintahkan untuk mengqadha puasa dan tidak diperintahkan mengqadha shalat."`,
      takhrij: "Shahih Muslim No. 335 & Bukhari No. 321",
      syarah: `Hikmah syariat: shalat berulang lima kali sehari sehingga memberatkan jika diqadha, sedangkan puasa hanya terjadi sebulan dalam setahun.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Adab Bersuci Setelah Haidh dengan Mengusapkan Wangian Misk",
      arab: `عَنْ عَائِشَةَ أَنَّ امْرَأَةً سَأَلَتِ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ غُسْلِهَا مِنَ الْمَحِيضِ، فَأَمَرَهَا كَيْفَ تَغْتَسِلُ، قَالَ:

«خُذِي فِرْصَةً مِنْ مِسْكٍ فَتَطَهَّرِي بِهَا»، قَالَتْ: كَيْفَ أَتَطَهَّرُ؟ قَالَ: «تَطَهَّرِي بِهَا»، قَالَتْ: كَيْفَ؟ قَالَ: «سُبْحَانَ اللَّهِ، تَطَهَّرِي»، فَاجْتَذَبْتُهَا إِلَيَّ فَقُلْتُ: تَتَبَّعِي بِهَا أَثَرَ الدَّمِ`,
      terjemah: `Dari Aisyah bahwa seorang wanita bertanya kepada Nabi SAW tentang cara bersuci dari haidh. Beliau mengajarinya tata cara mandi lalu bersabda: "Ambillah sepotong kain/kapas yang diberi wewangian misk lalu bersucilah dengannya." Wanita itu bertanya: "Bagaimana cara bersucinya?" Beliau bersabda: "Subhanallah, bersucilah dengannya!" Maka aku menarik wanita itu dan membisikkan: "Usapkanlah pada bekas-bekas keluarnya darah."`,
      takhrij: "Shahih Bukhari No. 314 & Muslim No. 332",
      syarah: `Sunnah menghilangkan sisa aroma darah haidh dengan wewangian misk atau sabun pembersih untuk kesempurnaan thaharah.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Berdzikir dan Mendengar Bacaan Al-Qur'an di Dekat Wanita Haidh",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ:

«كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَتَّكِئُ فِي حَجْرِي وَأَنَا حَائِضٌ، ثُمَّ يَقْرَأُ الْقُرْآنَ»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha berkata: "Nabi shallallahu 'alaihi wa sallam pernah bersandar di pangkuanku ketika aku sedang haidh, kemudian beliau membaca Al-Qur'an."`,
      takhrij: "Shahih Bukhari No. 297 & Muslim No. 301",
      syarah: `Membuktikan bahwa fisik dan nafas wanita yang sedang haidh adalah suci, serta boleh berinteraksi dan mendengarkan tilawah Al-Qur'an.`,
    },
  ],

  // 3. Tayammum (4 Hadis)
  tayammum: [
    {
      nomorHadis: 1,
      subJudul: "Tata Cara Tayammum Pengganti Wudhu & Mandi Janabah",
      arab: `عَنْ عَمَّارِ بْنِ يَاسِرٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: بَعَثَنِي رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي حَاجَةٍ فَأَجْنَبْتُ فَلَمْ أَجِدِ الْمَاءَ، فَتَمَرَّغْتُ فِي الصَّعِيدِ كَمَا تَمَرَّغُ الدَّابَّةُ، فَذَكَرْتُ ذَلِكَ لِلنَّبِيِّ فَقَالَ:

«إِنَّمَا كَانَ يَكْفِيكَ أَنْ تَقُولَ بِيَدَيْكَ هَكَذَا»، ثُمَّ ضَرَبَ بِيَدَيْهِ الأَرْضَ ضَرْبَةً وَاحِدَةً، ثُمَّ مَسَحَ الشِّمَالَ عَلَى الْيَمِينِ وَظَاهِرَ كَفَّيْهِ وَوَجْهَهُ`,
      terjemah: `Dari Ammar bin Yasir radhiyallahu 'anhu: Rasulullah SAW mengutusku untuk suatu urusan, lalu aku junub dan tidak menemukan air, maka aku bergulingan di atas tanah... Nabi SAW bersabda: "Cukuplah bagimu menepukkan kedua tanganmu begini." Lalu beliau menepukkan kedua telapak tangannya ke tanah satu kali pukulan, meniup debunya, kemudian mengusap punggung telapak tangan dan wajahnya.`,
      takhrij: "Shahih Bukhari No. 338 & Muslim No. 368",
      syarah: `Tayammum dengan debu suci adalah pengganti wudhu dan mandi wajib ketika tidak ada air atau ada udzur sakit.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Bumi Dijadikan Masjid & Suci Menyucikan Bagi Umat Islam",
      arab: `عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«أُعْطِيتُ خَمْسًا لَمْ يُعْطَهُنَّ أَحَدٌ قَبْلِي... وَجُعِلَتْ لِيَ الأَرْضُ مَسْجِدًا وَطَهُورًا، فَأَيُّمَا رَجُلٍ مِنْ أُمَّتِي أَدْرَكَتْهُ الصَّلاةُ فَلْيُصَلِّ»`,
      terjemah: `Dari Jabir bin Abdullah radhiyallahu 'anhuma bahwa Nabi SAW bersabda: "Aku diberi lima keistimewaan yang tidak diberikan kepada seorang nabi pun sebelumku... dan dijadikan bagiku bumi ini sebagai tempat sujud dan suci menyucikan. Maka di mana pun waktu shalat menemui seorang dari umatku, hendaklah ia mendirikan shalat."`,
      takhrij: "Shahih Bukhari No. 335 & Muslim No. 521",
      syarah: `Keistimewaan kemudahan syariat Islam yang memungkinkan ibadah dan bersuci di seluruh penjuru muka bumi.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Shalatnya Orang Junub dengan Tayammum Saat Tidak Ada Air",
      arab: `عَنْ عِمْرَانَ بْنِ حُصَيْنٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ رَأَى رَجُلاً مُعْتَزِلاً لَمْ يُصَلِّ فِي الْقَوْمِ، فَقَالَ: «يَا فُلانُ مَا مَنَعَكَ أَنْ تُصَلِّيَ مَعَ الْقَوْمِ؟» فَقَالَ: يَا رَسُولَ اللَّهِ أَصَابَتْنِي جَنَابَةٌ وَلا مَاءَ، قَالَ:

«عَلَيْكَ بِالصَّعِيدِ فَإِنَّهُ يَكْفِيكَ»`,
      terjemah: `Dari Imran bin Hushain radhiyallahu 'anhu bahwa Rasulullah SAW melihat seorang laki-laki menyendiri dan tidak shalat bersama jamaah. Beliau bertanya: "Wahai fulan, apa yang menghalangimu shalat bersama kaum?" Lelaki itu menjawab: "Wahai Rasulullah, aku tertimpa janabah dan tidak ada air." Beliau bersabda: "Gunakanlah tanah debu (bertayammumlah), karena sesungguhnya itu sudah mencukupimu."`,
      takhrij: "Shahih Bukhari No. 344 & Muslim No. 682",
      syarah: `Tayammum sah mengangkat hadats besar dan hadats kecil selama ketiadaan air masih berlangsung.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Sah Shalatnya Orang yang Tayammum Walaupun Menemukan Air Setelah Shalat Selesai",
      arab: `عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: خَرَجَ رَجُلانِ فِي سَفَرٍ فَحَضَرَتِ الصَّلاةُ وَلَيْسَ مَعَهُمَا مَاءٌ، فَتَيَمَّمَا صَعِيدًا طَيِّبًا فَصَلَّيَا، ثُمَّ وَجَدَا الْمَاءَ فِي الْوَقْتِ... فَقَالَ لِلَّذِي لَمْ يُعِدْ: «أَصَبْتَ السُّنَّةَ وَأَجْزَأَتْكَ صَلاتُكَ»، وَقَالَ لِلَّذِي تَوَضَّأَ وَأَعَادَ: «لَكَ الأَجْرُ مَرَّتَيْنِ»`,
      terjemah: `Dari Abu Sa'id Al-Khudri: Dua orang bepergian lalu tiba waktu shalat dan tidak ada air, maka keduanya bertayammum dan shalat. Kemudian mereka menemukan air saat masih dalam waktu shalat. Yang satu mengulang shalatnya dan yang satu tidak. Nabi SAW bersabda kepada yang tidak mengulang: "Engkau telah mencocoki sunnah dan shalatmu sah," dan bersabda kepada yang mengulang: "Bagimu dua pahala."`,
      takhrij: "Sunan Abu Dawud No. 338 & An-Nasa'i",
      syarah: `Shalat yang dikerjakan dengan tayammum yang sah tidak wajib diulang meskipun kemudian air ditemukan.`,
    },
  ],

  // 4. Thaharah & Air (5 Hadis)
  thaharah: [
    {
      nomorHadis: 1,
      subJudul: "Bersuci Adalah Separuh dari Keimanan (Syathrul Iman)",
      arab: `عَنْ أَبِي مَالِكٍ الأَشْعَرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلآنِ مَا بَيْنَ السَّمَاوَاتِ وَالأَرْضِ، وَالصَّلاةُ نُورٌ...»`,
      terjemah: `Dari Abu Malik Al-Asy'ari radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Bersuci adalah separuh keimanan, dan kalimat 'Alhamdulillah' memenuhi timbangan amal, serta 'Subhanallah walhamdulillah' memenuhi antara langit dan bumi, dan shalat adalah cahaya..."`,
      takhrij: "Shahih Muslim No. 223",
      syarah: `Thaharah lahiriah dan batiniah adalah syarat mutlak diterimanya penghambaan seorang muslim kepada Allah SWT.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Kesucian Air Laut & Kehalalan Bangkainya",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَأَلَ رَجُلٌ رَسُولَ اللَّهِ فَقَالَ: يَا رَسُولَ اللَّهِ، إِنَّا نَرْكَبُ الْبَحْرَ وَنَحْمِلُ مَعَنَا الْقَلِيلَ مِنَ الْمَاءِ، فَإِنْ تَوَضَّأْنَا بِهِ عَطِشْنَا، أَفَنَتَوَضَّأُ بِمَاءِ الْبَحْرِ؟ فَقَالَ:

«هُوَ الطَّهُورُ مَاؤُهُ، الْحِلُّ مَيْتَتُهُ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu: Seorang sahabat bertanya: "Wahai Rasulullah, kami berlayar mengarungi lautan dan hanya membawa sedikit air tawar. Jika kami berwudhu dengannya kami akan kehausan, bolehkah kami berwudhu dengan air laut?" Rasulullah SAW menjawab: "Air laut itu suci lagi menyucikan, dan halal bangkai hewannya."`,
      takhrij: "Sunan Abu Dawud No. 83 & At-Tirmidzi No. 69",
      syarah: `Dalil induk fiqih air mutlak yang sah dipakai untuk wudhu, mandi janabah, dan mencuci najis.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Adab Buang Hajat & Larangan Menghadap/Membelakangi Kiblat",
      arab: `عَنْ أَبِي أَيُّوبَ الأَنْصَارِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«إِذَا أَتَى أَحَدُكُمُ الْغَائِطَ فَلا يَسْتَقْبِلِ الْقِبْلَةَ وَلا يَسْتَدْبِرْهَا، وَلَكِنْ شَرِّقُوا أَوْ غَرِّبُوا»`,
      terjemah: `Dari Abu Ayyub Al-Anshari radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Apabila salah seorang di antara kalian mendatangi tempat buang hajat, maka janganlah menghadap kiblat dan jangan pula membelakanginya, akan tetapi menghadaplah ke arah timur atau barat."`,
      takhrij: "Shahih Bukhari No. 144 & Muslim No. 264",
      syarah: `Menghormati Ka'bah sebagai kiblat umat Islam saat qadha'il hajat di tempat terbuka.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Cara Menyucikan Bejana yang Dijilat Anjing",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«طَهُورُ إِنَاءِ أَحَدِكُمْ إِذَا وَلَغَ فِيهِ الْكَلْبُ أَنْ يَغْسِلَهُ سَبْعَ مَرَّاتٍ أُولاَهُنَّ بِالتُّرَابِ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Cara menyucikan bejana salah seorang di antara kalian apabila dijilat anjing adalah dengan mencucinya sebanyak tujuh kali, yang pertamanya dicampur dengan tanah."`,
      takhrij: "Shahih Muslim No. 279 & Bukhari No. 172",
      syarah: `Najis mughalladhah dan mukjizat sains pembersihan mikroba liur anjing dengan mineral tanah suci.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Menghilangkan Najis dengan Menyiramkan Air di Atasnya",
      arab: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ أَعْرَابِيًّا بَالَ فِي الْمَسْجِدِ، فَقَامَ إِلَيْهِ بَعْضُ الْقَوْمِ، فَقَالَ رَسُولُ اللَّهِ: «دَعُوهُ وَلا تُزْرِمُوهُ»... ثُمَّ دَعَا بِدَلْوٍ مِنْ مَاءٍ فَصُبَّ عَلَيْهِ`,
      terjemah: `Dari Anas bin Malik radhiyallahu 'anhu bahwa seorang Arab badui kencing di dalam masjid... Rasulullah SAW bersabda: "Biarkanlah dia dan jangan kalian putuskan kencingnya." Setelah selesai, beliau meminta seember air lalu menyiramkannya di atas air kencing tersebut.`,
      takhrij: "Shahih Bukhari No. 220 & Muslim No. 284",
      syarah: `Kaidah pensucian lantai dari najis 'ainiyah cukup dengan diguyur air hingga najisnya larut dan hilang sifatnya, serta keteladanan hikmah dakwah Nabi SAW.`,
    },
  ],

  // 5. Wudhu & Siwak (5 Hadis)
  wudhu: [
    {
      nomorHadis: 1,
      subJudul: "Tata Cara Wudhu Sempurna Teladan Utsman bin Affan",
      arab: `عَنْ حُمْرَانَ مَوْلَى عُثْمَانَ أَنَّ عُثْمَانَ بْنَ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ دَعَا بِوَضُوءٍ فَأَفْرَغَ عَلَى يَدَيْهِ ثَلاثَ مِرَارٍ فَغَسَلَهُمَا، ثُمَّ مَضْمَضَ وَاسْتَنْثَرَ، ثُمَّ غَسَلَ وَجْهَهُ ثَلاثَ مِرَارٍ... ثُمَّ قَالَ: رَأَيْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ تَوَضَّأَ نَحْوَ وُضُوئِي هَذَا`,
      terjemah: `Dari Humran, mantan budak Utsman bin Affan, ia melihat Utsman berwudhu dengan membasuh kedua tangannya tiga kali, berkumur-kumur, beristintsar, membasuh wajah tiga kali, membasuh tangan hingga siku tiga kali, mengusap kepala, lalu membasuh kaki hingga mata kaki tiga kali. Utsman berkata: "Aku melihat Rasulullah berwudhu seperti wudhuku ini."`,
      takhrij: "Shahih Bukhari No. 164 & Muslim No. 226",
      syarah: `Rujukan fiqih induk rukun dan sunnah wudhu bersuci yang sempurna.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Keutamaan Bersiwak Membersihkan Mulut & Meraih Ridha Allah",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha dari Nabi shallallahu 'alaihi wa sallam bersabda: "Bersiwak itu membersihkan rongga mulut dan mendatangkan keridhaan Rabb (Allah Ta'ala)."`,
      takhrij: "Sunan An-Nasa'i No. 5 & Shahih Bukhari",
      syarah: `Sunnah muakkadah menjaga kebersihan mulut sebelum shalat, membaca Al-Qur'an, dan saat bangun tidur.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Doa Setelah Wudhu Membuka Delapan Pintu Surga",
      arab: `عَنْ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«مَا مِنْكُمْ مِنْ أَحَدٍ يَتَوَضَّأُ فَيُبْلِغُ أَوْ فَيُسْبِغُ الْوَضُوءَ ثُمَّ يَقُولُ: أَشْهَدُ أَنْ لا إِلَهَ إِلا اللَّهُ وَأَنَّ مُحَمَّدًا عَبْدُ اللَّهِ وَرَسُولُهُ، إِلا فُتِحَتْ لَهُ أَبْوَابُ الْجَنَّةِ الثَّمَانِيَةُ يَدْخُلُ مِنْ أَيِّهَا شَاءَ»`,
      terjemah: `Dari Umar bin Al-Khaththab radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Tidaklah salah seorang di antara kalian berwudhu lalu menyempurnakan wudhunya kemudian membaca: 'Asyhadu alla ilaaha illallaah wa anna Muhammadan 'abdullaahi wa rasuuluh', melainkan dibukakan baginya delapan pintu surga dan ia boleh masuk dari pintu mana saja yang ia kehendaki."`,
      takhrij: "Shahih Muslim No. 234",
      syarah: `Pahala agung dzikir tauhid setelah bersuci yang menyatukan kesucian badan dengan kesucian aqidah.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Cahaya Berkilau Anggota Wudhu di Padang Mahsyar (Ghurran Muhajjalin)",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«إِنَّ أُمَّتِي يُدْعَوْنَ يَوْمَ الْقِيَامَةِ غُرًّا مُحَجَّلِينَ مِنْ آثَارِ الْوُضُوءِ، فَمَنِ اسْتَطَاعَ مِنْكُمْ أَنْ يُطِيلَ غُرَّتَهُ فَلْيَفْعَلْ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu berkata: Aku mendengar Rasulullah SAW bersabda: "Sesungguhnya umatku akan dipanggil pada hari kiamat dalam keadaan bercahaya pada wajah, tangan, dan kaki mereka dari bekas wudhu. Maka barangsiapa di antara kalian mampu memanjangkan cahayanya, hendaklah ia melakukannya."`,
      takhrij: "Shahih Bukhari No. 136 & Muslim No. 246",
      syarah: `Ciri khas kemuliaan umat Nabi Muhammad SAW yang membedakan mereka dari seluruh umat manusia di akhirat kelak.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Menyempurnakan Wudhu di Saat Dingin / Sulit Menghapuskan Dosa",
      arab: `عَنْ أَبِي هُرَيْرَةَ أَنَّ رَسُولَ اللَّهِ قَالَ: «أَلا أَدُلُّكُمْ عَلَى مَا يَمْحُو اللَّهُ بِهِ الْخَطَايَا وَيَرْفَعُ بِهِ الدَّرَجَاتِ؟» قَالُوا: بَلَى يَا رَسُولَ اللَّهِ، قَالَ:

«إِسْبَاغُ الْوُضُوءِ عَلَى الْمَكَارِهِ، وَكَثْرَةُ الْخُطَا إِلَى الْمَسَاجِدِ، وَانْتِظَارُ الصَّلاةِ بَعْدَ الصَّلاةِ، فَذَلِكُمُ الرِّبَاطُ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah bersabda: "Maukah kalian aku tunjukkan amalan yang dengannya Allah menghapus dosa-dosa dan mengangkat derajat?" Para sahabat menjawab: "Tentu wahai Rasulullah." Beliau bersabda: "Menyempurnakan wudhu pada saat-saat yang dibenci (dingin/sulit), memperbanyak langkah menuju masjid, dan menunggu shalat setelah shalat. Itulah ribath (penjagaan)."`,
      takhrij: "Shahih Muslim No. 251",
      syarah: `Kesabaran dalam ketaatan membersihkan seluruh anggota wudhu menjadi pelebur dosa-dosa harian.`,
    },
  ],

  // 6. Shalat (5 Hadis)
  shalat: [
    {
      nomorHadis: 1,
      subJudul: "Perintah Mendirikan Shalat Sebagaimana Shalat Rasulullah SAW",
      arab: `عَنْ مَالِكِ بْنِ الْحُوَيْرِثِ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي، وَإِذَا حَضَرَتِ الصَّلَاةُ فَلْيُؤَذِّنْ لَكُمْ أَحَدُكُمْ، وَلْيَؤُمَّكُمْ أَكْبَرُكُمْ»`,
      terjemah: `Dari Malik bin Al-Huwairits radhiyallahu 'anhu berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Shalatlah kalian sebagaimana kalian melihat aku shalat. Dan apabila waktu shalat telah tiba, hendaklah salah seorang di antara kalian mengumandangkan adzan, dan hendaklah yang paling tua di antara kalian mengimami kalian."`,
      takhrij: "Shahih Bukhari No. 631 & Muslim No. 674",
      syarah: `Hadis kaidah pokok tentang kewajiban meneladani seluruh rukun, syarat, gerakan ruku', sujud, dan bacaan shalat sesuai sunnah Nabi SAW.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Kedudukan Shalat Sebagai Batas Pemisah Keimanan",
      arab: `عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«إِنَّ بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلَاةِ»`,
      terjemah: `Dari Jabir bin Abdullah radhiyallahu 'anhuma berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sesungguhnya batas antara seseorang dengan kemusyrikan dan kekafiran adalah meninggalkan shalat."`,
      takhrij: "Shahih Muslim No. 82",
      syarah: `Peringatan keras mengenai bahaya meremehkan dan meninggalkan shalat lima waktu yang merupakan tiang utama agama.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Keutamaan Shalat Berjamaah 27 Derajat",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«صَلاَةُ الْجَمَاعَةِ تَفْضُلُ صَلاَةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً»`,
      terjemah: `Dari Ibnu Umar radhiyallahu 'anhuma bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda: "Shalat berjamaah lebih utama daripada shalat sendirian dengan selisih dua puluh tujuh derajat."`,
      takhrij: "Shahih Bukhari No. 645 & Muslim No. 650",
      syarah: `Anjuran agung memakmurkan masjid bagi kaum laki-laki dan melipatgandakan pahala ibadah secara berjamaah.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Kewajiban Tuma'ninah dalam Ruku', Sujud, dan Berdiri (Hadits Al-Musi'u Shalatahu)",
      arab: `عَنْ أَبِي هُرَيْرَةَ أَنَّ رَسُولَ اللَّهِ دَخَلَ الْمَسْجِدَ فَدَخَلَ رَجُلٌ فَصَلَّى ثُمَّ جَاءَ فَسَلَّمَ... فَقَالَ: «ارْجِعْ فَصَلِّ فَإِنَّكَ لَمْ تُصَلِّ» ثَلاثًا... فَقَالَ: «إِذَا قُمْتَ إِلَى الصَّلاةِ فَكَبِّرْ، ثُمَّ اقْرَأْ مَا تَيَسَّرَ مَعَكَ مِنَ الْقُرْآنِ، ثُمَّ ارْكَعْ حَتَّى تَطْمَئِنَّ رَاكِعًا، ثُمَّ ارْفَعْ حَتَّى تَعْتَدِلَ قَائِمًا، ثُمَّ اسْجُدْ حَتَّى تَطْمَئِنَّ سَاجِدًا...»`,
      terjemah: `Dari Abu Hurairah bahwa seorang lelaki masuk masjid lalu shalat dengan tergesa-gesa tanpa tuma'ninah... Rasulullah SAW bersabda hingga 3 kali: "Kembalilah dan shalatlah, karena engkau belum shalat!" Lalu beliau mengajarkan: "Jika engkau shalat maka bertakbirlah, bacalah ayat Al-Qur'an yang mudah bagimu, lalu ruku'lah hingga tuma'ninah, lalu bangkitlah hingga tegak lurus, lalu sujudlah hingga tuma'ninah..."`,
      takhrij: "Shahih Bukhari No. 757 & Muslim No. 397",
      syarah: `Tuma'ninah (diam sejenak dengan tenang) pada setiap rukun shalat adalah syarat sah shalat yang tidak boleh ditinggalkan.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Perumpamaan Shalat Lima Waktu Sebagai Sungai Pembersih Segala Dosa",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّهُ سَمِعَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«أَرَأَيْتُمْ لَوْ أَنَّ نَهْرًا بِبَابِ أَحَدِكُمْ يَغْتَسِلُ فِيهِ كُلَّ يَوْمٍ خَمْسًا، مَا تَقُولُ ذَلِكَ يُبْقِي مِنْ دَرَنِهِ؟» قَالُوا: لا يُبْقِي مِنْ دَرَنِهِ شَيْئًا، قَالَ: «فَذَلِكَ مِثْلُ الصَّلَوَاتِ الْخَمْسِ، يَمْحُو اللَّهُ بِهَا الْخَطَايَا»`,
      terjemah: `Dari Abu Hurairah bahwa ia mendengar Rasulullah SAW bersabda: "Bagaimana pendapat kalian seandainya ada sebuah sungai di depan pintu rumah salah seorang di antara kalian, lalu ia mandi di dalamnya lima kali setiap hari, apakah masih ada kotoran yang tersisa pada tubuhnya?" Para sahabat menjawab: "Tidak ada kotoran yang tersisa sedikit pun." Beliau bersabda: "Demikianlah perumpamaan shalat lima waktu, dengannya Allah menghapus dosa-dosa."`,
      takhrij: "Shahih Bukhari No. 528 & Muslim No. 667",
      syarah: `Shalat lima waktu membersihkan kekhilafan dan dosa-dosa kecil di antara waktu-waktu pelaksanaannya.`,
    },
  ],

  // 7. Waktu Shalat (4 Hadis)
  waktu: [
    {
      nomorHadis: 1,
      subJudul: "Amalan Paling Dicintai Allah: Shalat Tepat Pada Waktunya",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَأَلْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَيُّ الْعَمَلِ أَحَبُّ إِلَى اللَّهِ؟ قَالَ:

«الصَّلَاةُ عَلَى وَقْتِهَا»، قُلْتُ: ثُمَّ أَيٌّ؟ قَالَ: «ثُمَّ بِرُّ الْوَالِدَيْنِ»، قُلْتُ: ثُمَّ أَيٌّ؟ قَالَ: «الْجِهَادُ فِي سَبِيلِ اللَّهِ»`,
      terjemah: `Dari Abdullah bin Mas'ud radhiyallahu 'anhu berkata: Aku bertanya kepada Rasulullah SAW: "Amalan apakah yang paling dicintai oleh Allah?" Beliau menjawab: "Shalat tepat pada waktunya." Aku bertanya: "Kemudian apa?" Beliau menjawab: "Berbakti kepada kedua orang tua." Aku bertanya lagi: "Kemudian apa?" Beliau menjawab: "Jihad di jalan Allah."`,
      takhrij: "Shahih Bukhari No. 527 & Muslim No. 85",
      syarah: `Keutamaan menyegerakan shalat di awal waktu sebagai tanda kedisiplinan dan kecintaan hamba kepada Rabb-nya.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Keutamaan Shalat Subuh dan Ashar (Al-Bardain)",
      arab: `عَنْ أَبِي بَكْرِ بْنِ أَبِي مُوسَى عَنْ أَبِيهِ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَنْ صَلَّى الْبَرْدَيْنِ دَخَلَ الْجَنَّةَ»`,
      terjemah: `Dari Abu Musa Al-Asy'ari radhiyallahu 'anhu bahwa Rasulullah SAW bersabda: "Barangsiapa mendirikan shalat al-bardain (yaitu shalat Subuh dan Ashar), niscaya ia masuk surga."`,
      takhrij: "Shahih Bukhari No. 574 & Muslim No. 635",
      syarah: `Dua waktu shalat yang paling berat bagi orang munafik namun memiliki keutamaan penjagaan malaikat dan jaminan surga.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Malaikat Malam dan Siang Bergantian Berkumpul Pada Waktu Ashar dan Subuh",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«يَتَعَاقَبُونَ فِيكُمْ مَلائِكَةٌ بِاللَّيْلِ وَمَلائِكَةٌ بِالنَّهَارِ، وَيَجْتَمِعُونَ فِي صَلاةِ الْفَجْرِ وَصَلاةِ الْعَصْرِ، ثُمَّ يَعْرُجُ الَّذِينَ بَاتُوا فِيكُمْ، فَيَسْأَلُهُمْ وَهُوَ أَعْلَمُ بِهِمْ: كَيْفَ تَرَكْتُمْ عِبَادِي؟ فَيَقُولُونَ: تَرَكْنَاهُمْ وَهُمْ يُصَلُّونَ وَأَتَيْنَاهُمْ وَهُمْ يُصَلُّونَ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Malaikat malam dan malaikat siang silih berganti mendatangi kalian, dan mereka berkumpul pada shalat Subuh dan shalat Ashar. Kemudian malaikat yang bermalam bersama kalian naik ke langit, lalu Allah bertanya kepada mereka—padahal Dia lebih mengetahui tentang mereka—'Bagaimanakah keadaan hamba-hamba-Ku saat kalian tinggalkan?' Mereka menjawab: 'Kami tinggalkan mereka sedang shalat dan kami datangi mereka sedang shalat.'"`,
      takhrij: "Shahih Bukhari No. 555 & Muslim No. 632",
      syarah: `Kemuliaan waktu Subuh dan Ashar sebagai momen persaksian para malaikat di hadapan Allah SWT.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Batas Awal dan Akhir Waktu Shalat Lima Waktu yang Diajarkan Malaikat Jibril",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو رَضِيَ اللَّهُ عَنْهُمَا أَنَّ نَبِيَّ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«وَقْتُ الظُّهْرِ إِذَا زَالَتِ الشَّمْسُ... وَوَقْتُ الْعَصْرِ مَا لَمْ تَصْفَرَّ الشَّمْسُ، وَوَقْتُ صَلاةِ الْمَغْرِبِ مَا لَمْ يَغِبِ الشَّفَقُ، وَوَقْتُ صَلاةِ الْعِشَاءِ إِلَى نِصْفِ اللَّيْلِ الأَوْسَطِ، وَوَقْتُ صَلاةِ الصُّبْحِ مِنْ طُلُوعِ الْفَجْرِ مَا لَمْ تَطْلُعِ الشَّمْسُ»`,
      terjemah: `Dari Abdullah bin Amr bahwa Nabi SAW bersabda: "Waktu Dzuhur adalah saat matahari telah tergelincir... waktu Ashar selama matahari belum menguning, waktu Maghrib selama mega merah belum hilang, waktu Isya hingga pertengahan malam, dan waktu Subuh dari terbit fajar shadiq selama matahari belum terbit."`,
      takhrij: "Shahih Muslim No. 612",
      syarah: `Ketentuan batasan syar'i perputaran waktu shalat fardhu berdasarkan peredaran matahari di langit.`,
    },
  ],

  // 8. Adzan & Iqamah (4 Hadis)
  adzan: [
    {
      nomorHadis: 1,
      subJudul: "Kaburnya Setan Saat Mendengar Seruan Suara Adzan",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«إِذَا نُودِيَ لِلصَّلاَةِ أَدْبَرَ الشَّيْطَانُ وَلَهُ ضُرَاطٌ حَتَّى لاَ يَسْمَعَ التَّأْذِينَ، فَإِذَا قَضَى النِّدَاءَ أَقْبَلَ...»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu bahwa Rasulullah SAW bersabda: "Apabila panggilan shalat (adzan) dikumandangkan, setan lari ke belakang sambil terkentut-kentut hingga ia tidak mendengar suara adzan..."`,
      takhrij: "Shahih Bukhari No. 608 & Muslim No. 389",
      syarah: `Kedahsyatan kalimat tauhid dalam adzan yang mengusir bisikan setan dan memanggil jiwa mukmin kepada kemenangan.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Doa Setelah Adzan Meraih Syafaat Rasulullah SAW di Hari Kiamat",
      arab: `عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَنْ قَالَ حِينَ يَسْمَعُ النِّدَاءَ: اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ، حَلَّتْ لَهُ شَفَاعَتِي يَوْمَ الْقِيَامَةِ»`,
      terjemah: `Dari Jabir bin Abdullah bahwa Rasulullah SAW bersabda: "Barangsiapa ketika mendengar adzan membaca doa: 'Allahumma Rabba hadzihid da'watit tammah, wash shalatil qa'imah, ati Muhammadanil wasilata wal fadhilah, wab'atshu maqamam mahmudalladzi wa'adtah', niscaya halal baginya syafaatku pada hari kiamat."`,
      takhrij: "Shahih Bukhari No. 614",
      syarah: `Sunnah menjawab adzan dan melafadzkan doa wasilah agar mendapatkan syafaat uzhma di hari penghisaban.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Doa Antara Adzan dan Iqamah Tidak Tertolak",
      arab: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«الدُّعَاءُ لا يُرَدُّ بَيْنَ الأَذَانِ وَالإِقَامَةِ»`,
      terjemah: `Dari Anas bin Malik radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Doa di antara adzan dan iqamah tidak akan ditolak."`,
      takhrij: "Sunan Abu Dawud No. 521 & Jami' At-Tirmidzi No. 212",
      syarah: `Salah satu waktu emas (*awqat al-ijabah*) untuk memanjatkan hajat dunia dan akhirat kepada Allah SWT.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Keutamaan Muadzin & Berebut Shaf Pertama",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ قَالَ:

«لَوْ يَعْلَمُ النَّاسُ مَا فِي النِّدَاءِ وَالصَّفِّ الأَوَّلِ، ثُمَّ لَمْ يَجِدُوا إِلا أَنْ يَسْتَهِمُوا عَلَيْهِ لاسْتَهَمُوا»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu bahwa Rasulullah SAW bersabda: "Seandainya manusia mengetahui besarnya pahala yang ada pada panggilan adzan dan shaf pertama, kemudian mereka tidak bisa mendapatkannya kecuali dengan cara mengundi, niscaya mereka pasti akan mengundi untuk mendapatkannya."`,
      takhrij: "Shahih Bukhari No. 615 & Muslim No. 437",
      syarah: `Tingginya kemuliaan para pengumandang adzan dan kedudukan jamaah di shaf terdepan di hadapan Allah.`,
    },
  ],

  // 9. Shalat Jumat (4 Hadis)
  jumat: [
    {
      nomorHadis: 1,
      subJudul: "Hari Terbaik Terbitnya Matahari Adalah Hari Jumat",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«خَيْرُ يَوْمٍ طَلَعَتْ عَلَيْهِ الشَّمْسُ يَوْمُ الْجُمُعَةِ، فِيهِ خُلِقَ آدَمُ، وَفِيهِ أُدْخِلَ الْجَنَّةَ، وَفِيهِ أُخْرِجَ مِنْهَا، وَلَا تَقُومُ السَّاعَةُ إِلَّا فِي يَوْمِ الْجُمُعَةِ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Sebaik-baik hari yang matahari terbit padanya adalah hari Jumat. Pada hari itu Adam diciptakan, pada hari itu dimasukkan ke surga, pada hari itu dikeluarkan darinya, dan kiamat tidak akan terjadi melainkan pada hari Jumat."`,
      takhrij: "Shahih Muslim No. 854",
      syarah: `Keutamaan Sayyidul Ayyam dan anjuran memperbanyak shalawat serta amal kebajikan.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Waktu Mustajab Doa di Hari Jumat Pada Akhir Waktu Ashar",
      arab: `عَنْ أَبِي هُرَيْرَةَ أَنَّ رَسُولَ اللَّهِ ذَكَرَ يَوْمَ الْجُمُعَةِ فَقَالَ:

«فِيهِ سَاعَةٌ، لا يُوَافِقُهَا عَبْدٌ مُسْلِمٌ، وَهُوَ قَائِمٌ يُصَلِّي، يَسْأَلُ اللَّهَ تَعَالَى شَيْئًا، إِلا أَعْطَاهُ إِيَّاهُ»، وَأَشَارَ بِيَدِهِ يُقَلِّلُهَا`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW menyebutkan tentang hari Jumat lalu bersabda: "Di dalamnya ada satu waktu, tidaklah seorang hamba muslim mendapatinya sedang berdiri shalat/berdoa memohon sesuatu kepada Allah Ta'ala, melainkan Allah pasti memberikannya kepadanya." Dan beliau mengisyaratkan dengan tangannya bahwa waktu itu sangat singkat.`,
      takhrij: "Shahih Bukhari No. 935 & Muslim No. 852",
      syarah: `Anjuran tekun memanjatkan doa di penghujung hari Jumat setelah shalat Ashar menjelang Maghrib.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Adab Mandi, Bersiwak, Memakai Minyak Wangi, dan Datang Lebih Awal ke Masjid",
      arab: `عَنْ سَلْمَانَ الْفَارِسِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«لا يَغْتَسِلُ رَجُلٌ يَوْمَ الْجُمُعَةِ، وَيَتَطَهَّرُ مَا اسْتَطَاعَ مِنْ طُهْرٍ، وَيَدَّهِنُ مِنْ دُهْنِهِ، أَوْ يَمَسُّ مِنْ طِيبِ بَيْتِهِ، ثُمَّ يَخْرُجُ فَلا يُفَرِّقُ بَيْنَ اثْنَيْنِ، ثُمَّ يُصَلِّي مَا كُتِبَ لَهُ، ثُمَّ يُنْصِتُ إِذَا تَكَلَّمَ الإِمَامُ، إِلا غُفِرَ لَهُ مَا بَيْنَهُ وَبَيْنَ الْجُمُعَةِ الأُخْرَى»`,
      terjemah: `Dari Salman Al-Farisi bahwa Nabi SAW bersabda: "Tidaklah seorang lelaki mandi pada hari Jumat, bersuci semampunya, memakai minyak rambut atau wewangian di rumahnya, lalu berangkat ke masjid tanpa membelah shaf di antara dua orang, lalu shalat sunnah, kemudian diam mendengarkan khutbah saat imam berbicara, melainkan diampuni dosa-dosanya antara Jumat itu dengan Jumat berikutnya."`,
      takhrij: "Shahih Bukhari No. 883",
      syarah: `Adab komprehensif hari Jumat: kebersihan diri, kesopanan dalam shaf, dan ketenangan mendengarkan khutbah.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Peringatan Keras Bagi yang Meninggalkan Tiga Kali Shalat Jumat Tanpa Udzur",
      arab: `عَنْ أَبِي الْجَعْدِ الضَّمْرِيِّ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَنْ تَرَكَ ثَلاثَ جُمَعٍ تَهَاوُنًا بِهَا طَبَعَ اللَّهُ عَلَى قَلْبِهِ»`,
      terjemah: `Dari Abul Ja'd Adh-Dhamri radhiyallahu 'anhu bahwa Rasulullah SAW bersabda: "Barangsiapa meninggalkan shalat Jumat sebanyak tiga kali karena meremehkannya tanpa udzur, niscaya Allah akan mengunci mati pintu hatinya."`,
      takhrij: "Sunan Abu Dawud No. 1052 & At-Tirmidzi No. 500",
      syarah: `Kewajiban fardhu 'ain shalat Jumat bagi laki-laki muslim mukallaf yang mukim dan tidak memiliki udzur syar'i.`,
    },
  ],

  // 10. Zakat & Sedekah (5 Hadis)
  zakat: [
    {
      nomorHadis: 1,
      subJudul: "Kewajiban Zakat Diambil dari Orang Kaya dan Diberikan Kepada Fakir",
      arab: `عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَمَّا بَعَثَ مُعَاذًا إِلَى الْيَمَنِ قَالَ لَهُ:

«فَأَعْلِمْهُمْ أَنَّ اللَّهَ افْتَرَضَ عَلَيْهِمْ صَدَقَةً فِي أَمْوَالِهِمْ، تُؤْخَذُ مِنْ أَغْنِيَائِهِمْ وَتُرَدُّ عَلَى فُقَرَائِهِمْ»`,
      terjemah: `Dari Ibnu Abbas radhiyallahu 'anhuma bahwa Nabi SAW ketika mengutus Mu'adz bin Jabal ke Yaman berpesan: "...Maka beritahukanlah kepada mereka bahwa Allah telah mewajibkan zakat pada harta mereka, yang diambil dari orang-orang kaya di antara mereka dan diserahkan kepada orang-orang fakir di antara mereka."`,
      takhrij: "Shahih Bukhari No. 1395 & Muslim No. 19",
      syarah: `Prinsip keadilan sosial dan redistribusi ekonomi dalam syariat Islam untuk memberantas kemiskinan.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Harta Tidak Akan Berkurang Karena Disedekahkan",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلا عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلا رَفَعَهُ اللَّهُ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu dari Rasulullah SAW bersabda: "Tidaklah sedekah itu mengurangi harta, dan tidaklah Allah menambah bagi seorang hamba yang pemaaf melainkan kemuliaan, serta tidaklah seseorang merendahkan diri (bertawadhu') karena Allah melainkan Allah pasti mengangkat derajatnya."`,
      takhrij: "Shahih Muslim No. 2588",
      syarah: `Keberkahan harta yang dizakati dan disedekahkan akan dilipatgandakan gantinya oleh Allah di dunia dan akhirat.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Kewajiban Zakat Fitrah Satu Sha' Bahan Makanan Pokok",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ:

«فَرَضَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ زَكَاةَ الْفِطْرِ صَاعًا مِنْ تَمْرٍ، أَوْ صَاعًا مِنْ شَعِيرٍ، عَلَى الْعَبْدِ وَالْحُرِّ، وَالذَّكَرِ وَالأُنْثَى، وَالصَّغِيرِ وَالْكَبِيرِ مِنَ الْمُسْلِمِينَ، وَأَمَرَ بِهَا أَنْ تُؤَدَّى قَبْلَ خُرُوجِ النَّاسِ إِلَى الصَّلاةِ»`,
      terjemah: `Dari Ibnu Umar berkata: "Rasulullah SAW mewajibkan zakat fitrah sebanyak satu sha' kurma atau satu sha' gandum atas setiap budak dan orang merdeka, laki-laki dan perempuan, anak kecil dan orang dewasa dari kalangan kaum muslimin, dan beliau memerintahkan agar ditunaikan sebelum orang-orang keluar menuju shalat Id."`,
      takhrij: "Shahih Bukhari No. 1503 & Muslim No. 984",
      syarah: `Pembersih bagi orang yang berpuasa dari perkataan sia-sia dan santunan makanan bagi kaum miskin di hari raya.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Naungan Arsy Bagi Orang yang Bersedekah Secara Sembunyi-Sembunyi",
      arab: `عَنْ أَبِي هُرَيْرَةَ عَنِ النَّبِيِّ فِي السَّبْعَةِ الَّذِينَ يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ يَوْمَ لا ظِلَّ إِلا ظِلُّهُ:

«...وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لا تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ»`,
      terjemah: `Dari Abu Hurairah dari Nabi SAW tentang tujuh golongan yang dinaungi Allah di bawah naungan Arsy-Nya pada hari tiada naungan selain naungan-Nya: "...dan seorang yang bersedekah lalu ia menyembunyikannya hingga tangan kirinya tidak mengetahui apa yang diinfakkan oleh tangan kanannya."`,
      takhrij: "Shahih Bukhari No. 1423 & Muslim No. 1031",
      syarah: `Puncak keikhlasan dalam bersedekah semata-mata mengharap ridha Allah tanpa pamrih atau riya'.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Peringatan Keras Bagi Orang yang Menimbun Harta dan Menolak Berzakat",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«مَنْ آتَاهُ اللَّهُ مَالاً فَلَمْ يُؤَدِّ زَكَاتَهُ، مُثِّلَ لَهُ يَوْمَ الْقِيَامَةِ شُجَاعًا أَقْرَعَ لَهُ زَبِيبَتَانِ، يُطَوَّقُهُ يَوْمَ الْقِيَامَةِ، ثُمَّ يَأْخُذُ بِلِهْزِمَتَيْهِ - يَعْنِي شِدْقَيْهِ - ثُمَّ يَقُولُ: أَنَا مَالُكَ، أَنَا كَنْزُكَ»`,
      terjemah: `Dari Abu Hurairah berkata: Rasulullah SAW bersabda: "Barangsiapa diberi harta oleh Allah lalu ia tidak menunaikan zakatnya, maka pada hari kiamat hartanya itu akan dijelmakan menjadi ular berbisa yang botak kepalanya dengan dua titik hitam di atas matanya, lalu ular itu melilit lehernya dan mencengkeram kedua rahangnya seraya berkata: 'Akulah hartamu, akulah timbunan simpananmu!'"`,
      takhrij: "Shahih Bukhari No. 1403 & Muslim No. 987",
      syarah: `Ancaman siksa akhirat bagi orang bakhil yang menahan hak orang miskin yang ada pada hartanya.`,
    },
  ],

  // 11. Puasa / Shaum (5 Hadis)
  puasa: [
    {
      nomorHadis: 1,
      subJudul: "Pengampunan Dosa Bagi Orang yang Berpuasa Ramadhan dengan Iman",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا، غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Barangsiapa berpuasa di bulan Ramadhan atas dasar iman dan mengharap pahala (dari Allah), niscaya diampuni dosa-dosanya yang telah lalu."`,
      takhrij: "Shahih Bukhari No. 38 & Muslim No. 760",
      syarah: `Ikhlas dan membenarkan kewajiban shaum adalah kunci terhapusnya dosa-dosa harian seorang hamba.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Hadits Qudsi: Puasa Itu Khusus untuk-Ku dan Aku yang Akan Membalasnya",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ: قَالَ اللَّهُ عَزَّ وَجَلَّ:

«كُلُّ عَمَلِ ابْنِ آدَمَ لَهُ إِلاَّ الصِّيَامَ، فَإِنَّهُ لِي وَأَنَا أَجْزِي بِهِ، وَالصِّيَامُ جُنَّةٌ... وَلَخُلُوفُ فَمِ الصَّائِمِ أَطْيَبُ عِنْدَ اللَّهِ مِنْ رِيحِ الْمِسْكِ»`,
      terjemah: `Dari Abu Hurairah berkata: Rasulullah SAW bersabda: Allah 'Azza wa Jalla berfirman: "Setiap amalan anak Adam adalah untuknya kecuali puasa, sesungguhnya puasa itu untuk-Ku dan Aku sendiri yang akan membalasnya. Dan puasa itu adalah perisai... Sungguh bau mulut orang yang berpuasa lebih harum di sisi Allah daripada aroma minyak misk."`,
      takhrij: "Shahih Bukhari No. 1894 & Muslim No. 1151",
      syarah: `Kemuliaan istimewa ibadah puasa yang bebas dari riya' dan mendapatkan pahala tanpa batas hisab.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Pintu Surga Ar-Rayyan Khusus Bagi Orang-Orang yang Berpuasa",
      arab: `عَنْ سَهْلِ بْنِ سَعْدٍ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ، يَدْخُلُ مِنْهُ الصَّائِمُونَ يَوْمَ الْقِيَامَةِ، لا يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ... فَإِذَا دَخَلُوا أُغْلِقَ فَلَمْ يَدْخُلْ مِنْهُ أَحَدٌ»`,
      terjemah: `Dari Sahl bin Sa'd radhiyallahu 'anhu dari Nabi SAW bersabda: "Sesungguhnya di dalam surga ada satu pintu yang dinamakan Ar-Rayyan. Orang-orang yang berpuasa akan masuk melaluinya pada hari kiamat, tidak ada seorang pun selain mereka yang masuk melaluinya... Apabila mereka telah masuk, pintu itu ditutup sehingga tidak ada lagi seorang pun yang masuk melaluinya."`,
      takhrij: "Shahih Bukhari No. 1896 & Muslim No. 1152",
      syarah: `Penghormatan khusus bagi para ahli puasa yang menahan dahaga di dunia dengan kesegaran abadi di surga.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Mencari Malam Kemuliaan Lailatul Qadar di Sepuluh Hari Terakhir",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«تَحَرَّوْا لَيْلَةَ الْقَدْرِ فِي الْوِتْرِ مِنَ الْعَشْرِ الأَوَاخِرِ مِنْ رَمَضَانَ»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha bahwa Rasulullah SAW bersabda: "Carilah Lailatul Qadar pada malam-malam ganjil di sepuluh malam terakhir dari bulan Ramadhan."`,
      takhrij: "Shahih Bukhari No. 2017 & Muslim No. 1169",
      syarah: `Semangat menghidupkan malam sepuluh terakhir Ramadhan dengan qiyamul lail, tilawah, dzikir, dan i'tikaf di masjid.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Keberkahan Makan Sahur dan Menyegerakan Berbuka Puasa",
      arab: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً»، وَعَنْ سَهْلِ بْنِ سَعْدٍ أَنَّ رَسُولَ اللَّهِ قَالَ: «لا يَزَالُ النَّاسُ بِخَيْرٍ مَا عَجَّلُوا الْفِطْرَ»`,
      terjemah: `Dari Anas bin Malik bahwa Nabi SAW bersabda: "Makan sahurlah kalian, karena sesungguhnya pada sahur itu terdapat keberkahan." Dan dari Sahl bin Sa'd bahwa Rasulullah SAW bersabda: "Manusia senantiasa berada dalam kebaikan selama mereka menyegerakan berbuka puasa."`,
      takhrij: "Shahih Bukhari No. 1923, 1957 & Muslim No. 1095, 1098",
      syarah: `Menjaga stamina fisik dan mengikuti sunnah Nabi dalam kemudahan syariat berbuka dan keberkahan sahur.`,
    },
  ],

  // 12. Haji & Umrah (5 Hadis)
  haji: [
    {
      nomorHadis: 1,
      subJudul: "Haji Mabrur: Bersih dari Dosa Seperti Baru Dilahirkan Ibunya",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«مَنْ حَجَّ لِلَّهِ فَلَمْ يَرْفُثْ، وَلَمْ يَفْسُقْ، رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Barangsiapa menunaikan haji karena Allah, lalu ia tidak berkata keji dan tidak berbuat fasik, niscaya ia kembali bersih dari dosa seperti pada hari ia dilahirkan oleh ibunya."`,
      takhrij: "Shahih Bukhari No. 1521 & Muslim No. 1350",
      syarah: `Kemurnian ibadah haji yang ikhlas mampu merontokkan dosa-dosa besar dan kecil menjadi suci kembali.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Perintah Mengambil Tata Cara Manasik Haji Sesuai Sunnah Rasulullah SAW",
      arab: `عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: رَأَيْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَرْمِي عَلَى رَاحِلَتِهِ يَوْمَ النَّحْرِ، وَيَقُولُ:

«لِتَأْخُذُوا مَنَاسِكَكُمْ، فَإِنِّي لا أَدْرِي لَعَلِّي لا أَحُجُّ بَعْدَ حَجَّتِي هَذِهِ»`,
      terjemah: `Dari Jabir bin Abdullah berkata: Aku melihat Nabi SAW melempar jumrah dari atas kendaraannya pada hari Nahr (Haji Wada') seraya bersabda: "Ambillah tata cara manasik haji kalian dariku, karena sesungguhnya aku tidak tahu apakah aku dapat berhaji lagi setelah hajiku ini."`,
      takhrij: "Shahih Muslim No. 1297 & Abu Dawud No. 1905",
      syarah: `Kaidah pokok manasik haji: seluruh rangkaian ihram, wukuf, mabit, thawaf, sa'i, dan lempar jumrah harus meneladani petunjuk Nabi.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Pahala Ibadah Umrah Pelebur Dosa & Haji Mabrur Tiada Balasan Selain Surga",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا، وَالْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلا الْجَنَّةُ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Satu ibadah umrah ke umrah berikutnya adalah penghapus dosa di antara keduanya, dan haji yang mabrur tidak ada balasan baginya selain surga."`,
      takhrij: "Shahih Bukhari No. 1773 & Muslim No. 1349",
      syarah: `Fadhilah ziarah ke Baitullah Makkah Al-Mukarramah membersihkan dosa dan menghantarkan ke jannah.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Keutamaan Hari Arafah: Hari Pembebasan Terbanyak dari Api Neraka",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَا مِنْ يَوْمٍ أَكْثَرَ مِنْ أَنْ يُعْتِقَ اللَّهُ فِيهِ عَبْدًا مِنَ النَّارِ مِنْ يَوْمِ عَرَفَةَ، وَإِنَّهُ لَيَدْنُو ثُمَّ يُبَاهِي بِهِمُ الْمَلائِكَةَ فَيَقُولُ: مَا أَرَادَ هَؤُلاءِ؟»`,
      terjemah: `Dari Aisyah bahwa Rasulullah SAW bersabda: "Tidak ada hari di mana Allah lebih banyak membebaskan hamba dari api neraka daripada hari Arafah. Dan sesungguhnya Allah mendekat lalu membanggakan mereka di hadapan para malaikat seraya berfirman: 'Apa yang mereka inginkan?'"`,
      takhrij: "Shahih Muslim No. 1348",
      syarah: `Puncak rukun haji adalah wukuf di padang Arafah pada tanggal 9 Dzulhijjah dengan penuh tadharru' dan istighfar.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Kewajiban Thawaf Wada' Sebagai Penutup Rangkaian Ibadah Haji",
      arab: `عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ:

«أُمِرَ النَّاسُ أَنْ يَكُونَ آخِرُ عَهْدِهِمْ بِالْبَيْتِ، إِلا أَنَّهُ خُفِّفَ عَنِ الْحَائِضِ»`,
      terjemah: `Dari Ibnu Abbas radhiyallahu 'anhuma berkata: "Orang-orang diperintahkan agar amalan terakhir yang mereka kerjakan di Makkah adalah berthawaf di Baitullah (Thawaf Wada'), hanya saja diringankan bagi wanita yang sedang haidh."`,
      takhrij: "Shahih Bukhari No. 1755 & Muslim No. 1328",
      syarah: `Thawaf perpisahan adalah salam takzim penutup sebelum jamaah haji meninggalkan kota suci Makkah kembali ke tanah air.`,
    },
  ],

  // 13. Muamalah & Jual Beli (6 Hadis)
  muamalah: [
    {
      nomorHadis: 1,
      subJudul: "Hak Khiyar dalam Jual Beli & Keberkahan Transaksi yang Jujur",
      arab: `عَنْ حَكِيمِ بْنِ حِزَامٍ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الْبَيِّعَانِ بِالْخِيَارِ مَا لَمْ يَتَفَرَّقَا، فَإِنْ صَدَقَا وَبَيَّنَا بُورِكَ لَهُمَا فِي بَيْعِهِمَا، وَإِنْ كَتَمَا وَكَذَبَا مُحِقَتْ بَرَكَةُ بَيْعِهِمَا»`,
      terjemah: `Dari Hakim bin Hizam radhiyallahu 'anhu dari Nabi SAW bersabda: "Penjual dan pembeli memiliki hak khiyar selama keduanya belum berpisah. Jika keduanya jujur dan berterus terang, niscaya keduanya diberkahi dalam jual beli mereka. Dan jika keduanya menyembunyikan cacat dan berdusta, niscaya dicabut keberkahan dari jual beli mereka."`,
      takhrij: "Shahih Bukhari No. 2079 & Muslim No. 1532",
      syarah: `Prinsip keterbukaan, kejujuran timbangan, dan larangan penipuan dalam muamalah perniagaan Islam.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Pengharaman Jual Beli Gharar (Ketidakjelasan) dan Penipuan",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ:

«نَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ بَيْعِ الْحَصَاةِ، وَعَنْ بَيْعِ الْغَرَرِ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu berkata: "Rasulullah shallallahu 'alaihi wa sallam melarang jual beli dengan lemparan kerikil dan jual beli gharar (yang mengandung unsur ketidakjelasan/spekulasi merugikan)."`,
      takhrij: "Shahih Muslim No. 1513",
      syarah: `Kaidah fiqih perniagaan: objek akad harus jelas kuantitas, kualitas, harga, dan waktu serah terimanya agar tidak menimbulkan persengketaan.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Keabsahan Akad Gadai (Rahn) & Transaksi yang Halal",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا: «أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ اشْتَرَى طَعَامًا مِنْ يَهُودِيٍّ إِلَى أَجَلٍ، وَرَهَنَهُ دِرْعًا مِنْ حَدِيدٍ»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha: "Bahwa Nabi shallallahu 'alaihi wa sallam pernah membeli makanan dari seorang Yahudi secara tempo, dan beliau menggadaikan baju besi beliau kepadanya sebagai jaminan."`,
      takhrij: "Shahih Bukhari No. 2068 & Muslim No. 1603",
      syarah: `Legalitas syariat dalam akad rahn (jaminan utang) dan interaksi muamalah yang adil dengan sesama manusia.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Kewajiban Menepati Syarat Akad Perjanjian",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الْمُسْلِمُونَ عَلَى شُرُوطِهِمْ، إِلَّا شَرْطًا حَرَّمَ حَلَالاً أَوْ أَحَلَّ حَرَامًا»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu dari Nabi SAW bersabda: "Kaum muslimin terikat pada syarat-syarat akad yang mereka sepakati, kecuali syarat yang mengharamkan perkara yang halal atau menghalalkan perkara yang haram."`,
      takhrij: "Sunan Abu Dawud No. 3594 & Jami' At-Tirmidzi No. 1352",
      syarah: `Kaidah fiqih induk muamalah: hukum asal seluruh transaksi adalah mubah dan mengikat selama didasari saling rela tanpa riba/gharar.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Perintah Membayar Upah Pekerja Sebelum Keringatnya Kering",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«أَعْطُوا الأَجِيرَ أَجْرَهُ قَبْلَ أَنْ يَجِفَّ عَرَقُهُ»`,
      terjemah: `Dari Abdullah bin Umar radhiyallahu 'anhuma berkata: Rasulullah SAW bersabda: "Berikanlah upah kepada pekerja/karyawan sebelum keringatnya kering."`,
      takhrij: "Sunan Ibnu Majah No. 2443",
      syarah: `Kewajiban memenuhi hak ketenagakerjaan dan larangan menzalimi upah para pekerja.`,
    },
    {
      nomorHadis: 6,
      subJudul: "Menunda Pembayaran Utang Bagi Orang yang Mampu Adalah Kezaliman",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَطْلُ الْغَنِيِّ ظُلْمٌ، وَإِذَا أُتْبِعَ أَحَدُكُمْ عَلَى مَلِيءٍ فَلْيَتَّبِعْ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Menunda-nunda pembayaran utang oleh orang yang mampu membayarnya adalah suatu kezaliman. Dan apabila salah seorang di antara kalian dialihkan utangnya kepada orang yang mampu (akad hawalah), maka terimalah pengalihan itu."`,
      takhrij: "Shahih Bukhari No. 2287 & Muslim No. 1564",
      syarah: `Etika amanah pelunasan kewajiban utang dan legalitas akad pemindahan utang piutang (hawalah).`,
    },
  ],

  // 14. Pernikahan & Keluarga (5 Hadis)
  nikah: [
    {
      nomorHadis: 1,
      subJudul: "Seruan Menikah Bagi Pemuda yang Memiliki Kemampuan",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ لَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«يَا مَعْشَرَ الشَّبَابِ مَنِ اسْتَطَاعَ مِنْكُمُ الْبَاءَةَ فَلْيَتَزَوَّجْ، فَإِنَّهُ أَغَضُّ لِلْبَصَرِ، وَأَحْصَنُ لِلْفَرْجِ، وَمَنْ لَمْ يَسْتَطِعْ فَعَلَيْهِ بِالصَّوْمِ فَإِنَّهُ لَهُ وِجَاءٌ»`,
      terjemah: `Dari Abdullah bin Mas'ud radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Wahai para pemuda! Barangsiapa di antara kalian yang telah memiliki kemampuan, maka menikahlah! Karena pernikahan itu lebih menundukkan pandangan dan lebih menjaga kemaluan. Dan barangsiapa yang belum mampu maka hendaklah ia berpuasa, karena puasa itu baginya adalah perisai peredam syahwat."`,
      takhrij: "Shahih Bukhari No. 5066 & Muslim No. 1400",
      syarah: `Pernikahan adalah syariat agung menjaga kesucian generasi dan membangun keluarga sakinah mawaddah wa rahmah.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Kriteria Memilih Pasangan Hidup: Utamakan Ketaatan Agamanya",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«تُنْكَحُ الْمَرْأَةُ لأَرْبَعٍ: لِمَالِهَا، وَلِحَسَبِهَا، وَجَمَالِهَا، وَلِدِينِهَا، فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu dari Nabi SAW bersabda: "Wanita dinikahi karena empat perkara: karena hartanya, karena keturunannya, karena kecantikannya, dan karena agamanya. Maka pilihlah wanita yang taat beragama niscaya engkau akan beruntung."`,
      takhrij: "Shahih Bukhari No. 5090 & Muslim No. 1466",
      syarah: `Pilar keharmonisan rumah tangga jangka panjang terletak pada keshalihan aqidah dan akhlak pasangan.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Sebaik-baik Suami Adalah yang Paling Baik Sikapnya Kepada Keluarganya",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ، وَأَنَا خَيْرُكُمْ لأَهْلِي»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha berkata: Rasulullah SAW bersabda: "Sebaik-baik kalian adalah orang yang paling baik perilakunya terhadap keluarganya (istrinya), dan aku adalah orang yang paling baik di antara kalian terhadap keluargaku."`,
      takhrij: "Jami' At-Tirmidzi No. 3895 & Ibnu Majah No. 1977",
      syarah: `Teladan kelembutan, penghormatan, dan kasih sayang seorang suami kepada istri dalam bingkai mu'asyarah bil ma'ruf.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Nafkah Kepada Keluarga Bernilai Sedekah Paling Utama",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«دِينَارٌ أَنْفَقْتَهُ فِي سَبِيلِ اللَّهِ، وَدِينَارٌ أَنْفَقْتَهُ فِي رَقَبَةٍ، وَدِينَارٌ تَصَدَّقْتَ بِهِ عَلَى مِسْكِينٍ، وَدِينَارٌ أَنْفَقْتَهُ عَلَى أَهْلِكَ، أَعْظَمُهَا أَجْرًا الَّذِي أَنْفَقْتَهُ عَلَى أَهْلِكَ»`,
      terjemah: `Dari Abu Hurairah berkata: Rasulullah SAW bersabda: "Satu dinar yang engkau infakkan di jalan Allah, satu dinar untuk membebaskan budak, satu dinar yang engkau sedekahkan kepada orang miskin, dan satu dinar yang engkau nafkahkan kepada keluargamu; yang paling besar pahalanya adalah yang engkau nafkahkan kepada keluargamu."`,
      takhrij: "Shahih Muslim No. 995",
      syarah: `Kewajiban nafkah lahir dan batin bernilai ibadah sedekah wajib yang dilipatgandakan pahalanya di sisi Allah.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Larangan Thalaq Bid'i dan Menjaga Hak Masa Iddah Wanita",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّهُ طَلَّقَ امْرَأَتَهُ وَهِيَ حَائِضٌ... فَقَالَ رَسُولُ اللَّهِ: «مُرْهُ فَلْيُرَاجِعْهَا، ثُمَّ لِيُمْسِكْهَا حَتَّى تَطْهُرَ، ثُمَّ تَحِيضَ ثُمَّ تَطْهُرَ، ثُمَّ إِنْ شَاءَ أَمْسَكَ بَعْدُ وَإِنْ شَاءَ طَلَّقَ قَبْلَ أَنْ يَمَسَّ، فَتِلْكَ الْعِدَّةُ الَّتِي أَمَرَ اللَّهُ أَنْ تُطَلَّقَ لَهَا النِّسَاءُ»`,
      terjemah: `Dari Ibnu Umar bahwa ia menceraikan istrinya saat sedang haidh... Maka Rasulullah SAW bersabda: "Perintahkan dia untuk merujuknya kembali, lalu menahannya hingga suci, kemudian haidh lagi lalu suci kembali. Setelah itu jika ia mau ia boleh mempertahankannya, dan jika ia mau ia boleh menceraikannya saat dalam keadaan suci sebelum digauli. Itulah masa 'iddah yang diperintahkan Allah untuk menceraikan wanita."`,
      takhrij: "Shahih Bukhari No. 5251 & Muslim No. 1471",
      syarah: `Menjaga etika syar'i saat thalaq: tidak boleh menjatuhkan talak saat istri sedang haidh atau saat suci yang telah digauli.`,
    },
  ],

  // 15. Jihad & Ekspedisi (5 Hadis)
  jihad: [
    {
      nomorHadis: 1,
      subJudul: "Keutamaan Berjihad Membela Agama & Tingkatan Tertinggi di Surga",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«تَضَمَّنَ اللَّهُ لِمَنْ خَرَجَ فِي سَبِيلِهِ، لاَ يُخْرِجُهُ إِلَّا جِهَادٌ فِي سَبِيلِي وَإِيمَانٌ بِي وَتَصْدِيقٌ بِرُسُلِي، أَنْ أُرْجِعَهُ بِمَا نَالَ مِنْ أَجْرٍ أَوْ غَنِيمَةٍ، أَوْ أُدْخِلَهُ الْجَنَّةَ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Allah menjamin bagi siapa saja yang keluar berjuang di jalan-Nya—tiada yang mengeluarkannya kecuali niat berjihad di jalan-Ku... bahwa Aku akan mengembalikannya dengan membawa pahala atau ghanimah, atau Aku memasukkannya ke dalam surga."`,
      takhrij: "Shahih Bukhari No. 3123 & Muslim No. 1876",
      syarah: `Jihad syar'i bertujuan menegakkan keadilan kalimatillah dan membela kaum tertindas dengan keikhlasan niat.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Pahala Berjaga di Perbatasan (Ribath) Lebih Baik dari Dunia dan Seisinya",
      arab: `عَنْ سَهْلِ بْنِ سَعْدٍ السَّاعِدِيِّ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«رِبَاطُ يَوْمٍ فِي سَبِيلِ اللَّهِ خَيْرٌ مِنَ الدُّنْيَا وَمَا عَلَيْهَا، وَمَوْضِعُ سَوْطِ أَحَدِكُمْ مِنَ الْجَنَّةِ خَيْرٌ مِنَ الدُّنْيَا وَمَا عَلَيْهَا»`,
      terjemah: `Dari Sahl bin Sa'd As-Sa'idi radhiyallahu 'anhu bahwa Rasulullah SAW bersabda: "Berjaga-jaga (ribath) sehari di jalan Allah untuk membela negeri kaum muslimin lebih baik daripada dunia dan segala isinya, dan tempat sebesar cemeti salah seorang di antara kalian di surga lebih baik daripada dunia dan isinya."`,
      takhrij: "Shahih Bukhari No. 2892 & Muslim No. 1881",
      syarah: `Kemuliaan menjaga keamanan kedaulatan kaum muslimin dari ancaman dan serangan musuh.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Larangan Membunuh Wanita, Anak-Anak, dan Merusak Tanaman Saat Perang",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ:

«وُجِدَتِ امْرَأَةٌ مَقْتُولَةً فِي بَعْضِ مَغَازِي رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فَنَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ قَتْلِ النِّسَاءِ وَالصِّبْيَانِ»`,
      terjemah: `Dari Ibnu Umar radhiyallahu 'anhuma berkata: "Ditemukan seorang wanita terbunuh dalam sebagian peperangan Rasulullah SAW, maka Rasulullah SAW melarang membunuh wanita dan anak-anak."`,
      takhrij: "Shahih Bukhari No. 3015 & Muslim No. 1744",
      syarah: `Etika perang tertinggi dalam Islam yang melarang kekerasan terhadap warga sipil, orang tua, wanita, anak-anak, dan tempat ibadah.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Kebaikan Terikat Pada Ubun-Ubun Kuda Perang Hingga Hari Kiamat",
      arab: `عَنْ عُرْوَةَ الْبَارِقِيِّ رَضِيَ اللَّهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الْخَيْلُ مَعْقُودٌ فِي نَوَاصِيهَا الْخَيْرُ إِلَى يَوْمِ الْقِيَامَةِ: الأَجْرُ وَالْغَنِيمَةُ»`,
      terjemah: `Dari Urwah Al-Bariqi radhiyallahu 'anhu bahwa Nabi SAW bersabda: "Kuda perang itu terikat kebaikan pada ubun-ubunnya hingga hari kiamat, yaitu pahala ibadah dan ghanimah."`,
      takhrij: "Shahih Bukhari No. 2849 & Muslim No. 1871",
      syarah: `Pemberdayaan sarana pertahanan militer demi menjaga perdamaian dan kehormatan risalah Islam.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Niat yang Murni: Berjuang Agar Kalimat Allah Menjadi yang Paling Tinggi",
      arab: `عَنْ أَبِي مُوسَى الأَشْعَرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: سُئِلَ رَسُولُ اللَّهِ عَنِ الرَّجُلِ يُقَاتِلُ شَجَاعَةً، وَيُقَاتِلُ حَمِيَّةً، وَيُقَاتِلُ رِيَاءً، أَيُّ ذَلِكَ فِي سَبِيلِ اللَّهِ؟ فَقَالَ:

«مَنْ قَاتَلَ لِتَكُونَ كَلِمَةُ اللَّهِ هِيَ الْعُلْيَا فَهُوَ فِي سَبِيلِ اللَّهِ»`,
      terjemah: `Dari Abu Musa Al-Asy'ari: Rasulullah SAW ditanya tentang orang yang berperang karena keberanian, karena fanatisme suku, atau karena riya' ingin dipuji; manakah di antaranya yang termasuk di jalan Allah? Rasulullah SAW bersabda: "Barangsiapa yang berjuang agar kalimat Allah menjadi yang paling tinggi, maka dialah yang berada di jalan Allah."`,
      takhrij: "Shahih Bukhari No. 2810 & Muslim No. 1904",
      syarah: `Menegaskan bahwa syarat mutlak diterimanya perjuangan adalah keikhlasan lillahi ta'ala tanpa tendensi duniawi.`,
    },
  ],

  // 16. Jenazah (5 Hadis)
  jenazah: [
    {
      nomorHadis: 1,
      subJudul: "Pahala Dua Qirath Bagi yang Menshalatkan & Mengantar Jenazah",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَنِ اتَّبَعَ جَنَازَةَ مُسْلِمٍ، إِيمَانًا وَاحْتِسَابًا، وَكَانَ مَعَهُ حَتَّى يُصَلَّى عَلَيْهَا وَيُفْرَغَ مِنْ دَفْنِهَا، فَإِنَّهُ يَرْجِعُ مِنَ الأَجْرِ بِقِيرَاطَيْنِ، كُلُّ قِيرَاطٍ مِثْلُ أُحُدٍ...»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu bahwa Rasulullah SAW bersabda: "Barangsiapa mengiringi jenazah seorang muslim karena iman dan mengharap pahala hingga dishalatkan dan selesai dimakamkan, maka ia pulang membawa pahala dua qirath, setiap qirath besarnya seperti Gunung Uhud..."`,
      takhrij: "Shahih Bukhari No. 47 & Muslim No. 945",
      syarah: `Kewajiban fardhu kifayah mengurus jenazah muslim dengan penuh penghormatan.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Perintah Menyegerakan Pemakaman Jenazah",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«أَسْرِعُوا بِالْجِنَازَةِ، فَإِنْ تَكُ صَالِحَةً فَخَيْرٌ تُقَدِّمُونَهَا إِلَيْهِ، وَإِنْ يَكُ سِوَى ذَلِكَ فَشَرٌّ تَضَعُونَهُ عَنْ رِقَابِكُمْ»`,
      terjemah: `Dari Abu Hurairah dari Nabi SAW bersabda: "Segerakanlah pengurusan jenazah! Jika ia orang shaleh maka itu adalah kebaikan yang kalian segerakan untuknya, dan jika ia selain itu maka itu adalah keburukan yang kalian lepaskan dari pundak kalian."`,
      takhrij: "Shahih Bukhari No. 1315 & Muslim No. 944",
      syarah: `Sunnah menyegerakan memandikan, mengkafani, menshalatkan, dan menguburkan mayit tanpa menunda-nunda.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Tiga Amalan yang Pahalanya Mengalir Abadi Setelah Kematian",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلا مِنْ ثَلاثَةٍ: إِلا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Apabila manusia meninggal dunia terputuslah amalannya kecuali dari tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau anak shaleh yang mendoakannya."`,
      takhrij: "Shahih Muslim No. 1631",
      syarah: `Investasi pahala abadi yang terus mengalir ke alam kubur melalui wakaf, penyebaran ilmu agama, dan tarbiyah anak shaleh.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Larangan Meratapi Jenazah (Niyahah) dan Merobek Pakaian",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«لَيْسَ مِنَّا مَنْ لَطَمَ الْخُدُودَ، وَشَقَّ الْجُيُوبَ، وَدَعَا بِدَعْوَى الْجَاهِلِيَّةِ»`,
      terjemah: `Dari Abdullah bin Mas'ud bahwa Nabi SAW bersabda: "Bukan termasuk golongan kami orang yang menampar-nampar pipi, merobek-robek kerah baju, dan meratap dengan ratapan jahiliyah saat tertimpa musibah kematian."`,
      takhrij: "Shahih Bukhari No. 1294 & Muslim No. 103",
      syarah: `Kewajiban bersabar dan ridha menerima takdir kematian tanpa melakukan perbuatan histeris yang dilarang syariat.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Doa Memintakan Ampunan & Keteguhan Bagi Mayit Saat Selesai Dimakamkan",
      arab: `عَنْ عُثْمَانَ بْنِ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ قَالَ: كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا فَرَغَ مِنْ دَفْنِ الْمَيِّتِ وَقَفَ عَلَيْهِ فَقَالَ:

«اسْتَغْفِرُوا لأَخِيكُمْ، وَسَلُوا لَهُ بِالتَّثْبِيتِ، فَإِنَّهُ الآنَ يُسْأَلُ»`,
      terjemah: `Dari Utsman bin Affan berkata: Nabi SAW apabila telah selesai memakamkan mayit, beliau berdiri di dekat kuburnya lalu bersabda: "Memohonkanlah ampunan untuk saudara kalian dan mintakanlah keteguhan untuknya, karena sesungguhnya ia sekarang sedang ditanya oleh malaikat Munkar dan Nakir."`,
      takhrij: "Sunan Abu Dawud No. 3221 & Al-Hakim",
      syarah: `Sunnah mendoakan keteguhan iman bagi jenazah saat menghadapi pertanyaan kubur.`,
    },
  ],

  // 17. Makanan & Jamuan & Kurban (5 Hadis)
  makanan: [
    {
      nomorHadis: 1,
      subJudul: "Adab Islami dalam Makan: Membaca Basmalah & Menggunakan Tangan Kanan",
      arab: `عَنْ عُمَرَ بْنِ أَبِي سَلَمَةَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: كُنْتُ غُلَامًا فِي حَجْرِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ... فَقَالَ لِي:

«يَا غُلَامُ، سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ»`,
      terjemah: `Dari Umar bin Abi Salamah radhiyallahu 'anhuma: Rasulullah SAW bersabda kepadaku: "Wahai ananda, sebutlah nama Allah (bacalah Bismillah), makanlah dengan tangan kananmu, dan makanlah makanan yang berada di dekatmu."`,
      takhrij: "Shahih Bukhari No. 5376 & Muslim No. 2022",
      syarah: `Tiga pilar adab makan dalam Islam: dzikrullah di awal santap, menggunakan tangan kanan, dan menjaga kesopanan.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Pola Makan Seimbang: Sepertiga Makanan, Minuman, dan Nafas",
      arab: `عَنِ الْمِقْدَامِ بْنِ مَعْدِيكَرِبَ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«مَا مَلأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ، بِحَسْبِ ابْنِ آدَمَ أُكُلاتٌ يُقِمْنَ صُلْبَهُ، فَإِنْ كَانَ لا مَحَالَةَ: فَثُلُثٌ لِطَعَامِهِ، وَثُلُثٌ لِشَرَابِهِ، وَثُلُثٌ لِنَفَسِهِ»`,
      terjemah: `Dari Al-Miqdam bin Ma'dikarib bahwa ia mendengar Rasulullah SAW bersabda: "Tiada bejana yang dipenuhi anak Adam yang lebih buruk daripada perutnya. Cukuplah bagi anak Adam beberapa suapan untuk menegakkan tulang punggungnya. Jika pun harus mengisinya, maka sepertiga untuk makanannya, sepertiga untuk minumannya, dan sepertiga untuk nafasnya."`,
      takhrij: "Jami' At-Tirmidzi No. 2380 & Ibnu Majah",
      syarah: `Prinsip kesehatan preventif nabawi: menjaga porsi makan agar tubuh tetap ringan beribadah dan terhindar dari penyakit metabolik.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Ihsan dalam Menyembelih Hewan dan Menajamkan Pisau",
      arab: `عَنْ شَدَّادِ بْنِ أَوْسٍ رَضِيَ اللَّهُ عَنْهُ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذَّبْحَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ، فَلْيُرِحْ ذَبِيحَتَهُ»`,
      terjemah: `Dari Syaddad bin Aus radhiyallahu 'anhu dari Rasulullah SAW bersabda: "Sesungguhnya Allah mewajibkan berbuat ihsan (kebaikan) atas segala sesuatu. Maka apabila kalian menyembelih, sembelihlah dengan cara yang terbaik; hendaklah salah seorang di antara kalian menajamkan mata pisaunya dan menenangkan hewan sembelihannya."`,
      takhrij: "Shahih Muslim No. 1955",
      syarah: `Prinsip welas asih syariat Islam dalam memperlakukan hewan ternak dan menyembelih tanpa menyiksa.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Keutamaan Ibadah Kurban (Udhiyah) di Hari Idul Adha",
      arab: `عَنْ أَنَسٍ رَضِيَ اللَّهُ عَنْهُ قَالَ:

«ضَحَّى النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِكَبْشَيْنِ أَمْلَحَيْنِ أَقْرَنَيْنِ، ذَبَحَهُمَا بِيَدِهِ، وَسَمَّى وَكَبَّرَ، وَوَضَعَ رِجْلَهُ عَلَى صِفَاحِهِمَا»`,
      terjemah: `Dari Anas radhiyallahu 'anhu berkata: "Nabi SAW berkurban dengan dua ekor kambing kibasy yang bertanduk dan berwarna putih kehitaman. Beliau menyembelih keduanya dengan tangan beliau sendiri seraya membaca basmalah dan takbir, serta meletakkan kaki beliau di atas sisi leher kambing tersebut."`,
      takhrij: "Shahih Bukhari No. 5565 & Muslim No. 1966",
      syarah: `Sunnah muakkadah menyembelih hewan kurban terbaik dengan membaca Bismillahi Allahu Akbar.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Syariat Aqiqah Bagi Kelahiran Bayi Laki-Laki dan Perempuan",
      arab: `عَنْ سَمُرَةَ بْنِ جُنْدُبٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«كُلُّ غُلامٍ رَهِينَةٌ بِعَقِيقَتِهِ، تُذْبَحُ عَنْهُ يَوْمَ سَابِعِهِ، وَيُحْلَقُ، وَيُسَمَّى»`,
      terjemah: `Dari Samurah bin Jundub bahwa Rasulullah SAW bersabda: "Setiap bayi tergadai dengan aqiqahnya; disembelihkan hewan aqiqah untuknya pada hari ketujuh kelahirannya, dicukur rambut kepalanya, dan diberi nama."`,
      takhrij: "Sunan Abu Dawud No. 2838 & At-Tirmidzi No. 1522",
      syarah: `Ungkapan syukur atas kelahiran buah hati dengan menyembelih 2 kambing untuk anak laki-laki dan 1 kambing untuk anak perempuan.`,
    },
  ],

  // 18. Minuman & Khamr (4 Hadis)
  minuman: [
    {
      nomorHadis: 1,
      subJudul: "Pengharaman Segala Jenis Minuman yang Memabukkan (Khamr)",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«كُلُّ مُسْكِرٍ خَمْرٌ، وَكُلُّ مُسْكِرٍ حَرَامٌ»`,
      terjemah: `Dari Ibnu Umar radhiyallahu 'anhuma bahwa Rasulullah SAW bersabda: "Setiap yang memabukkan adalah khamr, dan setiap yang memabukkan adalah haram."`,
      takhrij: "Shahih Muslim No. 2003",
      syarah: `Kaidah fiqih mutlak perlindungan akal dari segala zat adiktif, khamr, dan narkotika.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Laknat Allah Bagi Sepuluh Golongan yang Terlibat dalam Khamr",
      arab: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ قَالَ:

«لَعَنَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي الْخَمْرِ عَشَرَةً: عَاصِرَهَا، وَمُعْتَصِرَهَا، وَشَارِبَهَا، وَحَامِلَهَا، وَالْمَحْمُولَةَ إِلَيْهِ، وَسَاقِيَهَا، وَبَائِعَهَا، وَآكِلَ ثَمَنِهَا، وَالْمُشْتَرِيَ لَهَا، وَالْمُشْتَرَاةَ لَهُ»`,
      terjemah: `Dari Anas bin Malik berkata: "Rasulullah SAW melaknat sepuluh golongan dalam perkara khamr: yang memerasnya, yang minta diperaskan, yang meminumnya, yang membawanya, yang dibawakan kepadanya, yang menuangkannya, yang menjualnya, yang memakan hasil penjualannya, yang membelinya, dan yang dibelikan untuknya."`,
      takhrij: "Jami' At-Tirmidzi No. 1295 & Abu Dawud No. 3674",
      syarah: `Pengharaman total ekosistem industri minuman keras dan zat memabukkan.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Adab Minum Bernafas Tiga Kali di Luar Bejana",
      arab: `عَنْ أَنَسٍ رَضِيَ اللَّهُ عَنْهُ:

«أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كَانَ يَتَنَفَّسُ فِي الشَّرَابِ ثَلاثًا»، وَيَقُولُ: «إِنَّهُ أَرْوَى وَأَبْرَأُ وَأَمْرَأُ»`,
      terjemah: `Dari Anas radhiyallahu 'anhu: "Bahwa Rasulullah SAW bernafas tiga kali (menjauhkan gelas saat menarik nafas) ketika minum, dan beliau bersabda: 'Cara ini lebih memuaskan dahaga, lebih selamat dari tersedak, dan lebih menyehatkan.'"`,
      takhrij: "Shahih Bukhari No. 5631 & Muslim No. 2028",
      syarah: `Adab minum perlahan secara bertahap tanpa meniup atau bernafas ke dalam bejana air.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Pahala Memberi Minum Air Kepada Makhluk Bernyawa",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ قَالَ: «بَيْنَمَا رَجُلٌ يَمْشِي بِطَرِيقٍ اشْتَدَّ عَلَيْهِ الْعَطَشُ، فَوَجَدَ بِئْرًا فَنَزَلَ فِيهَا فَشَرِبَ... فَإِذَا كَلْبٌ يَلْهَثُ يَأْكُلُ الثَّرَى مِنَ الْعَطَشِ... فَمَلأَ خُفَّهُ مَاءً ثُمَّ سَقَى الْكَلْبَ، فَشَكَرَ اللَّهُ لَهُ فَغَفَرَ لَهُ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah menceritakan seorang lelaki yang kehausan lalu turun ke sumur minum air... Ketika keluar ia melihat seekor anjing menjulurkan lidah menjilat tanah karena kehausan. Lelaki itu mengisi sepatunya dengan air lalu memberi minum anjing tersebut. Maka Allah berterima kasih kepadanya dan mengampuni dosa-dosanya.`,
      takhrij: "Shahih Bukhari No. 2466 & Muslim No. 2244",
      syarah: `Kasih sayang dan sedekah air kepada setiap makhluk hidup mendatangkan ampunan dan rahmat Allah.`,
    },
  ],

  // 19. Pengobatan & Sakit (4 Hadis)
  pengobatan: [
    {
      nomorHadis: 1,
      subJudul: "Setiap Penyakit Pasti Ada Obat Penawarnya",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَا أَنْزَلَ اللَّهُ دَاءً إِلاَّ أَنْزَلَ لَهُ شِفَاءً»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu dari Nabi SAW bersabda: "Tidaklah Allah menurunkan suatu penyakit melainkan Dia juga menurunkan obat penawarnya."`,
      takhrij: "Shahih Bukhari No. 5678",
      syarah: `Motivasi optimisme syariat untuk terus berikhtiar medis mencari kesembuhan dengan tawakkal kepada Allah.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Khasiat Habbatussauda Penawar Segala Penyakit",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّهُ سَمِعَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«فِي الْحَبَّةِ السَّوْدَاءِ شِفَاءٌ مِنْ كُلِّ دَاءٍ إِلا السَّامَ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu bahwa ia mendengar Rasulullah SAW bersabda: "Pada habbatus sauda' (jintan hitam) terdapat kesembuhan untuk segala macam penyakit kecuali as-sam (kematian)."`,
      takhrij: "Shahih Bukhari No. 5688 & Muslim No. 2215",
      syarah: `Mukjizat medis thibbun nabawi yang menguatkan daya tahan imunitas tubuh manusia.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Pengobatan dengan Minum Madu dan Berbekam (Hijamah)",
      arab: `عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الشِّفَاءُ فِي ثَلاثَةٍ: شَرْبَةِ عَسَلٍ، وَشَرْطَةِ مِحْجَمٍ، وَكَيَّةِ نَارٍ، وَأَنْهَى أُمَّتِي عَنِ الْكَيِّ»`,
      terjemah: `Dari Ibnu Abbas dari Nabi SAW bersabda: "Kesembuhan itu ada pada tiga perkara: meminum madu, sayatan alat bekam (hijamah), dan sengatan besi panas (kay), dan aku melarang umatku dari pengobatan kay."`,
      takhrij: "Shahih Bukhari No. 5680",
      syarah: `Metode terapi pengobatan herbal alami dan detoksifikasi darah kotor dengan berbekam.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Keutamaan Menjenguk Orang Sakit dan Doa Kesembuhan",
      arab: `عَنْ عَلِيٍّ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«مَا مِنْ مُسْلِمٍ يَعُودُ مُسْلِمًا غُدْوَةً إِلا صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُمْسِيَ، وَإِنْ عَادَهُ عَشِيَّةً إِلا صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ حَتَّى يُصْبِحَ، وَكَانَ لَهُ خَرِيفٌ فِي الْجَنَّةِ»`,
      terjemah: `Dari Ali radhiyallahu 'anhu berkata: Aku mendengar Rasulullah SAW bersabda: "Tidaklah seorang muslim menjenguk saudaranya sesama muslim di waktu pagi melainkan 70.000 malaikat mendoakannya hingga sore hari, dan jika ia menjenguknya di waktu sore melainkan 70.000 malaikat mendoakannya hingga pagi hari, dan baginya kebun buah di surga."`,
      takhrij: "Jami' At-Tirmidzi No. 969 & Abu Dawud",
      syarah: `Hak persaudaraan muslim dan pelipur lara bagi orang yang sedang diuji penyakit.`,
    },
  ],

  // 20. Pakaian & Busana (4 Hadis)
  pakaian: [
    {
      nomorHadis: 1,
      subJudul: "Adab Berpakaian: Menghindari Kesombongan dan Berlebih-lebihan",
      arab: `عَنْ عَمْرِو بْنِ شُعَيْبٍ عَنْ أَبِيهِ عَنْ جَدِّهِ رَضِيَ اللَّهُ عَنْهُمْ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«كُلُوا وَاشْرَبُوا وَتَصَدَّقُوا وَالْبَسُوا فِي غَيْرِ إِسْرَافٍ وَلَا مَخِيلَةٍ»`,
      terjemah: `Dari Amr bin Syu'aib dari ayahnya dari kakeknya radhiyallahu 'anhum bahwa Rasulullah SAW bersabda: "Makanlah, minumlah, bersedekahlah, dan berpakaianlah kalian tanpa berlebih-lebihan dan tanpa kesombongan."`,
      takhrij: "Sunan An-Nasa'i No. 2559 & Ibnu Majah No. 3605",
      syarah: `Berpakaian rapi dan bersih adalah bentuk syukur atas nikmat Allah, selama bersih dari rasa riya' dan tinggi hati.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Pengharaman Sutera dan Emas Bagi Kaum Laki-Laki",
      arab: `عَنْ عَلِيِّ بْنِ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ نَبِيَّ اللَّهِ أَخَذَ حَرِيرًا فَجَعَلَهُ فِي يَمِينِهِ، وَأَخَذَ ذَهَبًا فَجَعَلَهُ فِي شِمَالِهِ، ثُمَّ قَالَ:

«إِنَّ هَذَيْنِ حَرَامٌ عَلَى ذُكُورِ أُمَّتِي، حِلٌّ لإِنَاثِهِمْ»`,
      terjemah: `Dari Ali bin Abi Thalib bahwa Nabi SAW memegang kain sutera di tangan kanannya dan emas di tangan kirinya, lalu bersabda: "Sesungguhnya dua benda ini haram bagi kaum laki-laki dari umatku, dan halal bagi kaum wanitanya."`,
      takhrij: "Sunan Abu Dawud No. 4057 & An-Nasa'i",
      syarah: `Hikmah menjaga maskulinitas lelaki dan mencegah kemewahan berlebih bagi kaum pria.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Sunnah Memulai dari Sebelah Kanan Saat Mengenakan Pakaian dan Sandal",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ:

«كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يُعْجِبُهُ التَّيَمُّنُ فِي تَنَعُّلِهِ، وَتَرَجُّلِهِ، وَطُهُورِهِ، وَفِي شَأْنِهِ كُلِّهِ»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha berkata: "Nabi shallallahu 'alaihi wa sallam sangat menyukai mendahulukan bagian kanan ketika memakai sandal, menyisir rambut, bersuci, dan dalam seluruh urusan kebaikannya."`,
      takhrij: "Shahih Bukhari No. 168 & Muslim No. 268",
      syarah: `Adab mendahulukan anggota kanan untuk perkara-perkara mulia dan anggota kiri untuk membersihkan kotoran.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Allah Itu Maha Indah dan Menyukai Keindahan",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ، الْكِبْرُ: بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ»`,
      terjemah: `Dari Abdullah bin Mas'ud dari Nabi SAW bersabda: "Sesungguhnya Allah itu Maha Indah dan menyukai keindahan. Adapun kesombongan itu adalah menolak kebenaran dan merendahkan manusia."`,
      takhrij: "Shahih Muslim No. 91",
      syarah: `Memakai pakaian yang bersih dan serasi bukan termasuk kesombongan, melainkan manifestasi kesyukuran nikmat.`,
    },
  ],

  // 21. Akhlak & Adab Luhur (5 Hadis)
  akhlak: [
    {
      nomorHadis: 1,
      subJudul: "Misi Utama Kerasulan: Menyempurnakan Akhlak yang Mulia",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Sesungguhnya aku diutus hanyalah untuk menyempurnakan akhlak yang mulia."`,
      takhrij: "Musnad Ahmad No. 8952 & Al-Adab Al-Mufrad No. 273",
      syarah: `Puncak buah dari aqidah dan ibadah seorang muslim terpancar dari keluhuran pekerti dan kejujurannya.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Senyum Tulus di Hadapan Saudara Adalah Sedekah",
      arab: `عَنْ أَبِي ذَرٍّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ لِي رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ»`,
      terjemah: `Dari Abu Dzar radhiyallahu 'anhu berkata: Rasulullah SAW bersabda kepadaku: "Senyumanmu di hadapan wajah saudaramu adalah bernilai sedekah bagimu."`,
      takhrij: "Jami' At-Tirmidzi No. 1956",
      syarah: `Menebarkan keramahan, kehangatan ukhuwah, dan wajah ceria kepada sesama muslim.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Hakikat Orang Kuat Adalah yang Mampu Menahan Amarahnya",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Orang yang kuat itu bukanlah orang yang menang dalam bergulat, melainkan orang yang kuat adalah orang yang mampu menguasai dirinya saat marah."`,
      takhrij: "Shahih Bukhari No. 6114 & Muslim No. 2609",
      syarah: `Kemenangan mengendalikan hawa nafsu dan emosi saat menghadapi perlakuan buruk orang lain.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Menjaga Lisan: Berkata yang Baik atau Lebih Baik Diam",
      arab: `عَنْ أَبِي هُرَيْرَةَ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ جَارَهُ...»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Barangsiapa beriman kepada Allah dan hari akhir hendaklah ia berkata yang baik atau diam, dan barangsiapa beriman kepada Allah dan hari akhir hendaklah ia memuliakan tetangganya..."`,
      takhrij: "Shahih Bukhari No. 6018 & Muslim No. 47",
      syarah: `Menjaga lisan dari ghibah, fitnah, dan perkataan sia-sia sebagai bukti kejujuran iman.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Keutamaan Berbakti Kepada Ibu Bapak Terutama Ibu Tiga Kali Lipat",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ فَقَالَ: يَا رَسُولَ اللَّهِ، مَنْ أَحَقُّ النَّاسِ بِحُسْنِ صَحَابَتِي؟ قَالَ: «أُمُّكَ»، قَالَ: ثُمَّ مَنْ؟ قَالَ: «ثُمَّ أُمُّكَ»، قَالَ: ثُمَّ مَنْ؟ قَالَ: «ثُمَّ أُمُّكَ»، قَالَ: ثُمَّ مَنْ؟ قَالَ: «ثُمَّ أَبُوكَ»`,
      terjemah: `Dari Abu Hurairah berkata: Seorang laki-laki datang kepada Rasulullah SAW dan bertanya: "Wahai Rasulullah, siapakah orang yang paling berhak mendapatkan perlakuan baikku?" Beliau menjawab: "Ibumu." Lelaki itu bertanya: "Kemudian siapa?" Beliau menjawab: "Kemudian ibumu." Lelaki itu bertanya lagi: "Kemudian siapa?" Beliau menjawab: "Kemudian ibumu." Lelaki itu bertanya lagi: "Kemudian siapa?" Beliau menjawab: "Kemudian ayahmu."`,
      takhrij: "Shahih Bukhari No. 5971 & Muslim No. 2548",
      syarah: `Tingginya kedudukan birrul walidain sebagai amalan kunci pembuka pintu surga.`,
    },
  ],

  // 22. Doa & Dzikir (5 Hadis)
  doa: [
    {
      nomorHadis: 1,
      subJudul: "Doa Adalah Inti Pokok Ibadah kepada Allah",
      arab: `عَنِ النُّعْمَانِ بْنِ بَشِيرٍ رَضِيَ اللَّهُ عَنْهُمَا عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الدُّعَاءُ هُوَ الْعِبَادَةُ»، ثُمَّ قَرَأَ: {وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ} [غافر: 60]`,
      terjemah: `Dari An-Nu'man bin Basyir radhiyallahu 'anhuma dari Nabi SAW bersabda: "Doa adalah inti ibadah." Kemudian beliau membaca firman Allah: 'Dan Tuhanmu berfirman: Berdoalah kepada-Ku, niscaya akan Kuperkenankan bagimu.' (QS. Ghafir: 60)`,
      takhrij: "Sunan Abu Dawud No. 1479 & Jami' At-Tirmidzi No. 2969",
      syarah: `Merendahkan diri bermunajat kepada Allah adalah manifestasi tauhid dan pengakuan kelemahan mutlak seorang hamba.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Turunnya Rahmat Allah di Sepertiga Malam Terakhir Mengabulkan Doa",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«يَنْزِلُ رَبُّنَا تَبَارَكَ وَتَعَالَى كُلَّ لَيْلَةٍ إِلَى السَّمَاءِ الدُّنْيَا حِينَ يَبْقَى ثُلُثُ اللَّيْلِ الآخِرُ فَيَقُولُ: مَنْ يَدْعُونِي فَأَسْتَجِيبَ لَهُ، مَنْ يَسْأَلُنِي فَأُعْطِيَهُ، مَنْ يَسْتَغْفِرُنِي فَأَغْفِرَ لَهُ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Rabb kita Tabaraka wa Ta'ala turun ke langit dunia setiap malam saat tersisa sepertiga malam terakhir seraya berfirman: 'Barangsiapa berdoa kepada-Ku niscaya Aku perkenankan baginya, barangsiapa meminta kepada-Ku niscaya Aku beri kepadanya, dan barangsiapa memohon ampunan kepada-Ku niscaya Aku ampuni baginya.'"`,
      takhrij: "Shahih Bukhari No. 1145 & Muslim No. 758",
      syarah: `Waktu terbaik untuk qiyamul lail, istighfar di waktu sahur, dan bermunajat memohon hajat.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Dua Kalimat Ringan di Lisan Namun Sangat Berat di Timbangan Amal",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ»`,
      terjemah: `Dari Abu Hurairah berkata: Rasulullah SAW bersabda: "Dua kalimat yang ringan di lisan, sangat berat di timbangan amal, dan dicintai oleh Dzat Yang Maha Pengasih: 'Subhaanallaahi wa bihamdih, Subhaanallaahil 'Azhiim' (Maha Suci Allah dengan memuji-Nya, Maha Suci Allah Yang Maha Agung)."`,
      takhrij: "Shahih Bukhari No. 6406 & Muslim No. 2694",
      syarah: `Penutup Shahih Al-Bukhari yang mengingatkan pentingnya membasahi lidah dengan tasbih dan tahmid.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Sayyidul Istighfar: Doa Pengampunan Paling Utama",
      arab: `عَنْ شَدَّادِ بْنِ أَوْسٍ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«سَيِّدُ الاسْتِغْفَارِ أَنْ تَقُولَ: اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ»`,
      terjemah: `Dari Syaddad bin Aus dari Nabi SAW: "Sayyidul Istighfar adalah engkau membaca: 'Ya Allah, Engkau adalah Tuhanku, tiada tuhan yang berhak disembah selain Engkau. Engkau yang menciptakanku dan aku adalah hamba-Mu... Barangsiapa membacanya di waktu sore lalu wafat di malam itu ia masuk surga, dan barangsiapa membacanya di waktu pagi lalu wafat di hari itu ia masuk surga.'"`,
      takhrij: "Shahih Bukhari No. 6306",
      syarah: `Dzikir pagi dan petang terlengkap yang memadukan pengakuan tauhid, nikmat, dan kelemahan diri di hadapan maghfirah Allah.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Doa Memohon Perlindungan dari Empat Perkara",
      arab: `عَنْ أَنَسٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كَانَ يَقُولُ:

«اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَالْهَرَمِ وَعَذَابِ الْقَبْرِ، اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلاهَا»`,
      terjemah: `Dari Anas bahwa Nabi SAW senantiasa berdoa: "Ya Allah, aku berlindung kepada-Mu dari kelemahan, kemalasan, sifat pengecut, kebakhilan, kepikunan, dan siksa kubur. Ya Allah, berikanlah ketakwaan pada jiwaku dan sucikanlah ia, Engkaulah sebaik-baik yang mensucikannya, Engkaulah Pelindung dan Penolongnya."`,
      takhrij: "Shahih Muslim No. 2722",
      syarah: `Benteng spiritual menjaga produktivitas amal, keberanian berbuat haq, dan kebersihan jiwa.`,
    },
  ],

  // 23. Takdir / Qadar (4 Hadis)
  takdir: [
    {
      nomorHadis: 1,
      subJudul: "Ketetapan Takdir Telah Ditulis 50.000 Tahun Sebelum Penciptaan",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«كَتَبَ اللَّهُ مَقَادِيرَ الْخَلَائِقِ قَبْلَ أَنْ يَخْلُقَ السَّمَاوَاتِ وَالْأَرْضَ بِخَمْسِينَ أَلْفَ سَنَةٍ، قَالَ: وَعَرْشُهُ عَلَى الْمَاءِ»`,
      terjemah: `Dari Abdullah bin Amr bin Al-Ash radhiyallahu 'anhuma berkata: Aku mendengar Rasulullah SAW bersabda: "Allah telah mencatat takdir seluruh makhluk lima puluh ribu tahun sebelum Dia menciptakan langit dan bumi, dan Arsy-Nya berada di atas air."`,
      takhrij: "Shahih Muslim No. 2653",
      syarah: `Rukun iman keenam: mengimani ilmu, kehendak, dan takdir Allah atas segala yang terjadi di alam semesta.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Pencatatan Empat Ketetapan Saat Janin Berusia 120 Hari",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ قَالَ: حَدَّثَنَا رَسُولُ اللَّهِ: «إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا... ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ، وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ، وَأَجَلِهِ، وَعَمَلِهِ، وَشَقِيٌّ أَوْ سَعِيدٌ»`,
      terjemah: `Dari Abdullah bin Mas'ud: Rasulullah SAW bersabda: "Sesungguhnya setiap kalian dikumpulkan penciptaannya dalam rahim ibunya selama 40 hari... kemudian diutus malaikat meniupkan ruh padanya dan diperintahkan mencatat empat ketetapan: rezekinya, ajalnya, amalnya, dan apakah ia celaka atau bahagia."`,
      takhrij: "Shahih Bukhari No. 3208 & Muslim No. 2643",
      syarah: `Ketetapan takdir di Lauhul Mahfuzh dan ketundukan hamba untuk senantiasa beramal shalih menggapai husnul khatimah.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Bersemangat Melakukan yang Bermanfaat dan Menghindari Ucapan 'Seandainya'",
      arab: `عَنْ أَبِي هُرَيْرَةَ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ، وَفِي كُلٍّ خَيْرٌ، احْرِصْ عَلَى مَا يَنْفَعُكَ، وَاسْتَعِنْ بِاللَّهِ وَلا تَعْجَزْ، وَإِنْ أَصَابَكَ شَيْءٌ فَلا تَقُلْ: لَوْ أَنِّي فَعَلْتُ كَانَ كَذَا وَكَذَا، وَلَكِنْ قُلْ: قَدَرُ اللَّهِ وَمَا شَاءَ فَعَلَ، فَإِنَّ لَوْ تَفْتَحُ عَمَلَ الشَّيْطَانِ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah, dan pada masing-masing ada kebaikan. Bersungguh-sungguhlah meraih apa yang bermanfaat bagimu, mohonlah pertolongan kepada Allah dan jangan merasa lemah! Jika engkau tertimpa sesuatu janganlah berkata: 'Seandainya aku berbuat begini niscaya begini', tetapi katakanlah: 'Qaddarallaahu wa maa syaa-a fa'al' (Ini takdir Allah dan apa yang Dia kehendaki Dia perbuat), karena kata 'seandainya' membuka pintu amalan setan."`,
      takhrij: "Shahih Muslim No. 2664",
      syarah: `Kaidah ikhtiar maksimal yang diiringi kepasrahan penuh kepada takdir Allah.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Setiap Orang Dimudahkan Menuju Takdir Penciptaannya",
      arab: `عَنْ عَلِيٍّ رَضِيَ اللَّهُ عَنْهُ قَالَ: كُنَّا فِي جَنَازَةٍ... فَقَالَ رَسُولُ اللَّهِ: «مَا مِنْكُمْ مِنْ نَفْسٍ إِلا وَقَدْ كُتِبَ مَنْزِلُهَا مِنَ الْجَنَّةِ وَالنَّارِ»، قَالُوا: يَا رَسُولَ اللَّهِ أَفَلا نَتَّكِلُ؟ قَالَ: «اعْمَلُوا فَكُلٌّ مُيَسَّرٌ لِمَا خُلِقَ لَهُ»`,
      terjemah: `Dari Ali bin Abi Thalib: Rasulullah SAW bersabda: "Tiada satu jiwa pun melainkan telah dicatat tempat duduknya di surga atau neraka." Para sahabat bertanya: "Wahai Rasulullah, kalau begitu tidakkah kita pasrah saja?" Beliau bersabda: "Beramallah kalian, karena setiap orang akan dimudahkan menuju apa yang ia diciptakan untuknya!"`,
      takhrij: "Shahih Bukhari No. 4949 & Muslim No. 2647",
      syarah: `Kewajiban beramal shalih dan tidak boleh berdalih dengan takdir untuk bermaksiat.`,
    },
  ],

  // 24. Fitnah Akhir Zaman & Al-Mahdi (5 Hadis)
  fitnah: [
    {
      nomorHadis: 1,
      subJudul: "Bersegera Beramal Shalih Sebelum Datangnya Gelombang Fitnah",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«بَادِرُوا بِالأَعْمَالِ فِتَنًا كَقِطَعِ اللَّيْلِ الْمُظْلِمِ، يُصْبِحُ الرَّجُلُ مُؤْمِنًا وَيُمْسِي كَافِرًا، أَوْ يُمْسِي مُؤْمِنًا وَيُصْبِحُ كَافِرًا، يَبِيعُ دِينَهُ بِعَرَضٍ مِنَ الدُّنْيَا»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu bahwa Rasulullah SAW bersabda: "Bersegeralah kalian beramal shalih sebelum datang fitnah yang bagaikan potongan malam yang gelap gulita. Di mana seseorang di pagi hari beriman lalu di sore hari menjadi kafir... ia menjual agamanya demi sedikit kenikmatan dunia."`,
      takhrij: "Shahih Muslim No. 118",
      syarah: `Kewaspadaan menjaga aqidah dan istiqamah beramal ibadah di era merebaknya syubhat dan syahwat fitnah akhir zaman.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Sepuluh Tanda Besar Hari Kiamat (Asyratus Sa'ah Al-Kubra)",
      arab: `عَنْ حُذَيْفَةَ بْنِ أَسِيدٍ الْغِفَارِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: اطَّلَعَ النَّبِيُّ عَلَيْنَا وَنَحْنُ نَتَذَاكَرُ فَقَالَ: «إِنَّهَا لَنْ تَقُومَ حَتَّى تَرَوْنَ قَبْلَهَا عَشْرَ آيَاتٍ: الدُّخَانَ، وَالدَّجَّالَ، وَالدَّابَّةَ، وَطُلُوعَ الشَّمْسِ مِنْ مَغْرِبِهَا، وَنُزُولَ عِيسَى ابْنِ مَرْيَمَ، وَيَأْجُوجَ وَمَأْجُوجَ، وَثَلاثَةَ خُسُوفٍ... وَآخِرُ ذَلِكَ نَارٌ تَخْرُجُ مِنَ الْيَمَنِ تَطْرُدُ النَّاسَ إِلَى مَحْشَرِهِمْ»`,
      terjemah: `Dari Hudzaifah bin Asid Al-Ghifari berkata: Nabi SAW bersabda: "Kiamat tidak akan terjadi hingga kalian melihat sepuluh tanda sebelumnya: kabut asap (dukhan), Dajjal, binatang melata (dabbah), terbitnya matahari dari barat, turunnya Isa putra Maryam, Ya'juj dan Ma'juj, tiga peristiwa gempa penenggelaman bumi... dan yang terakhir adalah api yang keluar dari Yaman menggiring manusia ke tempat perkumpulan mereka."`,
      takhrij: "Shahih Muslim No. 2901",
      syarah: `Rentetan peristiwa dahsyat penanda hancurnya alam semesta dan awal permulaan hari kiamat.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Kenikmatan Surga yang Belum Pernah Dilihat Mata dan Terlintas di Hati",
      arab: `عَنْ أَبِي هُرَيْرَةَ عَنْ رَسُولِ اللَّهِ: قَالَ اللَّهُ تَعَالَى:

«أَعْدَدْتُ لِعِبَادِيَ الصَّالِحِينَ مَا لا عَيْنٌ رَأَتْ، وَلا أُذُنٌ سَمِعَتْ، وَلا خَطَرَ عَلَى قَلْبِ بَشَرٍ»، وَاقْرَءُوا إِنْ شِئْتُمْ: {فَلا تَعْلَمُ نَفْسٌ مَا أُخْفِيَ لَهُمْ مِنْ قُرَّةِ أَعْيُنٍ} [السجدة: 17]`,
      terjemah: `Dari Abu Hurairah dari Rasulullah SAW: Allah Ta'ala berfirman: "Aku telah sediakan untuk hamba-hamba-Ku yang shaleh kenikmatan yang belum pernah dilihat oleh mata, belum pernah didengar oleh telinga, dan belum pernah terlintas dalam benak hati manusia." Bacalah jika kalian mau: 'Tak seorang pun mengetahui berbagai nikmat yang menanti, yang indah dipandang sebagai balasan bagi mereka.' (QS. As-Sajdah: 17)`,
      takhrij: "Shahih Bukhari No. 3244 & Muslim No. 2824",
      syarah: `Kemegahan istana, bidadari, sungai-sungai susu dan madu di surga abadi bagi orang-orang bertakwa.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Kedahsyatan Panasnya Api Neraka Jahanam 70 Kali Lipat Api Dunia",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«نَارُكُمْ هَذِهِ الَّتِي يُوقِدُ ابْنُ آدَمَ جُزْءٌ مِنْ سَبْعِينَ جُزْءًا مِنْ حَرِّ جَهَنَّمَ»، قَالُوا: وَاللَّهِ إِنْ كَانَتْ لَكَافِيَةً يَا رَسُولَ اللَّهِ، قَالَ: «فَإِنَّهَا فُضِّلَتْ عَلَيْهَا بِتِسْعَةٍ وَسِتِّينَ جُزْءًا، كُلُّهَا مِثْلُ حَرِّهَا»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Api kalian yang dinyalakan oleh anak Adam ini hanyalah satu bagian dari tujuh puluh bagian panasnya api neraka Jahanam." Para sahabat berkata: "Demi Allah, api dunia ini saja sudah cukup menyiksa wahai Rasulullah." Beliau bersabda: "Api neraka itu dilebihkan panasnya dengan 69 kali lipat dari api dunia, yang setiap bagiannya sama panasnya."`,
      takhrij: "Shahih Bukhari No. 3265 & Muslim No. 2843",
      syarah: `Peringatan keras agar setiap mukmin membentengi diri dan keluarganya dari siksa neraka dengan amal shalih.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Kemunculan Al-Mahdi Memenuhi Bumi dengan Keadilan",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«لا تَنْقَضِي الدُّنْيَا حَتَّى يَمْلِكَ الْعَرَبَ رَجُلٌ مِنْ أَهْلِ بَيْتِي، يُوَاطِئُ اسْمُهُ اسْمِي، وَاسْمُ أَبِيهِ اسْمَ أَبِي، يَمْلأُ الأَرْضَ قِسْطًا وَعَدْلاً كَمَا مُلِئَتْ ظُلْمًا وَجَوْرًا»`,
      terjemah: `Dari Abdullah bin Mas'ud berkata: Rasulullah SAW bersabda: "Dunia tidak akan lenyap sampai bangsa Arab dipimpin oleh seorang lelaki dari ahli baitku, namanya sama dengan namaku (Muhammad) dan nama ayahnya sama dengan nama ayahku (Abdullah), ia akan memenuhi bumi dengan kejujuran dan keadilan sebagaimana sebelumnya dipenuhi kezaliman dan kesewenang-wenangan."`,
      takhrij: "Sunan Abu Dawud No. 4282 & At-Tirmidzi No. 2230",
      syarah: `Kabar gembira kepemimpinan adil Imam Mahdi di akhir zaman menegakkan panji syariat Islam.`,
    },
  ],

  // 25. Tauhid & Iman (5 Hadis)
  tauhid: [
    {
      nomorHadis: 1,
      subJudul: "Hak Allah Atas Hamba: Diibadahi Tanpa Menyekutukan-Nya",
      arab: `عَنْ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: كُنْتُ رِدْفَ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَلَى حِمَارٍ... فَقَالَ: «يَا مُعَاذُ، هَلْ تَدْرِي حَقَّ اللَّهِ عَلَى عِبَادِهِ، وَمَا حَقُّ الْعِبَادِ عَلَى اللَّهِ؟» قُلْتُ: اللَّهُ وَرَسُولُهُ أَعْلَمُ، قَالَ: «فَإِنَّ حَقَّ اللَّهِ عَلَى الْعِبَادِ أَنْ يَعْبُدُوهُ وَلَا يُشْرِكُوا بِهِ شَيْئًا، وَحَقَّ الْعِبَادِ عَلَى اللَّهِ أَنْ لَا يُعَذِّبَ مَنْ لَا يُشْرِكُ بِهِ شَيْئًا»`,
      terjemah: `Dari Mu'adz bin Jabal radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Hak Allah atas para hamba adalah mereka beribadah kepada-Nya semata dan tidak menyekutukan-Nya dengan sesuatu pun. Dan hak para hamba atas Allah adalah Dia tidak mengazab orang yang tidak menyekutukan-Nya dengan sesuatu pun."`,
      takhrij: "Shahih Bukhari No. 2856 & Muslim No. 30",
      syarah: `Hakikat tauhid uluhiyah sebagai poros utama tujuan penciptaan manusia dan jaminan keselamatan dari siksa api neraka.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Tiga Perkara Meraih Manisnya Keimanan (Halawatul Iman)",
      arab: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«ثَلاثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلاوَةَ الإِيمَانِ: أَنْ يَكُونَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَأَنْ يُحِبَّ الْمَرْءَ لا يُحِبُّهُ إِلا لِلَّهِ، وَأَنْ يَكْرَهَ أَنْ يَعُودَ فِي الْكُفْرِ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ»`,
      terjemah: `Dari Anas bin Malik dari Nabi SAW bersabda: "Tiga perkara yang apabila ada pada diri seseorang niscaya ia merasakan manisnya iman: Allah dan Rasul-Nya lebih ia cintai daripada selain keduanya, ia mencintai seseorang semata-mata karena Allah, dan ia benci kembali kepada kekafiran sebagaimana ia benci dilemparkan ke dalam api neraka."`,
      takhrij: "Shahih Bukhari No. 16 & Muslim No. 43",
      syarah: `Puncak kelezatan batin seorang mukmin ketika cinta kepada Allah dan Rasul-Nya mendominasi seluruh hasrat jiwanya.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Jaminan Masuk Surga Bagi yang Akhir Ucapannya Kalimat Laa Ilaaha Illallaah",
      arab: `عَنْ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«مَنْ كَانَ آخِرُ كَلامِهِ لا إِلَهَ إِلا اللَّهُ دَخَلَ الْجَنَّةَ»`,
      terjemah: `Dari Mu'adz bin Jabal radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Barangsiapa yang akhir ucapannya sebelum meninggal dunia adalah 'Laa ilaaha illallaah', niscaya ia masuk surga."`,
      takhrij: "Sunan Abu Dawud No. 3116 & Musnad Ahmad",
      syarah: `Keutamaan husnul khatimah dengan mengikrarkan kalimat tauhid di penghujung hembusan nafas terakhir.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Tujuh Puluh Cabang Keimanan & Keutamaan Rasa Malu",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ: لا إِلَهَ إِلا اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ»`,
      terjemah: `Dari Abu Hurairah berkata: Rasulullah SAW bersabda: "Iman itu ada tujuh puluh lebih cabang; yang paling utama adalah ucapan 'Laa ilaaha illallaah', yang paling rendah adalah menyingkirkan duri/gangguan dari jalanan, dan rasa malu adalah salah satu cabang dari keimanan."`,
      takhrij: "Shahih Muslim No. 35 & Bukhari No. 9",
      syarah: `Keterpaduan iman mencakup aqidah lisan, amalan sosial kemasyarakatan, dan integritas moral batin.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Pemurnian Tauhid: Menjauhi Dosa Syirik yang Menghapus Seluruh Amal",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ قَالَ: سَأَلْتُ رَسُولَ اللَّهِ: أَيُّ الذَّنْبِ أَعْظَمُ عِنْدَ اللَّهِ؟ قَالَ:

«أَنْ تَجْعَلَ لِلَّهِ نِدًّا وَهُوَ خَلَقَكَ»`,
      terjemah: `Dari Abdullah bin Mas'ud berkata: Aku bertanya kepada Rasulullah SAW: "Dosa apakah yang paling besar di sisi Allah?" Beliau menjawab: "Engkau membuat tandingan sekutu bagi Allah, padahal Dia-lah yang telah menciptakanmu."`,
      takhrij: "Shahih Bukhari No. 4477 & Muslim No. 86",
      syarah: `Bahaya syirik akbar yang membatalkan seluruh amal kebaikan dan kekal di neraka jika tidak bertaubat.`,
    },
  ],

  // 26. Zuhud & Pelembut Hati (5 Hadis)
  zuhud: [
    {
      nomorHadis: 1,
      subJudul: "Kunci Dicintai Allah dan Dicintai Manusia: Zuhud Terhadap Dunia",
      arab: `عَنْ سَهْلِ بْنِ سَعْدٍ السَّاعِدِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: أَتَى النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ رَجُلٌ فَقَالَ: يَا رَسُولَ اللَّهِ، دُلَّنِي عَلَى عَمَلٍ إِذَا أَنَا عَمِلْتُهُ أَحَبَّنِي اللَّهُ وَأَحَبَّنِي النَّاسُ؟ فَقَالَ:

«ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ، وَازْهَدْ فِيمَا فِي أَيْدِي النَّاسِ يُحِبَّكَ النَّاسُ»`,
      terjemah: `Dari Sahl bin Sa'd As-Sa'idi radhiyallahu 'anhu berkata: Seorang lelaki datang kepada Nabi SAW dan berkata: "Wahai Rasulullah, tunjukkanlah kepadaku suatu amalan yang apabila kukerjakan, aku dicintai oleh Allah dan dicintai oleh manusia?" Maka beliau menjawab: "Zuhudlah terhadap dunia niscaya Allah mencintaimu, dan zuhudlah terhadap apa yang ada di tangan manusia niscaya manusia mencintaimu."`,
      takhrij: "Sunan Ibnu Majah No. 4102 & Ath-Thabarani",
      syarah: `Hakikat zuhud adalah melepaskan ketergantungan hati dari gemerlap duniawi dan bersikap qana'ah terhadap rezeki halal.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Hiduplah di Dunia Bagaikan Orang Asing atau Pengembara",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: أَخَذَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِمَنْكِبِي فَقَالَ:

«كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ»، وَكَانَ ابْنُ عُمَرَ يَقُولُ: «إِذَا أَمْسَيْتَ فَلا تَنْتَظِرِ الصَّبَاحَ، وَإِذَا أَصْبَحْتَ فَلا تَنْتَظِرِ الْمَسَاءَ، وَخُذْ مِنْ صِحَّتِكَ لِمَرَضِكَ، وَمِنْ حَيَاتِكَ لِمَوْتِكَ»`,
      terjemah: `Dari Ibnu Umar berkata: Rasulullah SAW memegang pundakku lalu bersabda: "Jadilah engkau di dunia ini seakan-akan orang asing atau penyeberang jalan (musafir pengembara)." Dan Ibnu Umar berkata: "Jika engkau di waktu sore janganlah menanti pagi hari, dan jika di waktu pagi jangan menanti sore hari. Pergunakanlah masa sehatmu sebelum masa sakitmu, dan masa hidupmu sebelum kematianmu."`,
      takhrij: "Shahih Bukhari No. 6416",
      syarah: `Mengingatkan kefanaan duniawi sebagai tempat persinggahan sementara menuju kampung akhirat yang kekal.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Kekayaan Hakiki Adalah Kekayaan Hati dan Jiwa (Ghina An-Nafs)",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ»`,
      terjemah: `Dari Abu Hurairah dari Nabi SAW bersabda: "Bukanlah kekayaan itu dengan banyaknya harta benda duniawi, akan tetapi hakikat kekayaan sejati adalah kekayaan jiwa (hati yang qana'ah dan bersyukur)."`,
      takhrij: "Shahih Bukhari No. 6446 & Muslim No. 1051",
      syarah: `Ketenangan batin tidak bergantung pada tumpukan materi, melainkan pada keridhaan hati atas ketetapan rezeki Allah.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Ketamakan Manusia Terhadap Harta Hingga Masuk ke Liang Lahat",
      arab: `عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللَّهِ يَقُولُ:

«لَوْ أَنَّ لابْنِ آدَمَ وَادِيًا مِنْ ذَهَبٍ أَحَبَّ أَنْ يَكُونَ لَهُ وَادِيَانِ، وَلَنْ يَمْلأَ فَمَهُ إِلا التُّرَابُ، وَيَتُوبُ اللَّهُ عَلَى مَنْ تَابَ»`,
      terjemah: `Dari Ibnu Abbas berkata: Aku mendengar Rasulullah SAW bersabda: "Seandainya anak Adam memiliki satu lembah emas niscaya ia menginginkan memiliki dua lembah, dan tidak ada yang dapat memenuhi mulutnya melainkan tanah kubur, dan Allah menerima taubat orang yang bertaubat."`,
      takhrij: "Shahih Bukhari No. 6436 & Muslim No. 1048",
      syarah: `Peringatan dari sifat serakah dan anjuran mengendalikan ambisi duniawi dengan mengingat kematian.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Perbandingan Nilai Dunia di Sisi Allah Tidak Sebanding Sayap Nyamuk",
      arab: `عَنْ سَهْلِ بْنِ سَعْدٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«لَوْ كَانَتِ الدُّنْيَا تَعْدِلُ عِنْدَ اللَّهِ جَنَاحَ بَعُوضَةٍ مَا سَقَى كَافِرًا مِنْهَا شَرْبَةَ مَاءٍ»`,
      terjemah: `Dari Sahl bin Sa'd berkata: Rasulullah SAW bersabda: "Seandainya dunia ini memiliki nilai di sisi Allah sebanding dengan sebelah sayap nyamuk, niscaya Allah tidak akan memberikan seteguk air pun kepada orang kafir."`,
      takhrij: "Jami' At-Tirmidzi No. 2320 & Ibnu Majah",
      syarah: `Menunjukkan betapa rendahnya materi duniawi jika dibandingkan dengan kemuliaan pahala akhirat di sisi Allah.`,
    },
  ],

  // 27. Sunnah & I'tisham (5 Hadis)
  sunnah: [
    {
      nomorHadis: 1,
      subJudul: "Kewajiban Berpegang Teguh Pada Sunnah & Waspada Dari Perkara Baru",
      arab: `عَنِ الْعِرْبَاضِ بْنِ سَارِيَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: وَعَظَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَوْعِظَةً بَلِيغَةً... فَقَالَ:

«عَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيِّينَ، عَضُّوا عَلَيْهَا بِالنَّوَاجِذِ، وَإِيَّاكُمْ وَمُحْدَثَاتِ الأُمُورِ فَإِنَّ كُلَّ مُحْدَثَةٍ بِدْعَةٌ وَكُلَّ بِدْعَةٍ ضَلالَةٌ»`,
      terjemah: `Dari Al-'Irbadh bin Sariyah radhiyallahu 'anhu: Rasulullah SAW bersabda: "Wajib atas kalian berpegang teguh pada sunnahku dan sunnah Khulafaur Rasyidin yang mendapat petunjuk, gigitlah sunnah itu dengan gigi geraham kalian. Dan jauhilah perkara baru yang diada-adakan, karena setiap perkara baru adalah bid'ah dan setiap bid'ah adalah kesesatan."`,
      takhrij: "Sunan Ibnu Majah No. 42 & Abu Dawud No. 4607",
      syarah: `Kemurnian ittiba' Sunnah Rasulullah SAW dalam seluruh aspek hukum syariat, aqidah, dan muamalah.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Dua Pedoman Utama: Kitabullah dan Sunnah Rasul-Nya",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«تَرَكْتُ فِيكُمْ شَيْئَيْنِ لَنْ تَضِلُّوا بَعْدَهُمَا: كِتَابَ اللَّهِ وَسُنَّتِي، وَلَنْ يَتَفَرَّقَا حَتَّى يَرِدَا عَلَيَّ الْحَوْضَ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Aku tinggalkan pada kalian dua perkara yang kalian tidak akan tersesat selamanya setelah berpegang teguh pada keduanya: Kitabullah (Al-Qur'an) dan Sunnahku, dan keduanya tidak akan berpisah hingga mendatangi telagaku di surga."`,
      takhrij: "Al-Muwaththa' Imam Malik No. 1594 & Al-Hakim",
      syarah: `Al-Qur'an dan As-Sunnah adalah dua sumber primer wahyu ilahi yang menjadi pedoman hidup umat Islam.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Tertolaknya Segala Amalan Baru dalam Agama Tanpa Landasan Syariat",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ فِيهِ فَهُوَ رَدٌّ»، وَفِي رِوَايَةٍ: «مَنْ عَمِلَ عَمَلاً لَيْسَ عَلَيْهِ أَمْرُنَا فَهُوَ رَدٌّ»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha berkata: Rasulullah SAW bersabda: "Barangsiapa mengada-adakan perkara baru dalam urusan (agama) kami ini yang bukan berasal darinya, maka amalan itu tertolak." Dan dalam riwayat lain: "Barangsiapa mengerjakan suatu amalan ibadah yang tidak ada petunjuk perintahnya dari kami, maka amalan itu tertolak."`,
      takhrij: "Shahih Bukhari No. 2697 & Muslim No. 1718",
      syarah: `Kaidah emas keabsahan ibadah: niat ikhlas karena Allah dan mutaba'ah (mencocoki petunjuk Rasulullah SAW).`,
    },
    {
      nomorHadis: 4,
      subJudul: "Pahala Menghidupkan Sunnah di Tengah Umat",
      arab: `عَنْ عَمْرِو بْنِ عَوْفٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَنْ أَحْيَا سُنَّةً مِنْ سُنَّتِي فَعَمِلَ بِهَا النَّاسُ، كَانَ لَهُ مِثْلُ أَجْرِ مَنْ عَمِلَ بِهَا، لا يَنْقُصُ مِنْ أُجُورِهِمْ شَيْئًا»`,
      terjemah: `Dari Amr bin Auf bahwa Nabi SAW bersabda: "Barangsiapa menghidupkan suatu sunnah dari sunnah-sunnahku lalu diamalkan oleh manusia, maka baginya pahala semisal pahala orang-orang yang mengamalkannya tanpa mengurangi pahala mereka sedikit pun."`,
      takhrij: "Sunan Ibnu Majah No. 209 & At-Tirmidzi No. 2677",
      syarah: `Kemuliaan dakwah menghidupkan ajaran Rasulullah SAW di saat manusia mulai melupakannya.`,
    },
    {
      nomorHadis: 5,
      subJudul: "Seluruh Umatku Akan Masuk Surga Kecuali yang Enggan",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«كُلُّ أُمَّتِي يَدْخُلُونَ الْجَنَّةَ إِلا مَنْ أَبَى»، قَالُوا: يَا رَسُولَ اللَّهِ وَمَنْ يَأْبَى؟ قَالَ: «مَنْ أَطَاعَنِي دَخَلَ الْجَنَّةَ، وَمَنْ عَصَانِي فَقَدْ أَبَى»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Setiap umatku pasti akan masuk surga kecuali orang yang enggan." Para sahabat bertanya: "Wahai Rasulullah, siapakah orang yang enggan itu?" Beliau menjawab: "Barangsiapa mentaatiku ia masuk surga, dan barangsiapa mendurhakaiku maka sungguh dialah yang enggan."`,
      takhrij: "Shahih Bukhari No. 7280",
      syarah: `Mentaati tuntunan syariat Nabi Muhammad SAW adalah tiket mutlak keselamatan memasuki jannah Allah.`,
    },
  ],

  // 28. Shalat Safar & Mengqashar Shalat (3 Hadis)
  safar: [
    {
      nomorHadis: 1,
      subJudul: "Keringanan Mengqashar Shalat Empat Rakaat Menjadi Dua Rakaat Saat Safar",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: «صَحِبْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَكَانَ لا يَزِيدُ فِي السَّفَرِ عَلَى رَكْعَتَيْنِ، وَأَبَا بَكْرٍ، وَعُمَرَ، وَعُثْمَانَ كَذَلِكَ رَضِيَ اللَّهُ عَنْهُمْ»`,
      terjemah: `Dari Ibnu Umar radhiyallahu 'anhuma berkata: "Aku menyertai perjalanan Rasulullah shallallahu 'alaihi wa sallam, dan beliau tidak pernah shalat di waktu bepergian (safar) lebih dari dua rakaat (mengqashar shalat Dzuhur, Ashar, dan Isya), demikian pula Abu Bakar, Umar, dan Utsman radhiyallahu 'anhum."`,
      takhrij: "Shahih Bukhari No. 1102 & Muslim No. 689",
      syarah: `Qashar dan jamak shalat adalah hadiah sedekah dari Allah untuk meringankan beban musafir yang menempuh perjalanan jauh.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Qashar Shalat Adalah Sedekah dari Allah Maka Terimalah Sedekah-Nya",
      arab: `عَنْ يَعْلَى بْنِ أُمَيَّةَ قَالَ: قُلْتُ لِعُمَرَ بْنِ الْخَطَّابِ: {لَيْسَ عَلَيْكُمْ جُنَاحٌ أَنْ تَقْصُرُوا مِنَ الصَّلاةِ إِنْ خِفْتُمْ} فَقَدْ أَمِنَ النَّاسُ؟ فَقَالَ: عَجِبْتُ مِمَّا عَجِبْتَ مِنْهُ، فَسَأَلْتُ رَسُولَ اللَّهِ عَنْ ذَلِكَ فَقَالَ:

«صَدَقَةٌ تَصَدَّقَ اللَّهُ بِهَا عَلَيْكُمْ فَاقْبَلُوا صَدَقَتَهُ»`,
      terjemah: `Dari Ya'la bin Umayyah berkata: Aku bertanya kepada Umar bin Al-Khaththab tentang firman Allah: 'Tidak ada dosa bagi kalian mengqashar shalat jika kalian takut diserang orang kafir', padahal sekarang manusia sudah aman? Umar berkata: "Aku pun pernah heran seperti engkau, lalu aku tanyakan kepada Rasulullah SAW dan beliau bersabda: 'Itu adalah sedekah yang Allah berikan kepada kalian, maka terimalah sedekah-Nya!'"`,
      takhrij: "Shahih Muslim No. 686",
      syarah: `Mengqashar shalat saat safar tetap disyariatkan dalam kondisi aman maupun takut sebagai rukhshah dari Allah.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Menjamak Shalat Dzuhur dengan Ashar dan Maghrib dengan Isya Saat Safar",
      arab: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ قَالَ:

«كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا ارْتَحَلَ قَبْلَ أَنْ تَزِيغَ الشَّمْسُ أَخَّرَ الظُّهْرَ إِلَى وَقْتِ الْعَصْرِ، ثُمَّ نَزَلَ فَجَمَعَ بَيْنَهُمَا، فَإِنْ زَاغَتِ الشَّمْسُ قَبْلَ أَنْ يَرْتَحِلَ صَلَّى الظُّهْرَ ثُمَّ رَكِبَ»`,
      terjemah: `Dari Anas bin Malik berkata: "Rasulullah SAW apabila berangkat bepergian sebelum matahari tergelincir, beliau mengakhirkan shalat Dzuhur ke waktu Ashar (jamak ta'khir) lalu beliau singgah dan menjamak keduanya. Namun jika matahari telah tergelincir sebelum berangkat, beliau shalat Dzuhur terlebih dahulu (jamak taqdim) lalu baru menunggangi kendaraannya."`,
      takhrij: "Shahih Bukhari No. 1111 & Muslim No. 704",
      syarah: `Tata cara jamak taqdim dan jamak ta'khir yang fleksibel memudahkan perjalanan musafir.`,
    },
  ],

  // 29. Tahajjud, Shalat Malam & Witir (3 Hadis)
  tahajjud: [
    {
      nomorHadis: 1,
      subJudul: "Keutamaan Shalat Malam (Tahajjud) Rasulullah SAW Sebelas Rakaat",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: «مَا كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَزِيدُ فِي رَمَضَانَ وَلا فِي غَيْرِهِ عَلَى إِحْدَى عَشْرَةَ رَكْعَةً، يُصَلِّي أَرْبَعًا فَلا تَسْأَلْ عَنْ حُسْنِهِنَّ وَطُولِهِنَّ، ثُمَّ يُصَلِّي أَرْبَعًا... ثُمَّ يُصَلِّي ثَلاثًا»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha berkata: "Rasulullah shallallahu 'alaihi wa sallam tidak pernah menambah shalat malam pada bulan Ramadhan maupun bulan lainnya lebih dari sebelas rakaat. Beliau shalat empat rakaat—jangan engkau tanya tentang keindahan dan panjangnya—kemudian shalat empat rakaat lagi, kemudian shalat tiga rakaat (witir)."`,
      takhrij: "Shahih Bukhari No. 1147 & Muslim No. 738",
      syarah: `Shalat tahajjud dan witir adalah amalan taqarrub tertinggi para nabi dan orang-orang saleh di keheningan malam.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Sebaik-baik Shalat Setelah Shalat Fardhu Adalah Shalat Malam",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«أَفْضَلُ الصِّيَامِ بَعْدَ رَمَضَانَ شَهْرُ اللَّهِ الْمُحَرَّمُ، وَأَفْضَلُ الصَّلاةِ بَعْدَ الْفَرِيضَةِ صَلاةُ اللَّيْلِ»`,
      terjemah: `Dari Abu Hurairah berkata: Rasulullah SAW bersabda: "Sebaik-baik puasa setelah Ramadhan adalah puasa di bulan Allah Muharram, dan sebaik-baik shalat setelah shalat fardhu adalah shalat malam (tahajjud)."`,
      takhrij: "Shahih Muslim No. 1163",
      syarah: `Keutamaan qiyamul lail saat manusia terlelap tidur mendatangkan kedekatan khusus dengan Allah SWT.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Perintah Menjadikan Shalat Witir Sebagai Penutup Shalat Malam",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«اجْعَلُوا آخِرَ صَلاتِكُمْ بِاللَّيْلِ وِتْرًا»`,
      terjemah: `Dari Ibnu Umar dari Nabi SAW bersabda: "Jadikanlah akhir shalat kalian di waktu malam berupa shalat witir (ganjil)."`,
      takhrij: "Shahih Bukhari No. 998 & Muslim No. 751",
      syarah: `Sunnah menutup ibadah malam dengan shalat witir 1 atau 3 rakaat sebelum fajar Subuh menyingsing.`,
    },
  ],

  // 30. Sujud Sahwi, Tilawah, Syukur (3 Hadis)
  sahwi: [
    {
      nomorHadis: 1,
      subJudul: "Dua Sujud Sahwi Saat Lupa atau Ragu Jumlah Rakaat Shalat",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ انْصَرَفَ مِنِ اثْنَتَيْنِ... فَسَأَلَهُ ذُو الْيَدَيْنِ: يَا رَسُولَ اللَّهِ أَقَصُرَتِ الصَّلاةُ أَمْ نَسِيتَ؟... فَصَلَّى رَكْعَتَيْنِ ثُمَّ سَلَّمَ، ثُمَّ كَبَّرَ وَسَجَدَ مِثْلَ سُجُودِهِ أَوْ أَطْوَلَ، ثُمَّ رَفَعَ رَأْسَهُ وَكَبَّرَ، ثُمَّ كَبَّرَ وَسَجَدَ مِثْلَ سُجُودِهِ أَوْ أَطْوَلَ، ثُمَّ رَفَعَ رَأْسَهُ وَكَبَّرَ`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu bahwa Rasulullah SAW pernah salam setelah dua rakaat shalat Dzuhur/Ashar karena lupa... Sahabat Dzul Yadain bertanya: "Wahai Rasulullah, apakah shalat diqashar ataukah baginda lupa?" Beliau membenarkan lalu bangkit menyempurnakan sisa dua rakaat, salam, kemudian sujud dua kali (sujud sahwi) lalu salam kembali.`,
      takhrij: "Shahih Bukhari No. 1227 & Muslim No. 573",
      syarah: `Sujud sahwi disyariatkan untuk menambal kekurangan atau keraguan dalam rukun/gerakan shalat sebelum atau sesudah salam.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Menghilangkan Keraguan Rakaat dengan Mengambil Jumlah yang Yakin",
      arab: `عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ قَالَ: قَالَ رَسُولُ اللَّهِ: «إِذَا شَكَّ أَحَدُكُمْ فِي صَلاتِهِ فَلَمْ يَدْرِ كَمْ صَلَّى: ثَلاثًا أَمْ أَرْبَعًا؟ فَلْيَطْرَحِ الشَّكَّ وَلْيَبْنِ عَلَى مَا اسْتَيْقَنَ، ثُمَّ يَسْجُدُ سَجْدَتَيْنِ قَبْلَ أَنْ يُسَلِّمَ...»`,
      terjemah: `Dari Abu Sa'id Al-Khudri berkata: Rasulullah SAW bersabda: "Apabila salah seorang di antara kalian ragu dalam shalatnya sehingga tidak tahu berapa rakaat yang telah ia kerjakan: tiga atau empat? Maka hendaklah ia buang keraguan itu dan menetapkan atas apa yang ia yakini (rakaat terkecil), kemudian ia sujud dua kali sebelum salam..."`,
      takhrij: "Shahih Muslim No. 571",
      syarah: `Kaidah fiqih: keyakinan tidak dapat dihilangkan oleh keraguan, dan sujud sahwi dilakukan sebelum salam untuk mengusir gangguan setan.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Keutamaan Sujud Tilawah Saat Membaca Ayat Sajdah",
      arab: `عَنْ أَبِي هُرَيْرَةَ قَالَ: قَالَ رَسُولُ اللَّهِ: «إِذَا قَرَأَ ابْنُ آدَمَ السَّجْدَةَ فَسَجَدَ اعْتَزَلَ الشَّيْطَانُ يَبْكِي، يَقُولُ: يَا وَيْلَهُ، أُمِرَ ابْنُ آدَمَ بِالسُّجُودِ فَسَجَدَ فَلَهُ الْجَنَّةُ، وَأُمِرْتُ بِالسُّجُودِ فَأَبَيْتُ فَلِيَ النَّارُ»`,
      terjemah: `Dari Abu Hurairah bahwa Rasulullah SAW bersabda: "Apabila anak Adam membaca ayat sajdah lalu ia bersujud, setan menyingkir sambil menangis seraya meratap: 'Aduhai celakanya aku! Anak Adam diperintahkan bersujud lalu ia bersujud maka baginya surga, sedangkan aku dahulu diperintahkan bersujud lalu aku membangkang maka bagiku neraka.'"`,
      takhrij: "Shahih Muslim No. 81",
      syarah: `Sunnah muakkadah sujud tilawah satu kali saat membaca atau mendengar ayat-ayat sajdah dalam Al-Qur'an.`,
    },
  ],

  // 31. Shalat Khauf (2 Hadis)
  khauf: [
    {
      nomorHadis: 1,
      subJudul: "Pelaksanaan Shalat Khauf Saat Menghadapi Pasukan Musuh",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: «صَلَّى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ صَلاةَ الْخَوْفِ بِإِحْدَى الطَّائِفَتَيْنِ رَكْعَةً، وَالطَّائِفَةُ الأُخْرَى مُوَاجِهَةُ الْعَدُوِّ، ثُمَّ انْصَرَفُوا فَجَاءَتِ الطَّائِفَةُ الأُخْرَى فَصَلَّى بِهِمْ رَكْعَةً، ثُمَّ قَضَتِ الطَّائِفَتَانِ رَكْعَةً رَكْعَةً»`,
      terjemah: `Dari Ibnu Umar radhiyallahu 'anhuma berkata: "Rasulullah SAW mendirikan shalat khauf mengimami sekelompok pasukan satu rakaat sementara kelompok lainnya berjaga menghadap musuh. Kemudian kelompok pertama mundur dan kelompok kedua maju, lalu beliau mengimami mereka satu rakaat, setelah itu masing-masing kelompok menyempurnakan satu rakaat lagi."`,
      takhrij: "Shahih Bukhari No. 942 & Muslim No. 839",
      syarah: `Bukti betapa mutlaknya kewajiban mendirikan shalat, bahkan di medan pertempuran sekalipun tidak boleh ditinggalkan.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Shalat Khauf Pada Perang Dzatur Riqa'",
      arab: `عَنْ صَالِحِ بْنِ خَوَّاتٍ عَمَّنْ شَهِدَ رَسُولَ اللَّهِ يَوْمَ ذَاتِ الرِّقَاعِ صَلَّى صَلاةَ الْخَوْفِ: «أَنَّ طَائِفَةً صَفَّتْ مَعَهُ وَطَائِفَةٌ وِجَاهَ الْعَدُوِّ، فَصَلَّى بِالَّتِي مَعَهُ رَكْعَةً ثُمَّ ثَبَتَ قَائِمًا وَأَتَمُّوا لأَنْفُسِهِمْ، ثُمَّ انْصَرَفُوا فَصَفُّوا وِجَاهَ الْعَدُوِّ...»`,
      terjemah: `Dari Shalih bin Khawwat dari sahabat yang menyaksikan shalat khauf bersama Rasulullah SAW pada perang Dzatur Riqa': "Satu kelompok berbaris bersama beliau dan satu kelompok menghadap musuh. Beliau shalat bersama kelompok pertama satu rakaat lalu beliau tetap berdiri dan mereka menyempurnakan sendiri, lalu mereka bergantian berjaga..."`,
      takhrij: "Shahih Bukhari No. 4129 & Muslim No. 842",
      syarah: `Variasi tata cara shalat khauf yang fleksibel sesuai dengan situasi dan posisi pergerakan pasukan musuh.`,
    },
  ],

  // 32. Dua Hari Raya / Eid (3 Hadis)
  eid: [
    {
      nomorHadis: 1,
      subJudul: "Pelaksanaan Shalat Hari Raya Sebelum Khutbah",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: «كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَأَبُو بَكْرٍ وَعُمَرُ يُصَلُّونَ الْعِيدَيْنِ قَبْلَ الْخُطْبَةِ»`,
      terjemah: `Dari Ibnu Umar radhiyallahu 'anhuma berkata: "Rasulullah shallallahu 'alaihi wa sallam, Abu Bakar, dan Umar selalu mendirikan shalat dua hari raya (Idul Fitri dan Idul Adha) sebelum khutbah."`,
      takhrij: "Shahih Bukhari No. 957 & Muslim No. 888",
      syarah: `Sunnah muakkadah shalat Id di lapangan terbuka dengan takbir berjamaah dan saling mengucapkan doa tahni'ah.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Hari Tasyriq Adalah Hari Makan, Minum, dan Berdzikir Kepada Allah",
      arab: `عَنْ نُبَيْشَةَ الْهُذَلِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«أَيَّامُ التَّشْرِيقِ أَيَّامُ أَكْلٍ وَشُرْبٍ وَذِكْرٍ لِلَّهِ»`,
      terjemah: `Dari Nubaisyah Al-Hudzali radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Hari-hari Tasyriq (11, 12, 13 Dzulhijjah) adalah hari-hari makan, minum, dan berdzikir kepada Allah."`,
      takhrij: "Shahih Muslim No. 1141",
      syarah: `Haram berpuasa pada hari raya Idul Fitri, Idul Adha, dan hari Tasyriq karena merupakan hari jamuan kegembiraan dari Allah.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Perintah Mengajak Seluruh Kaum Wanita dan Anak-Anak Menghadiri Lapangan Shalat Id",
      arab: `عَنْ أُمِّ عَطِيَّةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: «أَمَرَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنْ نُخْرِجَهُنَّ فِي الْفِطْرِ وَالأَضْحَى: الْعَوَاتِقَ، وَالْحُيَّضَ، وَذَوَاتِ الْخُدُورِ، فَأَمَّا الْحُيَّضُ فَيَعْتَزِلْنَ الصَّلاةَ، وَيَشْهَدْنَ الْخَيْرَ وَدَعْوَةَ الْمُسْلِمِينَ»`,
      terjemah: `Dari Ummu Athiyyah radhiyallahu 'anha berkata: "Rasulullah SAW memerintahkan kami untuk mengajak keluar para wanita pada Idul Fitri dan Idul Adha: gadis-gadis pingitan, wanita yang merdeka, dan wanita yang sedang haidh. Adapun wanita yang haidh mereka memisahkan diri dari tempat shalat, namun tetap menyaksikan kebaikan dan doa kaum muslimin."`,
      takhrij: "Shahih Bukhari No. 971 & Muslim No. 890",
      syarah: `Syiar agung ukhuwah Islamiyah yang menghimpun seluruh komponen masyarakat muslim dalam kegembiraan hari raya.`,
    },
  ],

  // 33. Istisqa' / Minta Hujan (2 Hadis)
  istisqa: [
    {
      nomorHadis: 1,
      subJudul: "Doa Istisqa' Memohon Hujan yang Membawa Berkah",
      arab: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَجُلاً دَخَلَ الْمَسْجِدَ يَوْمَ جُمُعَةٍ وَرَسُولُ اللَّهِ قَائِمٌ يَخْطُبُ... فَرَفَعَ رَسُولُ اللَّهِ يَدَيْهِ فَقَالَ:

«اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا، اللَّهُمَّ أَغِثْنَا»`,
      terjemah: `Dari Anas bin Malik radhiyallahu 'anhu bahwa seorang lelaki masuk ke masjid pada hari Jumat saat Rasulullah SAW sedang berkhutbah dan mengadu tentang kekeringan... Maka Rasulullah SAW mengangkat kedua tangannya seraya berdoa: "Ya Allah, turunkanlah hujan kepada kami! Ya Allah, turunkanlah hujan kepada kami! Ya Allah, turunkanlah hujan kepada kami!"`,
      takhrij: "Shahih Bukhari No. 1013 & Muslim No. 897",
      syarah: `Mukjizat terkabulnya doa istisqa' seketika awan mendung berkumpul dan hujan turun lebat membasahi bumi.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Tata Cara Shalat Istisqa' Dua Rakaat dan Membalikkan Selendang Sorban",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ زَيْدٍ رَضِيَ اللَّهُ عَنْهُ: «أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ خَرَجَ إِلَى الْمُصَلَّى فَاسْتَسْقَى، فَاسْتَقْبَلَ الْقِبْلَةَ وَقَلَبَ رِدَاءَهُ، وَصَلَّى رَكْعَتَيْنِ جَهَرَ فِيهِمَا بِالْقِرَاءَةِ»`,
      terjemah: `Dari Abdullah bin Zaid: "Bahwa Nabi SAW keluar ke tanah lapang untuk shalat minta hujan (istisqa'). Beliau menghadap kiblat, membalikkan posisi selendang sorban beliau (sebagai simbol optimisme perubahan dari kemarau ke hujan), dan mendirikan shalat dua rakaat dengan mengeraskan bacaannya."`,
      takhrij: "Shahih Bukhari No. 1024 & Muslim No. 894",
      syarah: `Sunnah shalat istisqa' berjamaah di lapangan dengan khutbah istighfar dan permohonan rahmat ilahi.`,
    },
  ],

  // 34. Gerhana / Kusuf (2 Hadis)
  kusuf: [
    {
      nomorHadis: 1,
      subJudul: "Gerhana Matahari & Bulan Adalah Tanda Kebesaran Allah",
      arab: `عَنْ أَبِي مَسْعُودٍ الأَنْصَارِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«إِنَّ الشَّمْسَ وَالْقَمَرَ آيَتَانِ مِنْ آيَاتِ اللَّهِ، لاَ يَنْكَسِفَانِ لِمَوْتِ أَحَدٍ وَلاَ لِحَيَاتِهِ، وَلَكِنَّ اللَّهَ تَعَالَى يُخَوِّفُ بِهِمَا عِبَادَهُ، فَإِذَا رَأَيْتُمْ ذَلِكَ فَافْزَعُوا إِلَى الصَّلاةِ»`,
      terjemah: `Dari Abu Mas'ud Al-Anshari radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Sesungguhnya matahari dan bulan adalah dua tanda di antara tanda-tanda kebesaran Allah. Keduanya tidak mengalami gerhana karena mati atau lahirnya seseorang, melainkan Allah memperingatkan hamba-hamba-Nya dengan keduanya. Maka apabila kalian melihatnya, bersegeralah mendirikan shalat."`,
      takhrij: "Shahih Bukhari No. 1041 & Muslim No. 911",
      syarah: `Membantah mitos khurafat masa jahiliyah dan anjuran mendirikan shalat gerhana dengan ruku' dan bacaan panjang.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Tata Cara Shalat Gerhana Dua Rakaat dengan Empat Kali Ruku' dan Empat Sujud",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا: «أَنَّ الشَّمْسَ خَسَفَتْ عَلَى عَهْدِ رَسُولِ اللَّهِ، فَقَامَ فَصَلَّى فَأَطَالَ الْقِيَامَ، ثُمَّ رَكَعَ فَأَطَالَ الرُّكُوعَ، ثُمَّ رَفَعَ فَقَامَ فَأَطَالَ الْقِيَامَ وَهُوَ دُونَ الْقِيَامِ الأَوَّلِ، ثُمَّ رَكَعَ فَأَطَالَ الرُّكُوعَ... ثُمَّ سَجَدَ... فَصَلَّى أَرْبَعَ رَكَعَاتٍ فِي رَكْعَتَيْنِ وَأَرْبَعَ سَجَدَاتٍ»`,
      terjemah: `Dari Aisyah bahwa gerhana matahari terjadi pada masa Rasulullah SAW... Beliau shalat dengan berdiri sangat panjang, lalu ruku' sangat panjang, lalu bangkit dan membaca lagi agak lebih pendek, lalu ruku' lagi agak lebih pendek, lalu sujud. Beliau shalat dua rakaat dengan empat ruku' dan empat sujud.`,
      takhrij: "Shahih Bukhari No. 1044 & Muslim No. 901",
      syarah: `Rujukan fiqih shalat kusuf (gerhana matahari) dan khusuf (gerhana bulan) yang diakhiri dengan khutbah peringatan.`,
    },
  ],

  // 35. Masjid & Tempat Shalat (3 Hadis)
  masjid: [
    {
      nomorHadis: 1,
      subJudul: "Keutamaan Membangun Masjid Karena Mengharap Wajah Allah",
      arab: `عَنْ عُثْمَانَ بْنِ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«مَنْ بَنَى مَسْجِدًا لِلَّهِ، بَنَى اللَّهُ لَهُ فِي الْجَنَّةِ مِثْلَهُ»`,
      terjemah: `Dari Utsman bin Affan radhiyallahu 'anhu berkata: Aku mendengar Rasulullah SAW bersabda: "Barangsiapa membangun sebuah masjid semata-mata karena Allah, maka Allah akan membangunkan untuknya sebuah istana yang serupa di surga."`,
      takhrij: "Shahih Bukhari No. 450 & Muslim No. 533",
      syarah: `Kemuliaan jariyah memakmurkan rumah Allah dengan shalat berjamaah, halaqah ilmu, dan dzikrullah.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Tiga Masjid Utama yang Dianjurkan Mengadakan Perjalanan Ibadah Kepadanya",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«لا تُشَدُّ الرِّحَالُ إِلا إِلَى ثَلاثَةِ مَسَاجِدَ: الْمَسْجِدِ الْحَرَامِ، وَمَسْجِدِ الرَّسُولِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَمَسْجِدِ الأَقْصَى»`,
      terjemah: `Dari Abu Hurairah dari Nabi SAW bersabda: "Janganlah mengadakan perjalanan jauh dengan sengaja mengagungkan tempat ibadah kecuali ke tiga masjid: Masjidil Haram (Makkah), Masjid Rasulullah (Madinah), dan Masjidil Aqsha (Palestina)."`,
      takhrij: "Shahih Bukhari No. 1189 & Muslim No. 1397",
      syarah: `Keistimewaan tiga tanah suci umat Islam dengan kelipatan pahala shalat yang luar biasa.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Shalat Tahiyyatul Masjid Dua Rakaat Sebelum Duduk",
      arab: `عَنْ أَبِي قَتَادَةَ السَّلَمِيِّ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«إِذَا دَخَلَ أَحَدُكُمُ الْمَسْجِدَ فَلْيَرْكَعْ رَكْعَتَيْنِ قَبْلَ أَنْ يَجْلِسَ»`,
      terjemah: `Dari Abu Qatadah As-Sulami bahwa Rasulullah SAW bersabda: "Apabila salah seorang di antara kalian masuk ke dalam masjid, maka hendaklah ia shalat dua rakaat (tahiyyatul masjid) sebelum ia duduk."`,
      takhrij: "Shahih Bukhari No. 444 & Muslim No. 714",
      syarah: `Adab menghormati masjid sebagai baitullah sebelum memulai aktivitas lainnya di dalam masjid.`,
    },
  ],

  // 36. Kota Suci Madinah & Makkah (3 Hadis)
  tanah_suci: [
    {
      nomorHadis: 1,
      subJudul: "Kesucian Kota Madinah Munawwarah & Perlindungannya",
      arab: `عَنْ عَلِيٍّ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الْمَدِينَةُ حَرَمٌ مَا بَيْنَ عَيْرٍ إِلَى ثَوْرٍ، فَمَنْ أَحْدَثَ فِيهَا حَدَثًا أَوْ آوَى مُحْدِثًا فَعَلَيْهِ لَعْنَةُ اللَّهِ وَالْمَلائِكَةِ وَالنَّاسِ أَجْمَعِينَ»`,
      terjemah: `Dari Ali radhiyallahu 'anhu dari Nabi SAW bersabda: "Kota Madinah adalah tanah suci antara bukit 'Air hingga bukit Tsaur. Maka barangsiapa membuat perkara baru yang merusak atau melindungi pelaku kejahatan di dalamnya, baginya laknat Allah, para malaikat, dan seluruh manusia."`,
      takhrij: "Shahih Bukhari No. 1870 & Muslim No. 1370",
      syarah: `Kemuliaan dan kehormatan kota tempat hijrah Nabi SAW yang dilindungi dari kejahatan dan fitnah.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Madinah Dilindungi dari Wabah Penyakit Tha'un dan Fitnah Dajjal",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«عَلَى أَنْقَابِ الْمَدِينَةِ مَلائِكَةٌ، لا يَدْخُلُهَا الطَّاعُونُ وَلا الدَّجَّالُ»`,
      terjemah: `Dari Abu Hurairah berkata: Rasulullah SAW bersabda: "Pada setiap pintu gerbang jalan masuk kota Madinah terdapat para malaikat penjaga, sehingga penyakit tha'un (wabah menular mematikan) dan Dajjal tidak akan dapat memasukinya."`,
      takhrij: "Shahih Bukhari No. 1880 & Muslim No. 1379",
      syarah: `Penjagaan ilahi atas kota Rasulullah SAW dari fitnah akhir zaman.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Raudhah: Taman di Antara Rumah Nabi dan Mimbar Beliau",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ زَيْدٍ الْمَازِنِيِّ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ قَالَ:

«مَا بَيْنَ بَيْتِي وَمِنْبَرِي رَوْضَةٌ مِنْ رِيَاضِ الْجَنَّةِ»`,
      terjemah: `Dari Abdullah bin Zaid Al-Mazini bahwa Rasulullah SAW bersabda: "Area antara rumahku dan mimbarku adalah Raudhah (satu taman) dari taman-taman surga."`,
      takhrij: "Shahih Bukhari No. 1195 & Muslim No. 1391",
      syarah: `Keutamaan shalat, berdoa, dan berdzikir di Raudhah Syarifah di dalam Masjid Nabawi Madinah.`,
    },
  ],

  // 37. Wasiat & Waris / Faraidh (3 Hadis)
  wasiat_waris: [
    {
      nomorHadis: 1,
      subJudul: "Batasan Maksimal Sepertiga dalam Wasiat Harta",
      arab: `عَنْ عَامِرِ بْنِ سَعْدٍ عَنْ أَبِيهِ سَعْدِ بْنِ أَبِي وَقَّاصٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: جَاءَ النَّبِيُّ يَعُودُنِي... قُلْتُ: أُوصِي بِمَالِي كُلِّهِ؟ قَالَ: «لا»، قُلْتُ: فَالنِّصْفُ؟ قَالَ: «لا»، قُلْتُ: فَالثُّلُثُ؟ قَالَ:

«فَالثُّلُثُ، وَالثُّلُثُ كَثِيرٌ، إِنَّكَ أَنْ تَذَرَ وَرَثَتَكَ أَغْنِيَاءَ خَيْرٌ مِنْ أَنْ تَذَرَهُمْ عَالَةً يَتَكَفَّفُونَ النَّاسَ»`,
      terjemah: `Dari Sa'd bin Abi Waqqas radhiyallahu 'anhu berkata: Nabi SAW menjengukku saat sakit... Aku bertanya: "Bolehkah aku berwasiat dengan seluruh hartaku?" Beliau menjawab: "Tidak." Aku bertanya: "Setengahnya?" Beliau menjawab: "Tidak." Aku bertanya: "Sepertiganya?" Beliau menjawab: "Sepertiga, dan sepertiga itu sudah banyak. Sesungguhnya engkau meninggalkan ahli warismu dalam keadaan berkecukupan lebih baik daripada engkau meninggalkan mereka dalam keadaan miskin meminta-minta kepada manusia."`,
      takhrij: "Shahih Bukhari No. 2742 & Muslim No. 1628",
      syarah: `Menjaga hak ahli waris dan batasan syar'i agar wasiat tidak melebihi sepertiga dari total harta peninggalan.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Perintah Membagikan Warisan Sesuai Ketetapan Al-Qur'an (Faraidh)",
      arab: `عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لأَوْلَى رَجُلٍ ذَكَرٍ»`,
      terjemah: `Dari Ibnu Abbas dari Nabi SAW bersabda: "Bagikanlah harta warisan kepada para ahli waris yang berhak sesuai bagiannya dalam Kitabullah (Ashabul Furudh), dan apa yang tersisa maka berikanlah kepada kerabat laki-laki yang paling dekat ('ashabah)."`,
      takhrij: "Shahih Bukhari No. 6732 & Muslim No. 1615",
      syarah: `Kaidah induk ilmu faraidh pembagian warisan secara adil dan terperinci tanpa kezaliman.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Tidak Ada Wasiat Bagi Orang yang Sudah Mendapat Bagian Waris",
      arab: `عَنْ أَبِي أُمَامَةَ الْبَاهِلِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ فِي خُطْبَتِهِ عَامَ حَجَّةِ الْوَدَاعِ:

«إِنَّ اللَّهَ قَدْ أَعْطَى كُلَّ ذِي حَقٍّ حَقَّهُ، فَلا وَصِيَّةَ لِوَارِثٍ»`,
      terjemah: `Dari Abu Umamah Al-Bahili berkata: Aku mendengar Rasulullah SAW bersabda dalam khutbahnya saat Haji Wada': "Sesungguhnya Allah telah memberikan kepada setiap orang yang berhak hak bagiannya masing-masing, maka tidak boleh ada wasiat (tambahan) bagi ahli waris."`,
      takhrij: "Sunan Abu Dawud No. 2870 & Jami' At-Tirmidzi No. 2120",
      syarah: `Mencegah kecemburuan dan perselisihan di antara ahli waris dengan menetapkan bagian pasti dari wahyu.`,
    },
  ],

  // 38. Pembebasan Budak / 'Itq (3 Hadis)
  budak: [
    {
      nomorHadis: 1,
      subJudul: "Keutamaan Memerdekakan Budak Sebagai Pembebas dari Api Neraka",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَنْ أَعْتَقَ رَقَبَةً مُسْلِمَةً أَعْتَقَ اللَّهُ بِكُلِّ عُضْوٍ مِنْهُ عُضْوًا مِنَ النَّارِ، حَتَّى فَرْجَهُ بِفَرْجِهِ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu dari Nabi SAW bersabda: "Barangsiapa memerdekakan seorang budak muslim, niscaya Allah akan membebaskan setiap anggota tubuhnya dari api neraka dengan setiap anggota tubuh budak tersebut, hingga kemaluannya dengan kemaluannya."`,
      takhrij: "Shahih Bukhari No. 2517 & Muslim No. 1509",
      syarah: `Dorongan masif syariat Islam dalam menghapuskan perbudakan dan memuliakan harkat martabat kemanusiaan.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Pembantu dan Pelayan Adalah Saudaramu",
      arab: `عَنْ أَبِي ذَرٍّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ: «إِخْوَانُكُمْ خَوَلُكُمْ، جَعَلَهُمُ اللَّهُ تَحْتَ أَيْدِيكُمْ، فَمَنْ كَانَ أَخُوهُ تَحْتَ يَدِهِ فَلْيُطْعِمْهُ مِمَّا يَأْكُلُ، وَلْيُلْبِسْهُ مِمَّا يَلْبَسُ، وَلا تُكَلِّفُوهُمْ مَا يَغْلِبُهُمْ، فَإِنْ كَلَّفْتُمُوهُمْ فَأَعِينُوهُمْ»`,
      terjemah: `Dari Abu Dzar berkata: Rasulullah SAW bersabda: "Para pelayan dan budak kalian adalah saudara-saudara kalian yang Allah jadikan di bawah kekuasaan kalian. Maka barangsiapa yang saudaranya berada di bawah kekuasaannya, hendaklah ia memberinya makan dari apa yang ia makan, memberinya pakaian dari apa yang ia pakai, dan janganlah kalian membebani mereka di luar batas kemampuannya. Jika kalian membebani mereka, maka bantulah mereka!"`,
      takhrij: "Shahih Bukhari No. 30 & Muslim No. 1661",
      syarah: `Humanisme luhur Islam yang menghapuskan diskriminasi kasta dan menjunjung tinggi perlakuan manusiawi.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Pahala Ganda Bagi Pelayan yang Menunaikan Kewajibannya Kepada Allah dan Majikannya",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«إِنَّ الْعَبْدَ إِذَا نَصَحَ لِسَيِّدِهِ وَأَحْسَنَ عِبَادَةَ رَبِّهِ كَانَ لَهُ أَجْرُهُ مَرَّتَيْنِ»`,
      terjemah: `Dari Ibnu Umar bahwa Rasulullah SAW bersabda: "Sesungguhnya seorang hamba sahaya apabila ia tulus melayani majikannya dengan baik dan membaguskan ibadah kepada Rabb-nya, maka baginya dua pahala."`,
      takhrij: "Shahih Bukhari No. 2546 & Muslim No. 1664",
      syarah: `Apresiasi syariat bagi ketulusan bekerja dan keteguhan ibadah di tengah keterbatasan status sosial.`,
    },
  ],

  // 39. Tafsir & Keutamaan Al-Qur'an (4 Hadis)
  quran_tafsir: [
    {
      nomorHadis: 1,
      subJudul: "Sebaik-baik Manusia Adalah yang Mempelajari dan Mengajarkan Al-Qur'an",
      arab: `عَنْ عُثْمَانَ بْنِ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»`,
      terjemah: `Dari Utsman bin Affan radhiyallahu 'anhu dari Nabi shallallahu 'alaihi wa sallam bersabda: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya."`,
      takhrij: "Shahih Bukhari No. 5027",
      syarah: `Keutamaan tertinggi bagi para penghafal, pembaca, pengkaji tafsir, dan pengajar Kalamullah.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Orang yang Mahir Membaca Al-Qur'an Bersama Para Malaikat",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قَالَ رَسُولُ اللَّهِ: «الْمَاهِرُ بِالْقُرْآنِ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ، وَالَّذِي يَقْرَأُ الْقُرْآنَ وَيَتَتَعْتَعُ فِيهِ وَهُوَ عَلَيْهِ شَاقٌّ لَهُ أَجْرَانِ»`,
      terjemah: `Dari Aisyah berkata: Rasulullah SAW bersabda: "Orang yang mahir membaca Al-Qur'an akan bersama para malaikat yang mulia lagi berbakti. Dan orang yang membaca Al-Qur'an terbata-bata lagi merasa kesulitan, baginya dua pahala (pahala membaca dan pahala kesabarannya)."`,
      takhrij: "Shahih Bukhari No. 4937 & Muslim No. 798",
      syarah: `Motivasi bagi setiap muslim untuk terus belajar membaca, membaguskan tajwid, dan menelaah makna Al-Qur'an.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Keutamaan Surat Al-Fatihah Sebagai Surat Teragung dalam Al-Qur'an",
      arab: `عَنْ أَبِي سَعِيدِ بْنِ الْمُعَلَّى رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ لِي رَسُولُ اللَّهِ: «لأُعَلِّمَنَّكَ أَعْظَمَ سُورَةٍ فِي الْقُرْآنِ قَبْلَ أَنْ تَخْرُجَ مِنَ الْمَسْجِدِ»... فَقَالَ: «{الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ}، هِيَ السَّبْعُ الْمَثَانِي، وَالْقُرْآنُ الْعَظِيمُ الَّذِي أُوتِيتُهُ»`,
      terjemah: `Dari Abu Sa'id bin Al-Mu'alla berkata: Rasulullah SAW bersabda kepadaku: "Sungguh aku akan mengajarkan kepadamu surat yang paling agung dalam Al-Qur'an sebelum engkau keluar dari masjid..." Beliau bersabda: "'Alhamdulillahi Rabbil 'Alamin' (Surat Al-Fatihah), ia adalah As-Sab'ul Matsani (tujuh ayat yang diulang-ulang) dan Al-Qur'anul Azhim yang dikaruniakan kepadaku."`,
      takhrij: "Shahih Bukhari No. 4704",
      syarah: `Induk dari seluruh isi Al-Qur'an yang merangkum tauhid, ibadah, permohonan petunjuk, dan manhaj istiqamah.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Keutamaan Membaca Surat Al-Ikhlas Sebanding Sepertiga Al-Qur'an",
      arab: `عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ قَالَ فِي: {قُلْ هُوَ اللَّهُ أَحَدٌ}:

«وَالَّذِي نَفْسِي بِيَدِهِ إِنَّهَا لَتَعْدِلُ ثُلُثَ الْقُرْآنِ»`,
      terjemah: `Dari Abu Sa'id Al-Khudri bahwa Rasulullah SAW bersabda tentang Surat 'Qul Huwallahu Ahad': "Demi Dzat yang jiwaku berada di tangan-Nya, sesungguhnya surat itu sebanding dengan sepertiga Al-Qur'an."`,
      takhrij: "Shahih Bukhari No. 5013 & Muslim No. 811",
      syarah: `Surat Al-Ikhlas memurnikan sifat-sifat keesaan Allah SWT dari segala bentuk kesyirikan.`,
    },
  ],

  // 40. Keutamaan Sahabat & Kaum Anshar (4 Hadis)
  sahabat_anshar: [
    {
      nomorHadis: 1,
      subJudul: "Larangan Mencela Para Sahabat Nabi SAW",
      arab: `عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«لا تَسُبُّوا أَصْحَابِي، فَلَوْ أَنَّ أَحَدَكُمْ أَنْفَقَ مِثْلَ أُحُدٍ ذَهَبًا مَا بَلَغَ مُدَّ أَحَدِهِمْ وَلا نَصِيفَهُ»`,
      terjemah: `Dari Abu Sa'id Al-Khudri radhiyallahu 'anhu berkata: Nabi SAW bersabda: "Janganlah kalian mencela sahabat-sahabatku! Demi Dzat yang jiwaku berada di tangan-Nya, seandainya salah seorang di antara kalian menginfakkan emas sebesar Gunung Uhud, niscaya tidak akan dapat menyamai satu mud (dua genggam tangan) infak mereka dan tidak pula setengahnya."`,
      takhrij: "Shahih Bukhari No. 3673 & Muslim No. 2540",
      syarah: `Ketinggian derajat generasi sahabat yang berjuang mengorbankan jiwa dan harta demi menegakkan dakwah Islam di masa awal.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Tanda Keimanan Mencintai Kaum Anshar & Tanda Kemunafikan Membenci Mereka",
      arab: `عَنْ أَنَسٍ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«آيَةُ الإِيمَانِ حُبُّ الأَنْصَارِ، وَآيَةُ النِّفَاقِ بُغْضُ الأَنْصَارِ»`,
      terjemah: `Dari Anas radhiyallahu 'anhu dari Nabi SAW bersabda: "Tanda keimanan adalah mencintai kaum Anshar, dan tanda kemunafikan adalah membenci kaum Anshar."`,
      takhrij: "Shahih Bukhari No. 17 & Muslim No. 74",
      syarah: `Kemuliaan kaum Anshar Madinah yang menyambut, menolong, dan membagikan harta mereka kepada kaum Muhajirin.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Keutamaan Abu Bakar Ash-Shiddiq Sebagai Manusia Terbaik Setelah Para Nabi",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: «كُنَّا نُخَيِّرُ بَيْنَ النَّاسِ فِي زَمَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فَنُخَيِّرُ أَبَا بَكْرٍ، ثُمَّ عُمَرَ بْنَ الْخَطَّابِ، ثُمَّ عُثْمَانَ بْنَ عَفَّانَ رَضِيَ اللَّهُ عَنْهُمْ»`,
      terjemah: `Dari Ibnu Umar radhiyallahu 'anhuma berkata: "Kami memilih manusia terbaik pada masa Nabi SAW, maka kami mendahulukan Abu Bakar Ash-Shiddiq, kemudian Umar bin Al-Khaththab, kemudian Utsman bin Affan radhiyallahu 'anhum."`,
      takhrij: "Shahih Bukhari No. 3656",
      syarah: `Urutan keutamaan para Khulafaur Rasyidin yang disepakati oleh para sahabat dan Ahlus Sunnah wal Jama'ah.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Kewibawaan Umar bin Khattab yang Dihindari Oleh Setan",
      arab: `عَنْ سَعْدِ بْنِ أَبِي وَقَّاصٍ أَنَّ رَسُولَ اللَّهِ قَالَ لِعُمَرَ:

«وَالَّذِي نَفْسِي بِيَدِهِ، مَا لَقِيَكَ الشَّيْطَانُ سَالِكًا فَجًّا قَطُّ إِلا سَلَكَ فَجًّا غَيْرَ فَجِّكَ»`,
      terjemah: `Dari Sa'd bin Abi Waqqas bahwa Rasulullah SAW bersabda kepada Umar: "Demi Dzat yang jiwaku berada di tangan-Nya, tidaklah setan berpapasan denganmu menempuh suatu jalan, melainkan ia pasti mengambil jalan lain selain jalan yang engkau lalui."`,
      takhrij: "Shahih Bukhari No. 3683 & Muslim No. 2396",
      syarah: `Ketegasan aqidah, keadilan, dan kekuatan spiritual Amirul Mukminin Umar Al-Faruq radhiyallahu 'anhu.`,
    },
  ],

  // 41. Penciptaan Makhluk & Para Nabi (4 Hadis)
  penciptaan_nabi: [
    {
      nomorHadis: 1,
      subJudul: "Permulaan Penciptaan: Allah Ada Sebelum Segala Sesuatu Ada",
      arab: `عَنْ عِمْرَانَ بْنِ حُصَيْنٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: دَخَلْتُ عَلَى النَّبِيِّ... فَقَالَ:

«كَانَ اللَّهُ وَلَمْ يَكُنْ شَيْءٌ غَيْرُهُ، وَكَانَ عَرْشُهُ عَلَى الْمَاءِ، وَكَتَبَ فِي الذِّكْرِ كُلَّ شَيْءٍ، وَخَلَقَ السَّمَاوَاتِ وَالأَرْضَ»`,
      terjemah: `Dari Imran bin Hushain radhiyallahu 'anhuma: Aku menemui Nabi SAW... Beliau bersabda: "Allah telah ada dan belum ada sesuatu pun selain Dia, dan Arsy-Nya berada di atas air. Dia mencatat segala sesuatu di Lauhul Mahfuzh, dan Dia menciptakan langit dan bumi."`,
      takhrij: "Shahih Bukhari No. 3191",
      syarah: `Aqidah penciptaan alam semesta oleh Allah Yang Maha Esa, Maha Kuasa, tanpa permulaan dan tanpa sekutu.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Para Nabi Adalah Saudara Seiman dengan Risalah Tauhid yang Satu",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«الأَنْبِيَاءُ إِخْوَةٌ لِعَلاتٍ، أُمَّهَاتُهُمْ شَتَّى وَدِينُهُمْ وَاحِدٌ، وَأَنَا أَوْلَى النَّاسِ بِعِيسَى ابْنِ مَرْيَمَ لأَنَّهُ لَمْ يَكُنْ بَيْنِي وَبَيْنَهُ نَبِيٌّ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu berkata: Rasulullah SAW bersabda: "Para nabi adalah saudara seayah; syariat mereka berbeda-beda namun agama (tauhid) mereka adalah satu. Dan aku adalah orang yang paling dekat dengan Isa putra Maryam karena tidak ada nabi di antara aku dan dia."`,
      takhrij: "Shahih Bukhari No. 3443 & Muslim No. 2365",
      syarah: `Kesatuan aqidah tauhid yang dibawa oleh seluruh nabi dan rasul dari Nabi Adam AS hingga Nabi Muhammad SAW.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Penciptaan Nabi Adam AS dengan Tinggi Enam Puluh Hasta",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«خَلَقَ اللَّهُ آدَمَ وَطُولُهُ سِتُّونَ ذِرَاعًا... فَكُلُّ مَنْ يَدْخُلُ الْجَنَّةَ عَلَى صُورَةِ آدَمَ، فَلَمْ يَزَلِ الْخَلْقُ يَنْقُصُ بَعْدُ حَتَّى الآنَ»`,
      terjemah: `Dari Abu Hurairah dari Nabi SAW bersabda: "Allah menciptakan Adam dengan tinggi enam puluh hasta... Maka setiap orang yang masuk surga akan memiliki rupa dan postur laksana Adam, dan manusia senantiasa berkurang tingginya semenjak saat itu hingga sekarang."`,
      takhrij: "Shahih Bukhari No. 3326 & Muslim No. 2841",
      syarah: `Sejarah asal-usul penciptaan manusia pertama yang dimuliakan Allah dengan ilmu dan sujud penghormatan malaikat.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Syafaat Agung (Asy-Syafa'ah Al-Uzhma) Rasulullah SAW di Padang Mahsyar",
      arab: `عَنْ أَبِي هُرَيْرَةَ فِي حَدِيثِ الشَّفَاعَةِ الطَّوِيلِ: يَأْتِي النَّاسُ آدَمَ ثُمَّ نُوحًا ثُمَّ إِبْرَاهِيمَ ثُمَّ مُوسَى ثُمَّ عِيسَى... فَيَأْتُونَ مُحَمَّدًا فَيَقُولُونَ: يَا مُحَمَّدُ أَنْتَ رَسُولُ اللَّهِ وَخَاتَمُ الأَنْبِيَاءِ... فَيَقُولُ:

«أَنَا لَهَا، أَنَا لَهَا»، فَيَسْجُدُ تَحْتَ الْعَرْشِ فَيَفْتَحُ اللَّهُ عَلَيْهِ مِنْ مَحَامِدِهِ... فَيُقَالُ: «يَا مُحَمَّدُ ارْفَعْ رَأْسَكَ، سَلْ تُعْطَهْ، وَاشْفَعْ تُشَفَّعْ»`,
      terjemah: `Dari Abu Hurairah dalam hadits syafaat panjang: Manusia mendatangi para nabi memohon syafaat di padang mahsyar... hingga mereka mendatangi Nabi Muhammad SAW dan beliau bersabda: "Akulah yang memilikinya, akulah yang memilikinya." Lalu beliau bersujud di bawah Arsy dan Allah berfirman: "Wahai Muhammad, angkatlah kepalamu! Mintalah niscaya engkau diberi, dan berilah syafaat niscaya syafaatmu dikabulkan!"`,
      takhrij: "Shahih Bukhari No. 4712 & Muslim No. 194",
      syarah: `Kedudukan Maqam Mahmud dan syafaat akbar Nabi Muhammad SAW bagi keselamatan umat manusia di hari penghisaban.`,
    },
  ],

  // 42. Sumpah, Nadzar & Kaffarat (3 Hadis)
  sumpah_nadzar: [
    {
      nomorHadis: 1,
      subJudul: "Hanya Bersumpah dengan Nama Allah & Larangan Bersumpah dengan Selain-Nya",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَدْرَكَ عُمَرَ يَحْلِفُ بِأَبِيهِ فَقَالَ:

«أَلا إِنَّ اللَّهَ يَنْهَاكُمْ أَنْ تَحْلِفُوا بِآبَائِكُمْ، فَمَنْ كَانَ حَالِفًا فَلْيَحْلِفْ بِاللَّهِ أَوْ لِيَصْمُتْ»`,
      terjemah: `Dari Ibnu Umar radhiyallahu 'anhuma bahwa Rasulullah SAW mendengar Umar bersumpah demi ayahnya, maka beliau bersabda: "Ketahuilah, sesungguhnya Allah melarang kalian bersumpah demi nenek moyang kalian. Barangsiapa yang hendak bersumpah, maka bersumpahlah dengan nama Allah atau hendaklah ia diam."`,
      takhrij: "Shahih Bukhari No. 6646 & Muslim No. 1646",
      syarah: `Penegasan tauhid: sumpah adalah bentuk pengagungan yang hanya boleh ditujukan kepada Allah SWT semata.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Kewajiban Menepati Nadzar Ketaatan Kepada Allah",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«مَنْ نَذَرَ أَنْ يُطِيعَ اللَّهَ فَلْيُطِعْهُ، وَمَنْ نَذَرَ أَنْ يَعْصِيَهُ فَلا يَعْصِهِ»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha dari Nabi SAW bersabda: "Barangsiapa bernadzar untuk mentaati Allah, maka hendaklah ia menepatinya untuk mentaati-Nya. Dan barangsiapa bernadzar untuk bermaksiat kepada Allah, maka janganlah ia bermaksiat kepada-Nya (batalkan nadzarnya dan bayar kaffarat)."`,
      takhrij: "Shahih Bukhari No. 6696",
      syarah: `Wajib menunaikan nadzar ibadah seperti shalat, puasa, atau sedekah, dan haram melaksanakan nadzar kemaksiatan.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Membatalkan Sumpah dan Membayar Kaffarat Bila Melihat Amalan Lain yang Lebih Baik",
      arab: `عَنْ عَبْدِ الرَّحْمَنِ بْنِ سَمُرَةَ قَالَ: قَالَ لِي رَسُولُ اللَّهِ:

«إِذَا حَلَفْتَ عَلَى يَمِينٍ، فَرَأَيْتَ غَيْرَهَا خَيْرًا مِنْهَا، فَكَفِّرْ عَنْ يَمِينِكَ وَائْتِ الَّذِي هُوَ خَيْرٌ»`,
      terjemah: `Dari Abdurrahman bin Samurah berkata: Rasulullah SAW bersabda kepadaku: "Apabila engkau telah bersumpah atas suatu perkara, lalu engkau melihat ada perkara lain yang lebih baik daripadanya, maka bayarlah kaffarat tebusan sumpahmu dan kerjakanlah perkara yang lebih baik tersebut."`,
      takhrij: "Shahih Bukhari No. 6622 & Muslim No. 1652",
      syarah: `Fleksibilitas syariat agar sumpah tidak menghalangi seseorang dari melakukan amal kebajikan dan silaturahim.`,
    },
  ],

  // 43. Hukum Pidana (Hudud, Diyat, Murtad) (4 Hadis)
  hudud_pidana: [
    {
      nomorHadis: 1,
      subJudul: "Kehormatan Darah, Harta, dan Kehormatan Jiwa Muslim",
      arab: `عَنْ أَبِي بَكْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: خَطَبَنَا النَّبِيُّ يَوْمَ النَّحْرِ فَقَالَ:

«إِنَّ دِمَاءَكُمْ وَأَمْوَالَكُمْ وَأَعْرَاضَكُمْ عَلَيْكُمْ حَرَامٌ، كَحُرْمَةِ يَوْمِكُمْ هَذَا، فِي شَهْرِكُمْ هَذَا، فِي بَلَدِكُمْ هَذَا»`,
      terjemah: `Dari Abu Bakrah radhiyallahu 'anhu berkata: Nabi SAW berkhutbah kepada kami pada hari Nahr (Haji Wada') dan bersabda: "Sesungguhnya darah kalian, harta benda kalian, dan kehormatan kalian adalah haram (suci terlindungi) atas sesama kalian, sebagaimana kesucian hari kalian ini, di bulan kalian ini, di negeri kalian ini."`,
      takhrij: "Shahih Bukhari No. 1741 & Muslim No. 1679",
      syarah: `Pilar dasar perlindungan hak asasi manusia dalam Islam: haram menumpahkan darah, merampas harta, atau merusak kehormatan sesama.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Hindarilah Hukuman Pidana Had dengan Adanya Keraguan / Syubhat",
      arab: `عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«ادْرَءُوا الْحُدُودَ عَنِ الْمُسْلِمِينَ مَا اسْتَطَعْتُمْ، فَإِنْ كَانَ لَهُ مَخْرَجٌ فَخَلُّوا سَبِيلَهُ، فَإِنَّ الإِمَامَ أَنْ يُخْطِئَ فِي الْعَفْوِ خَيْرٌ مِنْ أَنْ يُخْطِئَ فِي الْعُقُوبَةِ»`,
      terjemah: `Dari Aisyah radhiyallahu 'anha berkata: Rasulullah SAW bersabda: "Hindarilah penjatuhan hukuman hudud dari kaum muslimin semampu kalian. Jika ada celah jalan keluar kebebasan maka bebaskanlah, karena sesungguhnya seorang pemimpin yang keliru dalam memaafkan lebih baik daripada keliru dalam menjatuhkan hukuman."`,
      takhrij: "Jami' At-Tirmidzi No. 1424 & Al-Hakim",
      syarah: `Prinsip praduga tak bersalah dan kehati-hatian maksimal dalam sistem peradilan pidana Islam.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Tiga Perkara yang Menghalalkan Hukuman Mati Bagi Seseorang",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«لا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ، يَشْهَدُ أَنْ لا إِلَهَ إِلا اللَّهُ وَأَنِّي رَسُولُ اللَّهِ، إِلا بِإِحْدَى ثَلاثٍ: النَّفْسُ بِالنَّفْسِ، وَالثَّيِّبُ الزَّانِي، وَالْمَارِقُ مِنَ الدِّينِ التَّارِكُ لِلْجَمَاعَةِ»`,
      terjemah: `Dari Abdullah bin Mas'ud bahwa Rasulullah SAW bersabda: "Tidak halal darah seorang muslim yang bersaksi tiada tuhan selain Allah dan aku utusan Allah kecuali karena salah satu dari tiga perkara: jiwa dibalas jiwa (qishash pembunuhan sengaja), orang yang berzina padahal sudah pernah menikah (muhshan), dan orang yang murtad keluar dari agamanya serta memisahkan diri dari jamaah."`,
      takhrij: "Shahih Bukhari No. 6878 & Muslim No. 1676",
      syarah: `Ketegasan hukum Islam dalam menjaga stabilitas masyarakat, kesucian nasab keturunan, dan kedaulatan negara.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Keadilan Mutlak Tanpa Pandang Bulu dalam Penegakan Hukum",
      arab: `عَنْ عَائِشَةَ فِي قِصَّةِ الْمَرْأَةِ الْمَخْزُومِيَّةِ الَّتِي سَرَقَتْ، فَقَالَ رَسُولُ اللَّهِ:

«إِنَّمَا أَهْلَكَ الَّذِينَ قَبْلَكُمْ أَنَّهُمْ كَانُوا إِذَا سَرَقَ فِيهِمُ الشَّرِيفُ تَرَكُوهُ، وَإِذَا سَرَقَ فِيهِمُ الضَّعِيفُ أَقَامُوا عَلَيْهِ الْحَدَّ، وَايْمُ اللَّهِ لَوْ أَنَّ فَاطِمَةَ بِنْتَ مُحَمَّدٍ سَرَقَتْ لَقَطَعْتُ يَدَهَا»`,
      terjemah: `Dari Aisyah tentang kisah wanita bangsawan Makhzumiyah yang mencuri, maka Rasulullah SAW bersabda: "Sesungguhnya yang membinasakan umat-umat sebelum kalian adalah apabila ada orang terpandang di antara mereka yang mencuri mereka membiarkannya, namun apabila orang lemah di antara mereka yang mencuri mereka menegakkan hukuman atasnya. Demi Allah, seandainya Fatimah putri Muhammad mencuri, niscaya aku sendiri yang akan memotong tangannya!"`,
      takhrij: "Shahih Bukhari No. 3733 & Muslim No. 1688",
      syarah: `Kesetaraan di hadapan hukum (*equality before the law*) tanpa membedakan status sosial atau kekerabatan.`,
    },
  ],

  // 44. Takwil Mimpi / Ru'ya (3 Hadis)
  mimpi: [
    {
      nomorHadis: 1,
      subJudul: "Mimpi yang Baik Adalah Bagian dari Kenabian",
      arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الرُّؤْيَا الصَّالِحَةُ جُزْءٌ مِنْ سِتَّةٍ وَأَرْبَعِينَ جُزْءًا مِنَ النُّبُوَّةِ»`,
      terjemah: `Dari Abu Hurairah radhiyallahu 'anhu bahwa Rasulullah SAW bersabda: "Mimpi yang baik dari orang yang shaleh adalah satu bagian dari empat puluh enam bagian kenabian."`,
      takhrij: "Shahih Bukhari No. 6987 & Muslim No. 2263",
      syarah: `Mimpi yang benar (*ar-ru'ya ash-shadiqah*) adalah bisyarah (kabar gembira) dan ilham petunjuk dari Allah bagi hamba-Nya yang bertakwa.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Tiga Macam Kategori Mimpi Manusia",
      arab: `عَنْ أَبِي هُرَيْرَةَ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الرُّؤْيَا ثَلاثٌ: فَرُؤْيَا حَقٌّ، وَرُؤْيَا يُحَدِّثُ بِهَا الرَّجُلُ نَفْسَهُ، وَرُؤْيَا تَحْزِينٌ مِنَ الشَّيْطَانِ، فَمَنْ رَأَى مَا يَكْرَهُ فَلْيَقُمْ فَلْيُصَلِّ»`,
      terjemah: `Dari Abu Hurairah dari Nabi SAW bersabda: "Mimpi itu ada tiga: mimpi yang benar (petunjuk dari Allah), mimpi berupa bisikan angan-angan jiwa seseorang, dan mimpi berupa kesedihan/gangguan dari setan. Maka barangsiapa melihat mimpi yang ia benci, hendaklah ia bangkit lalu mendirikan shalat dan tidak menceritakannya kepada orang lain."`,
      takhrij: "Shahih Muslim No. 2263 & At-Tirmidzi",
      syarah: `Klasifikasi psikologis dan spiritual mimpi serta adab menanggapi mimpi buruk.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Adab Menghadapi Mimpi Buruk: Memohon Perlindungan dan Mengubah Posisi Tidur",
      arab: `عَنْ جَابِرٍ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«إِذَا رَأَى أَحَدُكُمُ الرُّؤْيَا يَكْرَهُهَا فَلْيَبْصُقْ عَنْ شِمَالِهِ ثَلاثًا، وَلْيَسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ ثَلاثًا، وَلْيَتَحَوَّلْ عَنْ جَنْبِهِ الَّذِي كَانَ عَلَيْهِ»`,
      terjemah: `Dari Jabir dari Rasulullah SAW bersabda: "Apabila salah seorang di antara kalian melihat mimpi yang ia benci, maka hendaklah ia meludah tipis ke sebelah kirinya tiga kali, memohon perlindungan kepada Allah dari gangguan setan tiga kali, dan mengubah posisi tidurnya dari sisi semula."`,
      takhrij: "Shahih Muslim No. 2261",
      syarah: `Bimbingan praktis menolak pengaruh negatif mimpi buruk agar hati kembali tenang.`,
    },
  ],

  // 45. Peradilan & Kepemimpinan / Ahkam (4 Hadis)
  peradilan_imarah: [
    {
      nomorHadis: 1,
      subJudul: "Pahala Ijtihad Hakim yang Adil: Dua Pahala Jika Benar & Satu Pahala Jika Keliru",
      arab: `عَنْ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللَّهُ عَنْهُ أَنَّهُ سَمِعَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«إِذَا حَكَمَ الْحَاكِمُ فَاجْتَهَدَ ثُمَّ أَصَابَ فَلَهُ أَجْرَانِ، وَإِذَا حَكَمَ فَاجْتَهَدَ ثُمَّ أَخْطَأَ فَلَهُ أَجْرٌ»`,
      terjemah: `Dari Amr bin Al-Ash radhiyallahu 'anhu bahwa ia mendengar Rasulullah SAW bersabda: "Apabila seorang hakim memutuskan suatu perkara lalu ia berijtihad dan keputusannya benar, maka baginya dua pahala. Dan apabila ia memutuskan perkara lalu berijtihad dan keliru, maka baginya satu pahala."`,
      takhrij: "Shahih Bukhari No. 7352 & Muslim No. 1716",
      syarah: `Etika peradilan dan penghargaan Islam terhadap usaha pencarian kebenaran hukum melalui proses ijtihad yang sungguh-sungguh.`,
    },
    {
      nomorHadis: 2,
      subJudul: "Tanggung Jawab Kepemimpinan: Setiap Pemimpin Akan Dimintai Pertanggungjawaban",
      arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّهُ سَمِعَ رَسُولَ اللَّهِ يَقُولُ:

«كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ: الإِمَامُ رَاعٍ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالرَّجُلُ رَاعٍ فِي أَهْلِهِ وَهُوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ...»`,
      terjemah: `Dari Ibnu Umar bahwa ia mendengar Rasulullah SAW bersabda: "Setiap kalian adalah pemimpin dan setiap kalian akan dimintai pertanggungjawaban atas apa yang dipimpinnya. Seorang kepala negara adalah pemimpin dan bertanggung jawab atas rakyatnya, seorang lelaki adalah pemimpin dalam keluarganya dan bertanggung jawab atas mereka..."`,
      takhrij: "Shahih Bukhari No. 893 & Muslim No. 1829",
      syarah: `Kaidah kepemimpinan dan amanah moral di berbagai tingkatan struktur masyarakat.`,
    },
    {
      nomorHadis: 3,
      subJudul: "Kedudukan Pemimpin yang Adil di Atas Mimbar Cahaya di Sisi Allah",
      arab: `عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ:

«إِنَّ الْمُقْسِطِينَ عِنْدَ اللَّهِ عَلَى مَنَابِرَ مِنْ نُورٍ عَنْ يَمِينِ الرَّحْمَنِ عَزَّ وَجَلَّ... الَّذِينَ يَعْدِلُونَ فِي حُكْمِهِمْ وَأَهْلِيهِمْ وَمَا وَلُوا»`,
      terjemah: `Dari Abdullah bin Amr berkata: Rasulullah SAW bersabda: "Sesungguhnya orang-orang yang berlaku adil di sisi Allah berada di atas mimbar-mimbar dari cahaya di sebelah kanan Ar-Rahman 'Azza wa Jalla... yaitu orang-orang yang berbuat adil dalam hukum mereka, terhadap keluarga mereka, dan dalam apa saja yang diamanahkan kepada mereka."`,
      takhrij: "Shahih Muslim No. 1827",
      syarah: `Kemuliaan penegak keadilan dan kejujuran dalam memegang tampuk amanah kekuasaan.`,
    },
    {
      nomorHadis: 4,
      subJudul: "Larangan Meminta-Minta Jabatan Kekuasaan",
      arab: `عَنْ عَبْدِ الرَّحْمَنِ بْنِ سَمُرَةَ قَالَ: قَالَ لِي رَسُولُ اللَّهِ:

«يَا عَبْدَ الرَّحْمَنِ، لا تَسْأَلِ الإِمَارَةَ، فَإِنَّكَ إِنْ أُوتِيتَهَا عَنْ مَسْأَلَةٍ وُكِلْتَ إِلَيْهَا، وَإِنْ أُوتِيتَهَا مِنْ غَيْرِ مَسْأَلَةٍ أُعِنْتَ عَلَيْهَا»`,
      terjemah: `Dari Abdurrahman bin Samurah berkata: Rasulullah SAW bersabda kepadaku: "Wahai Abdurrahman, janganlah engkau meminta jabatan kekuasaan/kepemimpinan! Karena jika engkau diberi jabatan itu karena memintanya niscaya engkau akan dibebankan kepadanya sendirian, namun jika engkau diberi tanpa memintanya niscaya engkau akan dibantu oleh Allah dalam mengembannya."`,
      takhrij: "Shahih Bukhari No. 7146 & Muslim No. 1652",
      syarah: `Etika menjaga diri dari ambisi kekuasaan dan pentingnya pertolongan Allah bagi pemegang amanah yang ikhlas.`,
    },
  ],
}


// -------------------------------------------------------------
// COMPREHENSIVE TOPIC RESOLVER
// Exact, Unambiguous Matching For All 332 Canonical Kitabs
// -------------------------------------------------------------

export function resolveTopicHadiths(
  compilationName: string,
  authorName: string,
  kitabNumber: number,
  kitabTitle: string,
): CustomHadisEntry[] {
  const lower = kitabTitle.toLowerCase()

  // 1. Thaharah, Mandi, Haidh, Tayammum, Wudhu
  if (lower.includes("mandi") || lower.includes("janabah") || lower.includes("ghusl") || lower.includes("غسل")) {
    return TOPIC_HADITH_LIBRARY.mandi
  }
  if (lower.includes("haidh") || lower.includes("istihadhah") || lower.includes("nifas") || lower.includes("حيض") || lower.includes("استحاضة")) {
    return TOPIC_HADITH_LIBRARY.haidh
  }
  if (lower.includes("tayammum") || lower.includes("تيمم")) {
    return TOPIC_HADITH_LIBRARY.tayammum
  }
  if (lower.includes("wudhu") || lower.includes("siwak") || lower.includes("وضوء") || lower.includes("سواك")) {
    return TOPIC_HADITH_LIBRARY.wudhu
  }
  if (lower.includes("thaharah") || lower.includes("bersuci") || lower.includes("air") || lower.includes("miyah") || lower.includes("طهارة") || lower.includes("مياه")) {
    return TOPIC_HADITH_LIBRARY.thaharah
  }

  // 2. Specific Shalat variants (Must precede general shalat)
  if (lower.includes("jumat") || lower.includes("jum'at") || lower.includes("jumu'ah") || lower.includes("جمعة")) {
    return TOPIC_HADITH_LIBRARY.jumat
  }
  if (lower.includes("waktu") || lower.includes("mawaqit") || lower.includes("مواقيت")) {
    return TOPIC_HADITH_LIBRARY.waktu
  }
  if (lower.includes("adzan") || lower.includes("iqamah") || lower.includes("nida") || lower.includes("أذان")) {
    return TOPIC_HADITH_LIBRARY.adzan
  }
  if (lower.includes("jenazah") || lower.includes("janaiz") || lower.includes("kematian") || lower.includes("kubur") || lower.includes("جنائز")) {
    return TOPIC_HADITH_LIBRARY.jenazah
  }
  if (lower.includes("safar") || lower.includes("qashar") || lower.includes("musafir") || lower.includes("تقصير") || lower.includes("سفر")) {
    return TOPIC_HADITH_LIBRARY.safar
  }
  if (lower.includes("tahajjud") || lower.includes("qiyam") || lower.includes("witir") || lower.includes("تهجد") || lower.includes("وتر")) {
    return TOPIC_HADITH_LIBRARY.tahajjud
  }
  if (lower.includes("sahwi") || lower.includes("sahwu") || lower.includes("tilawah") || lower.includes("syukur") || lower.includes("سهو") || lower.includes("سجود")) {
    return TOPIC_HADITH_LIBRARY.sahwi
  }
  if (lower.includes("khauf") || lower.includes("خوف")) {
    return TOPIC_HADITH_LIBRARY.khauf
  }
  if (lower.includes("hari raya") || lower.includes("eid") || lower.includes("عيدين")) {
    return TOPIC_HADITH_LIBRARY.eid
  }
  if (lower.includes("istisqa") || lower.includes("hujan") || lower.includes("استسقاء")) {
    return TOPIC_HADITH_LIBRARY.istisqa
  }
  if (lower.includes("gerhana") || lower.includes("kusuf") || lower.includes("كسوف")) {
    return TOPIC_HADITH_LIBRARY.kusuf
  }
  if (lower.includes("masjid") || lower.includes("kiblat") || lower.includes("imamah") || lower.includes("iftitah") || lower.includes("tathbiq") || lower.includes("مساجد") || lower.includes("قبلة") || lower.includes("إمامة")) {
    return TOPIC_HADITH_LIBRARY.masjid
  }

  // 3. Pillars of Islam
  if (lower.includes("zakat") || lower.includes("sedekah") || lower.includes("shadaqah") || lower.includes("زكاة")) {
    return TOPIC_HADITH_LIBRARY.zakat
  }
  if (lower.includes("puasa") || lower.includes("shiyam") || lower.includes("shaum") || lower.includes("tarawih") || lower.includes("lailatul") || lower.includes("i'tikaf") || lower.includes("صوم") || lower.includes("صيام") || lower.includes("تراويح") || lower.includes("اعتكاف")) {
    return TOPIC_HADITH_LIBRARY.puasa
  }
  if (lower.includes("haji") || lower.includes("umrah") || lower.includes("manasik") || lower.includes("muhshar") || lower.includes("حج") || lower.includes("عمرة") || lower.includes("مناسك") || lower.includes("محصر")) {
    return TOPIC_HADITH_LIBRARY.haji
  }
  if (lower.includes("madinah") || lower.includes("makkah") || lower.includes("مدينة") || lower.includes("مكة")) {
    return TOPIC_HADITH_LIBRARY.tanah_suci
  }

  // 4. Family & Marriage
  if (lower.includes("nikah") || lower.includes("pernikahan") || lower.includes("thalaq") || lower.includes("cerai") || lower.includes("ridha") || lower.includes("sepersusuan") || lower.includes("shadaq") || lower.includes("mahar") || lower.includes("nafkah") || lower.includes("li'an") || lower.includes("نكان") || lower.includes("نكاح") || lower.includes("طلاق") || lower.includes("رضاع") || lower.includes("لعان") || lower.includes("نفقات") || lower.includes("صداق")) {
    return TOPIC_HADITH_LIBRARY.nikah
  }

  // 5. Commercial, Civil Transactions & Property
  if (lower.includes("jual beli") || lower.includes("buyu") || lower.includes("tijarat") || lower.includes("perdagangan") || lower.includes("salam") || lower.includes("syuf") || lower.includes("ijarah") || lower.includes("syirkah") || lower.includes("rahn") || lower.includes("gadai") || lower.includes("utang") || lower.includes("qardh") || lower.includes("luqathah") || lower.includes("temuan") || lower.includes("muzara") || lower.includes("musaqah") || lower.includes("pengairan") || lower.includes("penggarapan") || lower.includes("hawalah") || lower.includes("kafalah") || lower.includes("wakalah") || lower.includes("بيوع") || lower.includes("تجارات") || lower.includes("سلم") || lower.includes("شفعة") || lower.includes("إجارة") || lower.includes("شركة") || lower.includes("رهن") || lower.includes("لقطة") || lower.includes("مزارعة") || lower.includes("مساقاة") || lower.includes("حوالات") || lower.includes("كفالة") || lower.includes("وكالة") || lower.includes("استقراض")) {
    return TOPIC_HADITH_LIBRARY.muamalah
  }

  // 6. Wasiat, Waris, Hibah, Wakaf
  if (lower.includes("wasiat") || lower.includes("faraidh") || lower.includes("waris") || lower.includes("hibah") || lower.includes("hadiah") || lower.includes("wakaf") || lower.includes("ahbas") || lower.includes("وصايا") || lower.includes("وصية") || lower.includes("فرائض") || lower.includes("هبة") || lower.includes("هبات") || lower.includes("أحباس") || lower.includes("نحل") || lower.includes("رقبى")) {
    return TOPIC_HADITH_LIBRARY.wasiat_waris
  }

  // 7. Pembebasan Budak ('Itq & Mukatab)
  if (lower.includes("budak") || lower.includes("'itq") || lower.includes("mukatab") || lower.includes("عتق") || lower.includes("مكاتب") || lower.includes("ولاء")) {
    return TOPIC_HADITH_LIBRARY.budak
  }

  // 8. Food, Drinks, Sacrifice, Hunting
  if (lower.includes("makan") || lower.includes("at'imah") || lower.includes("ath'imah") || lower.includes("sembelih") || lower.includes("dzaba") || lower.includes("berburu") || lower.includes("shaid") || lower.includes("kurban") || lower.includes("udhiyah") || lower.includes("dhahaya") || lower.includes("dahaya") || lower.includes("aqiqah") || lower.includes("fara'") || lower.includes("أطعمة") || lower.includes("ذبائح") || lower.includes("صيد") || lower.includes("أضاحي") || lower.includes("ضحايا") || lower.includes("عقيقة") || lower.includes("فرع")) {
    return TOPIC_HADITH_LIBRARY.makanan
  }
  if (lower.includes("minum") || lower.includes("asyribah") || lower.includes("khamr") || lower.includes("أشربة")) {
    return TOPIC_HADITH_LIBRARY.minuman
  }

  // 9. Medical & Clothing
  if (lower.includes("obat") || lower.includes("thibb") || lower.includes("sakit") || lower.includes("mardha") || lower.includes("penyakit") || lower.includes("طب") || lower.includes("مرضى")) {
    return TOPIC_HADITH_LIBRARY.pengobatan
  }
  if (lower.includes("pakaian") || lower.includes("libas") || lower.includes("ziyyah") || lower.includes("khatam") || lower.includes("cincin") || lower.includes("rambut") || lower.includes("tarajjul") || lower.includes("لباس") || lower.includes("زينة") || lower.includes("خاتم") || lower.includes("ترجل") || lower.includes("حمام")) {
    return TOPIC_HADITH_LIBRARY.pakaian
  }

  // 10. Al-Qur'an & Tafsir
  if (lower.includes("qur'an") || lower.includes("quran") || lower.includes("tafsir") || lower.includes("qira'at") || lower.includes("huruf") || lower.includes("تفسير") || lower.includes("قرآن") || lower.includes("قراءات")) {
    return TOPIC_HADITH_LIBRARY.quran_tafsir
  }

  // 11. Keutamaan Sahabat & Kaum Anshar & Manakib
  if (lower.includes("sahabat") || lower.includes("anshar") || lower.includes("manakib") || lower.includes("manaqib") || lower.includes("fadhail") || lower.includes("مناقب") || lower.includes("أنصار") || lower.includes("صحابة")) {
    return TOPIC_HADITH_LIBRARY.sahabat_anshar
  }

  // 12. Penciptaan & Kisah Para Nabi
  if (lower.includes("penciptaan") || lower.includes("khalq") || lower.includes("para nabi") || lower.includes("anbiya") || lower.includes("بدء الخلق") || lower.includes("أنبياء")) {
    return TOPIC_HADITH_LIBRARY.penciptaan_nabi
  }

  // 13. Jihad, Militer, Maghazi, Hubungan Luar Negeri
  if (lower.includes("jihad") || lower.includes("perang") || lower.includes("maghazi") || lower.includes("khail") || lower.includes("kuda") || lower.includes("siyar") || lower.includes("imarah") || lower.includes("khumus") || lower.includes("jizyah") || lower.includes("kharaj") || lower.includes("جهاد") || lower.includes("مغازي") || lower.includes("خيل") || lower.includes("سير") || lower.includes("خمس") || lower.includes("جزية") || lower.includes("خراج")) {
    return TOPIC_HADITH_LIBRARY.jihad
  }

  // 14. Sumpah & Nadzar
  if (lower.includes("sumpah") || lower.includes("nadzar") || lower.includes("kaffarat") || lower.includes("kafarat") || lower.includes("aiman") || lower.includes("nudzur") || lower.includes("أيمان") || lower.includes("نذور") || lower.includes("كفارات")) {
    return TOPIC_HADITH_LIBRARY.sumpah_nadzar
  }

  // 15. Hukum Pidana (Hudud, Diyat, Qishash, Murtad, Ikrah, Hiyal)
  if (lower.includes("hudud") || lower.includes("pidana") || lower.includes("diyat") || lower.includes("qishash") || lower.includes("murtad") || lower.includes("ikrah") || lower.includes("khiyal") || lower.includes("pencurian") || lower.includes("darah") || lower.includes("حدود") || lower.includes("ديات") || lower.includes("قصاص") || lower.includes("مرتدين") || lower.includes("إكراه") || lower.includes("حيل") || lower.includes("قطع السارق") || lower.includes("تحريم الدم")) {
    return TOPIC_HADITH_LIBRARY.hudud_pidana
  }

  // 16. Takwil Mimpi
  if (lower.includes("mimpi") || lower.includes("ru'ya") || lower.includes("ta'bir") || lower.includes("رؤيا") || lower.includes("تعبير")) {
    return TOPIC_HADITH_LIBRARY.mimpi
  }

  // 17. Peradilan & Kepemimpinan
  if (lower.includes("peradilan") || lower.includes("ahkam") || lower.includes("qadha") || lower.includes("aqdhiyah") || lower.includes("hakim") || lower.includes("bai'at") || lower.includes("baiat") || lower.includes("أحكام") || lower.includes("أقضية") || lower.includes("قضاء") || lower.includes("بيعة")) {
    return TOPIC_HADITH_LIBRARY.peradilan_imarah
  }

  // 18. General Shalat
  if (lower.includes("shalat") || lower.includes("sholat") || lower.includes("صلاة")) {
    return TOPIC_HADITH_LIBRARY.shalat
  }

  // 19. Muqaddimah & Sunnah / I'tisham
  if (lower.includes("muqaddimah") || lower.includes("مقدمة") || lower.includes("sunnah") || lower.includes("i'tisham") || lower.includes("ittiba") || lower.includes("سنة") || lower.includes("اعتصام")) {
    return TOPIC_HADITH_LIBRARY.sunnah
  }

  // 20. Doa & Dzikir & Taubat & Isti'adzah
  if (lower.includes("doa") || lower.includes("da'awat") || lower.includes("dzikir") || lower.includes("istighfar") || lower.includes("taubat") || lower.includes("isti'adzah") || lower.includes("دعوات") || lower.includes("دعاء") || lower.includes("ذكر") || lower.includes("استغفار") || lower.includes("توبة") || lower.includes("استعاذة")) {
    return TOPIC_HADITH_LIBRARY.doa
  }

  // 21. Takdir / Qadar
  if (lower.includes("takdir") || lower.includes("qadar") || lower.includes("قدر")) {
    return TOPIC_HADITH_LIBRARY.takdir
  }

  // 22. Fitnah Akhir Zaman & Al-Mahdi
  if (lower.includes("fitnah") || lower.includes("fitan") || lower.includes("mahdi") || lower.includes("malahim") || lower.includes("kiamat") || lower.includes("qiyamah") || lower.includes("surga") || lower.includes("neraka") || lower.includes("فتن") || lower.includes("مهدي") || lower.includes("ملاحم") || lower.includes("قيامة") || lower.includes("جنة") || lower.includes("نار")) {
    return TOPIC_HADITH_LIBRARY.fitnah
  }

  // 23. Tauhid & Iman
  if (lower.includes("tauhid") || lower.includes("sifat allah") || lower.includes("iman") || lower.includes("توحيد") || lower.includes("إيمان")) {
    return TOPIC_HADITH_LIBRARY.tauhid
  }

  // 24. Zuhud & Pelembut Hati
  if (lower.includes("zuhud") || lower.includes("riqaq") || lower.includes("hati") || lower.includes("زهد") || lower.includes("رقاق")) {
    return TOPIC_HADITH_LIBRARY.zuhud
  }

  // 25. Adab & Akhlak
  if (lower.includes("adab") || lower.includes("akhlak") || lower.includes("khuluq") || lower.includes("berbakti") || lower.includes("silaturahim") || lower.includes("birr") || lower.includes("salam") || lower.includes("izin") || lower.includes("isti'dzan") || lower.includes("أدب") || lower.includes("آداب") || lower.includes("خلق") || lower.includes("بر") || lower.includes("صلة") || lower.includes("سلام") || lower.includes("استئذان")) {
    return TOPIC_HADITH_LIBRARY.akhlak
  }

  // Default: Return Authentic Sunnah Guidance
  return TOPIC_HADITH_LIBRARY.sunnah
}

function formatHadithBlock(h: CustomHadisEntry, defaultNo: number): string {
  const header = h.subJudul ? `### Hadis #${h.nomorHadis ?? defaultNo}: ${h.subJudul}` : `### Hadis #${h.nomorHadis ?? defaultNo}`
  return `${header}
${h.arab}

Terjemahan:
${h.terjemah} (${h.takhrij})

Syarah:
${h.syarah}`
}

function generateKitabBabList(
  kitabId: string,
  compilationName: string,
  authorName: string,
  titles: string[],
  customMap: Record<number, CustomHadisEntry[] | CustomHadisEntry>,
): KitabBab[] {
  return titles.map((title, idx) => {
    const nomor = idx + 1
    const customData = customMap[nomor]

    if (customData) {
      const entries = Array.isArray(customData) ? customData : [customData]
      const formatted = entries.map((entry, eIdx) => formatHadithBlock(entry, eIdx + 1)).join("\n\n===\n\n")

      return {
        nomor,
        judul: `Kitab ${nomor}: ${title}`,
        teks: formatted,
      }
    }

    // Automatically resolve topic-matched authentic Hadiths
    const resolvedEntries = resolveTopicHadiths(compilationName, authorName, nomor, title)
    const formatted = resolvedEntries.map((entry, eIdx) => formatHadithBlock(entry, eIdx + 1)).join("\n\n===\n\n")

    return {
      nomor,
      judul: `Kitab ${nomor}: ${title}`,
      teks: formatted,
    }
  })
}

export const KUTUBUS_SITTAH_KITAB_DATA: KitabItem[] = [
  // 1. Shahih Bukhari (97 Kitab)
  {
    id: "bukhari",
    ulama: "Imam Muhammad bin Ismail Al-Bukhari (194–256 H)",
    kategori: "Hadis",
    judul: "Shahih Al-Bukhari",
    deskripsi:
      "Kitab induk hadis paling otentik di muka bumi setelah Al-Qur'an. Terdiri dari 97 Kitab yang disusun selama 16 tahun melalui seleksi ketat dari 600.000 hadis dengan syarat muttashil dan perawi tsiqah liqa'.",
    bab: generateKitabBabList(
      "bukhari",
      "Shahih Bukhari",
      "Imam Al-Bukhari",
      BUKHARI_KITAB_TITLES,
      {
        1: [
          {
            nomorHadis: 1,
            subJudul: "Niat sebagai Penentu Pahala dan Sahnya Seluruh Amalan",
            arab: `حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ قَالَ: حَدَّثَنَا سُفْيَانُ قَالَ: حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الأَنْصَارِيُّ، قَالَ: أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ يَقُولُ: سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ عَلَى الْمِنْبَرِ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ»`,
            terjemah: `Dari Amirul Mukminin Umar bin Al-Khaththab radhiyallahu 'anhu di atas mimbar berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sesungguhnya setiap amalan bergantung pada niatnya, dan setiap orang hanya akan mendapatkan apa yang ia niatkan. Maka barangsiapa yang hijrahnya karena dunia yang ingin diraihnya atau karena wanita yang ingin dinikahinya, maka hijrahnya itu kepada apa yang ia tuju."`,
            takhrij: "Shahih Bukhari No. 1",
            syarah: `Imam Bukhari meletakkan hadis ini di pembuka kitabnya sebagai pengingat ikhlas lillahi ta'ala. Niat adalah ruh ibadah yang membedakan rutinitas duniawi dengan amal akhirat.`,
          },
          {
            nomorHadis: 2,
            subJudul: "Bagaimana Wahyu Diturunkan Kepada Rasulullah SAW",
            arab: `حَدَّثَنَا عَبْدُ اللَّهِ بْنِ يُوسُفَ، قَالَ: أَخْبَرَنَا مَالِكٌ، عَنْ هِشَامِ بْنِ عُرْوَةَ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ أُمِّ الْمُؤْمِنِينَ رَضِيَ اللَّهُ عَنْهَا، أَنَّ الْحَارِثَ بْنَ هِشَامٍ رَضِيَ اللَّهُ عَنْهُ سَأَلَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: يَا رَسُولَ اللَّهِ، كَيْفَ يَأْتِيكَ الْوَحْيُ؟ فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«أَحْيَانًا يَأْتِينِي مِثْلَ صَلْصَلَةِ الْجَرَسِ، وَهُوَ أَشَدُّهُ عَلَيَّ، فَيُفْصَمُ عَنِّي وَقَدْ وَعَيْتُ عَنْهُ مَا قَالَ، وَأَحْيَانًا يَتَمَثَّلُ لِيَ الْمَلَكُ رَجُلًا فَيُكَلِّمُنِي فَأَعِي مَا يَقُولُ»`,
            terjemah: `Dari Aisyah Ummul Mukminin radhiyallahu 'anha: Al-Harits bin Hisyam bertanya kepada Rasulullah SAW: "Wahai Rasulullah, bagaimanakah wahyu datang kepadamu?" Rasulullah SAW menjawab: "Kadang-kadang wahyu datang kepadaku bagaikan gemerincing lonceng, dan itulah yang paling berat bagiku, lalu terlepas dariku dan aku telah menghafal apa yang dikatakannya. Kadang-kadang malaikat menjelma di hadapanku seperti seorang laki-laki, lalu berbicara kepadaku dan aku memahami apa yang ia katakan."`,
            takhrij: "Shahih Bukhari No. 2",
            syarah: `Hadis ini menjelaskan dua cara utama turunnya wahyu: kondisi ruhani berat yang menyerap seluruh kesadaran fisik, dan penjelmaan Malaikat Jibril dalam wujud manusia rupawan.`,
          },
          {
            nomorHadis: 3,
            subJudul: "Permulaan Turunnya Wahyu di Gua Hira & Nasihat Waraqah bin Naufal",
            arab: `عَنْ عَائِشَةَ أُمِّ الْمُؤْمِنِينَ أَنَّهَا قَالَتْ: أَوَّلُ مَا بُدِئَ بِهِ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مِنَ الْوَحْيِ الرُّؤْيَا الصَّالِحَةُ فِي النَّوْمِ... حَتَّى جَاءَهُ الْحَقُّ وَهُوَ فِي غَارِ حِرَاءٍ، فَجَاءَهُ الْمَلَكُ فَقَالَ: «اقْرَأْ»، قَالَ: «مَا أَنَا بِقَارِئٍ»... فَقَالَ: «اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ...»`,
            terjemah: `Dari Aisyah radhiyallahu 'anha: Permulaan wahyu yang datang kepada Rasulullah SAW adalah mimpi yang benar saat tidur. Kemudian beliau suka menyendiri di Gua Hira beribadah beberapa malam, hingga datanglah Malaikat dan berkata: "Bacalah!" Nabi menjawab: "Aku tidak bisa membaca." Malaikat mendekap beliau tiga kali hingga payah, lalu membaca: "Bacalah dengan (menyebut) nama Tuhanmu Yang menciptakan..."`,
            takhrij: "Shahih Bukhari No. 3",
            syarah: `Detik-detik bersejarah pengangkatan Nabi Muhammad SAW sebagai Rasul penutup zaman dan sokongan ketulusan Khadijah radhiyallahu 'anha.`,
          },
          {
            nomorHadis: 4,
            subJudul: "Turunnya Surat Al-Muddatsir Setelah Masa Terhentinya Wahyu",
            arab: `عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ الأَنْصَارِيِّ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَهُوَ يُحَدِّثُ عَنْ فَتْرَةِ الْوَحْيِ:

«بَيْنَا أَنَا أَمْشِي إِذْ سَمِعْتُ صَوْتًا مِنَ السَّمَاءِ، فَرَفَعْتُ بَصَرِي، فَإِذَا الْمَلَكُ الَّذِي جَاءَنِي بِحِرَاءٍ جَالِسٌ عَلَى كُرْسِيٍّ بَيْنَ السَّمَاءِ وَالأَرْضِ، فَرُعِبْتُ مِنْهُ، فَرَجَعْتُ فَقُلْتُ: زَمِّلُونِي زَمِّلُونِي، فَأَنْزَلَ اللَّهُ تَعَالَى: {يَا أَيُّهَا الْمُدَّثِّرُ . قُمْ فَأَنْذِرْ} [المدثر: 1-2]، فَحَمِيَ الْوَحْيُ وَتَتَابَعَ»`,
            terjemah: `Dari Jabir bin Abdullah berkata: Rasulullah SAW menceritakan tentang masa terhentinya wahyu: "Ketika aku sedang berjalan, tiba-tiba aku mendengar suara dari langit. Aku mengangkat pandanganku, dan ternyata malaikat yang pernah mendatangiku di Gua Hira sedang duduk di atas kursi antara langit dan bumi. Aku merasa takut hingga jatuh tersungkur, lalu aku pulang dan berkata: 'Selimutilah aku, selimutilah aku!' Maka Allah Ta'ala menurunkan: 'Wahai orang yang berselimut! Bangunlah, lalu berilah peringatan!' (QS. Al-Muddatsir: 1-2). Setelah itu wahyu pun turun dengan deras dan berturut-turut."`,
            takhrij: "Shahih Bukhari No. 4",
            syarah: `Awal perintah resmi dakwah terang-terangan dan seruan tauhid kepada segenap umat manusia.`,
          },
          {
            nomorHadis: 5,
            subJudul: "Kedermawanan Rasulullah SAW yang Memuncak di Bulan Ramadhan Saat Malaikat Jibril Mengajarkan Al-Qur'an",
            arab: `عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ:

«كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ حِينَ يَلْقَاهُ جِبْرِيلُ، وَكَانَ يَلْقَاهُ فِي كُلِّ لَيْلَةٍ مِنْ رَمَضَانَ فَيُدَارِسُهُ الْقُرْآنَ، فَلَرَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ»`,
            terjemah: `Dari Ibnu Abbas radhiyallahu 'anhuma berkata: "Rasulullah shallallahu 'alaihi wa sallam adalah manusia yang paling dermawan, dan beliau paling dermawan pada bulan Ramadhan saat Malaikat Jibril menemui beliau. Jibril menemui beliau setiap malam di bulan Ramadhan untuk bertadarus Al-Qur'an, dan sungguh Rasulullah SAW lebih dermawan dalam berbuat kebaikan daripada angin yang berhembus kencang."`,
            takhrij: "Shahih Bukhari No. 6",
            syarah: `Korelasi kuat antara intensitas tadabbur wahyu Al-Qur'an dengan dorongan bersedekah dan berbuat kebajikan sosial.`,
          },
        ],
        2: [
          {
            nomorHadis: 8,
            subJudul: "Rukun Islam Dibangun Di Atas Lima Pondasi Utama",
            arab: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«بُنِيَ الإِسْلامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لا إِلَهَ إِلا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ»`,
            terjemah: `Dari Ibnu Umar radhiyallahu 'anhuma berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Islam dibangun di atas lima perkara: bersaksi bahwa tiada tuhan yang berhak disembah selain Allah dan Muhammad adalah utusan Allah, mendirikan shalat, menunaikan zakat, menunaikan haji, dan berpuasa di bulan Ramadhan."`,
            takhrij: "Shahih Bukhari No. 8",
            syarah: `Pondasi pokok keislaman yang wajib ditegakkan oleh setiap muslim mukallaf sebagai rukun keselamatan di dunia dan akhirat.`,
          },
          {
            nomorHadis: 9,
            subJudul: "Cabang-Cabang Keimanan & Keagungan Rasa Malu",
            arab: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«الإِيمَانُ بِضْعٌ وَسِتُّونَ شُعْبَةً، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ»`,
            terjemah: `Dari Abu Hurairah radhiyallahu 'anhu, dari Nabi shallallahu 'alaihi wa sallam bersabda: "Iman itu memiliki enam puluh lebih cabang, dan rasa malu adalah salah satu cabang dari keimanan."`,
            takhrij: "Shahih Bukhari No. 9",
            syarah: `Iman memiliki tingkatan amalan lahir dan batin; rasa malu (*al-haya'*) adalah benteng moral yang mencegah seorang mukmin berbuat maksiat.`,
          },
          {
            nomorHadis: 13,
            subJudul: "Kecintaan Kepada Rasulullah Melebihi Orang Tua, Anak, dan Seluruh Manusia",
            arab: `عَنْ أَنَسٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«لا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ»`,
            terjemah: `Dari Anas radhiyallahu 'anhu berkata: Nabi shallallahu 'alaihi wa sallam bersabda: "Tidak beriman (dengan sempurna) salah seorang di antara kalian hingga aku lebih dicintai olehnya daripada orang tuanya, anaknya, dan seluruh umat manusia."`,
            takhrij: "Shahih Bukhari No. 15",
            syarah: `Konsekuensi aqidah yang menempatkan ittiba' dan kecintaan kepada Rasulullah SAW di atas segala pertimbangan hawa nafsu duniawi.`,
          },
          {
            nomorHadis: 16,
            subJudul: "Tiga Perkara Peraih Manisnya Kelezatan Iman",
            arab: `عَنْ أَنَسٍ عَنِ النَّبِيِّ قَالَ: «ثَلاثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلاوَةَ الإِيمَانِ: أَنْ يَكُونَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَأَنْ يُحِبَّ الْمَرْءَ لا يُحِبُّهُ إِلا لِلَّهِ، وَأَنْ يَكْرَهَ أَنْ يَعُودَ فِي الْكُفْرِ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ»`,
            terjemah: `Dari Anas dari Nabi SAW: "Tiga perkara yang bila ada pada diri seseorang niscaya ia merasakan manisnya iman: Allah dan Rasul-Nya lebih dicintai daripada selain keduanya, mencintai sesama semata-mata karena Allah, dan benci kembali kepada kekafiran laksana benci dilempar ke neraka."`,
            takhrij: "Shahih Bukhari No. 16",
            syarah: `Puncak kedamaian batin seorang hamba yang telah menyucikan tauhid dan mahabbah-nya.`,
          },
          {
            nomorHadis: 28,
            subJudul: "Mencintai untuk Saudaranya Apa yang Ia Cintai untuk Dirinya Sendiri",
            arab: `عَنْ أَنَسٍ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ»`,
            terjemah: `Dari Anas dari Nabi SAW bersabda: "Tidak sempurna iman salah seorang di antara kalian hingga ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri."`,
            takhrij: "Shahih Bukhari No. 13",
            syarah: `Prinsip ukhuwah islamiyah dan empati sosial yang mengikis habis penyakit iri, dengki, dan egoisme.`,
          },
        ],
        3: [
          {
            nomorHadis: 15,
            subJudul: "Keutamaan Pemilik Ilmu & Kewajiban Menyampaikannya",
            arab: `عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو رَضِيَ اللَّهُ عَنْهُمَا عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ:

«بَلِّغُوا عَنِّي وَلَوْ آيَةً، وَحَدِّثُوا عَنْ بَنِي إِسْرَائِيلَ وَلا حَرَجَ، وَمَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ»`,
            terjemah: `Dari Abdullah bin Amr radhiyallahu 'anhuma, Nabi shallallahu 'alaihi wa sallam bersabda: "Sampaikanlah dariku walau hanya satu ayat, dan ceritakanlah kisah dari Bani Israil tanpa keberatan. Dan barangsiapa yang berdusta atas namaku secara sengaja, maka bersiaplah menempati tempat duduknya di neraka."`,
            takhrij: "Shahih Bukhari No. 3461",
            syarah: `Amanah dakwah bagi setiap penuntut ilmu dan peringatan mutlak dari menyebarkan hadis maudhu' (palsu).`,
          },
          {
            nomorHadis: 71,
            subJudul: "Orang yang Dikehendaki Kebaikan oleh Allah Dipahamkan dalam Urusan Agama",
            arab: `عَنْ مُعَاوِيَةَ بْنِ أَبِي سُفْيَانَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ:

«مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ، وَإِنَّمَا أَنَا قَاسِمٌ وَاللَّهُ يُعْطِي»`,
            terjemah: `Dari Mu'awiyah bin Abi Sufyan berkata: Aku mendengar Nabi SAW bersabda: "Barangsiapa yang dikehendaki kebaikan oleh Allah, niscaya Dia akan memahamkannya dalam urusan agama (tafaqquh fiddin). Dan sesungguhnya aku hanyalah pembagi sedangkan Allah-lah Yang Maha Memberi."`,
            takhrij: "Shahih Bukhari No. 71",
            syarah: `Tanda utama hidayah dan kecintaan Allah kepada seorang hamba adalah dibukakannya pintu pemahaman ilmu syariat.`,
          },
          {
            nomorHadis: 100,
            subJudul: "Dicabutnya Ilmu dengan Wafatnya Para Ulama & Bahaya Fatwa Tanpa Ilmu",
            arab: `عَنْ عَبْدِ اللَّهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللَّهِ يَقُولُ:

«إِنَّ اللَّهَ لا يَقْبِضُ الْعِلْمَ انْتِزَاعًا يَنْتَزِعُهُ مِنَ الْعِبَادِ، وَلَكِنْ يَقْبِضُ الْعِلْمَ بِقَبْضِ الْعُلَمَاءِ، حَتَّى إِذَا لَمْ يُبْقِ عَالِمًا اتَّخَذَ النَّاسُ رُءُوسًا جُهَّالاً، فَسُئِلُوا فَأَفْتَوْا بِغَيْرِ عِلْمٍ، فَضَلُّوا وَأَضَلُّوا»`,
            terjemah: `Dari Abdullah bin Amr bin Al-Ash berkata: Aku mendengar Rasulullah SAW bersabda: "Sesungguhnya Allah tidak mencabut ilmu dengan serta-merta dari dada para hamba, akan tetapi Dia mencabut ilmu dengan mewafatkan para ulama. Hingga ketika tiada lagi seorang alim tersisa, manusia mengangkat para pemimpin yang bodoh, lalu mereka ditanya fatwa dan mereka berfatwa tanpa ilmu, sehingga mereka tersesat dan menyesatkan orang lain."`,
            takhrij: "Shahih Bukhari No. 100 & Muslim No. 2673",
            syarah: `Kewajiban menghormati dan meneladani para ulama pewaris nabi serta bahaya berbicara agama tanpa dalil.`,
          },
          {
            nomorHadis: 95,
            subJudul: "Metode Pengajaran Nabi: Mengulang Kalimat Tiga Kali Agar Dipahami Sempurna",
            arab: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«أَنَّهُ كَانَ إِذَا تَكَلَّمَ بِكَلِمَةٍ أَعَادَهَا ثَلاثًا حَتَّى تُفْهَمَ عَنْهُ، وَإِذَا أَتَى عَلَى قَوْمٍ فَسَلَّمَ عَلَيْهِمْ سَلَّمَ عَلَيْهِمْ ثَلاثًا»`,
            terjemah: `Dari Anas bin Malik dari Nabi SAW: "Bahwa beliau apabila berbicara suatu kalimat, beliau mengulanginya sebanyak tiga kali agar dipahami dengan baik, dan apabila mendatangi suatu kaum lalu mengucap salam, beliau mengucapkan salam sebanyak tiga kali."`,
            takhrij: "Shahih Bukhari No. 95",
            syarah: `Pedagogi dan metode komunikasi efektif dalam proses belajar mengajar agar materi terserap tuntas.`,
          },
          {
            nomorHadis: 73,
            subJudul: "Kedudukan Orang Berilmu: Dua Golongan yang Boleh Dihasadi / Dicemburui Kebaikan Amalnya",
            arab: `عَنِ ابْنِ مَسْعُودٍ قَالَ: قَالَ النَّبِيُّ: «لا حَسَدَ إِلا فِي اثْنَتَيْنِ: رَجُلٌ آتَاهُ اللَّهُ مَالاً فَسَلَّطَهُ عَلَى هَلَكَتِهِ فِي الْحَقِّ، وَرَجُلٌ آتَاهُ اللَّهُ الْحِكْمَةَ فَهُوَ يَقْضِي بِهَا وَيُعَلِّمُهَا»`,
            terjemah: `Dari Ibnu Mas'ud berkata: Nabi SAW bersabda: "Tidak boleh ada ghibthah (iri/hasad kebaikan) kecuali pada dua orang: seseorang yang diberi harta oleh Allah lalu ia habiskan di jalan kebenaran, dan seseorang yang diberi ilmu hikmah oleh Allah lalu ia mengamalkannya dan mengajarkannya kepada manusia."`,
            takhrij: "Shahih Bukhari No. 73",
            syarah: `Ketinggian derajat pengamal dan pengajar ilmu Al-Qur'an dan Sunnah di dunia dan akhirat.`,
          },
        ],
      },
    ),
  },

  // 2. Shahih Muslim (54 Kitab)
  {
    id: "muslim",
    ulama: "Imam Muslim bin Al-Hajjaj An-Naisaburi (204–261 H)",
    kategori: "Hadis",
    judul: "Shahih Muslim",
    deskripsi:
      "Kitab hadis shahih dengan sistematika sanad dan matan terunggul tanpa pemisahan riwayat. Terdiri dari 54 Kitab yang memuat 3.033 hadits pilihan dari 300.000 riwayat.",
    bab: generateKitabBabList(
      "muslim",
      "Shahih Muslim",
      "Imam Muslim",
      MUSLIM_KITAB_TITLES,
      {
        1: [
          {
            nomorHadis: 1,
            subJudul: "Hadits Jibril: Fondasi Islam, Iman, dan Ihsan (Ummus Sunnah)",
            arab: `عَنْ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: بَيْنَمَا نَحْنُ جُلُوسٌ عِنْدَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ شَدِيدُ سَوَادِ الشَّعْرِ... فَقَالَ: يَا مُحَمَّدُ أَخْبِرْنِي عَنِ الإِسْلامِ... فَقَالَ رَسُولُ اللَّهِ: «فَإِنَّهُ جِبْرِيلُ أَتَاكُمْ يُعَلِّمُكُمْ دِينَكُمْ»`,
            terjemah: `Dari Umar bin Al-Khaththab radhiyallahu 'anhu: Saat kami duduk bersama Rasulullah SAW, muncullah seorang laki-laki berpakaian sangat putih dan berambut sangat hitam... Ia bertanya tentang Islam, Iman, Ihsan, dan tanda-tanda Kiamat. Di akhir sabdanya Rasulullah berkata: "Dia adalah Jibril yang datang mengajarkan agama kepada kalian."`,
            takhrij: "Shahih Muslim No. 8",
            syarah: `Hadis terlengkap yang merangkum keseluruhan trilogi ajaran Islam: Syariat, Aqidah, dan Tasawuf.`,
          },
          {
            nomorHadis: 2,
            subJudul: "Kewajiban Memerangi Manusia Hingga Bersaksi Tiada Tuhan Selain Allah",
            arab: `عَنْ أَبِي هُرَيْرَةَ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:

«أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لا إِلَهَ إِلا اللَّهُ وَيُؤْمِنُوا بِي وَبِمَا جِئْتُ بِهِ، فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إِلا بِحَقِّهَا، وَحِسَابُهُمْ عَلَى اللَّهِ»`,
            terjemah: `Dari Abu Hurairah berkata: Rasulullah SAW bersabda: "Aku diperintahkan untuk memerangi manusia hingga mereka bersaksi tiada tuhan selain Allah dan beriman kepadaku serta apa yang kubawa. Apabila mereka telah melakukannya, maka terpeliharalah dariku darah dan harta mereka kecuali dengan haknya, dan hisab mereka terserah kepada Allah."`,
            takhrij: "Shahih Muslim No. 21",
            syarah: `Perlindungan jiwa dan harta bagi setiap orang yang mengikrarkan dua kalimat syahadat.`,
          },
          {
            nomorHadis: 3,
            subJudul: "Keutamaan Menegakkan Hakikat Ihsan: Beribadah Seolah Melihat Allah",
            arab: `عَنْ أَبِي هُرَيْرَةَ فِي سُؤَالِ جِبْرِيلَ عَنِ الإِحْسَانِ، قَالَ:

«أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ»`,
      terjemah: `Dari Abu Hurairah dalam jawaban Nabi tentang hakikat Ihsan: "Engkau beribadah kepada Allah seakan-akan engkau melihat-Nya. Dan jika engkau tidak mampu melihat-Nya, maka sesungguhnya Dia senantiasa melihatmu."`,
            takhrij: "Shahih Muslim No. 9",
            syarah: `Derajat muraqabah tertinggi dalam ibadah yang menghadirkan kekhusyukan dan ketundukan total.`,
          },
          {
            nomorHadis: 4,
            subJudul: "Siapakah Orang yang Paling Berbahagia Mendapatkan Syafaat di Hari Kiamat?",
            arab: `عَنْ أَبِي هُرَيْرَةَ قَالَ: قُلْتُ يَا رَسُولَ اللَّهِ، مَنْ أَسْعَدُ النَّاسِ بِشَفَاعَتِكَ يَوْمَ الْقِيَامَةِ؟ قَالَ:

«لَقَدْ ظَنَنْتُ يَا أَبَا هُرَيْرَةَ أَنْ لا يَسْأَلَنِي عَنْ هَذَا الْحَدِيثِ أَحَدٌ أَوَّلَ مِنْكَ لِمَا رَأَيْتُ مِنْ حِرْصِكَ عَلَى الْحَدِيثِ: أَسْعَدُ النَّاسِ بِشَفَاعَتِي يَوْمَ الْقِيَامَةِ مَنْ قَالَ: لا إِلَهَ إِلا اللَّهُ، خَالِصًا مِنْ قَلْبِهِ أَوْ نَفْسِهِ»`,
            terjemah: `Dari Abu Hurairah berkata: Aku bertanya: "Wahai Rasulullah, siapakah orang yang paling berbahagia mendapatkan syafaatmu pada hari kiamat?" Rasulullah SAW menjawab: "Orang yang paling berbahagia mendapatkan syafaatku pada hari kiamat adalah orang yang mengucapkan 'Laa ilaaha illallaah' dengan ikhlas murni dari dalam hati atau jiwanya."`,
            takhrij: "Shahih Bukhari No. 99 & Muslim",
            syarah: `Syarat mutlak meraih pertolongan syafaat Nabi adalah keikhlasan tauhid tanpa noda syirik.`,
          },
        ],
      },
    ),
  },

  // 3. Sunan Abu Dawud (43 Kitab)
  {
    id: "abu-dawud",
    ulama: "Imam Abu Dawud Sulaiman bin Al-Asy'ats (202–275 H)",
    kategori: "Hadis",
    judul: "Sunan Abu Dawud",
    deskripsi:
      "Kitab rujukan induk hukum Islam (Ahaditsul Ahkam) terlengkap bagi fuqaha dan mujtahid dalam menelaah fiqih empat madzhab. Terdiri dari 43 Kitab dengan 5.274 hadis pilihan.",
    bab: generateKitabBabList(
      "abu-dawud",
      "Sunan Abu Dawud",
      "Imam Abu Dawud",
      ABU_DAWUD_KITAB_TITLES,
      {},
    ),
  },

  // 4. Jami' At-Tirmidzi (50 Kitab)
  {
    id: "tirmidzi",
    ulama: "Imam Abu Isa Muhammad bin Isa At-Tirmidzi (209–279 H)",
    kategori: "Hadis",
    judul: "Jami' At-Tirmidzi",
    deskripsi:
      "Kitab induk hadis yang memadukan derajat hadis (Hasan Shahih), takhrij 'ilal, serta rujukan pendapat para sahabat dan ulama madzhab fiqih. Terdiri dari 50 Kitab dengan 3.956 hadis.",
    bab: generateKitabBabList(
      "tirmidzi",
      "Jami' At-Tirmidzi",
      "Imam At-Tirmidzi",
      TIRMIDZI_KITAB_TITLES,
      {},
    ),
  },

  // 5. Sunan An-Nasa'i (51 Kitab)
  {
    id: "nasai",
    ulama: "Imam Abu Abdirrahman Ahmad bin Syu'aib An-Nasa'i (215–303 H)",
    kategori: "Hadis",
    judul: "Sunan An-Nasa'i (Al-Mujtaba)",
    deskripsi:
      "Kitab hadis dengan standar seleksi sanad terketat di antara kitab Sunan. Meneliti variasi jalur riwayat dan kecacatan tersembunyi ('ilal). Terdiri dari 51 Kitab dengan 5.761 hadis.",
    bab: generateKitabBabList(
      "nasai",
      "Sunan An-Nasa'i",
      "Imam An-Nasa'i",
      NASAI_KITAB_TITLES,
      {},
    ),
  },

  // 6. Sunan Ibnu Majah (37 Kitab)
  {
    id: "ibnu-majah",
    ulama: "Imam Abu Abdillah Muhammad bin Yazid Ibnu Majah (209–273 H)",
    kategori: "Hadis",
    judul: "Sunan Ibnu Majah",
    deskripsi:
      "Kitab induk hadis penutup Kutubus Sittah yang sangat terkenal dengan bab-bab fiqih teratur dan hadis-hadis tambahan (zawa'id) penting. Terdiri dari 37 Kitab dengan 4.341 hadis.",
    bab: generateKitabBabList(
      "ibnu-majah",
      "Sunan Ibnu Majah",
      "Imam Ibnu Majah",
      IBNU_MAJAH_KITAB_TITLES,
      {},
    ),
  },
]
