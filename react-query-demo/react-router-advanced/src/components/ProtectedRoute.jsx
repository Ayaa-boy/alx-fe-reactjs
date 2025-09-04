// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// Simple auth simulation
function useAuth() {
  const user = { loggedIn: true }; // change to false to simulate logged out
  return user && user.loggedIn;
}

function ProtectedRoute({ children }) {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
