import Link from "next/link"

const POPULAR_KITAB = [
  {
    id: "riyadhush-shalihin",
    judul: "Riyadhus Shalihin",
    arabic: "رياض الصالحين",
    ulama: "Imam An-Nawawi",
    kategori: "Hadis & Akhlak",
    stats: "1.221 Hadis",
  },
  {
    id: "bulughul-maram",
    judul: "Bulughul Maram",
    arabic: "بلوغ المرام",
    ulama: "Ibnu Hajar Al-Asqalani",
    kategori: "Hadis & Fiqih",
    stats: "1.596 Hadis",
  },
  {
    id: "al-hikam",
    judul: "Al-Hikam",
    arabic: "الحكم العطائية",
    ulama: "Ibnu Athaillah",
    kategori: "Tasawuf",
    stats: "264 Hikmah",
  },
  {
    id: "bidayatul-hidayah",
    judul: "Bidayatul Hidayah",
    arabic: "بداية الهداية",
    ulama: "Imam Al-Ghazali",
    kategori: "Tasawuf & Adab",
    stats: "Adab Harian",
  },
  {
    id: "safinatun-najah",
    judul: "Safinah An-Najah",
    arabic: "سفينة النجاة",
    ulama: "Syaikh Salim bin Samir",
    kategori: "Fiqih Madzhab",
    stats: "Matan Fiqih",
  },
  {
    id: "bukhari",
    judul: "Shahih Bukhari",
    arabic: "صحيح البخاري",
    ulama: "Imam Al-Bukhari",
    kategori: "Hadits Shahih",
    stats: "7.563 Hadis",
  },
]

export default function KitabPopuler() {
  return (
    <section aria-labelledby="kitab-populer" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 id="kitab-populer" className="text-lg font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">📖</span>
          <span>Pustaka Kitab Pilihan</span>
        </h2>
        <Link
          href="/kitab"
          className="text-xs font-semibold text-emerald-400 hover:text-amber-300 transition"
        >
          Lihat Semua Kitab ➔
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POPULAR_KITAB.map((k) => (
          <Link
            key={k.id}
            href={`/kitab/${k.id}`}
            className="group relative flex flex-col justify-between rounded-2xl border border-emerald-800/40 bg-[#061e1a] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#082621]"
          >
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-emerald-800/30 pb-3">
                <span className="rounded-md border border-emerald-700/50 bg-[#041411] px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                  {k.kategori}
                </span>
                <span className="text-xs font-semibold text-emerald-400/80">
                  {k.stats}
                </span>
              </div>

              <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif-title text-base font-bold text-white group-hover:text-amber-300 transition">
                    {k.judul}
                  </h3>
                  <p className="mt-1 text-xs text-amber-400/90 font-medium">
                    {k.ulama}
                  </p>
                </div>
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-xl font-bold text-amber-400 text-right drop-shadow-sm"
                >
                  {k.arabic}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-emerald-800/30 pt-3 text-xs font-semibold text-emerald-400 group-hover:text-amber-300">
              <span>Buka Pembacaan</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ➔
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
