import React from 'react';
import { motion } from 'framer-motion';
import '../style/Home.css';


const MemberCard = ({ profilePic, name, rollNumber, linkedin, contactNumber }) => {
  return (
    <motion.div
      className="bg-white l-96 shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="p-4">
        <div className="flex items-center justify-center">
          <div className="h-20 w-20 bg-purple-500 rounded-full flex-shrink-0">
            <img src={profilePic} alt={name} className="w-full h-full rounded-full" />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">{rollNumber}</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-600 transition-colors duration-300">Contact via WhatsApp</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
