import React from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ name, supervisor, teacher, assistant }) => {
  return (
    
     <div className="verticalCard">
        <div className="mt-4">
          <h2 className="tittle>{name}</h2>
          <p className="detail">Teacher: {teacher}</p>
          <p className="detail">Assistant: {assistant}</p>
        </div>  
    </div>
  );
};

export default TeamCard;
