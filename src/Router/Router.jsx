import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home";
import OurMenu from "../Layout/OurMenu";
import OrderFood from "../Layout/OrderFood";
import Login from "../Layout/Login";
import Error from "../Error/Error";
import SignUp from "../Layout/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/our-menu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/order-food/:category',
          element: <OrderFood></OrderFood>
        },
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: "*",
      element: <Error></Error>
    }
]);

export default router;