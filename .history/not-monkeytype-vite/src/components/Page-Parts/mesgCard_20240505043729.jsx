import React from 'react';

const MessageCard = ({ Heading,Message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-96 h-96 flex justify-center items-center z-50">
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
        <div className="px-6 py-4 ">
          <div className="text-white text-4xl font-bold mb-2">{Heading}</div>
          <p className="text-white text-4xl">{Message}</p>
        </div>
        <button className="absolute top-0 right-0 mr-4 mt-2 text-white font-bold text-xl outline-none focus:outline-none" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default MessageCard;
