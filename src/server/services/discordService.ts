import { Client, GatewayIntentBits } from "discord.js";
import { AppError } from "../middleware/errorHandler.js";

interface cacheEntry {
  data: any;
  timestamp: number;
}

class DiscordService {
  private client: Client;
  private cache: Map<string, cacheEntry>;
  private CACHE_DURATION: number;

  constructor() {
    this.client = new Client({ 
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildScheduledEvents,
      ],
    });
    this.cache = new Map();
    this.CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  }
 
  async init() {
    await this.client.login(process.env.DISCORD_TOKEN);
    this.client.on("ready", () => {
      console.log("Discord client ready");
    });
  }

  async getScheduledEvents() {
    const cacheKey = "scheduledEvents";
    const cached = this.cache.get(cacheKey);
    try {
      if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
        return cached.data;
      }

      if (!this.client.isReady()) {
        throw new AppError(500, "Discord client not ready");
      }
      
      const guild = await this.client.guilds.fetch(process.env.DISCORD_GUILD_ID!);
      if (!guild) {
        throw new AppError(404, "Guild not found");
      }

      const events = await guild.scheduledEvents.fetch();
      const data = [...events.values()];
      this.cache.set(cacheKey, { 
        data, timestamp: Date.now() 
      });

      return data;

    } catch (error) {
      // Convert unknown errors
      throw new AppError(500, 'Failed to fetch events');
    }
  }
  clearCache(): void {
    this.cache.clear();
  }
}

export const discordService = new DiscordService();
