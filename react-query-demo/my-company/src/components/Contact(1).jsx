// src/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // You could also clear the form here:
    // setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e6ffe6', minHeight: 'calc(100vh - 120px)' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5em', marginBottom: '20px' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <label htmlFor="name" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '10px', margin: '10px 0 15px 0', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1em' }}
          required
        />
        <label htmlFor="email" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', margin: '10px 0 15px 0', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1em' }}
          required
        />
        <label htmlFor="message" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '10px', margin: '10px 0 20px 0', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1em', minHeight: '100px' }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '12px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.1em',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;