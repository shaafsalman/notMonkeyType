import React from 'react';

const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={profilePic} alt={name} className="w-full h-auto rounded-lg mb-4" />
      <div className="text-gray-900">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{rollNumber}</p>
        <p className="text-sm text-gray-600">{sectionBatch}</p>
        <p className="text-sm text-gray-600">{contactNumber}</p>
      </div>
    </div>
  );
};

export default MemberCard;
