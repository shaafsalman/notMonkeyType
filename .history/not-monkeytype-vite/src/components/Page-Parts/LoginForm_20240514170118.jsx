import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; 
import '../style/Login.css';
import MessageCard from '../Cards/mesgCard';
import { useNavigate } from 'react-router-dom'; 
import baseURL from '../../../config';

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const url = `http://${baseURL}/api/authenticate`; 
    const response = await axios.post(url, data);
    const token = response.data.data;
    localStorage.setItem('token', token);
    setSuccessMessage('Login successful');
    setShowMessage(true);
    navigate('/Home/GameMenu');
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      setError(error.response.data.message);
    } else if (error.request) {
      // The request was made but no response was received
      setError('Could not connect to the server. Please try again later.');
    } else {
      setError('An unexpected error occurred. Please try again later.');
    }
    
    setShowMessage(true);
  }
};

  

  useEffect(() => {
    let timeout;
    if (showMessage) {
      timeout = setTimeout(() => {
        setShowMessage(false);
        setError('');
        setSuccessMessage('');
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showMessage]);

  const closeMessage = () => {
    setShowMessage(false);
    setError('');
    setSuccessMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      {showMessage && (
        <MessageCard 
          Heading={error ? "Error" : "Success"} 
          Message={error ? error : successMessage} 
          onClose={closeMessage} 
        />
      )}
      <div className="field">
        <FontAwesomeIcon icon={faUser} className="input-icon" />
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <FontAwesomeIcon icon={faLock} className="input-icon" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
        />
      </div>
      {/* <div className="pass-link">
        <a href="#">Forgot password?</a>
      </div> */}
      <div className="field btn">
        <div className="btn-layer"></div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginForm;
