// src/components/Profile.jsx
import { Routes, Route, Link } from "react-router-dom";

function ProfileDetails() {
  return <h2>ProfileDetails Section</h2>;
}

function ProfileSettings() {
  return <h2>ProfileSettings Section</h2>;
}

function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <nav>
        <ul>
          <li>
            <Link to="details">Go to ProfileDetails</Link>
          </li>
          <li>
            <Link to="settings">Go to ProfileSettings</Link>
          </li>
        </ul>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
