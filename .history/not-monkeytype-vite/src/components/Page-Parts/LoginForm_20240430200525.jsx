import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../style/Login.css';


const LoginForm = () => {
  return (
    <form action="#" className="login">
      <div className="field">
        <FontAwesomeIcon icon={faUser} className="input-icon" />
        <input type="text" placeholder="Email Address" className='field' required />
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
