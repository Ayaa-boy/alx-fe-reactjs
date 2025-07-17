// src/ProfilePage.jsx (Refactored)
import React from 'react';
import UserInfo from './UserInfo';

// ProfilePage no longer needs to accept userData as a prop
function ProfilePage() {
  return (
    <div style={{ border: '1px dashed grey', padding: '15px', margin: '15px' }}>
      <h3>Profile Page (No longer passing userData prop)</h3>
      {/* UserInfo no longer needs userData prop */}
      <UserInfo />
    </div>
  );
}

export default ProfilePage;