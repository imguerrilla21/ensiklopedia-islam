CREATE TABLE `kitab` (
	`id` text PRIMARY KEY NOT NULL,
	`ulama` text NOT NULL,
	`kategori` text NOT NULL,
	`judul` text NOT NULL,
	`deskripsi` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `kitab_kategori_idx` ON `kitab` (`kategori`);--> statement-breakpoint
CREATE INDEX `kitab_ulama_idx` ON `kitab` (`ulama`);--> statement-breakpoint
CREATE TABLE `kitab_bab` (
	`id` text PRIMARY KEY NOT NULL,
	`kitab_id` text NOT NULL,
	`nomor` integer NOT NULL,
	`judul` text NOT NULL,
	`teks` text NOT NULL,
	FOREIGN KEY (`kitab_id`) REFERENCES `kitab`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `kitab_bab_kitab_idx` ON `kitab_bab` (`kitab_id`);--> statement-breakpoint
CREATE INDEX `kitab_bab_kitab_nomor_idx` ON `kitab_bab` (`kitab_id`,`nomor`);