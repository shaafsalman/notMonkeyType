import React from 'react';
import { motion } from 'framer-motion';
import '../style/Home.css'; // Import external CSS file

const MemberCard = ({ profilePic, name, rollNumber, linkedin, contactNumber, email }) => {
  return (
    <motion.div
      className="card profile-card" // Add 'card' and 'profile-card' classes
      whileHover={{ translateY: -5 }}
    >
      <div className="img-container">
        <img src={profilePic} alt={name} className="profile-pic" />
      </div>
      <div className="data">
        <h1>{name}</h1>
        <p>{rollNumber}</p>
        <p>{contactNumber}</p>
      </div>
      <div className="icons buttons">
        <a href="#" className="btn">Contact via WhatsApp</a>
      </div>
      <div className="email-button">
        <a href={`mailto:${email}`} className="btn">Contact via Email</a> {/* Email button */}
      </div>
    </motion.div>
  );
};

export default MemberCard;
