import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import {   ProjectA } from "../../pages/ProjectA";
import { ProjectB } from "../../pages/ProjectB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project01",
    element: <ProjectA />,
  },
  {
    path: "/project02",
    element: <ProjectB />,
  },
  {
    path: "/*",
    element: <h1>Not found</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
