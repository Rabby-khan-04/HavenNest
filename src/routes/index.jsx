import MainLayout from "@/layouts/MainLayout";
import HeaderTransparentLayout from "@/layouts/HeaderTransparentLayout";
import About from "@/pages/About/About";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import EstateDetails from "@/pages/EstateDetails/EstateDetails";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";
import ProcetedRoutes from "./ProcetedRoutes";
import Account from "@/pages/Account/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderTransparentLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "details/:estateId",
        element: (
          <ProcetedRoutes>
            <EstateDetails />
          </ProcetedRoutes>
        ),
      },
      {
        path: "account",
        element: (
          <ProcetedRoutes>
            <Account />
          </ProcetedRoutes>
        ),
      },
    ],
  },
]);

export default router;
