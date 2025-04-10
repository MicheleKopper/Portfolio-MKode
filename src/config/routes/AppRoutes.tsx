import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { About } from "../../components/Home/About";
import { Project01 } from "../../components/Projects/Project01";
import { Project02 } from "../../components/Projects/Project02";
import { Project03 } from "../../components/Projects/Project03";
import { Project04 } from "../../components/Projects/Project04";
import { Project05 } from "../../components/Projects/Project05";
import { Project06 } from "../../components/Projects/Project06";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project01",
    element: <Project01 />,
  },
  {
    path: "/project02",
    element: <Project02 />,
  },
  {
    path: "/project03",
    element: <Project03 />,
  },
  {
    path: "/project04",
    element: <Project04 />,
  },
  {
    path: "/project05",
    element: <Project05 />,
  },
  {
    path: "/project06",
    element: <Project06 />,
  },
  {
    path: "/*",
    element: <h1>Not found</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
