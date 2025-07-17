// src/App.jsx (Final Refactored Version)
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.example.com" };

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '2px solid #007bff' }}>
      <h1>Context API Refactoring Example</h1>
      <UserContext.Provider value={userData}>
        {/* ProfilePage no longer needs the userData prop */}
        <ProfilePage />
      </UserContext.Provider>
    </div>
  );
}

export default App;