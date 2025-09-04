// src/components/Profile.jsx
import { Link, Routes, Route } from "react-router-dom";

function ProfileDetails() {
  return <h3>ProfileDetails Component</h3>;
}

function ProfileSettings() {
  return <h3>ProfileSettings Component</h3>;
}

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">ProfileDetails</Link>
          </li>
          <li>
            <Link to="settings">ProfileSettings</Link>
          </li>
        </ul>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
