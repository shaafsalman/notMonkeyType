import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../style/Login.css';
import loginGIF from '../../assets/loginGIF3.gif';
import staticLogin from '../../assets/StaticLogin3.png';


const LoginForm = ({ playGif }) => {
  useEffect(() => {
    if (playGif) {
      if (window.innerWidth > 1024) {
        document.body.style.backgroundImage = `url('${loginGIF}')`;
        setTimeout(() => {
          document.body.style.backgroundImage = `url('${staticLogin}')`;
        }, 2800);
      }
    }
  }, [playGif]);

  return (
    <form action="#" className="login">
      <div className="field">
        <FontAwesomeIcon icon={faUser} className="input-icon" />
        <input type="text" placeholder="Email Address" className='' required />
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
    </form>
  );
};

export default LoginForm;
