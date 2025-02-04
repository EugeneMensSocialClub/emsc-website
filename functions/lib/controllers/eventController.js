import { discordService } from "../services/discordService.js";
import { AppError } from "../middleware/errorHandler.js";
export const getScheduledEvents = async (_req, res) => {
    try {
        const guildId = String(process.env.DISCORD_GUILD_ID);
        if (!guildId) {
            throw new AppError(500, "Guild ID is not configured");
        }
        const events = await discordService.getScheduledEvents();
        res.json(events);
    }
    catch (error) {
        console.error("Error fetching scheduled events:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
//# sourceMappingURL=eventController.js.map