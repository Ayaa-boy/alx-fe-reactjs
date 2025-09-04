import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function Home() {
  return <h1 className="p-6 text-2xl">Welcome to Home Page</h1>;
}

function Post({ id }) {
  return <h1 className="p-6 text-xl">Post ID: {id}</h1>;
}

// React Router v6 way of getting params
import { useParams } from "react-router-dom";
function PostWrapper() {
  const { id } = useParams();
  return <Post id={id} />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Profile Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/post/:id" element={<PostWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
