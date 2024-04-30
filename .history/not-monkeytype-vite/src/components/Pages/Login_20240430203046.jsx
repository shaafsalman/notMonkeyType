import React, { useState, useEffect } from 'react';
import LoginForm from '../Page-Parts/LoginForm';
import SignupForm from '../Page-Parts/SignupForm';

import logoImage from '../../assets/Logo2Transparent.png';
import loginGIF from '../../assets/loginGIF3.gif';
import staticLogin from '../../assets/StaticLogin3.png';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  useEffect(() => {
    const playGif = () => {
      if (window.innerWidth > 1024) {
        document.body.style.backgroundImage = `url('${loginGIF}')`;
        setTimeout(() => {
          document.body.style.backgroundImage = `url('${staticLogin}')`;
        }, 2800);
      }
    };

    playGif();

    // Clean up function to reset background image when component unmounts
    return () => {
      document.body.style.backgroundImage = `url('${staticLogin}')`;
    };
  }, []);

  const handleLoginView = () => {
    setIsLoginView(true);
  };

  const handleSignupView = () => {
    setIsLoginView(false);
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
            onChange={handleLoginView}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLoginView}
            onChange={handleSignupView}
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
