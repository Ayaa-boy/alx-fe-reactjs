// src/Header.jsx
import React from 'react';

/**
 * Header Component
 * This functional component displays the main header of the application.
 */
function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white text-center rounded-t-lg shadow-md">
      <h1 className="text-3xl font-bold font-inter">My Favorite Cities</h1>
    </header>
  );
}

export default Header;