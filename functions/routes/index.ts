import { Router } from "express";
import { eventRoutes } from "./eventRoutes.js";

const router = Router();

router.use("/events", eventRoutes);

export { router as routes };
