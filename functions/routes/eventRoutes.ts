import { Router } from "express";
import { getScheduledEvents } from "../controllers/eventController.js";

const router = Router();

router.get("/scheduled_events", getScheduledEvents);

export { router as eventRoutes };
