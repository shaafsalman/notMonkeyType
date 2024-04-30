import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from '../Page-Parts/SignupForm';

import logoImage from '../../assets/Logo2Transparent.png';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="wrapper">
      <div className="title-text">
        <img src={logoImage} alt="Logo" className="logo" />
        <div className="title">notMonkeyType</div>
      </div>

      <div className="form-container">
        
        <div className="form-inner">
          {isLoginView ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
};

export default Login;
