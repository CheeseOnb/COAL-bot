import { REST, Routes } from "discord.js";
import { verseCommand } from "./commands/verse.js";
import { dailyVerseCommand } from "./commands/dailyverse.js";
import { logger } from "../lib/logger.js";

export async function registerCommands(): Promise<void> {
  const token = process.env["DISCORD_TOKEN"];
  const clientId = process.env["DISCORD_CLIENT_ID"];

  if (!token || !clientId) {
    throw new Error("DISCORD_TOKEN and DISCORD_CLIENT_ID must be set");
  }

  const commands = [verseCommand.toJSON(), dailyVerseCommand.toJSON()];

  const rest = new REST({ version: "10" }).setToken(token);

  logger.info("Registering slash commands globally...");
  await rest.put(Routes.applicationCommands(clientId), { body: commands });
  logger.info("Slash commands registered successfully");
}
