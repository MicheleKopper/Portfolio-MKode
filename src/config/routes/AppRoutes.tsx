import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ButtonAppBar } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ButtonAppBar />,
  },
  {
    path: "/*",
    element: <h1>Not found</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
