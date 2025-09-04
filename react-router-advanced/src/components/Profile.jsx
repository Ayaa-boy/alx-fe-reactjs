// src/components/Profile.jsx
import { Routes, Route, Link } from "react-router-dom";

function ProfileDetails() {
  return <h2>Profile Details</h2>;
}

function ProfileSettings() {
  return <h2>Profile Settings</h2>;
}

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
