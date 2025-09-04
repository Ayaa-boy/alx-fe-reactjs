// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const isAuthenticated = true;

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
