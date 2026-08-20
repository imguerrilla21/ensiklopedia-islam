const key = process.env.AHMAD_SANUSI_API_KEY
const BASE = "https://api.ahmadsanusi.com/v1"
;(async () => {
  const r = await fetch(BASE + "/kitab?page=1&limit=100", {
    headers: { "X-API-Key": key },
  })
  const j = await r.json()
  const list = j?.data?.kitab ?? []
  console.log("total:", j?.data?.total, "returned:", list.length)
  for (const k of list) console.log(`${k.slug} | ${k.nama}`)
})().catch((e) => console.log("ERR", e.message))
