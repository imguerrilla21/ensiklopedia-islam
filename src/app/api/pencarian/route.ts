import type { NextRequest } from "next/server"
import { searchContent, getSearchCategories } from "@/lib/search-service"

const ALLOWED_TYPES = ["all", "ayat", "hadis", "kitab"] as const
type QueryType = (typeof ALLOWED_TYPES)[number]

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams

  const q = params.get("q") ?? ""
  const category = params.get("category") ?? "all"

  const rawType = params.get("type") ?? "all"
  const type: QueryType = (ALLOWED_TYPES as readonly string[]).includes(rawType)
    ? (rawType as QueryType)
    : "all"

  const rawLimit = Number.parseInt(params.get("limit") ?? "", 10)
  const limit = Number.isFinite(rawLimit)
    ? Math.min(Math.max(rawLimit, 1), 100)
    : 50

  const [results, categories] = await Promise.all([
    searchContent({ q, type, category, limit }),
    getSearchCategories(),
  ])

  return Response.json(
    { count: results.length, results, categories },
    { headers: { "Cache-Control": "no-store" } },
  )
}

