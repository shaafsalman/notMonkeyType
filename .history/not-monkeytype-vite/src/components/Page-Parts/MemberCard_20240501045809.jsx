import React from 'react';

const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
      <img src={profilePic} alt={name} className="w-full h-auto rounded-t-md" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-1">Roll Number: {rollNumber}</p>
        <p className="text-sm text-gray-600 mb-1">Section Batch: {sectionBatch}</p>
        <p className="text-sm text-gray-600 mb-1">Contact Number: {contactNumber}</p>
      </div>
    </div>
  );
};

export default MemberCard;
