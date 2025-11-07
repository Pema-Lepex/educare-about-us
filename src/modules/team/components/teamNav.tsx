import React from "react";

interface TeamNavigationProps {
  active: string;
  onChange: (dept: string) => void;
}

export const departments = [
  "All",
  "Management",
  "Content creater",
  "Technologies",
  "Bg Artist",
  "2D Animator",
  "3D Animators",
  "Production Team"
];

const TeamNavigation: React.FC<TeamNavigationProps> = ({
  active,
  onChange
}) => {
  return (
    <div className="w-full flex justify-center mt-10 mb-6">
      <nav className="flex gap-8 text-gray-600">
        {departments.map(dept =>
          <button
            key={dept}
            onClick={() => onChange(dept)}
            className={`pb-2 transition-all ${active === dept
              ? "text-black font-semibold border-b-2 border-black"
              : "hover:text-black"}`}
          >
            {dept}
          </button>
        )}
      </nav>
    </div>
  );
};

export default TeamNavigation;
