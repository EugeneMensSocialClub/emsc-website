import 'dotenv/config';
import { Client, GatewayIntentBits } from "discord.js";
import { AppError } from "../middleware/errorHandler.js";
/**
 * A service for interacting with Discord to manage and retrieve guild events.
 */
class DiscordService {
    /**
     * Creates an instance of DiscordService.
     * The Discord client instance used to interact with the API.
     */
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
    /**
     * Initializes the Discord service, performing any necessary setup.
     *
     * A promise that resolves when initialization is complete.
     * Throws an error if initialization fails.
     */
    async init() {
        await this.client.login(process.env.DISCORD_TOKEN);
        this.client.on("ready", () => {
            console.log("Discord client ready");
        });
    }
    /**
     * Fetches scheduled events from a Discord guild.
     *
     * A promise that resolves to an array of scheduled events.
     * Throws an error if the guild ID is not configured
     * or if the fetch operation fails.
     */
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
            const guild = await this.client.guilds.fetch(process.env.DISCORD_GUILD_ID);
            if (!guild) {
                throw new AppError(404, "Guild not found");
            }
            const events = await guild.scheduledEvents.fetch();
            const data = [...events.values()];
            this.cache.set(cacheKey, {
                data, timestamp: Date.now(),
            });
            return data;
            /**
             * Convertes unknown errors
             */
        }
        catch {
            throw new AppError(500, "Failed to fetch events");
        }
    }
    /**
     *
     * clear cache if timeframe is exceeded.
     */
    clearCache() {
        this.cache.clear();
    }
}
export const discordService = new DiscordService();
//# sourceMappingURL=discordService.js.map