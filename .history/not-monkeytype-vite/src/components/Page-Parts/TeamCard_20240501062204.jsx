import React from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ name, supervisor, teacher, assistant }) => {
  return (
    
     <div className="bg-white w-max	 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-1">
        <div className="mt-4">
          <h2 className="tittle">{name}</h2>
          <p className="detail"> Teacher: {teacher}</p>
          <p className="detail">Assistant: {assistant}</p>
        </div>  
    </div>
  );
};

export default TeamCard;
