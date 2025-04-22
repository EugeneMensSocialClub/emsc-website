import * as functions from "firebase-functions";
import { discordService } from "../services/discordService";
import { AppError } from "../errors/errorHandler";

export const getScheduledEventsHandler = functions.https.onRequest(async (req, res) => {
  try {
    const guildId = String(process.env.DISCORD_GUILD_ID);
    if (!guildId) {
      throw new AppError(500, "Guild ID is not configured");
    }

    const events = await discordService.getScheduledEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});