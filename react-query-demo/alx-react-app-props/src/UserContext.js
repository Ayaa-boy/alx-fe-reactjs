// src/UserContext.js
import React from 'react'; // Make sure React is imported!

// Initialize and export the UserContext
// The argument to createContext is the default value, used if a component
// consumes the context without a Provider above it. null is fine here.
const UserContext = React.createContext(null);

export default UserContext; // This export is essential