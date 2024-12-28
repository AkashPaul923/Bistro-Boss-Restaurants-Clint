import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home";

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
      ]
    },
]);

export default router;