import { db } from "@/db"
import { hadis } from "@/db/schema"
import { fetchHadisDetail } from "@/lib/ahmad-sanusi"

const KITAB_MAP: Record<string, { slug: string; perawi: string }> = {
  bukhari: { slug: "shahih_bukhari", perawi: "Bukhari" },
  muslim: { slug: "shahih_muslim", perawi: "Muslim" },
  "abu-dawud": { slug: "sunan_abu_daud", perawi: "Abu Daud" },
  tirmidzi: { slug: "sunan_tirmidzi", perawi: "Tirmidzi" },
  nasai: { slug: "sunan_nasai", perawi: "Nasai" },
  "ibnu-majah": { slug: "sunan_ibnu_majah", perawi: "Ibnu Majah" },
}

export function parseHadisId(
  id: string,
): { kitabPart: string; nomor: number } | null {
  const idx = id.lastIndexOf("-")
  if (idx < 0) return null
  const kitabPart = id.slice(0, idx)
  const nomor = Number.parseInt(id.slice(idx + 1), 10)
  if (!KITAB_MAP[kitabPart] || !Number.isFinite(nomor)) return null
  return { kitabPart, nomor }
}

export async function syncHadis(id: string): Promise<boolean> {
  const parsed = parseHadisId(id)
  if (!parsed) return false
  const map = KITAB_MAP[parsed.kitabPart]
  const detail = await fetchHadisDetail(map.slug, parsed.nomor)
  if (!detail) return false

  await db
    .insert(hadis)
    .values({
      id,
      perawi: map.perawi,
      tema: null,
      judul: null,
      arab: detail.arab,
      terjemah: detail.terjemah,
      takhrij: `${map.perawi}, hadis ${parsed.nomor}`,
      derajat: map.slug.startsWith("shahih_") ? "Shahih" : null,
      syarah: null,
    })
    .onConflictDoUpdate({
      target: hadis.id,
      set: {
        perawi: map.perawi,
        arab: detail.arab,
        terjemah: detail.terjemah,
        takhrij: `${map.perawi}, hadis ${parsed.nomor}`,
        derajat: map.slug.startsWith("shahih_") ? "Shahih" : null,
      },
    })
  return true
}
