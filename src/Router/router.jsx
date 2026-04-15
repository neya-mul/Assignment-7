import { createBrowserRouter } from "react-router";
import App from "../App";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import Homepage from "../Layouts/Homepage";
import Details from "../Pages/Details";
import Error from "../Pages/Error";

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
        path: "/details/:id",
        element: <Details></Details>
      },
      {
        path: "/stats",
        element: <Timeline></Timeline>
      },
      {
        path: "/timeline",
        element: <Stats></Stats>
      }
    ],
    errorElement:<Error></Error>
  },
]);
