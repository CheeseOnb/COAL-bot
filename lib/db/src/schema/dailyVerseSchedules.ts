import { pgTable, serial, text, integer, boolean, timestamp } from "drizzle-orm/pg-core";

export const dailyVerseSchedules = pgTable("daily_verse_schedules", {
  id: serial("id").primaryKey(),
  guildId: text("guild_id").notNull(),
  channelId: text("channel_id").notNull(),
  userId: text("user_id").notNull(),
  hour: integer("hour").notNull(),
  minute: integer("minute").notNull(),
  timezone: text("timezone").notNull().default("UTC"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type DailyVerseSchedule = typeof dailyVerseSchedules.$inferSelect;
export type InsertDailyVerseSchedule = typeof dailyVerseSchedules.$inferInsert;
