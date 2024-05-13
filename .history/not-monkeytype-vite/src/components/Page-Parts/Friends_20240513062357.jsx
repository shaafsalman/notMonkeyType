import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from '../../../config';
import { jwtDecode } from "jwt-decode";
import { FaTrophy } from "react-icons/fa";

const Friends = () => {
  const [userEmail, setUserEmail] = useState('');
  const [friendBattles, setFriendBattles] = useState([]);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(1);

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
      setError(error);
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

  if (error || friendBattles.length === 0) {
    return (
      <div className="max-w-screen-xl rounded-lg mx-auto mt-20 mb-40 overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105">
        <div className="px-6 py-4">
          <div className="font-bold text-4xl text-white mb-6">Friends Battles</div>
          <div className="text-white text-lg">No data to show</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl rounded-lg mx-auto mt-20 mb-40 overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105">
    <div className="px-6 py-4">
      <div className="font-bold text-4xl text-white mb-6">Friends Battles</div>
      <div className="font-bold text-2xl text-white mb-6">Battle no {index}</div>
      <div className="col-span-3 bg-transparent border border-gray-800 rounded-lg py-3 px-4">
      </div>
    </div>
  </div>
  );
};

export default Friends;
