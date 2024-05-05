import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the cross icon

const InputButtonCard = ({ Title, InputTitle, ButtonTitle, onButtonClick, onCancel }) => { // Add onCancel prop
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleClick = () => {
    onButtonClick(verificationCode);
  };

  const handleCancel = () => { // Handle cancel action
    onCancel(); // Call the onCancel function passed from the parent component
  };

  return (
    <div className="fixed top-40 left-0 w-full flex justify-center items-start z-50">
    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
      <div className="lg:px- lg:py-20 px-6 py-12">
        <div className="font-bold text-xl text-white mb-2">{Title}</div>
        <p className="text-white text-base">{InputTitle}</p>
      </div>
      <div className="px-6 py-6 flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:py-0">
        <div className="mx-6 my-4">
          <input
            type="text"
            placeholder={InputTitle}
            name="verificationCode"
            value={verificationCode}
            onChange={handleChange}
            className="bg-white text-gray-800 rounded-lg px-4 py-2 outline-none focus:ring-2 ring-indigo-500"
            required
          />
        </div>
        <button onClick={handleClick} className="w-full lg:w-auto mx-6 my-4 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
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
  onCancel: PropTypes.func.isRequired, // Add onCancel prop type
};

export default InputButtonCard;
