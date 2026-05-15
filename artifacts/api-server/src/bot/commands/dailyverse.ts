import {
  SlashCommandBuilder,
  type ChatInputCommandInteraction,
  PermissionFlagsBits,
} from "discord.js";
import { db } from "@workspace/db";
import { dailyVerseSchedules } from "@workspace/db/schema";
import { eq, and } from "drizzle-orm";
import { getAllCategories, getRandomVerse, CATEGORY_LABELS, type Category } from "../verses.js";
import { buildDailyVerseEmbed } from "../embed.js";
import { logger } from "../../lib/logger.js";

export const dailyVerseCommand = new SlashCommandBuilder()
  .setName("dailyverse")
  .setDescription("Manage your daily Bible verse subscription")
  .addSubcommand((sub) =>
    sub
      .setName("now")
      .setDescription("Get a random Bible verse right now"),
  )
  .addSubcommand((sub) =>
    sub
      .setName("set")
      .setDescription("Schedule a daily Bible verse to be sent to this channel")
      .addIntegerOption((opt) =>
        opt
          .setName("hour")
          .setDescription("Hour to send the verse (0–23, UTC)")
          .setRequired(true)
          .setMinValue(0)
          .setMaxValue(23),
      )
      .addIntegerOption((opt) =>
        opt
          .setName("minute")
          .setDescription("Minute to send the verse (0–59)")
          .setRequired(false)
          .setMinValue(0)
          .setMaxValue(59),
      ),
  )
  .addSubcommand((sub) =>
    sub
      .setName("stop")
      .setDescription("Stop the daily Bible verse for this channel"),
  )
  .addSubcommand((sub) =>
    sub
      .setName("status")
      .setDescription("Check the current daily verse schedule for this channel"),
  );

export async function handleDailyVerse(
  interaction: ChatInputCommandInteraction,
): Promise<void> {
  const sub = interaction.options.getSubcommand();

  if (sub === "now") {
    await handleNow(interaction);
  } else if (sub === "set") {
    await handleSet(interaction);
  } else if (sub === "stop") {
    await handleStop(interaction);
  } else if (sub === "status") {
    await handleStatus(interaction);
  }
}

async function handleNow(interaction: ChatInputCommandInteraction): Promise<void> {
  const all = getAllCategories();
  const category: Category = all[Math.floor(Math.random() * all.length)];
  const verse = getRandomVerse(category);
  const embed = buildDailyVerseEmbed(verse, category);
  await interaction.reply({ embeds: [embed] });
}

async function handleSet(interaction: ChatInputCommandInteraction): Promise<void> {
  if (!interaction.guildId) {
    await interaction.reply({
      content: "This command can only be used in a server.",
      ephemeral: true,
    });
    return;
  }

  const member = interaction.guild?.members.cache.get(interaction.user.id);
  const hasPermission = member?.permissions.has(PermissionFlagsBits.ManageChannels);
  if (!hasPermission) {
    await interaction.reply({
      content: "You need the **Manage Channels** permission to set up daily verses.",
      ephemeral: true,
    });
    return;
  }

  const hour = interaction.options.getInteger("hour", true);
  const minute = interaction.options.getInteger("minute") ?? 0;

  try {
    const existing = await db
      .select()
      .from(dailyVerseSchedules)
      .where(
        and(
          eq(dailyVerseSchedules.guildId, interaction.guildId),
          eq(dailyVerseSchedules.channelId, interaction.channelId),
        ),
      )
      .limit(1);

    if (existing.length > 0) {
      await db
        .update(dailyVerseSchedules)
        .set({ hour, minute, active: true, updatedAt: new Date() })
        .where(eq(dailyVerseSchedules.id, existing[0].id));
    } else {
      await db.insert(dailyVerseSchedules).values({
        guildId: interaction.guildId,
        channelId: interaction.channelId,
        userId: interaction.user.id,
        hour,
        minute,
        timezone: "UTC",
        active: true,
      });
    }

    const hourStr = hour.toString().padStart(2, "0");
    const minuteStr = minute.toString().padStart(2, "0");
    await interaction.reply({
      content: `✅ Daily Bible verse scheduled! A verse will be sent to this channel every day at **${hourStr}:${minuteStr} UTC**.`,
    });
  } catch (err) {
    logger.error({ err }, "Failed to save daily verse schedule");
    await interaction.reply({
      content: "Something went wrong saving the schedule. Please try again.",
      ephemeral: true,
    });
  }
}

async function handleStop(interaction: ChatInputCommandInteraction): Promise<void> {
  if (!interaction.guildId) {
    await interaction.reply({
      content: "This command can only be used in a server.",
      ephemeral: true,
    });
    return;
  }

  const member = interaction.guild?.members.cache.get(interaction.user.id);
  const hasPermission = member?.permissions.has(PermissionFlagsBits.ManageChannels);
  if (!hasPermission) {
    await interaction.reply({
      content: "You need the **Manage Channels** permission to stop daily verses.",
      ephemeral: true,
    });
    return;
  }

  try {
    const result = await db
      .update(dailyVerseSchedules)
      .set({ active: false, updatedAt: new Date() })
      .where(
        and(
          eq(dailyVerseSchedules.guildId, interaction.guildId),
          eq(dailyVerseSchedules.channelId, interaction.channelId),
          eq(dailyVerseSchedules.active, true),
        ),
      )
      .returning();

    if (result.length === 0) {
      await interaction.reply({
        content: "There is no active daily verse schedule for this channel.",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "🛑 Daily Bible verse has been stopped for this channel.",
      });
    }
  } catch (err) {
    logger.error({ err }, "Failed to stop daily verse schedule");
    await interaction.reply({
      content: "Something went wrong. Please try again.",
      ephemeral: true,
    });
  }
}

async function handleStatus(interaction: ChatInputCommandInteraction): Promise<void> {
  if (!interaction.guildId) {
    await interaction.reply({
      content: "This command can only be used in a server.",
      ephemeral: true,
    });
    return;
  }

  try {
    const schedule = await db
      .select()
      .from(dailyVerseSchedules)
      .where(
        and(
          eq(dailyVerseSchedules.guildId, interaction.guildId),
          eq(dailyVerseSchedules.channelId, interaction.channelId),
          eq(dailyVerseSchedules.active, true),
        ),
      )
      .limit(1);

    if (schedule.length === 0) {
      await interaction.reply({
        content: "No daily verse schedule is set for this channel. Use `/dailyverse set` to set one up!",
        ephemeral: true,
      });
    } else {
      const s = schedule[0];
      const hourStr = s.hour.toString().padStart(2, "0");
      const minuteStr = s.minute.toString().padStart(2, "0");
      await interaction.reply({
        content: `📅 Daily verse is **active** for this channel.\nTime: **${hourStr}:${minuteStr} UTC** every day.`,
        ephemeral: true,
      });
    }
  } catch (err) {
    logger.error({ err }, "Failed to fetch daily verse status");
    await interaction.reply({
      content: "Something went wrong. Please try again.",
      ephemeral: true,
    });
  }
}
