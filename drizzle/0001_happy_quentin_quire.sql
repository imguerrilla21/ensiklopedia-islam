CREATE TABLE `ayat` (
	`id` text PRIMARY KEY NOT NULL,
	`surahId` text NOT NULL,
	`nomor` integer NOT NULL,
	`arab` text NOT NULL,
	`terjemah` text NOT NULL,
	`juz` integer NOT NULL,
	FOREIGN KEY (`surahId`) REFERENCES `surah`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `ayat_surah_idx` ON `ayat` (`surahId`);--> statement-breakpoint
CREATE UNIQUE INDEX `ayat_surah_nomor_idx` ON `ayat` (`surahId`,`nomor`);--> statement-breakpoint
CREATE TABLE `surah` (
	`nomor` integer PRIMARY KEY NOT NULL,
	`id` text NOT NULL,
	`nama` text NOT NULL,
	`namaLatin` text NOT NULL,
	`arti` text NOT NULL,
	`jumlahAyat` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `surah_id_unique` ON `surah` (`id`);--> statement-breakpoint
CREATE TABLE `tafsir` (
	`id` text PRIMARY KEY NOT NULL,
	`ayatId` text NOT NULL,
	`surahId` text NOT NULL,
	`ayatNomor` integer NOT NULL,
	`teks` text NOT NULL,
	FOREIGN KEY (`ayatId`) REFERENCES `ayat`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`surahId`) REFERENCES `surah`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `tafsir_surah_idx` ON `tafsir` (`surahId`);--> statement-breakpoint
CREATE INDEX `tafsir_ayat_idx` ON `tafsir` (`ayatId`);