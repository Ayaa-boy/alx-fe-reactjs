import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/profile">Profile</Link> | <Link to="/post/1">Sample Post</Link>

      <button
        style={{ marginLeft: "20px" }}
        onClick={() => setIsAuthenticated(!isAuthenticated)}
      >
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </nav>
  );
}

export default Navbar;
