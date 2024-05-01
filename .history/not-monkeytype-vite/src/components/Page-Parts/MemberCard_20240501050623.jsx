import React from 'react';
import { motion } from 'framer-motion';
import './MemberCard.css'; // Import external CSS file

const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  return (
    <motion.div
      className="member-card"
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={profilePic}
        alt={name}
        className="card-image"
      />
      <div className="card-content">
        <p className="name">{name}</p>
        <p className="detail">Roll Number: {rollNumber}</p>
        <p className="detail">Section Batch: {sectionBatch}</p>
        <p className="detail">Contact Number: {contactNumber}</p>
        <div className="button-container">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="action-button whatsapp"
          >
            Contact via WhatsApp
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="action-button linkedin"
          >
            LinkedIn Profile
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
