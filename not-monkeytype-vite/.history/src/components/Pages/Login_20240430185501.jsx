import React, { useState } from 'react';
import LoginForm from '../Page-Parts/LoginForm';
import SignupForm from '../Page-Parts/SignupForm';

import logoImage from '../../assets/Logo2Transparent.png';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const handleToggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <img src={logoImage} alt="Logo" className="logo" />
        <div className="title">notMonkeyType</div>
      </div>

      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLoginView}
            onChange={() => setIsLoginView(true)}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLoginView}
            onChange={() => setIsLoginView(false)}
          />
          <label htmlFor="login" className="slide login">
            Login
          </label>
          <label htmlFor="signup" className="slide signup">
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        
        <div className="form-inner">
          {isLoginView ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
};

export default Login;
