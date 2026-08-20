import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import Database from "better-sqlite3"
import * as schema from "./schema"

const globalForDb = globalThis as unknown as {
  db?: ReturnType<typeof drizzle<typeof schema>>
}

function init() {
  const sqlite = new Database(process.env.DATABASE_PATH ?? "ensiklopedi.db")
  const db = drizzle(sqlite, { schema })
  migrate(db, { migrationsFolder: "./drizzle" })
  return db
}

export const db = globalForDb.db ?? init()

if (process.env.NODE_ENV !== "production") globalForDb.db = db
