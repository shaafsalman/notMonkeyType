import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../style/Login.css';
import MessageCard from './../Page-Parts/mesgCard'; 

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/authenticate';
      const response = await axios.post(url, data);
      localStorage.setItem('token', response.data.token);
      setSuccessMessage('Login successful'); // Set success message
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorMessage(error.response.data.message); // Set error message
      }
    }
  };

  const closeMessage = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };
  {errorMessage && (
    <MessageCard errorMessage={errorMessage} onClose={closeMessage} />
  )}
  {successMessage && (
    <MessageCard errorMessage={successMessage} onClose={closeMessage} />
  )}
  return (
    <div>
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
    </div>
  );
};

export default LoginForm;
