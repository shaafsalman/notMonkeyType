import React from 'react';
import { motion } from 'framer-motion';
import '../style/Home.css';

const ProjectCard = ({ name, technologiesUsed, githubLink }) => {
  return (
    
      <div className="verticalCard">
    
      
        <div className="mt-4">
          <h2 className="tittle">{name}</h2>
          <p className="text-sm text-gray-600">Technologies Used: {technologiesUsed}</p>
          <p className="text-sm text-gray-600">GitHub Link: <a href={githubLink} className="text-blue-500 hover:underline">{githubLink}</a></p>
        </div>
      
      </div>
  );
};

export default ProjectCard;
