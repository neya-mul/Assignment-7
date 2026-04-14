import { createBrowserRouter } from "react-router";
import App from "../App";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import Homepage from "../Layouts/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>

      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>
      },
      {
        path: "/stats",
        element: <Stats></Stats>
      }
    ]
  },
]);
