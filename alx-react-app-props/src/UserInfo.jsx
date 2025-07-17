// src/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() { // No userData prop here
  return (
    <div style={{ border: '1px dashed lightblue', padding: '10px', margin: '10px' }}>
      <h4>User Info (No longer passing userData prop)</h4>
      <UserDetails /> {/* No userData prop passed to UserDetails */}
    </div>
  );
}

export default UserInfo;