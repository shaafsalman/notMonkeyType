import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from '../../../config';


const Friends = () => {
  const [userEmail, setUserEmail] = useState('');
  const [friendBattles, setFriendBattles] = useState([]);
  const decodeToken = (token) => {
    const decoded = jwtDecode(token);
    const userId = decoded._id;
    const name = decoded.name;
    const email = decoded.email;

    setName(name); 
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

  return (
    <div className="max-w-screen-xl rounded-lg mx-auto mt-20 mb-40 overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105">
      <div className="px-6 py-4">
        <div className="font-bold text-4xl text-white mb-2">Friends Battles</div>
        <div className="flex pr-2 items-center mb-8"></div>
        <ul className="text-white text-lg">
          {friendBattles.map((battle, index) => (
            <li key={index} className="mb-4">
              <div>
                <span className="font-bold">{battle.player1.email}</span> vs <span className="font-bold">{battle.player2.email}</span>
              </div>
              <div>
                Winner: <span className="font-bold">{battle.winner.email}</span>
              </div>
              <div>
                Scores: {battle.player1.score} - {battle.player2.score}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
