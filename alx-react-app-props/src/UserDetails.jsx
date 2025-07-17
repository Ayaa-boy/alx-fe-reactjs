// src/UserDetails.jsx
import React, { useContext } from 'react'; // <-- Import useContext hook
import UserContext from './UserContext'; // <-- Import UserContext

// UserDetails no longer accepts userData as a prop
function UserDetails() {
  const userData = useContext(UserContext); // <-- Consume context here

  return (
    <div style={{ border: '1px solid lightgreen', padding: '10px', margin: '10px', backgroundColor: '#e6ffe6' }}>
      <h5>User Details (Consuming from Context)</h5>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;