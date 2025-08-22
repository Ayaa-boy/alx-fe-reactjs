// src/Services.jsx
import React from 'react';

function Services() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e0ffff', minHeight: 'calc(100vh - 120px)' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5em', marginBottom: '20px' }}>Our Services</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ background: '#add8e6', margin: '10px 0', padding: '10px', borderRadius: '5px', color: '#34495e', fontSize: '1.1em' }}>Technology Consulting</li>
        <li style={{ background: '#add8e6', margin: '10px 0', padding: '10px', borderRadius: '5px', color: '#34495e', fontSize: '1.1em' }}>Market Analysis</li>
        <li style={{ background: '#add8e6', margin: '10px 0', padding: '10px', borderRadius: '5px', color: '#34495e', fontSize: '1.1em' }}>Product Development</li>
        <li style={{ background: '#add8e6', margin: '10px 0', padding: '10px', borderRadius: '5px', color: '#34495e', fontSize: '1.1em' }}>Digital Marketing Strategies</li>
      </ul>
    </div>
  );
}

export default Services;