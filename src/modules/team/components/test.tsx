import { useState } from "react";
import { departments } from "./teamNav";

export enum TeamEnum {
  ALL = "All",
  MANAGEMENT = "Management",
  CONTENT_CREATOR = "Content Creator",
  TECHNOLOGIES = "Technologies",
  BG_ARTIST = "Bg Artist",
  TWO_D_ANIMATOR = "2D Animator",
  THREE_D_ANIMATOR = "3D Animators",
  PRODUCTION_TEAM = "Production Team",
}

const TeamContent: React.FC = () => {
  const [openTeam, setOpenTeam] = useState<TeamEnum>(TeamEnum.ALL);

  const handleClick = (team: TeamEnum) => {
    setOpenTeam(team);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {departments.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item as TeamEnum)}
            className={`px-5 py-2 border rounded-md text-sm sm:text-base font-medium transition-all
              ${
                openTeam === item
                  ? "bg-primary-600 text-white border-primary-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-primary-50"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="text-center text-lg font-semibold text-gray-700">
        {openTeam === TeamEnum.ALL && <div>All Team Members</div>}
        {openTeam === TeamEnum.BG_ARTIST && <div>BG_ARTIST Team Members</div>}
        {openTeam === TeamEnum.CONTENT_CREATOR && (
          <div>CONTENT_CREATOR Team Members</div>
        )}
        {openTeam === TeamEnum.MANAGEMENT && <div>MANAGEMENT Team Members</div>}
        {openTeam === TeamEnum.PRODUCTION_TEAM && (
          <div>PRODUCTION_TEAM Team Members</div>
        )}
        {openTeam === TeamEnum.TECHNOLOGIES && (
          <div>TECHNOLOGIES Team Members</div>
        )}
        {openTeam === TeamEnum.THREE_D_ANIMATOR && (
          <div>THREE_D_ANIMATOR Team Members</div>
        )}
        {openTeam === TeamEnum.TWO_D_ANIMATOR && (
          <div>TWO_D_ANIMATOR Team Members</div>
        )}
      </div>
    </div>
  );
};

export default TeamContent;
