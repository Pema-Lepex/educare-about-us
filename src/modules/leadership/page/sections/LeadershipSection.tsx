import { LeadershipBG } from "assets";

import { founders, teamMembers } from "assets/content/leadership/Leadership";

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
      bg-white rounded-2xl p-1 shadow-[6px_6px_0px_0px_#f97316] mb-4 
      flex items-center justify-center overflow-hidden
      ${isFounder ? "w-44 h-52 md:w-52 md:h-64" : "w-36 h-44 md:w-44 md:h-56"}
    `}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <div className="text-center">
      <h4 className="text-orange-500 font-bold text-sm md:text-base leading-tight">
        {name}
      </h4>
      <p className="text-white text-[10px] md:text-xs font-medium mt-1">
        {role}
      </p>
    </div>
  </div>
);

export default function LeadershipSection() {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat"
    style={{backgroundImage:`url(${LeadershipBG})`}}>
    <section className=" py-20 px-4 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">
          Meet our leadership team
        </h2>

        {/* --- FOUNDER SECTION --- */}
        <div className="mb-24">
          <h3 className="text-orange-500 font-bold text-center tracking-widest mb-10 text-sm md:text-lg uppercase">
            OUR FOUNDER
          </h3>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {founders.map((founder, index) => (
              <LeaderCard key={index} {...founder} isFounder={true} />
            ))}
          </div>
        </div>

        {/* --- LEADERSHIP TEAM GRID --- */}
        <div>
          <h3 className="text-orange-500 font-bold text-center tracking-widest mb-10 text-sm md:text-lg uppercase">
            LEADERSHIP TEAM
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {teamMembers.map((member, index) => (
              <LeaderCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-28"></div>
    </section>
    </div>
  );
}
