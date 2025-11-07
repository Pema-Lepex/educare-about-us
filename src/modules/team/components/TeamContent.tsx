import { useState, useRef, useEffect } from "react";
import {
  teamBg,
  headImages,
  managementImages,
  contentImages,
  techImages,
  bgArtistImages,
  animator2dImages,
  animator3dImages,
  productionImages
} from "assets";

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
import TeamNavigation from "./teamNav";

const mapTeamWithImages = (team: any[], images: any) => {
  const imageArray = Object.values(images);
  return team.map((member, index) => ({
    ...member,
    image: imageArray[index % imageArray.length]
  }));
};

const TeamContent: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const firstColumnRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [columnHeight, setColumnHeight] = useState("auto");

  useEffect(
    () => {
      const updateHeight = () => {
        if (firstColumnRef.current) {
          const height = firstColumnRef.current.offsetHeight;
          setColumnHeight(`${height}px`);
        }
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    },
    [activeDepartment]
  );

  // Get team members based on selected department
  const getTeamMembers = () => {
    switch (activeDepartment) {
      case "All":
        const allMembers = [
          ...mapTeamWithImages(head, headImages),
          ...mapTeamWithImages(management, managementImages),
          ...mapTeamWithImages(content, contentImages),
          ...mapTeamWithImages(tech, techImages),
          ...mapTeamWithImages(bgArtist, bgArtistImages),
          ...mapTeamWithImages(ainmator2d, animator2dImages),
          ...mapTeamWithImages(animator3d, animator3dImages),
          ...mapTeamWithImages(production, productionImages)
        ];
        return allMembers;

      case "Management":
        return mapTeamWithImages(management, managementImages);
      case "Content creater":
        return mapTeamWithImages(content, contentImages);
      case "Technologies":
        return mapTeamWithImages(tech, techImages);
      case "Bg Artist":
        return mapTeamWithImages(bgArtist, bgArtistImages);
      case "2D Animator":
        return mapTeamWithImages(ainmator2d, animator2dImages);
      case "3D Animators":
        return mapTeamWithImages(animator3d, animator3dImages);
      case "Production Team":
        return mapTeamWithImages(production, productionImages);
      default:
        return mapTeamWithImages(head, headImages);
    }
  };

  const allTeamMembers = getTeamMembers();

  let featuredMembers: any[] = [];
  let otherMembers: any[] = [];

  if (activeDepartment === "All") {
    featuredMembers = mapTeamWithImages(head, headImages).slice(0, 2);

    otherMembers = [
      ...mapTeamWithImages(management.slice(0, 1), managementImages),
      ...mapTeamWithImages(content.slice(0, 1), contentImages),
      ...mapTeamWithImages(tech.slice(0, 1), techImages),
      ...mapTeamWithImages(bgArtist.slice(0, 1), bgArtistImages),
      ...mapTeamWithImages(ainmator2d.slice(0, 1), animator2dImages),
      ...mapTeamWithImages(animator3d.slice(0, 1), animator3dImages),
      ...mapTeamWithImages(production.slice(0, 1), productionImages)
    ];
  } else {
    featuredMembers = allTeamMembers.slice(0, 2);
    otherMembers = allTeamMembers.slice(2);
  }

  // Group other members into pairs for mobile layout
  const groupedMembers = [];
  for (let i = 0; i < otherMembers.length; i += 2) {
    groupedMembers.push(otherMembers.slice(i, i + 2));
  }

  const handleDepartmentChange = (dept: string) => {
    setActiveDepartment(dept);
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

      <TeamNavigation
        active={activeDepartment}
        onChange={handleDepartmentChange}
      />

      {/* Rest of your JSX remains the same */}
      <div className="max-w-7xl mx-auto hidden lg:block">
        <div className="grid grid-cols-3 gap-8 items-start">
          <div ref={firstColumnRef} className="space-y-6">
            {featuredMembers.map(member =>
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">
                  {member.position}
                </p>
                {activeDepartment === "All" &&
                  <span className="inline-block mt-2 text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {member.id <= 2 ? "Head" : "Team Lead"}
                  </span>}
              </div>
            )}
          </div>

          <div className="col-span-2">
            <div
              className="grid grid-cols-2 gap-6 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-400 scroll hide-scrollbar"
              style={{ height: columnHeight }}
            >
              {otherMembers.map(member =>
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-gray-100"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {member.position}
                  </p>
                  {activeDepartment === "All" &&
                    <span className="inline-block mt-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Team Lead
                    </span>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout remains the same */}
      <div className="lg:hidden max-w-full mx-auto">
        {/* ... mobile JSX remains the same ... */}
      </div>
    </div>
  );
};

export default TeamContent;
