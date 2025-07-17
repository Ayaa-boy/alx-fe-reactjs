// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components

// Import your page components
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

// Import your Navbar component
import Navbar from './components/Navbar'; // Assuming Navbar is in src/components

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', border: '1px solid #eee', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <Navbar /> {/* The Navbar will appear on all pages */}

        <Routes> {/* Routes defines the different paths */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optional: A catch-all route for 404 pages */}
          {/* <Route path="*" element={<div><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></div>} /> */}
        </Routes>

        {/* Optional: Footer Component */}
        <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px 0', marginTop: 'auto' }}>
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;