import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ErrorCard from './../Cards/mesgCard';
import InputButtonCard from './../Cards/inputButtonCard'; // Import the InputButtonCard component
import baseURL from '../../../config';


const SignupForm = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [verificationCode, setVerificationCode] = useState("");
  const [cancel,setCancel] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showVerificationInput, setShowVerificationInput] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });

    if (e.target.name === "confirm_password") {
      setConfirmPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://http://192.168.100.7:8080/api/registerUsers`;
      const response = await axios.post(url, data);
      setSuccessMessage(response.data.message);
      setError("");
      setShowVerificationInput(true);
  
      setTimeout(() => {
        setSuccessMessage("");
      }, 8000);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } 
      else if (error.request) {
        setError('Could not connect to the server. Please try again later.');
      } 
      else {
        setError('An unexpected error occurred. Please try again later.');
      }
  
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setShowMessage(true);

  };
  

  const handleVerifyEmail = async () => {
    try {
      const url = "http://${baseURL}/api/verifyEmail";
      const response = await axios.post(url, { email: data.email, verificationCode });
      setSuccessMessage(response.data.message);
      setError("");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  const handleDeleteUser = async () => {
    try {
      const url = "http://${baseURL}/api/deleteUser";
      await axios.post(url, { email: data.email });
      setSuccessMessage("User deleted successfully.");
      setError("");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  const closeMessage = () => {
    setError("");
    setSuccessMessage("");
  };

  const handleInputButtonClick = async (verificationCode) => {
    
    if(verificationCode == "-1") 
     {
        await handleDeleteUser();
     }
    else
    {
      await handleVerifyEmail();
    } 
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="signup">
        {(error || successMessage) && <ErrorCard Heading={error ? "Error" : "Success"} Message={error ? error : successMessage} onClose={closeMessage} />}
        <div className="name-fields">
          <div className="field">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
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

      {showVerificationInput && (
        <InputButtonCard 
          Title="Email Verification {Code expires after 1 min} after that close and try again" 
          InputTitle="Enter Verification Code" 
          ButtonTitle="Verify Email" 
          onButtonClick={handleInputButtonClick} 
          onCancel={() => setShowVerificationInput(false)} 
          setVerificationCode={setVerificationCode} 
          setCancel = {setCancel}
        />
      )}
    </>
  );
};

export default SignupForm;