import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import { StateContext } from "./store/StateContext";
import { Projects, Project } from "./pages";

import { loader as projectsLoader } from "./pages/Projects/Projects";
import { loader as projectLoader } from "./pages/Projects/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/projects" replace={true} />,
      },
      {
        path: "/projects",
        element: <Projects />,
        loader: projectsLoader,
      },
      {
        path: "/projects/:projectId",
        element: <Project />,
        loader: projectLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <RouterProvider router={router} />
    </StateContext>
  </React.StrictMode>
);
