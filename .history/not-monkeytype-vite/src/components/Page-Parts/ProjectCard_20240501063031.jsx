import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ name, technologiesUsed,description, githubLink }) => {
  const getIcon = (technology) => {
    switch (technology.toLowerCase()) {
      case 'react':
        return <FaReact key={technology} className="inline-block text-2xl mr-1" />;
      case 'nodejs':
        return <FaNodeJs key={technology} className="inline-block text-2xl mr-1" />;
      case 'mongodb':
        return <FaDatabase key={technology} className="inline-block text-2xl mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className=" bg-white w-max	 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-1">
      <div className="p-5">
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-sm text-gray-600 mb-2">
            Technologies Used: {technologiesUsed.split(',').map(tech => (
              <span key={tech} className="mr-2">
                {getIcon(tech.trim())}
                {tech.trim()}
              </span>
            ))}
          </p>
          <p className="text-sm text-gray-600 mb-2">Teacher: {teacher}</p>

          <p className="text-sm text-gray-600">
            GitHub Link:{' '}
          </p>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
           <motion.button
               whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               className="bg-black text-white py-2 px-4 mt-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
           >
              View on GitHub
           </motion.button>
</a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
