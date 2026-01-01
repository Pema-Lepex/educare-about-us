import { LeadershipBG } from "assets";

import { founders, teamMembers } from "assets/content/leadership/Leadership";
import { CommonHeader2, CommonHeader4, CommonParagraph2 } from "components";
import TeamProfileSection from "./TeamProfileSections";

type Leader = {
  name: string;
  role: string;
  image: string;
  isFounder?: boolean;
};

const LeaderCard = ({ name, role, image, isFounder = false }: Leader) => (
  <div className="flex flex-col items-center relative z-10">
    <div
      className={`
      bg-white rounded-2xl py-6 px-3 shadow-[6px_6px_0px_0px_#F34800] mb-4 
      flex flex-col items-center justify-center overflow-hidden
      ${isFounder ? "w-44 h-52 md:w-52 md:h-64" : "w-36 h-44 md:w-44 md:h-56"}
    `}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="text-center">
        <h4 className="text-border-customOriange-200 font-bold text-sm md:text-base leading-tight">
          {name}
        </h4>
        <p className=" text-[10px] md:text-base text-primary-400 font-medium mt-1">
          {role}
        </p>
      </div>
    </div>
  </div>
);

export default function LeadershipSection() {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${LeadershipBG})` }}
    >
      <section className=" py-10 px-4 relative overflow-hidden">
        {/* --- BACKGROUND IMAGE LAYER --- */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: LeadershipBG,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "overlay",
          }}
        />

        <div className="max-w-7xl 3xl:max-w-full 3xl:px-36 mx-auto relative z-10 mb-10">
          <CommonHeader2 className="text-white font-bold text-center mb-10">
            OUR FOUNDER
          </CommonHeader2>

          {/* --- FOUNDER SECTION --- */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-10 md:gap-16">
              {founders.map((founder, index) => (
                <LeaderCard key={index} {...founder} isFounder={true} />
              ))}
            </div>
          </div>
          <div>
            <div
                  className="border-t-4 border-customOriange-200 bg-white rounded-xl py-5 px-9 shadow-md"
                >
              {founders.map((item) => (
                <div
                  key={item.name}
                >
                  <CommonParagraph2 className="font-light">
                    "{item.quote}"
                  </CommonParagraph2>
                  <CommonParagraph2 className="text-customOriange-200">
                    - {item.name}, {item.role}
                  </CommonParagraph2>
                </div>
              ))}
          </div>
          </div>
          {/* --- LEADERSHIP TEAM GRID --- */}
          {/* <div>
          <CommonHeader4 className="text-orange-500 font-bold text-center tracking-widest mb-10 uppercase">
            LEADERSHIP TEAM
          </CommonHeader4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {teamMembers.map((member, index) => (
              <LeaderCard key={index} {...member} />
            ))}
          </div>
        </div> */}
        </div>
        <TeamProfileSection/>
        <div className="w-full lg:h-28 h-12 3xl:h-32"></div>
      </section>
    </div>
  );
}
