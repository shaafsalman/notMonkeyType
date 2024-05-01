import React from 'react';
import { motion } from 'framer-motion';
import '../style/Home.css'; // Import external CSS file

const MemberCard = ({ profilePics, names, roles }) => {
  return (
    <motion.div
      className="profile-card"
      whileHover={{ translateY: -5 }}
    >
      <div className="img-container">
        <img src={profilePics} alt={names} />
      </div>
      <div className="data">
        <h3>{names}</h3>
        <p>{roles}</p>
        <div className="icons">
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
