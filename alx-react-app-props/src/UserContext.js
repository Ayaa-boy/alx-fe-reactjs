// src/UserContext.js
import React from 'react'; // <-- Crucial: React must be imported

// Initialize and export the UserContext
// A default value (like null or an empty object) is good practice, but not strictly required
const UserContext = React.createContext(null);

export default UserContext; // <-- Essential for importing in other files