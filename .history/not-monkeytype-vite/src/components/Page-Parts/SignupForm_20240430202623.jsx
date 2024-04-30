import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../style/Login.css';

const SignupForm = () => {
  return (
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
    </form>
  );
};

export default SignupForm;
