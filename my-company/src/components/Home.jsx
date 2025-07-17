// src/Home.jsx
import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f8ff', minHeight: 'calc(100vh - 120px)' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '3em', marginBottom: '15px' }}>Welcome to Our Company</h1>
      <p style={{ color: '#34495e', fontSize: '1.2em', lineHeight: '1.6' }}>
        We are dedicated to delivering excellence in all our services,
        ensuring client satisfaction and fostering innovation.
      </p>
    </div>
  );
}

export default Home;