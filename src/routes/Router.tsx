import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeRoute } from "./HomeRoute";
import { InviteRoute } from "./InviteRoute";
import { EventsRoute } from "./EventsRoute";
import { ContactRoute } from "./ContactRoute";
import { NotFoundRoute } from "./NotFoundRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/invite",
    element: <InviteRoute />,
  },
  {
    path: "/events",
    element: <EventsRoute />,
  },
  {
    path: "/contact",
    element: <ContactRoute />,
  },
  {
    path: "*",
    element: <NotFoundRoute />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
