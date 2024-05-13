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
    if (player && player.wpm && player.accuracy && player.score) {
      return Math.round(player.wpm + player.accuracy + player.score);
    } else {
      return 0; // Or any default value you prefer
    }
  };
  const determineWinner = () => {
    const player1OverallScore = computeOverallScore(friendBattles[0]);
    const player2OverallScore = computeOverallScore(friendBattles[1]);
    
    if (player1OverallScore > player2OverallScore) {
      return friendBattles[0].email;
    } else if (player1OverallScore < player2OverallScore) {
      return friendBattles[1].email;
    } else {
      return 'Tie';
    }
  };

  return (
    <div className="max-w-screen-xl rounded-lg mx-auto mt-20 mb-40 overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105">
      <div className="px-6 py-4">
        <div className="font-bold text-4xl text-white mb-6">Friends Battles</div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-3 bg-transparent border border-gray-800 rounded-lg py-3 px-4">
            <p className="text-gray-300 font-bold">Player</p>
            <p className="text-white">{friendBattles[0]?.email} {friendBattles[0]?.score > friendBattles[1]?.score ? <FaTrophy className="text-yellow-500 inline" /> : null}</p>
          </div>
          <div className="col-span-1 bg-transparent border border-gray-800 rounded-lg py-3 px-4">
            <p className="text-gray-300 font-bold">WPM</p>
            <p className="text-white text-center">{Math.round(friendBattles[0]?.wpm)}</p>
          </div>
          <div className="col-span-1 bg-transparent border border-gray-800 rounded-lg py-3 px-4">
            <p className="text-gray-300 font-bold">Accuracy</p>
            <p className="text-white text-center">{Math.round(friendBattles[0]?.accuracy)}</p>
          </div>
          <div className="col-span-1 bg-transparent border border-gray-800 rounded-lg py-3 px-4">
            <p className="text-gray-300 font-bold">Overall Score</p>
            <p className="text-white text-center">{Math.round(computeOverallScore(friendBattles[0]))}</p>
          </div>
          <div className="col-span-3 bg-transparent border border-gray-800 rounded-lg py-3 px-4">
            <p className="text-gray-300 font-bold">Player</p>
            <p className="text-white">{friendBattles[1]?.email} {friendBattles[1]?.score > friendBattles[0]?.score ? <FaTrophy className="text-yellow-500 inline" /> : null}</p>
          </div>
          <div className="col-span-1 bg-transparent border border-gray-800 rounded-lg py-3 px-4">
            <p className="text-gray-300 font-bold">WPM</p>
            <p className="text-white text-center">{Math.round(friendBattles[1]?.wpm)}</p>
          </div>
          <div className="col-span-1 bg-transparent border border-gray-800 rounded-lg py-3 px-4">
            <p className="text-gray-300 font-bold">Accuracy</p>
            <p className="text-white text-center">{Math.round(friendBattles[1]?.accuracy)}</p>
          </div>
          <div className="col-span-1 bg-transparent border border-gray-800 rounded-lg py-3 px-4">
            <p className="text-gray-300 font-bold">Overall Score</p>
            <p className="text-white text-center">{Math.round(computeOverallScore(friendBattles[1]))}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
