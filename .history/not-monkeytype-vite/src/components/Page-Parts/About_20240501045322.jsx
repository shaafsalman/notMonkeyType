import React from 'react';
import MemberCard from './MemeberCard';
import member1Pic from  '../../assets/racoon-pedro.gif'; // Import member profile pictures (GIF format)
import member2Pic from  '../../assets/racoon-pedro.gif'; // Import member profile pictures (JPEG format)
import member3Pic from  '../../assets/racoon-pedro.gif'; // Import member profile pictures (GIF format)
import member4Pic from  '../../assets/racoon-pedro.gif'; // Import member profile pictures (JPEG format)

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Team: alon NAME vIAeUES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <MemberCard
            profilePic={member1Pic}
            name="Member 1 Name"
            rollNumber="Member 1 Roll Number"
            sectionBatch="Member 1 Section Batch"
            contactNumber="Member 1 Contact Number"
          />
          <MemberCard
            profilePic={member2Pic}
            name="Member 2 Name"
            rollNumber="Member 2 Roll Number"
            sectionBatch="Member 2 Section Batch"
            contactNumber="Member 2 Contact Number"
          />
          <MemberCard
            profilePic={member3Pic}
            name="Member 3 Name"
            rollNumber="Member 3 Roll Number"
            sectionBatch="Member 3 Section Batch"
            contactNumber="Member 3 Contact Number"
          />
          <MemberCard
            profilePic={member4Pic}
            name="Member 4 Name"
            rollNumber="Member 4 Roll Number"
            sectionBatch="Member 4 Section Batch"
            contactNumber="Member 4 Contact Number"
          />
        </div>
        <div className="mt-8">
          <p className="text-gray-600">Team Details:</p>
          <ul className="list-disc list-inside text-gray-800">
            <li>Team Name: alon NAME vIAeUES</li>
            <li>Team Lead: [Team Lead Name]</li>
            <li>Project Title: [Project Title]</li>
            <li>Project Description: [Project Description]</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
