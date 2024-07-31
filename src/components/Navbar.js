// src/Navbar.js
import React from 'react';

import './Navbar.css'; // Import the CSS file

const Navbar = ({ setCurrentView }) => (
  <nav className='navbar'>
    <button  id='button' onClick={() => setCurrentView('home')}>Home</button>
    <button   id='button' onClick={() => setCurrentView('registration')}>Registration</button>
    <button  id='button' onClick={() => setCurrentView('contact')}>Contact Us</button>
  </nav>
);

export default Navbar;