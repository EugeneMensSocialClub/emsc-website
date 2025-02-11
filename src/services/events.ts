import { API_ROUTES } from "../config/api";

export const fetchScheduledEvents = async () => {
  console.log("Request URL:",`${API_ROUTES.BASE_URL}${API_ROUTES.EVENTS.SCHEDULED_EVENTS}`)
  const response = await fetch(
    `${API_ROUTES.BASE_URL}${API_ROUTES.EVENTS.SCHEDULED_EVENTS}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};