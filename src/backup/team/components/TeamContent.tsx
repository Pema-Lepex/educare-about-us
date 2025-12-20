import { useState } from "react";
import { departments } from "./teamNav";
import { TeamEnum } from "props/Enum";
import { TeamProps } from "props/Commonprops";
import {
  management,
  content,
  tech,
  bgArtist,
  ainmator2d,
  animator3d,
  production
} from "assets/content/team/temInfo";

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

// ---------------- TEAM CARD ---------------- //

const TeamCard: React.FC<{ member: TeamProps }> = ({ member }) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-white shadow-lg 
      hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer
      border border-gray-100 hover:border-primary-200"
    >
      {/* Image */}
      <div className="flex justify-center pt-8 pb-2">
        <div className="relative">
          <img
            src={member.img}
            alt={member.name}
            className="w-36 h-36 object-cover rounded-full transition-all duration-500 
            group-hover:scale-110 group-hover:rotate-2 shadow-md"
          />
          {/* Gradient overlay on image hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Name + Position */}
      <div className="px-6 pb-6 text-center">
        <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
          {member.name}
        </h4>
        <p className="text-primary-500 font-medium mt-2 group-hover:text-primary-600 transition-colors duration-300">
          {member.position}
        </p>
      </div>

      {/* Hover Overlay */}
      <div
        className="
        absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 text-white 
        opacity-0 group-hover:opacity-100 transition-all duration-500
        flex flex-col justify-center items-center p-8 text-center
        backdrop-blur-sm"
      >
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
          <p className="text-primary-200 font-medium mb-6">{member.position}</p>
          <p className="text-sm leading-relaxed max-h-40 overflow-y-auto px-2">
            {member.description}
          </p>
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

  const members = getDepartmentTeam(activeDepartment);

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-20 bg-gradient-to-br from-gray-50 to-white">

      {/* Page Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-primary-600">Team</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Meet the talented professionals who bring creativity and innovation to every project
        </p>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-center mb-16">
        <nav className="flex flex-wrap gap-3 sm:gap-4 justify-center max-w-4xl mx-auto">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept as TeamEnum)}
              className={`
                px-6 py-3 rounded-xl font-medium transition-all duration-300
                border-2 text-sm sm:text-base min-w-[120px]
                ${
                  activeDepartment === dept
                    ? "bg-primary-500 text-white border-primary-500 shadow-lg transform scale-105"
                    : "text-gray-600 border-gray-200 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50"
                }
              `}
            >
              {dept}
            </button>
          ))}
        </nav>
      </div>

      {/* Department Heading */}
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          {activeDepartment} Team
        </h3>
        <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
      </div>

      {/* TEAM GRID - Centered and Justified */}
      <div className="flex justify-center">
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
          gap-8 max-w-7xl w-full justify-items-center
        ">
          {members.map((member, idx) => (
            <div key={idx} className="w-full max-w-[280px]">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {members.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No team members found for this department.</p>
        </div>
      )}
    </section>
  );
};

export default TeamContent;