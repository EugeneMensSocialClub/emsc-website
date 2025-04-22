/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import { discordService } from './services/discordService.js';

const discord = discordService;


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((req, res) => {
  logger.info("Hello logs!", {structuredData: true});
  res.send("Hello from Firebase!");
});


export const getScheduledEvents = onRequest(async (req, res) => {
  {cors: true}
    try {
      // Fetch scheduled events from the Discord service
      const events = await discord.getScheduledEvents();
      // Send the events as a JSON response
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
});
