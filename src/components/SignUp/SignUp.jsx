import React, { useState } from 'react';
// import logo from '../../components/assets/logo.png'
// import background from '../../components/assets/background.png'
import './SignUp.css';


function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contact_no: '',
    password: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( formData )
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <input
        type="text"
        name="username"
        placeholder="Name"
        value={formData.username}
        onChange={handleChange}
        className="signup-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="signup-input"
      />
       <input
        type="text"
        name="contact_no"
        placeholder="Mobile Number"
        value={formData.contact_no}
        onChange={handleChange}
        className="signup-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="signup-input"
      />
      <button type="submit" className="signup-submit">Sign Up</button>
    </form>
  );
}

export default Signup;
