import React from "react";     
import ReactDOM from "react-dom/client";      
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import authProviders  from "./Providers/authProviders";
import Orders from "./Components/Orders/Orders";
import PrivateRoutes from "./Components/Routes/PrivateRoutes";
import Profile from "./UserProfile/Profile";
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: "/orders",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <authProviders>
      <RouterProvider router={router} />
    </authProviders> */}
     <authProviders>
     <RouterProvider router={router} />
     </authProviders>
  </React.StrictMode>
);
