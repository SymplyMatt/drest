import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import WishList from "../pages/Wishlist";
import Cart from "../pages/Cart";
import CheckoutConfirm from "../pages/CheckoutConfirm";

const Routes = (): JSX.Element => {
  const pageRoutes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/wishlist",
      element: <WishList />
    },
    {
      path: "/product/:id", 
      element: <Product />
    },
    {
      path: "/cart", 
      element: <Cart />
    },
    {
      path: "/checkout/confirm", 
      element: <CheckoutConfirm />
    },
  ];

  const router = createBrowserRouter([...pageRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;