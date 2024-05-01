import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../style/Home.css';

const MemberCard = ({ profilePic, name, rollNumber, linkedin, contactNumber }) => {
  const [showEmail, setShowEmail] = useState(false);
  const email = 'example@example.com'; // Replace with actual email

  const handleContactClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <motion.div className="bg-white L-80 shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300">
      <div className="p-4">
        <div className="flex items-center justify-center">
          <div className="h-40 w-40 bg-purple-500 rounded-full flex-shrink-0">
            <img src={profilePic} alt={name} className="w-full h-full rounded-full" />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">{rollNumber}</p>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleContactClick}
              className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors duration-300"
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
