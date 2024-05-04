import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../style/Login.css';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import ErrorCard from './../Page-Parts/errorCard';

const SignupForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '' 
  });
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    try 
    {
      console.log("sending sighn up reuest");
      const url = "http://localhost:8080/api/users";
      const response = await axios.post(url, data);
      console.log(response.data.message);
      // navigate("/Home");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
      {error && <div className="error-message">{error}</div>}
      <div className="name-fields">
        <div className="field">
        <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={data.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
        <FontAwesomeIcon icon={faUser} className="input-icon" />

          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={data.last_name}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="field">
      <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="name-fields">

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
        <div className="field">
        <FontAwesomeIcon icon={faLock} className="input-icon" />

          <input
            type="password"
            placeholder="Confirm password"
            name="confirm_password"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="field btn">
        <div className="btn-layer"></div>
        <input type="submit" value="Signup" />
      </div>
    </form>
  );
};

export default SignupForm;