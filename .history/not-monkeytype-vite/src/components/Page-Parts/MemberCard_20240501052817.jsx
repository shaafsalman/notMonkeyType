import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard'; // Import TeamMemberCard component
import '../style/Home.css'; // Import external CSS file

const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  return (
    <motion.div
      className="profile-card"
      whileHover={{ translateY: -5 }}
    >
      <TeamMemberCard name={name} role={`Roll Number: ${rollNumber}`} imageSrc={profilePic} />
      <div className="data">
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
