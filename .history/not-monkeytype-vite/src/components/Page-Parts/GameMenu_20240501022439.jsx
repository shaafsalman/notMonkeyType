import React from 'react';
import { Link } from 'react-router-dom';

const GameMenu = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
        <div className="px-20 py-40 ">
          <div className="font-bold text-xl text-white mb-2">Welcome to the Game Menu</div>
          <p className="text-white text-base">Choose your game mode:</p>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <Link to="/single-player" className="mx-12 px-4 py-2 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300">
            Single Player
          </Link>
          <Link to="/multiplayer" className="mx-12 px-4 py-2 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300">
            Multiplayer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameMenu;
