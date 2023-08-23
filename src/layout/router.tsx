import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AppFrame from "./AppFrame";
import ErrorPage from "../pages/error/ErrorPage";
import Fragment from "../pages/components/Fragment";
import Profiler from "../pages/components/Profiler";
import Suspense from "../pages/components/Suspense";
import StrictMode from "../pages/components/StrictMode";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppFrame />,
      errorElement: <ErrorPage />,
      children: [
        { path: "*", element: <ErrorPage /> },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/components/fragment",
          element: <Fragment />,
        },
        {
          path: "/components/profiler",
          element: <Profiler />,
        },
        {
          path: "/components/strictmode",
          element: <StrictMode />,
        },
        {
          path: "/components/suspense",
          element: <Suspense />,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/nuclear-reactor/" }
);

export default router;
