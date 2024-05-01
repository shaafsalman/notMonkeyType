import React from 'react';
import MemberCard from './MemberCard';
import member1Pic from  '../../assets/racoon-pedro.gif'; // Import member profile pictures (GIF format)
import member2Pic from  '../../assets/racoon-pedro.gif'; // Import member profile pictures (JPEG format)
import member3Pic from  '../../assets/racoon-pedro.gif'; // Import member profile pictures (GIF format)
import member4Pic from  '../../assets/racoon-pedro.gif'; // Import member profile pictures (JPEG format)

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Team ViaEyes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MemberCard
            profilePic={member1Pic}
            name="Shaaf Salman"
            rollNumber="21L 6083"
            sectionBatch="2021 Batch"
            contactNumber="03174532990"
          />
          <MemberCard
            profilePic={member2Pic}
            name="Haider Khan"
            rollNumber="21L-6067"
            sectionBatch="2021 Batch"
            contactNumber="Member 2 Contact Number"
          />
          <MemberCard
            profilePic={member3Pic}
            name="Mian Abdul hadi"
            rollNumber="21L 6077"
            sectionBatch="2021 Batch"
            contactNumber="03174532990"
          />
          <MemberCard
              profilePic={member4Pic}
              name="Syed Farhan Jaffri"
              rollNumber="21L 6074"
              sectionBatch="2021 Batch"
              contactNumber="03174532990"
          />
        </div>
       
      </div>
    </div>
  );
};

export default About;
