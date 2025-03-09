import { Router } from "express";
import { getScheduledEvents } from "../controllers/events.js";

const router = Router();

router.get("/scheduled_events", getScheduledEvents);

export { router as eventRoutes };
