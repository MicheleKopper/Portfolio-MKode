import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { ProjectA } from "../../pages/ProjectA";
import { ProjectB } from "../../pages/ProjectB";
import { ProjectC } from "../../pages/ProjectC";
import { ProjectD } from "../../pages/ProjectD";
import { ProjectF } from "../../pages/ProjectF";
import { ProjectE } from "../../pages/ProjectE";

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
    path: "/project03",
    element: <ProjectC />,
  },
  {
    path: "/project04",
    element: <ProjectD />,
  },
  {
    path: "/project05",
    element: <ProjectE />,
  },
  {
    path: "/project06",
    element: <ProjectF />,
  },
  {
    path: "/*",
    element: <h1>Not found</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
