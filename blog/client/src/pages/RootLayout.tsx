import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/authContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getUserFromLocalStorage = () => {
  if (localStorage.getItem("user"))
    return JSON.parse(localStorage.getItem("user")!);
  return JSON.parse(sessionStorage.getItem("user")!);
};

const RootLayout = () => {
  const [user, setUser] = useState(getUserFromLocalStorage);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="rootLayout">
        <Header />
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8">
              <Outlet />
            </div>
            <Sidebar />
          </div>
        </main>
        <ToastContainer position="top-center" />
      </div>
    </AuthContext.Provider>
  );
};

export default RootLayout;
