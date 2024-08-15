// src/Login.js
import React, { useState } from 'react';
// import './index.css';
import Navbar from "../../Components/Navbar.jsx";
import Footer from "../../Components/Footer.jsx";

const CreateAccount = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Login with', { username, password });
  };

  return (
    <>
    <Navbar/>
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">First Name*</label>
          <input
            type="text"
            id="username"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Last Name*</label>
          <input
            type="text"
            id="username"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Email id*</label>
          <input
            type="email"
            id="username"
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='btn_submit_login'>Submit</button>
      </form>
      <p className="switch-form">
        Already Registered? <a href='/login' className="switch-button">Log In</a>
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default CreateAccount;