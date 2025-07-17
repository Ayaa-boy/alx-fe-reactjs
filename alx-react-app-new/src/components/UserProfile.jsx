// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid gray', // Keep it gray as per the prompt's example base
      padding: '10px',
      margin: '10px'
    }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2> {/* Ensured color is 'blue' */}
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;