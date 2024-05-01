import React from 'react';

const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img src={profilePic} alt={name} className="w-full h-auto rounded-t-lg" />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white p-2">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-1">Roll Number: {rollNumber}</p>
        <p className="text-sm text-gray-600 mb-1">Section Batch: {sectionBatch}</p>
        <p className="text-sm text-gray-600 mb-1">Contact Number: {contactNumber}</p>
      </div>
    </div>
  );
};

export default MemberCard;
