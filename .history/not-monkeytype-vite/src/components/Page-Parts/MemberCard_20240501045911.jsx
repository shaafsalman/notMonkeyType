import React from 'react';

const MemberCard = ({ profilePic, name, rollNumber, sectionBatch, contactNumber }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img src={profilePic} alt={name} className="w-full h-auto rounded-t-lg object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <p className="text-white text-center font-semibold">{name}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-2">Roll Number: {rollNumber}</p>
        <p className="text-gray-600 mb-2">Section Batch: {sectionBatch}</p>
        <p className="text-gray-600 mb-2">Contact Number: {contactNumber}</p>
      </div>
    </div>
  );
};

export default MemberCard;
