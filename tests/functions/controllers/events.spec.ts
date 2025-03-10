import functionsTest from 'firebase-functions-test';
import { getScheduledEvents } from '../../../functions/controllers/events'; 
import { discordService } from '../../../functions/services/discordService';
import { Client } from 'discord.js';

// Mock Discord.js Client
jest.mock('discord.js', () => ({
  Client: jest.fn(() => ({
    login: jest.fn(),
    isReady: jest.fn().mockReturnValue(true),
    guilds: {
      fetch: jest.fn()
    }
  })),
  GatewayIntentBits: {
    Guilds: 1,
    GuildScheduledEvents: 2
  }
}));

// Initialize with project configuration
const testEnv = functionsTest({
  projectId: 'demo-project',
  databaseURL: 'https://demo-project.firebaseio.com',
  storageBucket: 'demo-project.appspot.com',
});

describe('getScheduledEvents', () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    // Mock the request and response objects
    req = {}; // You can add properties to this object if needed
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterAll(() => {
    testEnv.cleanup(); // Cleanup after tests
  });

  it('should return scheduled events', async () => {
    // Mock the discordService.getScheduledEvents method
    const mockEvents = [{ id: 1, name: 'Event 1' }, { id: 2, name: 'Event 2' }];
    jest.spyOn(discordService, 'getScheduledEvents').mockResolvedValue(mockEvents);

    await getScheduledEvents(req, res);

    expect(res.json).toHaveBeenCalledWith(mockEvents);
    expect(res.status).not.toHaveBeenCalled(); // Ensure status was not called
  });

  it('should handle errors', async () => {
    jest.spyOn(discordService, 'getScheduledEvents').mockRejectedValue(new Error('Some error'));

    await getScheduledEvents(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });

  it('should throw an error if guild ID is not configured', async () => {
    process.env.DISCORD_GUILD_ID = '';

    await getScheduledEvents(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });
});