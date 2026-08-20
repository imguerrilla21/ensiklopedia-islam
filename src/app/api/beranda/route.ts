import type { NextRequest } from "next/server"
import { getBerandaData } from "@/lib/beranda"

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId") ?? undefined
  const data = await getBerandaData(userId)

  return Response.json(data, {
    headers: { "Cache-Control": "no-store" },
  })
}
