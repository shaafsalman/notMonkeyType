import React from 'react';
import { motion } from 'framer-motion';
import '../style/Home.css';

const TeamCard = ({ name, supervisor, teacher, assistant }) => {
  return (
    <motion.div
      className="verticalCard"
    >
      <div className="card">
        <div className="mt-4">
          <h2 className="tittle">{name}</h2>
          <p className="detail">Teacher: {teacher}</p>
          <p className="detail">Assistant: {assistant}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
