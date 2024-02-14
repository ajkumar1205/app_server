import { sql } from "drizzle-orm";
import { integer, text, blob, sqliteTable, IntegerConfig } from "drizzle-orm/sqlite-core";
  
export const users = sqliteTable("users", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    mobile: integer("mobile", { mode: "number" }).notNull().unique(),
    userName: text("user_name").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp"}).default(sql`CURRENT_TIMESTAMP`),
    verified: integer("verified", { mode: "boolean" }).default(false),
    email: text("email").notNull().unique(),
    profilePic: blob("profile_pic"),
});

export const contacts = sqliteTable("contacts", {
    userId : integer("user_id").references(() => users.id),
    contactId : integer("contacts_id").references(() => users.id)
});

export const chats = sqliteTable("chats", {
    id : integer("id").notNull().primaryKey({autoIncrement: true}),
    userId : integer("sender_id").references(() => users.id),
    contactId : integer("reciever_id").references(() => users.id),
    startedAt : integer("started_at", { mode: "timestamp"}).default(sql`CURRENT_TIMESTAMP`),
});

export const messages = sqliteTable("messages", {
    chatId : integer("chat_id").references(() => chats.id),
    sentAt : integer("sent_at", { mode: "timestamp"}).default(sql`CURRENT_TIMESTAMP`),
    senderId : integer("sender_at").references(() => users.id),
    recieverId : integer("reciever_at").references(() => users.id),
    message : text("message").notNull()
});

export const otps = sqliteTable("otps", {
    userId : integer("user_id").unique().notNull().references(() => users.id),
    otp : integer("otp").notNull(),
    timeStamp : integer("time_stamp", { mode: "timestamp"}).default(sql`CURRENT_TIMESTAMP`)
});