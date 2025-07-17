// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // <-- Make sure this import is correct

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Context API Example</h1>
      {/* UserContext.Provider makes userData available to its children */}
      <UserContext.Provider value={userData}>
        {/* ProfilePage no longer needs userData prop passed directly */}
        <ProfilePage />
      </UserContext.Provider>
    </div>
  );
}

export default App;