// src/UserDetails.jsx
import React, { useContext } from 'react'; // <-- Essential import for useContext
import UserContext from './UserContext';    // <-- Essential import for your context

function UserDetails() { // <-- No 'userData' prop here
  const userData = useContext(UserContext); // <-- Consuming the context

  return (
    <div style={{ border: '1px solid lightgreen', padding: '10px', margin: '10px', backgroundColor: '#e6ffe6' }}>
      <h5>User Details (Consuming from Context)</h5>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;