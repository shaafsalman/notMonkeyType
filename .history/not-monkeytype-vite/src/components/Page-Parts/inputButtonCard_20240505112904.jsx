import React from 'react';

const InputButtonCard = ({ Title, InputTitle, ButtonTitle, onButtonClick, onClose }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    onButtonClick(inputValue);
    setInputValue('');
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-start z-50">
      <div className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 mt-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="text-white text-2xl sm:text-3xl font-bold mb-4">{Title}</div>
          <div className="mb-6">
            <label className="block text-white text-lg mb-2">{InputTitle}</label>
            <input
              className="bg-white text-gray-900 rounded px-4 py-2 w-full focus:outline-none focus:shadow-outline"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="bg-white text-indigo-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleButtonClick}
          >
            {ButtonTitle}
          </button>
        </div>
        <button className="absolute top-0 right-0 mr-4 mt-2 text-white font-bold text-xl outline-none focus:outline-none" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default InputButtonCard;
