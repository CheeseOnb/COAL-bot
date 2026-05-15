import {
  Client,
  GatewayIntentBits,
  Events,
  type ChatInputCommandInteraction,
} from "discord.js";
import { registerCommands } from "./registerCommands.js";
import { handleVerse } from "./commands/verse.js";
import { handleDailyVerse } from "./commands/dailyverse.js";
import { startScheduler } from "./scheduler.js";
import { logger } from "../lib/logger.js";

export async function startBot(): Promise<void> {
  const token = process.env["DISCORD_TOKEN"];
  if (!token) {
    throw new Error("DISCORD_TOKEN environment variable is required");
  }

  await registerCommands();

  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  });

  client.once(Events.ClientReady, (c) => {
    logger.info({ tag: c.user.tag }, "Discord bot is ready");
    startScheduler(client);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const cmd = interaction as ChatInputCommandInteraction;

    try {
      if (cmd.commandName === "verse") {
        await handleVerse(cmd);
      } else if (cmd.commandName === "dailyverse") {
        await handleDailyVerse(cmd);
      }
    } catch (err) {
      logger.error({ err, command: cmd.commandName }, "Error handling command");
      const msg = {
        content: "Something went wrong handling that command. Please try again.",
        ephemeral: true,
      };
      if (cmd.replied || cmd.deferred) {
        await cmd.followUp(msg);
      } else {
        await cmd.reply(msg);
      }
    }
  });

  await client.login(token);
}
