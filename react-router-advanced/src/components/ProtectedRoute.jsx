import React from "react";
import { Navigate } from "react-router-dom";

// Dummy authentication check
const isAuthenticated = false; // change to true to simulate logged-in user

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
