import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";



const Scores = () => {
  const [userGameSessions, setUserGameSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchGameSessions = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId  = decodeToken(token); 
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
    console.log("User Here");
    console.log(userId);
    return userId;
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
    <div className="max-w-screen-xl rounded-lg ml-10 my-20 mr-20 ml-20 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="px-6 py-4">
        <div className="font-bold text-4xl text-white mb-2">Scores</div>
        <div className="px- py-10">
          <table className="w-full text-white">
            <thead>
              <tr>
                <th className="py-2">Rank</th>
                <th className="py-2">Username</th>
                <th className="py-2">Word Per Minut</th>
                <th className="py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {userGameSessions.map((session, index) => (
                <tr key={index}>
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{session.id}</td>
                  <td className="py-2">{session.wpm}</td>
                  <td className="py-2">{session.score}</td>

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
