export type HadisItem = {
  id: string
  perawi: string
  tema: string
  judul: string
  arab: string
  terjemah: string
  takhrij: string
  derajat: string
  syarah: string
}

export const hadisList: HadisItem[] = [
  {
    id: "bukhari-1",
    perawi: "Bukhari",
    tema: "Iman",
    judul: "Amal bergantung pada niat",
    arab:
      "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    terjemah:
      "Sesungguhnya segala amalan itu tergantung pada niatnya, dan bagi setiap orang apa yang ia niatkan.",
    takhrij: "Shahih Bukhari, Kitab Permulaan Wahyu, hadis 1",
    derajat: "Shahih",
    syarah:
      "Hadis ini adalah pokok dalam agama (umat Islam sepakat bahwa ia adalah seperempat Islam). Niat menentukan sah tidaknya suatu amalan dan nilai pahalanya; amalan lahir yang sama bisa bernilai ibadah atau kebiasaan tergantung niat di dalam hati.",
  },
  {
    id: "muslim-1",
    perawi: "Muslim",
    tema: "Iman",
    judul: "Islam, Iman, dan Ihsan",
    arab:
      "الْإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
    terjemah:
      "Islam adalah engkau bersaksi bahwa tiada Tuhan selain Allah dan Muhammad adalah utusan Allah.",
    takhrij: "Shahih Muslim, Kitab Iman, hadis 8",
    derajat: "Shahih",
    syarah:
      "Hadis Jibril membagi agama menjadi tiga tingkatan: Islam (syariat lahir), Iman (keyakinan hati), dan Ihsan (ihsan beribadah seolah melihat Allah). Rukun Islam yang disebutkan mencakup syahadat, shalat, zakat, puasa, dan haji.",
  },
  {
    id: "bukhari-2",
    perawi: "Bukhari",
    tema: "Ibadah",
    judul: "Wajibnya shalat lima waktu",
    arab:
      "وَإِنَّ الصَّلَاةَ خَيْرُ مَوْضُوعٍ",
    terjemah:
      "Dan sesungguhnya shalat adalah sebaik-baiknya amalan yang ditetapkan.",
    takhrij: "Shahih Bukhari, Kitab Mawaquit ash-Shalat, hadis 527",
    derajat: "Shahih",
    syarah:
      "Dalam hadis Isra', ketika ditanya amalan apa yang paling dicintai Allah, Nabi menjawab shalat pada waktunya. Ini menunjukkan urgensi menjaga shalat lima waktu tepat pada waktunya.",
  },
  {
    id: "muslim-2",
    perawi: "Muslim",
    tema: "Ibadah",
    judul: "Keutamaan shalat berjamaah",
    arab:
      "صَلَاةُ الرَّجُلِ فِي الْجَمَاعَةِ تَزِيدُ عَلَى صَلَاتِهِ فِي بَيْتِهِ وَصَلَاتِهِ فِي سُوقِهِ خَمْسًا وَعِشْرِينَ دَرَجَةً",
    terjemah:
      "Shalat seseorang secara berjamaah lebih utama daripada shalatnya di rumah atau di pasarnya dengan dua puluh lima derajat.",
    takhrij: "Shahih Muslim, Kitab Masjid, hadis 649",
    derajat: "Shahih",
    syarah:
      "Shalat berjamaah memiliki keutamaan besar, yakni lipatan pahala dua puluh lima kali lipat dibanding shalat sendirian, serta memperkuat ukhuwah dan kerapian shaf kaum muslimin.",
  },
  {
    id: "abu-dawud-1",
    perawi: "Abu Dawud",
    tema: "Akhlak",
    judul: "Larangan menyakiti tetangga",
    arab:
      "مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ",
    terjemah:
      "Senantiasa Jibril berwasiat kepadaku tentang tetangga hingga aku menyangka ia akan menjadikannya pewaris.",
    takhrij: "Sunan Abu Dawud, Kitab Adab, hadis 5152",
    derajat: "Shahih",
    syarah:
      "Hadis ini menekankan hak tetangga yang sangat besar. Menyakiti tetangga termasuk dosa besar, sementara berbuat baik kepadanya adalah bagian dari sempurnanya iman.",
  },
  {
    id: "tirmidzi-1",
    perawi: "Tirmidzi",
    tema: "Akhlak",
    judul: "Berkata baik atau diam",
    arab:
      "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    terjemah:
      "Barangsiapa beriman kepada Allah dan hari akhir, hendaklah ia berkata yang baik atau diam.",
    takhrij: "Sunan Tirmidzi, Kitab Sifat Qiyamah, hadis 2518",
    derajat: "Shahih",
    syarah:
      "Menjaga lisan adalah cerminan iman. Diam dari perkataan yang tidak bermanfaat menyelamatkan seseorang dari dosa, sementara perkataan baik adalah sedekah.",
  },
  {
    id: "nasai-1",
    perawi: "An-Nasai",
    tema: "Thaharah",
    judul: "Keutamaan wudhu",
    arab:
      "إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ فَغَسَلَ وَجْهَهُ خَرَجَتْ مِنْ وَجْهِهِ",
    terjemah:
      "Apabila seorang hamba muslim berwudhu lalu membasuh wajahnya, keluarlah dari wajahnya (dosa-dosanya).",
    takhrij: "Sunan An-Nasai, Kitab Thaharah, hadis 148",
    derajat: "Shahih",
    syarah:
      "Wudhu bukan sekadar bersuci lahir, tetapi juga menghapus dosa-dosa kecil yang menyertai anggota wudhu. Kesungguhan dan khusyuk dalam wudhu mendatangkan cahaya di hari kiamat.",
  },
  {
    id: "ibnu-majah-1",
    perawi: "Ibnu Majah",
    tema: "Ilmu",
    judul: "Keutamaan menuntut ilmu",
    arab:
      "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    terjemah:
      "Barangsiapa menempuh jalan untuk mencari ilmu, Allah memudahkan baginya jalan menuju surga.",
    takhrij: "Sunan Ibnu Majah, Kitab Muqaddimah, hadis 224",
    derajat: "Shahih",
    syarah:
      "Menuntut ilmu syar'i adalah jalan ibadah yang agung. Ilmu menuntun pada amal saleh dan menjadi penerang dalam kehidupan serta di akhirat kelak.",
  },
  {
    id: "bukhari-3",
    perawi: "Bukhari",
    tema: "Akhlak",
    judul: "Larangan marah dan keutamaan menahan emosi",
    arab:
      "لَا تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ",
    terjemah:
      "Janganlah engkau marah. Beliau mengulanginya berkali-kali: Janganlah engkau marah.",
    takhrij: "Shahih Bukhari, Kitab Adab, hadis 6116",
    derajat: "Shahih",
    syarah:
      "Wasiat agung Nabi SAW kepada sahabat yang meminta nasihat ringkas. Menahan amarah adalah puncak kekuatan jiwa dan pangkal dari segala kebaikan akhlak.",
  },
  {
    id: "muslim-3",
    perawi: "Muslim",
    tema: "Muamalah",
    judul: "Membantu kesulitan sesama muslim",
    arab:
      "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    terjemah:
      "Barangsiapa melapangkan satu kesulitan duniawi dari seorang mukmin, Allah akan melapangkan darinya satu kesulitan di hari kiamat.",
    takhrij: "Shahih Muslim, Kitab Dzikir wa Doa, hadis 2699",
    derajat: "Shahih",
    syarah:
      "Prinsip solidaritas sosial dan tolong-menolong dalam Islam. Balasan dari Allah senantiasa setimpal dan jauh lebih agung daripada kebaikan yang dilakukan hamba.",
  },
  {
    id: "tirmidzi-2",
    perawi: "Tirmidzi",
    tema: "Akhlak",
    judul: "Mukmin yang paling sempurna imannya",
    arab:
      "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا",
    terjemah:
      "Orang mukmin yang paling sempurna imannya adalah yang paling baik akhlaknya.",
    takhrij: "Sunan Tirmidzi, Kitab Ridha', hadis 1162",
    derajat: "Hasan Shahih",
    syarah:
      "Kaitan erat antara kesempurnaan iman dengan keindahan budi pekerti. Iman bukan hanya ritual formalitas, melainkan terpancar dalam tutur kata santun dan perlakuan mulia kepada sesama.",
  },
  {
    id: "bukhari-4",
    perawi: "Bukhari",
    tema: "Ibadah",
    judul: "Amalan yang paling dicintai Allah",
    arab:
      "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    terjemah:
      "Amalan yang paling dicintai oleh Allah adalah yang dikerjakan secara terus-menerus (kontinu) walaupun sedikit.",
    takhrij: "Shahih Bukhari, Kitab Riqaq, hadis 6464",
    derajat: "Shahih",
    syarah:
      "Keutamaan istiqamah dalam beramal. Amalan rutin yang sedikit lebih mendatangkan berkah dan menjaga keterikatan hati dengan Allah dibanding amalan banyak namun terputus.",
  },
]

export function getHadis(id: string): HadisItem | undefined {
  return hadisList.find((h) => h.id === id)
}

export function getPerawiList(): string[] {
  return Array.from(new Set(hadisList.map((h) => h.perawi))).sort()
}

export function getTemaList(): string[] {
  return Array.from(new Set(hadisList.map((h) => h.tema))).sort()
}
