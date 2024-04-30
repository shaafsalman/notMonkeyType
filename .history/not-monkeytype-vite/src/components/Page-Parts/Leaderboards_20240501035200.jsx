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
         <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Rank</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Username</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Score</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {leaderboardData.map((data) => (
              <tr key={data.rank}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{data.rank}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.username}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Leaderboards;