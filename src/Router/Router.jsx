import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home";
import OurMenu from "../Layout/OurMenu";

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
      ]
    },
]);

export default router;