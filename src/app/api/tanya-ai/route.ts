import type { NextRequest } from "next/server"
import { generateTanyaAiResponse } from "@/lib/tanya-ai-service"

async function handle(q: string) {
  const response = await generateTanyaAiResponse(q)
  return Response.json(response, {
    headers: { "Cache-Control": "no-store" },
  })
}

export async function GET(request: NextRequest) {
  return handle(request.nextUrl.searchParams.get("q") ?? "")
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}))
  const q = typeof body?.q === "string" ? body.q : ""
  return handle(q)
}
