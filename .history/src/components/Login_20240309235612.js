import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css'; 

import logoImage from '../assests/Logo2Transparent.png'; 
import loginGIF from '../assests/loginGIF.gif'; 
import staticLogin from '../assests/StaticLogin.png';

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
      
    //form starts here 
    <div className="wrapper">
      <div className="title-text">
        <img src={logoImage} alt="Logo" className="logo" />
        <div className="title">notMonkeyType</div>
      </div>

       {/* slider */}
       
       <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLoginView} onChange={() => setIsLoginView(true)} />
          <input type="radio" name="slide" id="signup" checked={!isLoginView} onChange={() => setIsLoginView(false)} />
          <label htmlFor="login" className="slide login">Login</label>
          <label htmlFor="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div>
        </div>
        
        
        
        
        
        <div className="form-inner">
          
        
          {isLoginView ? 
          // LoginForm
          (
            <form action="#" className="login">
              {/* username  */}
              <div className="field">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input type="text" placeholder="Email Address" required />
              </div>
              {/* password */}
              <div className="field">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input type="password" placeholder="Password" required />
              </div>
              {/* forgetPassword */}
              <div className="pass-link"><a href="#">Forgot password?</a></div>
              
              {/* button */}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
               {/* sign up link */}
              <div className="signup-link">Not a member? <a href="#" onClick={() => setIsLoginView(false)}>Signup now</a></div>
              
              
              {/* googleButton */}
              <div className="field btn">
                <div className="btn-layer"></div>
                <button className="google-btn" onClick={() => window.location.href='https://accounts.google.com'}>
                  <FontAwesomeIcon icon={faGoogle}className="input-icon" />
                  Continue  with Google
                </button>
              </div>
            
            </form>
          ) 
          
          : 
          //sign up Form
          (
            <form action="#" className="signup">
              {/* First name */}
              <div className="field">
                <FontAwesomeIcon icon={faUser} className="input-icon"/>
                <input type="text" placeholder="First Name" required />
              </div>

              {/* LAST  name */}
              <div className="field">
                <FontAwesomeIcon icon={faUser}className="input-icon" />
                <input type="text" placeholder="Last Name" required />
              </div>

              {/* EMAIL */}
              <div className="field">
                <FontAwesomeIcon icon={faEnvelope}className="input-icon" />
                <input type="text" placeholder="Email Address" required />
              </div>

               {/* PASS */}
              <div className="field">
                <FontAwesomeIcon icon={faLock}className="input-icon" />
                <input type="password" placeholder="Password" required />
              </div>
              
              {/* PASS confirm*/}
              <div className="field">
                <FontAwesomeIcon icon={faLock}className="input-icon" />
                <input type="password" placeholder="Confirm password" required />
              </div>

               {/* Confirm Button*/}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>

               {/* GooGLE bUTTON */}
              <div className="google-btn" onClick={() => window.location.href='https://accounts.google.com'}>
                <div className="btn-layer"></div>
                <FontAwesomeIcon icon={faGoogle} className= "input-icon" />
                      Continue with Google
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
