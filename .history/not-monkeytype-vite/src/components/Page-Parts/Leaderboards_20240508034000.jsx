import React from 'react';
import "../style/Home.css";

const Leaderboards = ({ leaderboardData }) => {
  return (
    <div className="leaderboard-container">
      <div className="max-w-screen-xl rounded-lg ml-10 my-20 mr-20 ml-20	 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
        <div className="px-6 py-4">
          <div className="font-bold text-4xl text-white mb-2">Leaderboard</div>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-white-900">Rank</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-white-900">Username</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-white-900">Score</th>
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
