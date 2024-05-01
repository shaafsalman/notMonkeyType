import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ name, technologiesUsed, githubLink }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="p-4">
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">Technologies Used: {technologiesUsed}</p>
          <p className="text-sm text-gray-600">GitHub Link: <a href={githubLink} className="text-blue-500 hover:underline">{githubLink}</a></p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
