import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboards = () => {
  const [userGameSessions, setUserGameSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState({ column: '', ascending: true });
  
  useEffect(() => {
    const fetchGameSessions = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/gameSession/`); 
        setUserGameSessions(response.data);
      } catch (error) {
        console.error('Error fetching game sessions:', error);
        setError('Failed to fetch game sessions');
      } finally {
        setLoading(false);
      }
    };

    fetchGameSessions();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const sortColumn = (column) => {
    const ascending = sortOrder.column === column ? !sortOrder.ascending : true;
    setSortOrder({ column, ascending });
    const sortedSessions = [...userGameSessions].sort((a, b) => {
      if (ascending) {
        return a[column] - b[column];
      } else {
        return b[column] - a[column];
      }
    });
    setUserGameSessions(sortedSessions);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (userGameSessions.length === 0) {
    return <div>No records found</div>;
  }

  return (
    <div className="max-w-screen-xl rounded-lg mx-auto my-20 overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105">
    <div className="px-6 py-4">
      <div className="font-bold text-4xl text-white mb-2">Leaderboards</div>
      <div className="px- py-10">
      <div className="overflow-x-auto">
  <table className="w-full text-white">
    <thead>
      <tr className="text-xl pb-5 px-3 sm:pb-10 sm:px-5">
        <th className="px-2 py-2 text-left sm:text-center">Rank</th>
        <th className="px-2 py-2 text-left sm:text-center">User</th>
        <th className="px-2 py-2 text-left sm:text-center">WPM</th>
        <th className="px-2 py-2 text-left sm:text-center">Accuracy</th>
        <th className="px-2 py-2 text-left sm:text-center">Date</th>
        <th className="px-2 py-2 text-left sm:text-center">Time Interval</th>
        <th className="px-2 py-2 text-left sm:text-center">Score</th>
      </tr>
    </thead>
    <tbody>
      {userGameSessions.map((session, index) => (
        <tr key={index} className={index % 2 === 0 ? "" : ""}>
          <td className="px-2 py-2 text-left sm:text-center text-xl">{index + 1}</td>
          <td className="px-2 py-2 text-left sm:text-center text-xl">{session.email}</td>
          <td className="px-2 py-2 text-left sm:text-center text-xl">{session.wpm}</td>
          <td className="px-2 py-2 text-left sm:text-center text-xl">{session.accuracy}%</td>
          <td className="px-2 py-2 text-left sm:text-center text-xl">{formatDate(session.createdAt)}</td>
          <td className="px-2 py-2 text-left sm:text-center text-xl">{session.sessionTime}</td>
          <td className="px-2 py-2 text-left sm:text-center text-xl">{session.score}</td>
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
