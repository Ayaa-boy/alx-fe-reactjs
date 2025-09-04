import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex space-x-6">
      <Link to="/" className="hover:text-yellow-400">
        Home
      </Link>
      <Link to="/profile" className="hover:text-yellow-400">
        Profile
      </Link>
      <Link to="/post/123" className="hover:text-yellow-400">
        Dynamic Post
      </Link>
    </nav>
  );
}

export default Navbar;
