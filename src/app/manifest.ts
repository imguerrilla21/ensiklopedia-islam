import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hadits.id — Ensiklopedia Islam",
    short_name: "Hadits.id",
    description: "Tempat membaca dan mencari hadits, tafsir Al-Qur'an, dan kitab ulama klasik gratis tanpa berbayar.",
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
