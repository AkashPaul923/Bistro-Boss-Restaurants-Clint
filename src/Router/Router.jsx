import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Home";
import OurMenu from "../Layout/OurMenu";
import OrderFood from "../Layout/OrderFood";
import Login from "../Layout/Login";
import Error from "../Error/Error";
import SignUp from "../Layout/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoute from "../Auth/PrivateRoute";
import Cart from "../Layout/Dashboard/User/Cart";
import AllUser from "../Layout/Dashboard/Admin/AllUser";
import AddItem from "../Layout/Dashboard/Admin/AddItem";
import AdminRoute from "../Auth/AdminRoute";
import ManageItem from "../Layout/Dashboard/Admin/ManageItem";
import UpdateItem from "../Layout/Dashboard/Admin/UpdateItem";
import Payment from "../Layout/Dashboard/User/Payment";
import PaymentHistory from "../Layout/Dashboard/User/PaymentHistory";
import UserHome from "../Layout/Dashboard/User/UserHome";
import AdminHome from "../Layout/Dashboard/Admin/AdminHome";

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
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // user route
        {
          path: '/dashboard/user-home',
          element: <UserHome></UserHome>
        },
        {
          path: '/dashboard/cart',
          element: <Cart></Cart>
        },
        {
          path: '/dashboard/payment',
          element: <Payment></Payment>
        },
        {
          path: '/dashboard/payment-history',
          element: <PaymentHistory></PaymentHistory>
        },

        // Admin Route
        {
          path: '/dashboard/admin-home',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: '/dashboard/add-item',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: '/dashboard/add-item',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: '/dashboard/manage-item',
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path: '/dashboard/update-item/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
          
        },
        {
          path: '/dashboard/all-user',
          element: <AdminRoute><AllUser></AllUser></AdminRoute>
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