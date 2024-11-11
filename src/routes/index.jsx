import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About/About";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import EstateDetails from "@/pages/EstateDetails/EstateDetails";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
        element: <EstateDetails />,
      },
    ],
  },
]);

export default router;
