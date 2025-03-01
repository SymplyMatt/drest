import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";

const Routes = (): JSX.Element => {
  const pageRoutes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/product/:id", 
      element: <Product />
    },
  ];

  const router = createBrowserRouter([...pageRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;