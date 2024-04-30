import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Friends = () => {
  // Sample list of friends
  const [friends, setFriends] = useState([
    { id: 1, name: 'Shaaf' },
    { id: 2, name: 'Farhan' },
    { id: 3, name: 'Haider' },
    { id: 3, name: 'hadi' },
    { id: 3, name: 'Jawad' },

  ]);

  // Function to add a friend
  const addFriend = () => {
    const newFriend = { id: friends.length + 1, name: `Friend ${friends.length + 1}` };
    setFriends([...friends, newFriend]);
  };

  // Function to delete a friend
  const deleteFriend = (id) => {
    setFriends(friends.filter(friend => friend.id !== id));
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
        <div className="lg:px-8 lg:py-20 px-6 py-12">
          <div className="font-bold text-xl text-white mb-2">Friends</div>
          <div className="flex justify-between items-center mb-4">
            <button onClick={addFriend} className="bg-indigo-800 hover:bg-indigo-900 text-white py-2 px-4 rounded-lg transition duration-300">Add Friend</button>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-300">Delete Friend</button>
          </div>
          <ul className="text-white">
            {friends.map(friend => (
              <li key={friend.id} className="mb-2">{friend.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Friends;
