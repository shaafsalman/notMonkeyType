import React from 'react';
import { motion } from 'framer-motion';
import '../style/Home.css'; // Import external CSS file

const MemberCard = ({ profilePic, name, rollNumber, linkedin, contactNumber }) => {
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
        <p>Roll Number: {rollNumber}</p> {/* Changed to p */}
S        <p>Contact Number: {contactNumber}</p> {/* Changed to p */}
      </div>
      <div className="icons buttons"> {/* Added 'icons' and 'buttons' classes */}
        <a href="#" className="btn">Contact via WhatsApp</a>
      </div>
    </motion.div>
  );
};

export default MemberCard;
