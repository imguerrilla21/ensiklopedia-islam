import { db } from "@/db"
import { surah, ayat, tafsir } from "@/db/schema"
import { eq } from "drizzle-orm"
import { surahIndex } from "@/lib/surah-index"
import type { SurahTafsir } from "@/lib/tafsir-data"
import {
  fetchSurahList,
  fetchSurahMeta,
  fetchSurahAyat,
} from "@/lib/ahmad-sanusi"

export type SyncResult = "synced" | "notfound" | "apifail"

export async function syncSurahList(): Promise<boolean> {
  const list = await fetchSurahList()
  if (!list) return false

  for (const s of list) {
    const slug = surahIndex.find((x) => x.nomor === s.id)?.id ?? `surah-${s.id}`
    await db
      .insert(surah)
      .values({
        nomor: s.id,
        id: slug,
        nama: s.name_arabic,
        namaLatin: s.name_id,
        arti: s.translate_id,
        jumlahAyat: s.num_ayah,
      })
      .onConflictDoUpdate({
        target: surah.id,
        set: {
          nomor: s.id,
          nama: s.name_arabic,
          namaLatin: s.name_id,
          arti: s.translate_id,
          jumlahAyat: s.num_ayah,
        },
      })
  }
  return true
}

export async function syncSurahDetail(id: string): Promise<SyncResult> {
  const meta = surahIndex.find((x) => x.id === id)
  if (!meta) return "notfound"

  const [metaApi, ayatList] = await Promise.all([
    fetchSurahMeta(meta.nomor),
    fetchSurahAyat(meta.nomor),
  ])
  if (!ayatList) return "apifail"

  const nama = metaApi?.name_arabic ?? ""

  await db.delete(ayat).where(eq(ayat.surahId, id))

  await db
    .insert(surah)
    .values({
      nomor: meta.nomor,
      id,
      nama,
      namaLatin: meta.namaLatin,
      arti: meta.arti,
      jumlahAyat: meta.jumlahAyat,
    })
    .onConflictDoUpdate({
      target: surah.id,
      set: {
        nomor: meta.nomor,
        namaLatin: meta.namaLatin,
        arti: meta.arti,
        jumlahAyat: meta.jumlahAyat,
      },
    })

  for (const a of ayatList) {
    const ayatId = crypto.randomUUID()
    await db.insert(ayat).values({
      id: ayatId,
      surahId: id,
      nomor: a.ayah_number,
      arab: a.arabic,
      terjemah: a.translation_id,
      juz: a.juz,
    })
    await db.insert(tafsir).values({
      id: crypto.randomUUID(),
      ayatId,
      surahId: id,
      ayatNomor: a.ayah_number,
      teks: a.tafsir_wajiz ?? "",
    })
  }

  return "synced"
}

export async function getSurahDetailFromDb(
  id: string,
): Promise<SurahTafsir | null> {
  try {
    let surahRow = await db.select().from(surah).where(eq(surah.id, id))
    let ayatRows = await db
      .select()
      .from(ayat)
      .where(eq(ayat.surahId, id))
      .orderBy(ayat.nomor)
    let tafsirRows = await db
      .select()
      .from(tafsir)
      .where(eq(tafsir.surahId, id))

    if (surahRow.length === 0 || ayatRows.length === 0) {
      const result = await syncSurahDetail(id)
      if (result === "synced") {
        surahRow = await db.select().from(surah).where(eq(surah.id, id))
        ayatRows = await db
          .select()
          .from(ayat)
          .where(eq(ayat.surahId, id))
          .orderBy(ayat.nomor)
        tafsirRows = await db
          .select()
          .from(tafsir)
          .where(eq(tafsir.surahId, id))
      }
    }

    if (surahRow.length === 0 || ayatRows.length === 0) {
      return null
    }

    const tafsirByNomor = new Map(
      tafsirRows.map((t) => [t.ayatNomor, t.teks]),
    )

    return {
      nomor: surahRow[0].nomor,
      id: surahRow[0].id,
      nama: surahRow[0].nama,
      namaLatin: surahRow[0].namaLatin,
      arti: surahRow[0].arti,
      jumlahAyat: surahRow[0].jumlahAyat,
      ayat: ayatRows.map((a) => ({
        nomor: a.nomor,
        arab: a.arab,
        terjemah: a.terjemah,
        juz: a.juz,
        tafsir: tafsirByNomor.get(a.nomor) ?? "",
      })),
    }
  } catch {
    return null
  }
}
