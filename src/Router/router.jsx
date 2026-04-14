import { createBrowserRouter } from "react-router";
import App from "../App";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import Homepage from "../Layouts/Homepage";
import Details from "../Pages/Details";

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
        path: "/details/:id",
        element: <Details></Details>
      },
      {
        path: "/stats",
        element: <Stats></Stats>
      }
    ]
  },
]);
