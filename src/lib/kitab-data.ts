import { KUTUBUS_SITTAH_KITAB_DATA } from "@/lib/kutubus-sittah-data"
import { TURATS_EXPANDED_KITAB_DATA } from "@/lib/turats-kitab-data"

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
export const kitabList: KitabItem[] = TURATS_EXPANDED_KITAB_DATA

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
