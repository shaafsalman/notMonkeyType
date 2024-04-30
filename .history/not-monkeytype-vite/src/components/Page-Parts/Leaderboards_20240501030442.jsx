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
  <div className="max-w-screen-xl mx-auto rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
    <div className="px-6 py-4">
      <h2 className="text-3xl font-bold text-white mb-4">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr>
              <th className="py-2">Rank</th>
              <th className="py-2">Username</th>
              <th className="py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((data) => (
              <tr key={data.rank}>
                <td className="py-2">{data.rank}</td>
                <td className="py-2">{data.username}</td>
                <td className="py-2">{data.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  );
};

export default Leaderboards;