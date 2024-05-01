import React from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ name, supervisor, teacher, assistant }) => {
  return (
    <motion.div
      className="verticalCard">
      
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-sm text-gray-600">Supervisor: {supervisor}</p>
          <p className="text-sm text-gray-600">Teacher: {teacher}</p>
          <p className="text-sm text-gray-600">Assistant: {assistant}</p>
        </div>
      
    </motion.div>
  );
};

export default TeamCard;
