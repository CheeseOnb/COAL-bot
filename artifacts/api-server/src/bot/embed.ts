import { EmbedBuilder } from "discord.js";
import type { VerseData } from "./verses.js";
import { CATEGORY_LABELS, type Category } from "./verses.js";

export function buildVerseEmbed(verse: VerseData, category: Category): EmbedBuilder {
  const label = CATEGORY_LABELS[category];

  return new EmbedBuilder()
    .setColor(0x4a90d9)
    .setTitle(`📖 ${verse.reference}`)
    .setDescription(`**Category:** ${label}`)
    .addFields(
      {
        name: "NLT — New Living Translation",
        value: `*"${verse.NLT}"*`,
      },
      {
        name: "KJV — King James Version",
        value: `*"${verse.KJV}"*`,
      },
    )
    .setFooter({ text: "COAL Bot • May His Word guide your day" })
    .setTimestamp();
}

export function buildDailyVerseEmbed(verse: VerseData, category: Category): EmbedBuilder {
  const label = CATEGORY_LABELS[category];

  return new EmbedBuilder()
    .setColor(0xf0a500)
    .setTitle(`🌅 Daily Bible Verse — ${verse.reference}`)
    .setDescription(`**Category:** ${label}`)
    .addFields(
      {
        name: "NLT — New Living Translation",
        value: `*"${verse.NLT}"*`,
      },
      {
        name: "KJV — King James Version",
        value: `*"${verse.KJV}"*`,
      },
    )
    .setFooter({ text: "COAL Bot • Delivered daily to strengthen your walk" })
    .setTimestamp();
}
