import { LeadersOfIBest } from "assets/content/leadership/Leadership";
import React from "react"; 
import { FounderCard, OtherLeaderCard } from "../LeaderCard";

const Leader: React.FC = () => {
  const CEODetails = LeadersOfIBest.filter(
    (leader) =>
      leader.position === "CEO & Founder" ||
      leader.position === "Chief Operations Officer"
  );

  const otherLeaders = LeadersOfIBest.filter(
    (leader) =>
      leader.position !== "CEO & Founder" &&
      leader.position !== "Chief Operations Officer"
  );

  return (
    <section className="flex flex-col justify-center items-center gap-16 my-20 px-4">
      <h2 className="text-4xl font-extrabold text-primary-500 border-b-4 border-primary-500 pb-2">
        Our Founder
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 w-full max-w-5xl">
        {CEODetails.map((leader) => (
          <FounderCard leader={leader} key={leader.id}/>
        ))}
      </div>
      <h2 className="text-4xl font-extrabold text-primary-500 border-b-4 border-primary-500 pb-2">
        Meet Our Leadership Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full max-w-6xl">
        {otherLeaders.map((leader) => (
         <OtherLeaderCard leader={leader} key={leader.id}/>
        ))}
      </div>
    </section>
  );
};

export default Leader;
