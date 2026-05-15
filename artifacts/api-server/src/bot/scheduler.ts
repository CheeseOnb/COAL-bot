import cron from "node-cron";
import { type Client, TextChannel } from "discord.js";
import { db } from "@workspace/db";
import { dailyVerseSchedules } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import { getAllCategories, getRandomVerse, type Category } from "./verses.js";
import { buildDailyVerseEmbed } from "./embed.js";
import { logger } from "../lib/logger.js";

export function startScheduler(client: Client): void {
  // Run every minute, check which schedules should fire
  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const currentHour = now.getUTCHours();
    const currentMinute = now.getUTCMinutes();

    try {
      const schedules = await db
        .select()
        .from(dailyVerseSchedules)
        .where(eq(dailyVerseSchedules.active, true));

      for (const schedule of schedules) {
        if (schedule.hour === currentHour && schedule.minute === currentMinute) {
          try {
            const channel = await client.channels.fetch(schedule.channelId);
            if (!channel || !(channel instanceof TextChannel)) {
              logger.warn(
                { channelId: schedule.channelId },
                "Channel not found or not a text channel, disabling schedule",
              );
              await db
                .update(dailyVerseSchedules)
                .set({ active: false, updatedAt: new Date() })
                .where(eq(dailyVerseSchedules.id, schedule.id));
              continue;
            }

            const all = getAllCategories();
            const category: Category = all[Math.floor(Math.random() * all.length)];
            const verse = getRandomVerse(category);
            const embed = buildDailyVerseEmbed(verse, category);

            await channel.send({ embeds: [embed] });
            logger.info(
              { channelId: schedule.channelId, guildId: schedule.guildId },
              "Daily verse sent",
            );
          } catch (err) {
            logger.error(
              { err, channelId: schedule.channelId },
              "Failed to send daily verse to channel",
            );
          }
        }
      }
    } catch (err) {
      logger.error({ err }, "Failed to query daily verse schedules");
    }
  });

  logger.info("Daily verse scheduler started");
}
