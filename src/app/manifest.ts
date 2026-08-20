import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "almaktaba.id — Ensiklopedia Islam",
    short_name: "almaktaba.id",
    description: "Tempat membaca dan mencari Tafsir Al-Qur'an, Hadis beserta Syarah, dan Kitab Ulama Klasik gratis tanpa berbayar.",
    start_url: "/",
    display: "standalone",
    background_color: "#041310",
    theme_color: "#061e1a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
