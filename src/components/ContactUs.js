// src/ContactUs.js
import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

function ContactUs() {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message submitted:', message);
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
