import { createBrowserRouter } from "react-router";
import App from "../App";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";
import Homepage from "../Layouts/Homepage";
import Details from "../Pages/Details";
import Error from "../Pages/Error";
import { Suspense } from "react";
import { RotateLoader } from "react-spinners";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Suspense fallback={<div className="flex justify-center items-center py-60"><RotateLoader /></div>}>
          <Homepage></Homepage>
        </Suspense>

      },

      {
        path: "/details/:id",

        element: <Suspense fallback={<div className="flex justify-center items-center py-60"><RotateLoader /></div>}>
          <Details></Details>
        </Suspense>
      },
      {
        path: "/stats",
        element: <Suspense fallback={<div className="flex justify-center items-center py-60"><RotateLoader /></div>}>
          <Stats></Stats>
        </Suspense>
      },
      {
        path: "/timeline",
        element: <Suspense fallback={<div className="flex justify-center items-center py-60"><RotateLoader /></div>}>
          <Timeline></Timeline>
        </Suspense>
      }
    ],
    errorElement: <Error></Error>
  },
]);
