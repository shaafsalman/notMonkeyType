import React from 'react';

const TeamCard = ({ name, supervisor, teacher, assistant }) => {
  return (
    <div id ="verticalCard" className="bg-white shadow-lg w-max rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-1">
      <div className="p-4">
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-sm text-xl text-gray-600 mb-2">Teacher: {teacher}</p>
          <p className="text-sm text-gray-600 mb-2">Assistant: {assistant}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
