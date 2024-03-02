import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Home, Products, Product } from "./pages";
import { Navbar, Footer } from "./components";
import "./App.sass";

const Layout = () => (
  <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
