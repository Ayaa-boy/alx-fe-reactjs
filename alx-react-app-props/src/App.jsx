// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Context API Example</h1>
      <UserContext.Provider value={userData}>
        <ProfilePage /> {/* Make sure userData prop is GONE here */}
      </UserContext.Provider>
    </div>
  );
}

export default App;