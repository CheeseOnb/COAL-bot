import {
  SlashCommandBuilder,
  type ChatInputCommandInteraction,
} from "discord.js";
import {
  verses,
  CATEGORY_LABELS,
  getRandomVerse,
  getAllCategories,
  type Category,
} from "../verses.js";
import { buildVerseEmbed } from "../embed.js";

export const verseCommand = new SlashCommandBuilder()
  .setName("verse")
  .setDescription("Get a Bible verse from a specific category or a random one")
  .addStringOption((option) =>
    option
      .setName("category")
      .setDescription("Choose a category")
      .setRequired(false)
      .addChoices(
        ...getAllCategories().map((cat) => ({
          name: CATEGORY_LABELS[cat],
          value: cat,
        })),
      ),
  );

export async function handleVerse(
  interaction: ChatInputCommandInteraction,
): Promise<void> {
  const categoryInput = interaction.options.getString("category");

  let category: Category;
  if (categoryInput && categoryInput in verses) {
    category = categoryInput as Category;
  } else {
    const all = getAllCategories();
    category = all[Math.floor(Math.random() * all.length)];
  }

  const verse = getRandomVerse(category);
  const embed = buildVerseEmbed(verse, category);

  await interaction.reply({ embeds: [embed] });
}
