import { useState, useRef, useEffect } from "react";
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

const getDepartmentTeam = (department: TeamEnum): TeamProps[] => {
  switch (department) {
    case TeamEnum.MANAGEMENT:
      return management;
    case TeamEnum.CONTENT_CREATOR:
      return content;
    case TeamEnum.TECHNOLOGIES:
      return tech;
    case TeamEnum.BG_ARTIST:
      return bgArtist;
    case TeamEnum.TWO_D_ANIMATOR:
      return ainmator2d;
    case TeamEnum.THREE_D_ANIMATOR:
      return animator3d;
    case TeamEnum.PRODUCTION_TEAM:
      return production;
    default:
      return [];
  }
};

const getMembers = head;
console.log(getMembers);

//   if (activeDepartment === "All") {
//     featuredMembers = mapTeamWithImages(head).slice(0, 2);

//     otherMembers = [
//       ...mapTeamWithImages(management.slice(0, 1), managementImages),
//       ...mapTeamWithImages(content.slice(0, 1), contentImages),
//       ...mapTeamWithImages(tech.slice(0, 1), techImages),
//       ...mapTeamWithImages(bgArtist.slice(0, 1), bgArtistImages),
//       ...mapTeamWithImages(ainmator2d.slice(0, 1), animator2dImages),
//       ...mapTeamWithImages(animator3d.slice(0, 1), animator3dImages),
//       ...mapTeamWithImages(production.slice(0, 1), productionImages)
//     ];
//   } else {
//     featuredMembers = allTeamMembers.slice(0, 2);
//     otherMembers = allTeamMembers.slice(2);
//   }

const TeamContent: React.FC = () => {
  const [openTeam, setOpenTeam] = useState<TeamEnum>(TeamEnum.ALL);

  const handleClick = (team: TeamEnum) => {
    setOpenTeam(team);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="inset-0 flex justify-center mt-14 mb-14">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold">
              {Description.title}
            </h1>
            <p className="text-sm md:text-lg">
              {Description.description}
            </p>
          </div>
        </div>
        <img
          src={teamBg}
          alt="Team Background"
          className="w-full h-auto rounded-20px mx-auto border-4 border-gray-100"
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {departments.map(item =>
            <button
              key={item}
              onClick={() => handleClick(item as TeamEnum)}
              className={`px-5 py-2 border rounded-md text-sm sm:text-base font-medium transition-all
              ${openTeam === item
                ? "bg-primary-600 text-white border-primary-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-primary-50"}`}
            >
              {item}
            </button>
          )}
        </div>

        <div className="text-center text-lg font-semibold text-gray-700">
          {openTeam === TeamEnum.ALL && <div>All Team Members</div>}
          {openTeam === TeamEnum.BG_ARTIST && <div>BG_ARTIST Team Members</div>}
          {openTeam === TeamEnum.CONTENT_CREATOR &&
            <div>CONTENT_CREATOR Team Members</div>}
          {openTeam === TeamEnum.MANAGEMENT &&
            <div>MANAGEMENT Team Members</div>}
          {openTeam === TeamEnum.PRODUCTION_TEAM &&
            <div>PRODUCTION_TEAM Team Members</div>}
          {openTeam === TeamEnum.TECHNOLOGIES &&
            <div>TECHNOLOGIES Team Members</div>}
          {openTeam === TeamEnum.THREE_D_ANIMATOR &&
            <div>THREE_D_ANIMATOR Team Members</div>}
          {openTeam === TeamEnum.TWO_D_ANIMATOR &&
            <div>TWO_D_ANIMATOR Team Members</div>}
        </div>
      </div>
    </div>
  );
};

//       <TeamNavigation
//         active={activeDepartment}
//         onChange={handleDepartmentChange}
//       />

//       {/* Rest of your JSX remains the same */}
//       <div className="max-w-7xl mx-auto hidden lg:block">
//         <div className="grid grid-cols-3 gap-8 items-start">
//           <div ref={firstColumnRef} className="space-y-6">
//             {featuredMembers.map(member =>
//               <div
//                 key={member.id}
//                 className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-600">
//                   {member.position}
//                 </p>
//                 {activeDepartment === "All" &&
//                   <span className="inline-block mt-2 text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
//                     {member.id <= 2 ? "Head" : "Team Lead"}
//                   </span>}
//               </div>
//             )}
//           </div>

//           <div className="col-span-2">
//             <div
//               className="grid grid-cols-2 gap-6 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-400 scroll hide-scrollbar"
//               style={{ height: columnHeight }}
//             >
//               {otherMembers.map(member =>
//                 <div
//                   key={member.id}
//                   className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
//                 >
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-gray-100"
//                   />
//                   <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm">
//                     {member.position}
//                   </p>
//                   {activeDepartment === "All" &&
//                     <span className="inline-block mt-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
//                       Team Lead
//                     </span>}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile layout remains the same */}
//       <div className="lg:hidden max-w-full mx-auto">
//         {/* ... mobile JSX remains the same ... */}
//       </div>
//     </div>
//   );
// };

export default TeamContent;
