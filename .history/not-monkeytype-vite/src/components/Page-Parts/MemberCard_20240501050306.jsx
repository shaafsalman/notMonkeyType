import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={profilePic}
        alt={name}
        className="w-full h-auto rounded-t-lg object-cover"
        animate={{
          rotateY: isHovered ? 180 : 0,
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0, transition: { duration: 0.3 } }}
      >
        <p className="text-lg font-semibold mb-2">{name}</p>
        <p className="text-sm text-gray-300 mb-1">Roll Number: {rollNumber}</p>
        <p className="text-sm text-gray-300 mb-1">Section Batch: {sectionBatch}</p>
        <p className="text-sm text-gray-300 mb-1">Contact Number: {contactNumber}</p>
        <div className="flex justify-center space-x-4 mt-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
          >
            WhatsApp
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            LinkedIn
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MemberCard;
