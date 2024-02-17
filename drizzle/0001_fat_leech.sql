CREATE TABLE `unsent` (
	`chat_id` integer,
	`sent_at` integer DEFAULT CURRENT_TIMESTAMP,
	`sender_at` integer,
	`reciever_at` integer,
	`message` text NOT NULL,
	FOREIGN KEY (`chat_id`) REFERENCES `chats`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`sender_at`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`reciever_at`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
