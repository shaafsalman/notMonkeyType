import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={profilePic} alt={name} className="w-full h-auto rounded-t-lg object-cover" />
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <p className="text-center font-semibold">{name}</p>
          </motion.div>
        )}
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-2">Roll Number: {rollNumber}</p>
        <p className="text-gray-600 mb-2">Section Batch: {sectionBatch}</p>
        <p className="text-gray-600 mb-2">Contact Number: {contactNumber}</p>
      </div>
    </motion.div>
  );
};

export default MemberCard;
