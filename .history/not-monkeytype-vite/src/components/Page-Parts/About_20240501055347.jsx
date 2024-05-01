import React from 'react';
import MemberCard from './MemberCard';
import TeamCard from './TeamCard';
import ProjectCard from './ProjectCard';
import member1Pic from '../../assets/racoon-pedro.gif'; 
import member2Pic from '../../assets/racoon-pedro.gif'; 
import member3Pic from '../../assets/racoon-pedro.gif'; 
import member4Pic from '../../assets/racoon-pedro.gif'; 

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Team</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <TeamCard
                name="Via Eyes"
                teacher="Teacher Name"
                assistant="Assistant Name"
              />
            </div>
          </div>
          
          {/* Project Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard
                name="Project Name"
                technologiesUsed="Technologies Used"
                githubLink="https://github.com/example"
              />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            name="Mian Abdul Hadi"
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
