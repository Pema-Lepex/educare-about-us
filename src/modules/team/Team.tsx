import MainLayout from "layouts/MainLayout";
import TeamProfileSection from "./page/sections/TeamProfileSection";
import ManagementTeam from "./page/sections/ManagementTeamSection";
import ProductionTeam from "./page/sections/ProductionTeamSection";
import TechnologyTeam from "./page/sections/TechnologyTeamSections";

const Team:React.FC = () => {
  return (
   <MainLayout >
      <TeamProfileSection/>
      <ManagementTeam/>
      <ProductionTeam/>
      <TechnologyTeam/>
    </MainLayout>
  )
}
export default Team;