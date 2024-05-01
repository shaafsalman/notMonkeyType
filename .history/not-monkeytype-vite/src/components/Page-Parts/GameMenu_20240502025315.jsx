import React from 'react';
import { Link } from 'react-router-dom';
import sideImg from '../../assets/mojo-Home-1.png';

const GameMenu = () => {
  return (
    <div className="gameMenu flex">
      <div className="menu">
        <div className="flex justify-start p-10 mx-20 my-20 items-center h-full"> 
          <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
            <div className="lg:px- lg:py-20 px-6 py-12">
              <div className="font-bold text-xl text-white mb-2">Welcome to the NOT Monkey Type</div>
              <p className="text-white text-base">Choose your game mode:</p>
            </div>
            <div className="px-6 py-6 flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:py-0">
              <Link to="/single-player" className="w-full lg:w-auto mx-6 my-4 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
                Single Player
              </Link>
              <Link to="/multiplayer" className="w-full lg:w-auto mx-6 my-4 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg transition duration-300 text-center">
                Multiplayer
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src={sideImg} alt="Side Image" className="sideImage" />
      </div>
    </div>
  );
};

export default GameMenu;
