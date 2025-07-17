// src/About.jsx
import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fffacd', minHeight: 'calc(100vh - 120px)' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5em', marginBottom: '15px' }}>About Us</h1>
      <p style={{ color: '#34495e', fontSize: '1.1em', lineHeight: '1.6' }}>
        Our company has been providing top-notch services since 1990.
        We specialize in various fields including technology, marketing, and consultancy.
        Our mission is to empower businesses with cutting-edge solutions.
      </p>
      <p style={{ color: '#34495e', fontSize: '1.1em', lineHeight: '1.6', marginTop: '10px' }}>
        We pride ourselves on our experienced team and client-centric approach.
      </p>
    </div>
  );
}

export default About;