import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaAtom, FaCube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ name, technologiesUsed,detail, githubLink }) => {
  const getIcon = (technology) => {
    switch (technology.toLowerCase()) {
      case 'react':
        return <FaReact key={technology} className="inline-block text-2xl mr-1" />;
      case 'nodejs':
        return <FaNodeJs key={technology} className="inline-block text-2xl mr-1" />;
      case 'mongodb':
        return <FaDatabase key={technology} className="inline-block text-2xl mr-1" />;
        case 'spline':
          return <FaCube key={technology} className="inline-block text-2xl mr-1" />;  
      default:
        return null;
    }
  };

  return (
    <div className=" bg-gradient-to-br from-purple-500 to-indigo-600 lg:rounded-lg w-max	 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-1">
      <div className="p-5">
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
          <p className="text-xl text-white mb-2">
             {technologiesUsed.split(',').map(tech => (
              <span key={tech} className="mr-2">
                {getIcon(tech.trim())}
                {tech.trim()}
              </span>
            ))}
          </p>
          <p></p>
          <p className="text-xl text-white mb-2">{detail}</p>

          <p className="text-sm text-white">
          </p>
          <a href={githubLink}className='m-40' target="_blank" rel="noopener noreferrer">
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
