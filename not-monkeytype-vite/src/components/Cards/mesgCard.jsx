import React from 'react';

const MessageCard = ({ Heading, Message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-start z-50">
      <div className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 mt-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="text-white text-2xl sm:text-3xl font-bold mb-4">{Heading}</div>
          <p className="text-white text-lg">{Message}</p>
        </div>
        <button className="absolute top-0 right-0 mr-4 mt-2 text-white font-bold text-xl outline-none focus:outline-none" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default MessageCard;
