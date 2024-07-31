// src/Registration.js
import React, { useState } from 'react';
import './Registration.css'; // Import the CSS file

function Registration() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phoneNo: '',
    password: '',
    confPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration">
      <h1 className="reg">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label> First Name:</label>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
        </div>
        <div>
          <label> Last Name:</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone No:</label>
          <input type="text" name="phone no" value={formData.phoneNo} onChange={handleChange} required/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label> Confirm Password:</label>
          <input type="password" name="confPassword" value={formData.confPassword} onChange={handleChange} required />
        </div>
        <button type="submit" onClick={() =>{alert("Registration Successfully")}}>Register</button>
      </form>
    </div>
  );
}

export default Registration;
