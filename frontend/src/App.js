import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import EventDetailPage, {
  loader as EventDetailLoder,
} from "./pages/EventDetail";
import EventsPage, { loader as EventsLoder } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import {action as manipulateEventAction } from "./components/EventForm"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,

        children: [
          { index: true, element: <EventsPage />, loader: EventsLoder },
          {
            path: ":eventId",
            loader: EventDetailLoder,
            id: "event-details",
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage />,action:manipulateEventAction },
            ],
          },

          { path: "new", element: <NewEventPage />, action:manipulateEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
