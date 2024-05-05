import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; 
import '../style/Login.css';
import MessageCard from './../Page-Parts/mesgCard';
import Home from './../Pages/Home';

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/authenticate';
      const response = await axios.post(url, data);
      localStorage.setItem('token', response.data.token);
      setSuccessMessage('Login successful');
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setSuccessMessage('');
      }, 8000);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          setError('');
        }, 8000);
      }
    }
  };

  useEffect(() => {
    let timeout;
    if (showMessage) {
      timeout = setTimeout(() => {
        setShowMessage(false);
        setError('');
        setSuccessMessage('');
        <Router>
        <div>
      
            <Routes>
              <Route path="/GameMenu" element={<GameMenu />} /> 
              <Route path="/Leaderboards" element={<Leaderboards />} />
              <Route path="/Friends" element={<Friends />} />
              <Route path="/Scores" element={<Scores/>} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/About" element={<About />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
   
      </Router>
      }, 8000);
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
      <div className="pass-link">
        <a href="#">Forgot password?</a>
      </div>
      <div className="field btn">
        <div className="btn-layer"></div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginForm;
