import { useEffect, useState } from "react";
import { fetchScheduledEvents } from "../services/events";

type Event = {
  id: string;
  guildId: string;
  channelId: string;
  creatorId: string;
  name: string;
  description: string;
  scheduledStartTimestamp: number;
  scheduledEndTimestamp: number;
};

export function EventsRoute() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventsData = await fetchScheduledEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    getEvents();
  }, []);
  return (
    <div>
      <h1>Scheduled Events</h1>
      <ul>
        {events.map((event: Event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}
