import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../style/Login.css';

const SignupForm = () => {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try
    {
      

    }catch (error) {}

    console.log(data); 
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
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
            value={data.confirm_password}
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
