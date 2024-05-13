import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from '../../../config';
import { jwtDecode } from "jwt-decode";
import { FaTrophy } from "react-icons/fa";

const Friends = () => {
  const [userEmail, setUserEmail] = useState('');
  const [friendBattles, setFriendBattles] = useState([]);

  const decodeToken = (token) => {
    const decoded = jwtDecode(token);
    const email = decoded.email;
    return email;
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = decodeToken(token); 
    setUserEmail(email);
    fetchFriendBattles(email);
  }, []);

  const fetchFriendBattles = async (email) => {
    try {
      const response = await axios.get(`http://${baseURL}/api/multiGameSession/${email}`);
      setFriendBattles(response.data);
    } catch (error) {
      console.error('Error fetching friend battles:', error);
    }
  };

  const computeOverallScore = (player) => {
    return Math.round(player.wpm + player.accuracy + player.score);
  };

  const determineWinner = () => {
    const player1OverallScore = computeOverallScore(friendBattles.player1);
    const player2OverallScore = computeOverallScore(friendBattles.player2);
    
    if (player1OverallScore > player2OverallScore) {
      return friendBattles.player1.email;
    } else if (player1OverallScore < player2OverallScore) {
      return friendBattles.player2.email;
    } else {
      return 'Tie';
    }
  };

  return (
  <div className="max-w-screen-xl rounded-lg mx-auto mt-20 mb-40 overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105">
    <div className="px-6 py-4">
      <div className="font-bold text-4xl text-white mb-6">Friends Battles</div>
      <table className="w-full">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Players</th>
            <th className="py-2 px-4">WPM</th>
            <th className="py-2 px-4">Accuracy</th>
            <th className="py-2 px-4">Score</th>
            <th className="py-2 px-4">Overall Score</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">{friendBattles.player1.email}</td>
            <td className="py-3 px-4 text-center">{friendBattles.player1.wpm}</td>
            <td className="py-3 px-4 text-center">{friendBattles.player1.accuracy}</td>
            <td className="py-3 px-4 text-center">{friendBattles.player1.score}</td>
            <td className="py-3 px-4 text-center">{computeOverallScore(friendBattles.player1)}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">{friendBattles.player2.email}</td>
            <td className="py-3 px-4 text-center">{friendBattles.player2.wpm}</td>
            <td className="py-3 px-4 text-center">{friendBattles.player2.accuracy}</td>
            <td className="py-3 px-4 text-center">{friendBattles.player2.score}</td>
            <td className="py-3 px-4 text-center">{computeOverallScore(friendBattles.player2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 text-center">
        <span className="font-bold text-lg">
          Winner: 
        </span>
        {determineWinner() === 'Tie' ? (
          <span className="ml-2 text-yellow-500">Tie</span>
        ) : (
          <span className="ml-2 text-green-500">{determineWinner()} <FaTrophy /></span>
        )}
      </div>
    </div>
  </div>
);

export default Friends;
