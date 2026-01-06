import { LeadershipBG } from "assets";

import { founders, teamMembers } from "assets/content/leadership/Leadership";
import { CommonHeader2, CommonHeader4, CommonParagraph1, CommonParagraph2, HrefButton } from "components";
import TeamProfileSection from "./TeamProfileSections";
import { ArrowRight } from "lucide-react";

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
      bg-white rounded-2xl py-6 px-3 border border-customOriange-200 shadow-md mb-4 
      flex flex-col items-center justify-center overflow-hidden
      ${isFounder ? "w-44 h-52 md:w-52 md:h-64 lg:w-[15rem] lg:h-[18rem] xl:w-[18rem] xl:h-[22rem] 2xl:w-[22rem] 2xl:h-[26rem] 3xl:w-[26rem] 3xl:h-[30rem] 4xl:w-[30rem] 4xl:h-[36rem] 5xl:w-[36rem] 5xl:h-[42rem]" : "w-36 h-44 md:w-44 md:h-56"}
    `}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="text-center">
        <h4 className="text-border-customOriange-200 font-bold text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl leading-tight">
          {name}
        </h4>
        <p className=" text-[10px] md:text-base xl:text-lg 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl  text-primary-500 font-medium mt-1">
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
      // style={{ backgroundImage: `url(${LeadershipBG})` }}
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
          <CommonHeader2 className="text-customOriange-200 font-bold text-center mb-10">
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
                  className="mb-4 4xl:mb-10 last:mb-0"
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
        </div>
        <TeamProfileSection/>
        <div className="flex flex-col items-center text-center space-y-6 md:mt-16 mt-8">
        <CommonParagraph1 className="text-gray-700  font-medium">
          If you wish to join the team, click on the link below
        </CommonParagraph1>
        <HrefButton className="bg-[#1b364d] text-white hover:bg-[#254a69] flex justify-center items-center">
          Join Our Team <ArrowRight className="w-5 h-5 lg:size-6 2xl:size-7 3xl:size-8 4xl:size-9 5xl:size-10 ml-2" />
        </HrefButton>
      </div>
        
      </section>
      <div className="w-full lg:h-28 h-12 3xl:h-32 4xl:h-[500px]"></div>
    </div>
  );
}
