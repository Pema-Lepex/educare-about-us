import MainLayout from "layouts/MainLayout";
import CareerOpportunitySection from "./page/sections/CareerOpportunitySection";
import CreativeTalentSection from "./page/sections/TalentSection";

const Career:React.FC = () => {
  return (
    <MainLayout>
      <CareerOpportunitySection/>
      <CreativeTalentSection/>
    </MainLayout>
  )
}
export default Career;