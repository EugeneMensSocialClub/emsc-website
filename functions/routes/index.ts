import { onRequest } from "firebase-functions/v2/https";
import { getScheduledEventsHandler } from "../controllers/events";

export const getScheduledEvents = onRequest(getScheduledEventsHandler);
