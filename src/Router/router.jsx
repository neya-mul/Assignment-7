import { createBrowserRouter } from "react-router";
import App from "../App";
import Timeline from "../Pages/Timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: "Home"

      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>
      }
    ]
  },
]);
