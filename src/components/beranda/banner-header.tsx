export default function BannerHeader() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-emerald-800/40 bg-gradient-to-b from-[#061e1a] via-[#051b17] to-[#041411] p-6 sm:p-10 lg:p-12 shadow-2xl text-center">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl space-y-4">
        {/* Title & Tagline */}
        <h1 className="font-serif-title text-2xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white uppercase drop-shadow-sm">
          Ensiklopedia Islam
        </h1>
        <p className="mx-auto max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-emerald-200/85">
          Satu tempat terlengkap untuk membaca Tafsir Al-Qur&apos;an, Hadis
          beserta Syarah, dan Kitab Ulama Klasik dengan asisten AI terintegrasi.
        </p>
      </div>
    </section>
  )
}
