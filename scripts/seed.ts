import { db } from "@/db"
import { kitab, kitabBab } from "@/db/schema"
import { eq } from "drizzle-orm"
import { syncSurahDetail } from "@/lib/tafsir-repo"
import { syncHadis } from "@/lib/hadis-repo"
import { syncKitabDetail } from "@/lib/kitab-repo"
import { surahTafsirList } from "@/lib/tafsir-data"
import { hadisList } from "@/lib/hadis-data"
import { kitabList } from "@/lib/kitab-data"
import { isApiConfigured } from "@/lib/ahmad-sanusi"

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

// App's mock kitab id -> real Ahmad Sanusi API slug (only those available in the API).
// The DB row is then renamed back to the app id so routing/links/search keep working.
const KITAB_MAP: Record<string, string> = {
  "riyadhush-shalihin": "riyadhus",
  "bulughul-maram": "bulughul",
  "al-hikam": "alhikam",
  "bidayatul-hidayah": "bidayatul",
  "safinatun-najah": "safinah",
}

async function main() {
  if (!isApiConfigured()) {
    console.error(
      "AHMAD_SANUSI_API_KEY tidak ditemukan. Set environment variable berikut lalu jalankan ulang:\n" +
        "  AHMAD_SANUSI_API_KEY=your-key  (opsional: AHMAD_SANUSI_API_URL)",
    )
    process.exit(1)
  }

  const surahIds = surahTafsirList.map((s) => s.id)
  console.log(
    `Memulai seed: ${surahIds.length} surah, ${hadisList.length} hadis, ${kitabList.length} kitab`,
  )

  for (const id of surahIds) {
    const result = await syncSurahDetail(id)
    console.log(`  surah ${id}: ${result}`)
    await sleep(300)
  }

  for (const h of hadisList) {
    const ok = await syncHadis(h.id)
    console.log(`  hadis ${h.id}: ${ok ? "ok" : "gagal"}`)
    await sleep(250)
  }

  for (const k of kitabList) {
    const realSlug = KITAB_MAP[k.id]
    if (!realSlug) {
      console.log(`  kitab ${k.id}: lewati (tidak tersedia di API)`)
      continue
    }
    try {
      // hapus sisa baris orphan (slug asli) dari run gagal sebelumnya
      await db.delete(kitabBab).where(eq(kitabBab.kitabId, realSlug))
      await db.delete(kitab).where(eq(kitab.id, realSlug))
      const ok = await syncKitabDetail(realSlug, k.id)
      console.log(`  kitab ${k.id} (${realSlug}): ${ok ? "ok" : "gagal"}`)
    } catch (err) {
      console.log(`  kitab ${k.id} (${realSlug}): ERROR ${String(err)}`)
    }
    await sleep(300)
  }

  console.log("Seed selesai.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
