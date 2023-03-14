import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./main.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import UserPosts from "./pages/UserPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/createPost",
        element: <CreatePost />,
      },
      {
        path: "/createPost/:id",
        element: <CreatePost />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/user/:username",
        element: <UserPosts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
