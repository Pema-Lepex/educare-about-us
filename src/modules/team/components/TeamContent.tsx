import { useState } from "react";
import { departments } from "./teamNav";
import { TeamEnum } from "props/Enum";
import { TeamProps } from "props/Commonprops";
import {
  Description,
  head,
  management,
  content,
  tech,
  bgArtist,
  ainmator2d,
  animator3d,
  production
} from "assets/content/team/temInfo";
import { teamBg } from "assets";

// ---------------- HELPERS ---------------- //
const getDepartmentTeam = (department: TeamEnum): TeamProps[] => {
  const map = {
    [TeamEnum.MANAGEMENT]: management,
    [TeamEnum.CONTENT_CREATOR]: content,
    [TeamEnum.TECHNOLOGIES]: tech,
    [TeamEnum.BG_ARTIST]: bgArtist,
    [TeamEnum.TWO_D_ANIMATOR]: ainmator2d,
    [TeamEnum.THREE_D_ANIMATOR]: animator3d,
    [TeamEnum.PRODUCTION_TEAM]: production
  };
  return map[department] || [];
};

// ---------------- TEAM CARD COMPONENTS ---------------- //

/* Regular Team Member Card */
const TeamCard: React.FC<{ member: TeamProps }> = ({ member }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 bg-white cursor-pointer">
      {/* Main Card Content */}
      <div className="relative z-10 bg-white flex flex-col justify-end items-center">
        <img
          src={member.img}
          alt={member.name}
          className="w-56 h-56  transition-transform duration-300 group-hover:scale-105 rounded-full"
        />
        <div className="p-5 text-center">
          <h4 className="text-xl font-semibold text-gray-900">
            {member.name}
          </h4>
          <p className="text-lg font-semibold text-primary-400 mt-1">
            {member.position}
          </p>
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div
        className="
          absolute inset-0 bg-primary-500 bg-opacity-90 text-white
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex flex-col items-center justify-center p-6 z-20
        "
      >
        <p className="text-xl font-bold text-center">{member.name}</p>
        <p className="text-md font-semibold text-primary-100 mb-4 text-center">
          {member.position}
        </p>
        <div className="text-sm text-gray-200 overflow-y-auto max-h-40 text-center leading-relaxed">
          <p>{member.description}</p>
        </div>
      </div>
    </div>
  );
};

/* Head Team Card */
const HeadCard: React.FC<{ member: TeamProps }> = ({ member }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer">
      {/* Main Card Content */}
      <div className="relative z-10 bg-white">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-72 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-6 md:p-8 bg-white">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {member.name}
          </h3>
          <p className="text-xl font-semibold text-primary-400 mt-2">
            {member.position}
          </p>
        </div>
      </div>

      {/* Hover Overlay */}
      <div
        className="
          absolute inset-0 bg-primary-500 bg-opacity-90 text-white
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex flex-col items-center justify-center p-8 z-20
        "
      >
        <p className="text-2xl md:text-3xl font-bold text-center mb-2">{member.name}</p>
        <p className="text-lg font-semibold text-primary-100 mb-6 text-center">
          {member.position}
        </p>
        <div className="text-base text-gray-200 overflow-y-auto max-h-60 text-center leading-relaxed">
          <p>{member.description}</p>
        </div>
      </div>
    </div>
  );
};

// ---------------- MAIN COMPONENT ---------------- //

const TeamContent: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState<TeamEnum>(
    TeamEnum.MANAGEMENT
  );

  const departmentMembers = getDepartmentTeam(activeDepartment);
  
  // Get first two members as heads and the rest as regular members
  const headMembers = departmentMembers.slice(0, 2);
  const regularMembers = departmentMembers.slice(2);

  return (
    <>
      {/* <section className="w-full px-4 sm:px-10 md:px-10 lg:px-20 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Team
          </h2>
          <p className="text-gray-500 mt-2">
            Explore creative ideas, behind the scenes, and storytelling tips.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg mb-14">
          <img
            src={teamBg}
            alt="Team Background"
            className="w-full h-auto mx-auto"
          />
          <div className="p-6 md:p-8 bg-white">
            {Description.description}
          </div>
        </div>
      </section> */}

      {/* TEAM CONTENT */}
      <section className="w-full md:px-10 lg:px-20 py-16 bg-white">
        {/* Head Section */}
        {/* <div className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 border-b-4 pb-8">
            <div className="flex flex-col items-center justify-center text-center lg:hidden">
              <img
                src={head[0].img}
                alt={head[0].name}
                className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900">
                {head[0].name}
              </h3>
              <p className="text-lg font-semibold text-primary-400 mt-2 mb-4">
                {head[0].position}
              </p>
            </div>
            
            <div className="flex items-center mx-4">
              <div className="text-gray-600 text-lg leading-relaxed">
                {head[0].description}
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center text-center">
              <img
                src={head[0].img}
                alt={head[0].name}
                className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900">
                {head[0].name}
              </h3>
              <p className="text-lg font-semibold text-primary-400 mt-2 mb-4">
                {head[0].position}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={head[1].img}
                alt={head[1].name}
                className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900">
                {head[1].name}
              </h3>
              <p className="text-lg font-semibold text-primary-400 mt-2">
                {head[1].position}
              </p>
            </div>

            <div className="flex items-center mx-4">
              <div className="text-gray-600 text-lg leading-relaxed">
                {head[1].description}
              </div>
            </div>
          </div>
        </div> */}

        {/* NAVIGATION */}
        <div className="w-full flex justify-center mb-12">
          <nav className="w-full flex flex-wrap gap-4 sm:gap-6 md:gap-8 
                text-gray-600 justify-center text-sm sm:text-base">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept as TeamEnum)}
                className={`pb-2 transition-all ${
                  activeDepartment === dept
                    ? "text-black font-semibold border-b-2 border-black flex"
                    : "hover:text-black"
                }`}
              >
                {dept}
              </button>
            ))}
          </nav>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {activeDepartment} Team
          </h2>
          <p className="text-gray-500 mt-2">
            Meet our talented team members and their contributions
          </p>
        </div>

        {/* Head Cards */}
        {/* {headMembers.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 p-4">
            {headMembers.map((member, index) => (
              <HeadCard member={member} key={index} />
            ))}
          </div>
        )} */}
        
        {/* Regular Team Cards Grid */}
        {regularMembers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            {regularMembers.map((member, index) => (
              <TeamCard member={member} key={index} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default TeamContent;