// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #ddd', // Lighter border
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto', // Center the card
      maxWidth: '350px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Subtle shadow
      backgroundColor: '#f9f9f9' // Light background
    }}>
      <h2 style={{ color: '#333', fontSize: '1.8em', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '1.1em', color: '#555' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#007bff' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '1em', color: '#666', lineHeight: '1.5' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;