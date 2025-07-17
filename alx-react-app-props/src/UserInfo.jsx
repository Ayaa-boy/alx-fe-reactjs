// src/UserInfo.jsx (Refactored for Context API)
import React from 'react';
import UserDetails from './UserDetails';

// UserInfo no longer accepts userData as a prop
function UserInfo() {
  return (
    <div style={{ border: '1px dashed lightblue', padding: '10px', margin: '10px' }}>
      <h4>User Info (No longer passing userData prop)</h4>
      {/* UserDetails no longer needs userData prop */}
      <UserDetails />
    </div>
  );
}

export default UserInfo;