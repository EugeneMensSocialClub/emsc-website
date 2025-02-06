/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import 'dotenv/config'
import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import { discordService } from './services/discordService.js';
import express from "express"

const app = express()
app.listen(() => {
  console.log('Listenging on port')
})



// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


export const getScheduledEvents = onRequest(async (request, response) => {
  const discord = discordService;

  try {
    // Fetch scheduled events from the Discord service
    const events = await discord.getScheduledEvents();
    // Send the events as a JSON response
    response.json(events);
  } catch (error) {
    console.error("Error fetching scheduled events:", error);
    response.status(500).json({ error: "Internal server error" });
  }
});
