/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as functions from 'firebase-functions';
import { discordService } from './services/discordService.js';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const discord = discordService;

export const getScheduledEvents = functions.https.onRequest(async (request, response) => {
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
