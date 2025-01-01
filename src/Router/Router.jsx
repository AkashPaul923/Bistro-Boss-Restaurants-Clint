import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home";
import OurMenu from "../Layout/OurMenu";
import OrderFood from "../Layout/OrderFood";

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
          path: '/order-food',
          element: <OrderFood></OrderFood>
        },
      ]
    },
]);

export default router;