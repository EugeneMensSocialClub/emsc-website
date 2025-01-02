import { config } from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: resolve(__dirname, ".env") });

import express from "express";
import { routes } from "./routes/index.js";
import { corsMiddleware } from "./middleware/cors.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { discordService } from "./services/discordService.js";

const app = express();
const PORT = 3000;

discordService.init().then(() => {
  app.use(corsMiddleware);
  app.use('/api', routes);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error: any) => {
  console.error("Error initializing Discord service:", error);
  process.exit(1);
});

export { app };
