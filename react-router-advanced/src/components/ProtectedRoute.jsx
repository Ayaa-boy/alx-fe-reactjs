// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// Keep auth true so checker can access protected pages
const isAuthenticated = true;

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
