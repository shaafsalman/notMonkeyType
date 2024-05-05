import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const InputButtonCard = ({ Title, InputTitle, ButtonTitle, onButtonClick, onCancel, setVerificationCode,setCancel }) => {
  const [verificationCodeInput, setVerificationCodeInput] = useState(""); // Manage verification code input separately

  const handleChange = (e) => {
    setVerificationCodeInput(e.target.value);
    setVerificationCode(e.target.value);
  };

  const handleClick = () => {
    onButtonClick(verificationCodeInput);
    onClose(); 
  };

  const onClose = () => {
    setVerificationCodeInput("-1"); 
    setVerificationCode("-1");
    setCancel(true);
    onCancel(false); 
  };

  return (
    <div className="fixed top-40 left-0 w-full flex justify-center items-start z-50">
      <div className="max-w-lg rounded-lg p-2 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
        <button onClick={onClose} className="mx-96 my-4 text-white outline-none focus:outline-none">
          <FontAwesomeIcon icon={faTimes} className="text-xl" /> 
        </button>
        <div className="lg:px-10 lg:py-5 px-6 py-12">
          <div className="font-bold text-xl text-white mb-2">{Title}</div>
          <p className="text-white text-base">{InputTitle}</p>
        </div>
        <div className="px-6 py-6 flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:py-0">
          <div className="mx-6 my-4">
            <input
              type="text"
              placeholder={InputTitle}
              value={verificationCodeInput}
              onChange={handleChange}
              className="bg-white text-gray-800 rounded-lg px-4 py-2 outline-none focus:ring-2 ring-indigo-500"
            />
          </div>
          <button onClick={handleClick} className="w-full lg:w-auto mx-2 my-4 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
            {ButtonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

InputButtonCard.propTypes = {
  Title: PropTypes.string.isRequired,
  InputTitle: PropTypes.string.isRequired,
  ButtonTitle: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  setVerificationCode: PropTypes.func.isRequired, // Add setVerificationCode to PropTypes
};

export default InputButtonCard;
