import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextType } from "../@types/auth";
import { AuthContext } from "../context/authContext";

import "./styles/Header.scss";

const Header: React.FC = () => {
  const { user, setUser } = useContext(AuthContext) as AuthContextType;

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
        <div className="container">
          <Link className="navbar-brand mr-4" to="/">
            Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggle"
            aria-controls="navbarToggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggle">
            <div className="navbar-nav mr-auto">
              <Link className="nav-item nav-link" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link" to="/about">
                About
              </Link>
            </div>
            <div className="navbar-nav">
              {user ? (
                <>
                  <Link className="nav-item nav-link" to="/createPost">
                    New Post
                  </Link>
                  <Link className="nav-item nav-link" to="/account">
                    Account
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    to="/"
                    onClick={() => {
                      setUser(null);
                      localStorage.removeItem("user");
                      sessionStorage.removeItem("user");
                    }}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-item nav-link" to="/login">
                    Login
                  </Link>
                  <Link className="nav-item nav-link" to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
