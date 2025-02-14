import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const Routes = (): JSX.Element => {
  const pageRoutes = [
    {
      path: "/",
      element:<Home />
    },
  ];

  const router = createBrowserRouter([...pageRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
