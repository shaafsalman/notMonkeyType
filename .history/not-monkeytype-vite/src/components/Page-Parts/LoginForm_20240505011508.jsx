import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../style/Login.css';

const LoginForm = () => {
  // State to manage form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      // Handle response from the backend
      console.log(data); // You can handle success/failure accordingly
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <div className="field">
        <FontAwesomeIcon icon={faUser} className="input-icon" />
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <FontAwesomeIcon icon={faLock} className="input-icon" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="pass-link">
        <a href="#">Forgot password?</a>
      </div>
      <div className="field btn">
        <div className="btn-layer"></div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
