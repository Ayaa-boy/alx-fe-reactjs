// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components from the components/ folder
import Home from './components/Home';      // <-- Updated path
import About from './components/About';    // <-- Updated path
import Services from './components/Services';// <-- Updated path
import Contact from './components/Contact';  // <-- Updated path

// Import your Navbar component
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', border: '1px solid #eee', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px 0', marginTop: 'auto' }}>
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;