import { lazy } from "react";
import { RouteObject } from "react-router";

import { PublicRoutes } from "@/models";
import { Root } from "./pages/Root";

const AllPage = lazy(() => import("./pages/AllPage/AllPage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <AllPage />,
      },
      {
        path: PublicRoutes.ALL,
        element: <AllPage />,
      },
    ],
  },
];
