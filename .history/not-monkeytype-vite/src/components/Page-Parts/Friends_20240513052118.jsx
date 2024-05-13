import React, { useState } from 'react';

const Friends = () => {
  // Sample list of friends
  const [friends, setFriends] = useState([
    { id: 1, name: 'Shaaf' },
    { id: 2, name: 'Farhan' },
    { id: 3, name: 'Haider' },
    { id: 4, name: 'Hadi' },
    { id: 5, name: 'Jawad' },
  ]);

  
  return (
    <div className="max-w-screen-xl rounded-lg mx-auto mt-20 mb-40 overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105">
    <div className="px-6 py-4">
      <div className="font-bold text-4xl text-white mb-2">Friends</div>
        <div className="flex pr-2 items-center mb-8">
          <button onClick={addFriend} className="bg-indigo-800 hover:bg-indigo-900 text-white py-3 px-8 rounded-lg transition duration-300 focus:outline-none">Add Friend</button>
          <button onClick={() => deleteFriend(friends.length)} className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg transition duration-300 focus:outline-none">Delete Last Friend</button>
        </div>
        <ul className="text-white text-lg">
          {friends.map(friend => (
            <li key={friend.id} className="mb-4">{friend.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
