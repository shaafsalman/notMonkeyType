import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../style/Login.css';

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
  }, [isLoginView]);

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
          {isLoginView ? (
            <form action="#" className="login">
              <div className="field">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <button className="google-btn" onClick={() => (window.location.href = 'https://accounts.google.com')}>
                  <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                  Continue with Google
                </button>
              </div>
            </form>
          ) : (
            <form action="#" className="signup">
              <div className="name-fields">
                <div className="field">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="field">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
              <div className="field">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="name-fields">
                <div className="field">
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="field">
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
                  <input type="password" placeholder="Confirm password" required />
                </div>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <button className="google-btn" onClick={() => (window.location.href = 'https://accounts.google.com')}>
                  <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                  Continue with Google
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
