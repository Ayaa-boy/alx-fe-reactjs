import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <nav className="flex space-x-4 mt-4">
        <Link to="details" className="text-blue-500 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-500 hover:underline">
          Profile Settings
        </Link>
      </nav>
      {/* Nested Routes Render Here */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
