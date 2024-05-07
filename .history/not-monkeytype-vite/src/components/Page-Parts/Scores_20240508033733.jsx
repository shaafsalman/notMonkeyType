import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const Scores = () => {
  const [userGameSessions, setUserGameSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("Shaaf");
  const [sortOrder, setSortOrder] = useState({ column: '', ascending: true });
  
  useEffect(() => {
    const fetchGameSessions = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = decodeToken(token); 
        console.log(userId);
        const response = await axios.get(`http://localhost:8080/api/gameSession/${userId}`);
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

  const decodeToken = (token) => {
    const decoded = jwtDecode(token);
    const userId = decoded._id;
    const name = decoded.name;
    setName(name); 
    return userId;
  };

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
    <div className="max-w-screen-xl rounded-lg mx-auto my-20 overflow-hidden shadow-lg  bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105">
      <div className="px-6 py-4">
        <div className="font-bold text-4xl text-white mb-2">Scores</div>
        <div className="px- py-10">
          <table className="w-full text-white">
            <thead>
            <tr className="text-2xl">
  <th className="py-10 px-5  mx-10text-center">
    <button onClick={() => sortColumn('rank')} className="flex items-center justify-center">
      Rank
      {sortOrder.column === 'rank' && (sortOrder.ascending ? <span>&uarr;</span> : <span>&darr;</span>)}
    </button>
  </th>
  <th className="py-2 text-center ">
    <button onClick={() => sortColumn('user')} className="flex items-center justify-center">
      User
      {sortOrder.column === 'user' && (sortOrder.ascending ? <span>&uarr;</span> : <span>&darr;</span>)}
    </button>
  </th>
  <th className="py-2 text-center">
    <button onClick={() => sortColumn('wpm')} className="flex items-center justify-center">
      Word Per Minute
      {sortOrder.column === 'wpm' && (sortOrder.ascending ? <span>&uarr;</span> : <span>&darr;</span>)}
    </button>
  </th>
  <th className="py-2 text-center">
    <button onClick={() => sortColumn('accuracy')} className="flex items-center justify-center">
      Accuracy
      {sortOrder.column === 'accuracy' && (sortOrder.ascending ? <span>&uarr;</span> : <span>&darr;</span>)}
    </button>
  </th>
  <th className="py-2 text-center">
    <button onClick={() => sortColumn('createdAt')} className="flex items-center justify-center">
      Date
      {sortOrder.column === 'createdAt' && (sortOrder.ascending ? <span>&uarr;</span> : <span>&darr;</span>)}
    </button>
  </th>
  <th className="py-2 text-center">
    <button onClick={() => sortColumn('sessionTime')} className="flex items-center justify-center">
      Time Interval
      {sortOrder.column === 'sessionTime' && (sortOrder.ascending ? <span>&uarr;</span> : <span>&darr;</span>)}
    </button>
  </th>
  <th className="py-2 text-center">
    <button onClick={() => sortColumn('score')} className="flex items-center justify-center">
      Score
      {sortOrder.column === 'score' && (sortOrder.ascending ? <span>&uarr;</span> : <span>&darr;</span>)}
    </button>
  </th>
</tr>

            </thead>
            <tbody>
              {userGameSessions.map((session, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : ""}>
                  <td className="py-2 text-center text-xl">{index + 1}</td>
                  <td className="py-2 text-center text-xl">{name}</td>
                  <td className="py-2 text-center text-xl">{session.wpm}</td>
                  <td className="py-2 text-center text-xl">{session.accuracy}%</td>
                  <td className="py-2 text-center text-xl">{formatDate(session.createdAt)}</td>
                  <td className="py-2 text-center text-xl">{session.sessionTime}</td>
                  <td className="py-2 text-center text-xl">{session.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Scores;
