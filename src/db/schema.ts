import {
  sqliteTable,
  text,
  integer,
  index,
  uniqueIndex,
} from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull().unique(),
  createdAt: text("createdAt")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
})

export const readingProgress = sqliteTable(
  "reading_progress",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    contentType: text("contentType", {
      enum: ["tafsir", "hadis", "kitab"],
    }).notNull(),
    contentId: text("contentId").notNull(),
    position: text("position").notNull(),
    lastReadAt: text("lastReadAt")
      .notNull()
      .$defaultFn(() => new Date().toISOString()),
  },
  (table) => [
    index("reading_progress_user_idx").on(table.userId),
    index("reading_progress_content_idx").on(
      table.contentType,
      table.contentId,
    ),
  ],
)

export const surah = sqliteTable("surah", {
  nomor: integer("nomor").primaryKey(),
  id: text("id").notNull().unique(),
  nama: text("nama").notNull(),
  namaLatin: text("namaLatin").notNull(),
  arti: text("arti").notNull(),
  jumlahAyat: integer("jumlahAyat").notNull(),
})

export const ayat = sqliteTable(
  "ayat",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    surahId: text("surahId")
      .notNull()
      .references(() => surah.id, { onDelete: "cascade" }),
    nomor: integer("nomor").notNull(),
    arab: text("arab").notNull(),
    terjemah: text("terjemah").notNull(),
    juz: integer("juz").notNull(),
  },
  (table) => [
    index("ayat_surah_idx").on(table.surahId),
    uniqueIndex("ayat_surah_nomor_idx").on(table.surahId, table.nomor),
  ],
)

export const tafsir = sqliteTable(
  "tafsir",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    ayatId: text("ayatId")
      .notNull()
      .references(() => ayat.id, { onDelete: "cascade" }),
    surahId: text("surahId")
      .notNull()
      .references(() => surah.id, { onDelete: "cascade" }),
    ayatNomor: integer("ayatNomor").notNull(),
    teks: text("teks").notNull(),
  },
  (table) => [
    index("tafsir_surah_idx").on(table.surahId),
    index("tafsir_ayat_idx").on(table.ayatId),
  ],
)

export const hadis = sqliteTable(
  "hadis",
  {
    id: text("id").primaryKey(),
    perawi: text("perawi").notNull(),
    tema: text("tema"),
    judul: text("judul"),
    arab: text("arab").notNull(),
    terjemah: text("terjemah").notNull(),
    takhrij: text("takhrij").notNull(),
    derajat: text("derajat"),
    syarah: text("syarah"),
  },
  (table) => [
    index("hadis_perawi_idx").on(table.perawi),
    index("hadis_tema_idx").on(table.tema),
  ],
)

export const kitab = sqliteTable(
  "kitab",
  {
    id: text("id").primaryKey(),
    ulama: text("ulama").notNull(),
    kategori: text("kategori").notNull(),
    judul: text("judul").notNull(),
    deskripsi: text("deskripsi").notNull(),
  },
  (table) => [
    index("kitab_kategori_idx").on(table.kategori),
    index("kitab_ulama_idx").on(table.ulama),
  ],
)

export const kitabBab = sqliteTable(
  "kitab_bab",
  {
    id: text("id").primaryKey(),
    kitabId: text("kitab_id")
      .notNull()
      .references(() => kitab.id, { onDelete: "cascade" }),
    nomor: integer("nomor").notNull(),
    judul: text("judul").notNull(),
    teks: text("teks").notNull(),
  },
  (table) => [
    index("kitab_bab_kitab_idx").on(table.kitabId),
    index("kitab_bab_kitab_nomor_idx").on(table.kitabId, table.nomor),
  ],
)
