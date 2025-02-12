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
    this.client.login(process.env.DISCORD_TOKEN);
    this.cache = new Map();
    this.CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  }

  async getScheduledEvents() {
    const cacheKey = "scheduledEvents";
    const cached = this.cache.get(cacheKey);
    const guildId = process.env.DISCORD_GUILD_ID;
    const guild = await this.client.guilds.fetch(guildId!);
    const events = await guild.scheduledEvents.fetch();
    const data = [...events.values()];
    
    try {
      if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
        return cached.data;
      }

      if (!this.client.isReady()) {
        throw new AppError(500, "Discord client not ready");
      }
      
      if (!guild) {
        throw new AppError(404, "Guild not found");
      }

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
