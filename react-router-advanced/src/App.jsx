// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Post from "./components/Post";

function Home() {
  return <h2>Home Page</h2>;
}

function Login() {
  return <h2>Login Page (simulate login here)</h2>;
}

function App() {
  // Simulate authentication (set to false to test redirect)
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        {/* Basic route */}
        <Route path="/" element={<Home />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected route for Profile with nested routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route for blog posts */}
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
