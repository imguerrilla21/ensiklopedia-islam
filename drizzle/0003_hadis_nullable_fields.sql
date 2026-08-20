PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_hadis` (
	`id` text PRIMARY KEY NOT NULL,
	`perawi` text NOT NULL,
	`tema` text,
	`judul` text,
	`arab` text NOT NULL,
	`terjemah` text NOT NULL,
	`takhrij` text NOT NULL,
	`derajat` text,
	`syarah` text
);
--> statement-breakpoint
INSERT INTO `__new_hadis`("id", "perawi", "tema", "judul", "arab", "terjemah", "takhrij", "derajat", "syarah") SELECT "id", "perawi", "tema", "judul", "arab", "terjemah", "takhrij", "derajat", "syarah" FROM `hadis`;--> statement-breakpoint
DROP TABLE `hadis`;--> statement-breakpoint
ALTER TABLE `__new_hadis` RENAME TO `hadis`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE INDEX `hadis_perawi_idx` ON `hadis` (`perawi`);--> statement-breakpoint
CREATE INDEX `hadis_tema_idx` ON `hadis` (`tema`);