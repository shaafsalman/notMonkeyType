import React, { useState } from 'react';
import LoginForm from '../Page-Parts/LoginForm';
import SignupForm from '../Page-Parts/SignupForm';

import logoImage from '../../assets/Logo2Transparent.png';
import loginGIF from '../../assets/loginGIF.gif';
import staticLogin from '../../assets/StaticLogin.png';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const playGif = () => {
    if (window.innerWidth > 1024) {
      if (window.innerWidth > 1024) {
        const loginMain = document.querySelector('.LoginMain');
        if (loginMain) {
          loginMain.style.backgroundImage = `url('${loginGIF}')`;
          setTimeout(() => {
            loginMain.style.backgroundImage = `url('${staticLogin}')`;
          }, 800);
        }
      }
      
    }
  };

  const handleLoginView = () => {
    setIsLoginView(true);
    playGif();
  };

  const handleSignupView = () => {
    setIsLoginView(false);
    playGif();
  };


  return (
      <div className="LoginMain">
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
      </div>
    
  );
};

export default Login;
