import React from 'react';
import "../style/Home.css";

const Leaderboards = () => {
  // Sample data for the leaderboard
  const leaderboardData = [
    { rank: 1, username: 'Player1', score: 1000 },
    { rank: 2, username: 'Player2', score: 950 },
    { rank: 3, username: 'Player3', score: 900 },
    { rank: 4, username: 'Player4', score: 850 },
    { rank: 5, username: 'Player5', score: 800 },
    { rank: 6, username: 'Player6', score: 750 },
    { rank: 7, username: 'Player7', score: 700 },
    { rank: 8, username: 'Player8', score: 650 },
    { rank: 9, username: 'Player9', score: 600 },
    { rank: 10, username: 'Player10', score: 550 },
  ];

  return (
    <div className="leaderboard-container">
     <div className="max-w-screen-xl rounded-lg ml-10 my-20 mr-20 ml-20	 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
     <div className="flex justify-center items-center h-full">
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
        <div className="lg:px-8 lg:py-20 px-6 py-12">
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


  );
};

export default Leaderboards;