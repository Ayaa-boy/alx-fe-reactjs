// src/UserDetails.jsx (Refactored to Consume Context)
import React, { useContext } from 'react'; // <-- Import useContext hook
import UserContext from './UserContext';    // <-- Import your UserContext

// UserDetails no longer needs to accept userData as a prop
function UserDetails() {
  // Use useContext to get the userData value from the nearest UserContext.Provider
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid lightgreen', padding: '10px', margin: '10px', backgroundColor: '#e6ffe6' }}>
      <h5>User Details (Consuming from Context)</h5>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;