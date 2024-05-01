import React from 'react';
import { motion } from 'framer-motion';

const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg bg-transparent"
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={profilePic}
        alt={name}
        className="w-full h-auto rounded-t-lg object-cover"
      />
      <div className="p-4">
        <p className="text-lg font-bold text-gray-900 mb-2">{name}</p>
        <p className="text-sm text-gray-600 mb-1">Roll Number: {rollNumber}</p>
        <p className="text-sm text-gray-600 mb-1">Section Batch: {sectionBatch}</p>
        <p className="text-sm text-gray-600 mb-1">Contact Number: {contactNumber}</p>
        <div className="flex justify-center space-x-4 mt-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Contact via WhatsApp
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            LinkedIn Profile
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
