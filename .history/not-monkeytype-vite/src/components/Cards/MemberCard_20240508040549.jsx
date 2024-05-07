import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../style/Home.css';

const MemberCard = ({ profilePic, name, rollNumber, linkedin, email }) => {
  const [showEmail, setShowEmail] = useState(false);

  const handleContactClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <motion.div className="bg-gradient-to-br from-purple-500 to-indigo-600 lg:rounded-lg L-80 shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300">
      <div className="p-4">
        <div className="flex items-center justify-center">
          <div className="h-40 w-40 bg-purple-500 rounded-full flex-shrink-0">
            <img src={profilePic} alt={name} className="w-full h-full rounded-full" />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-white">{name}</h2>
          <p className="text-sm text-white">{rollNumber}</p>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleContactClick}
              className="bg-indigo-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          {showEmail && (
            <p className="text-sm text-gray-600 mt-2">
              Email:{' '}
              <a
                href={`mailto:${email}`}
                className="text-blue-500 hover:underline"
              >
                {email}
              </a>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
