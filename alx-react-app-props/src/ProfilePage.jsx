// src/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() { // No userData prop here
  return (
    <div style={{ border: '1px dashed grey', padding: '15px', margin: '15px' }}>
      <h3>Profile Page (No longer passing userData prop)</h3>
      <UserInfo /> {/* No userData prop passed here */}
    </div>
  );
}

export default ProfilePage;