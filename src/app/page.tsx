import BannerHeader from "@/components/beranda/banner-header"
import MenuUtama from "@/components/beranda/menu-utama"

export default function BerandaPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-8 px-4 py-8 sm:px-6 sm:py-10">
      {/* 1. Hero Header Banner */}
      <BannerHeader />

      {/* 2. Section Fitur & Pustaka Utama */}
      <MenuUtama />
    </main>
  )
}
