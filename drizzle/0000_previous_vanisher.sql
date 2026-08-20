CREATE TABLE `reading_progress` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`contentType` text NOT NULL,
	`contentId` text NOT NULL,
	`position` text NOT NULL,
	`lastReadAt` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `reading_progress_user_idx` ON `reading_progress` (`userId`);--> statement-breakpoint
CREATE INDEX `reading_progress_content_idx` ON `reading_progress` (`contentType`,`contentId`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`email` text NOT NULL,
	`createdAt` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);