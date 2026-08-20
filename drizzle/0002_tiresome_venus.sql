CREATE TABLE `hadis` (
	`id` text PRIMARY KEY NOT NULL,
	`perawi` text NOT NULL,
	`tema` text NOT NULL,
	`judul` text NOT NULL,
	`arab` text NOT NULL,
	`terjemah` text NOT NULL,
	`takhrij` text NOT NULL,
	`derajat` text NOT NULL,
	`syarah` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `hadis_perawi_idx` ON `hadis` (`perawi`);--> statement-breakpoint
CREATE INDEX `hadis_tema_idx` ON `hadis` (`tema`);