import React from 'react';
import { Link } from 'react-router-dom';

const scores = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
        <div className="lg:px-8 lg:py-20 px-6 py-12">
          <div className="font-bold text-xl text-white mb-2">404 - Page Not Found</div>
          <p className="text-white text-base">Oops! Looks like you've stumbled upon a page that doesn't exist.</p>
          <p className="text-white text-base">Return to <Link to="/GameMenu" >Home</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
