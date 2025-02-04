/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { discordService } from "../services/discordService";
import { AppError } from "../middleware/errorHandler.js";
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
export const helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
export const getScheduledEvents = onRequest(async (request, response) => {
    try {
        const guildId = String(process.env.DISCORD_GUILD_ID);
        if (!guildId) {
            throw new AppError(500, "Guild ID is not configured");
        }
        const events = await discordService.getScheduledEvents();
        response.json(events);
    }
    catch (error) {
        console.error("Error fetching scheduled events:", error);
        response.status(500).json({ error: "Internal server error" });
    }
});
//# sourceMappingURL=index.js.map