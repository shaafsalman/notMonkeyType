import React from 'react';
import { motion } from 'framer-motion';
import '../style/Home.css'; // Import external CSS file



const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  return (
    <motion.div
      className="profile-card"
      whileHover={{ translateY: -5 }}
    >
      <div className="image">
        <img src={profilePic} alt={name} className="profile-pic" />
      </div>
      <div className="data">
        <h2>{name}</h2>
        <span>Roll Number: {rollNumber}</span>
        <span>Section Batch: {sectionBatch}</span>
        <span>Contact Number: {contactNumber}</span>
      </div>
      <div className="buttons">
        <a href="#" className="btn">Contact via WhatsApp</a>
      </div>
    </motion.div>
  );
};

export default MemberCard;
