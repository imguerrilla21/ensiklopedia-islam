/* eslint-disable @typescript-eslint/no-require-imports */
const Database = require("better-sqlite3")
const path = require("path")
const fs = require("fs")

const dbPath = path.resolve(__dirname, "../ensiklopedi.db")
const db = new Database(dbPath)

// Pastikan WAL mode untuk kecepatan dan keandalan SQLite
db.pragma("journal_mode = WAL")
db.pragma("synchronous = NORMAL")

// Baca API Key dari argumen CLI, process.env, atau .env.local
let apiKey = process.argv[2] || process.env.AHMAD_SANUSI_API_KEY
const baseUrl =
  process.env.AHMAD_SANUSI_API_URL || "https://api.ahmadsanusi.com/v1"

if (!apiKey) {
  for (const envFile of [".env.local", ".env"]) {
    const envPath = path.resolve(__dirname, `../${envFile}`)
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8")
      const match = content.match(/AHMAD_SANUSI_API_KEY\s*=\s*["']?([^"'\r\n]+)/)
      if (match && match[1]) {
        apiKey = match[1].trim()
        break
      }
    }
  }
}

// Mapping slug dari API ke target app id agar URL yang sudah ada tetap konsisten
const SLUG_TO_APP_ID = {
  riyadhus: "riyadhush-shalihin",
  bulughul: "bulughul-maram",
  alhikam: "al-hikam",
  bidayatul: "bidayatul-hidayah",
  safinah: "safinatun-najah",
}

async function apiGet(endpoint) {
  if (!apiKey) return null
  const url = `${baseUrl}${endpoint}`
  try {
    const res = await fetch(url, {
      headers: {
        "X-API-Key": apiKey,
        Accept: "application/json",
      },
    })
    if (!res.ok) {
      if (res.status !== 404) {
        console.error(`  [HTTP ${res.status}] ${endpoint}`)
      }
      return null
    }
    const json = await res.json()
    return json.data || null
  } catch (err) {
    console.error(`  [Fetch Error] ${endpoint}: ${err.message}`)
    return null
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function runInjection() {
  console.log("==========================================================")
  console.log("  INJEKSI LENGKAP KITAB & BAB DARI AHMAD SANUSI API      ")
  console.log("==========================================================")
  console.log(`Endpoint Base : ${baseUrl}`)
  console.log(`API Key       : ${apiKey.slice(0, 8)}...${apiKey.slice(-4)}\n`)

  console.log("Mengambil daftar seluruh Kitab Ulama dari API...")
  const listData = await apiGet("/kitab")
  const kitabList = listData?.kitab || []

  if (kitabList.length === 0) {
    console.error("❌ Gagal mendapatkan daftar kitab dari API atau daftar kosong.")
    process.exit(1)
  }

  console.log(`✓ Ditemukan ${kitabList.length} Kitab Ulama di API.\n`)

  const insertKitabStmt = db.prepare(`
    INSERT INTO kitab (id, ulama, kategori, judul, deskripsi)
    VALUES (@id, @ulama, @kategori, @judul, @deskripsi)
    ON CONFLICT(id) DO UPDATE SET
      ulama = excluded.ulama,
      kategori = excluded.kategori,
      judul = excluded.judul,
      deskripsi = excluded.deskripsi
  `)

  const insertBabStmt = db.prepare(`
    INSERT INTO kitab_bab (id, kitab_id, nomor, judul, teks)
    VALUES (@id, @kitab_id, @nomor, @judul, @teks)
    ON CONFLICT(id) DO UPDATE SET
      judul = excluded.judul,
      teks = excluded.teks
  `)

  let totalBabSuccess = 0
  let totalBabFullText = 0

  for (let kIndex = 0; kIndex < kitabList.length; kIndex++) {
    const k = kitabList[kIndex]
    const targetId = SLUG_TO_APP_ID[k.slug] || k.slug

    console.log(
      `\n----------------------------------------------------------\n` +
      `[${kIndex + 1}/${kitabList.length}] Memproses Kitab: ${k.nama} (${targetId})`
    )

    // 1. Simpan/Update Kitab
    insertKitabStmt.run({
      id: targetId,
      ulama: k.pengarang || "Ulama Klasik",
      kategori: k.kategori || "Pustaka Islam",
      judul: k.nama,
      deskripsi: k.deskripsi || `Kitab ${k.nama} karangan ${k.pengarang}.`,
    })

    // 2. Ambil daftar Bab (dengan pagination)
    let page = 1
    const limit = 100
    const allBabMeta = []
    let hasMore = true

    while (hasMore) {
      const pageData = await apiGet(`/kitab/${k.slug}?page=${page}&limit=${limit}`)
      if (!pageData || !pageData.bab) break

      allBabMeta.push(...pageData.bab)
      const totalExpected = pageData.total || 0
      if (allBabMeta.length >= totalExpected || pageData.bab.length < limit) {
        hasMore = false
      } else {
        page++
        await sleep(100)
      }
    }

    console.log(`  -> Memuat ${allBabMeta.length} bab...`)

    // 3. Ambil isi lengkap setiap Bab via endpoint /kitab/{slug}/bab/{nomor}
    const BATCH_SIZE = 5
    let babCountForKitab = 0

    for (let i = 0; i < allBabMeta.length; i += BATCH_SIZE) {
      const batch = allBabMeta.slice(i, i + BATCH_SIZE)
      const promises = batch.map(async (b) => {
        const detail = await apiGet(`/kitab/${k.slug}/bab/${b.nomor}`)
        let fullTeks = ""

        if (detail) {
          const arab = detail.teks_arab?.trim() || ""
          const indo = detail.teks_indonesia?.trim() || ""
          const ket = detail.keterangan?.trim() || ""

          if (arab && indo) {
            fullTeks = `${arab}\n\n---\n\n${indo}`
            totalBabFullText++
          } else if (indo) {
            fullTeks = indo
            totalBabFullText++
          } else if (arab) {
            fullTeks = arab
            totalBabFullText++
          } else if (ket) {
            fullTeks = ket
          }
        }

        // Fallback deskripsi tematik jika detail teks kosong
        if (!fullTeks) {
          if (b.keterangan && b.keterangan.trim()) {
            fullTeks = b.keterangan.trim()
          } else {
            fullTeks = `Bab "${b.judul}" dalam Kitab ${k.nama} karya ${k.pengarang}. Membahas materi dan dalil seputar tema ${b.judul}.`
          }
        }

        return {
          id: `${targetId}-${b.nomor}`,
          kitab_id: targetId,
          nomor: b.nomor,
          judul: b.judul,
          teks: fullTeks,
        }
      })

      const resolved = await Promise.all(promises)
      db.transaction(() => {
        for (const item of resolved) {
          insertBabStmt.run(item)
          babCountForKitab++
          totalBabSuccess++
        }
      })()

      process.stdout.write(`\r  -> Menginjeksi bab: ${babCountForKitab}/${allBabMeta.length}`)
      await sleep(150)
    }

    console.log(`\n  ✓ Selesai injeksi ${babCountForKitab} bab untuk ${k.nama}.`)
  }

  console.log("\n==========================================================")
  console.log("            INJEKSI DATABASE SELESAI DENGAN SUKSES        ")
  console.log("==========================================================")
  console.log(`✓ Total Kitab Berhasil        : ${kitabList.length}`)
  console.log(`✓ Total Bab Disinkronkan      : ${totalBabSuccess}`)
  console.log(`✓ Total Bab dengan Teks Asli  : ${totalBabFullText}`)

  const summaryKitab = db.prepare(`SELECT id, judul, ulama, kategori FROM kitab ORDER BY judul`).all()
  const summaryBab = db.prepare(`SELECT kitab_id, count(*) as total_bab FROM kitab_bab GROUP BY kitab_id ORDER BY total_bab DESC`).all()

  console.log("\n--- Ringkasan Kitab di Database ---")
  console.table(summaryKitab)
  console.log("\n--- Ringkasan Bab per Kitab ---")
  console.table(summaryBab)
}

runInjection().catch((err) => {
  console.error("\n❌ Fatal Error:", err)
  process.exit(1)
})
