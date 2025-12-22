import ManagementTeam from "./sections/ManagementTeamSection";
import ProductionTeam from "./sections/ProductionTeamSection";
import TeamProfileSection from "./sections/TeamProfileSection";
import TechnologyTeam from "./sections/TechnologyTeamSections";

const TeamContent:React.FC = () => {
  return (
   < >
      <TeamProfileSection/>
      <ManagementTeam/>
      <ProductionTeam/>
      <TechnologyTeam/>
    </>
  )
}
export default TeamContent;