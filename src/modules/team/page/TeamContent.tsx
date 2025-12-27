import Carousel from "components/Carousel";
import ManagementTeam from "./sections/ManagementTeamSection";
import ProductionTeam from "./sections/ProductionTeamSection";
import TeamProfileSection from "./sections/TeamProfileSection";
import TechnologyTeam from "./sections/TechnologyTeamSections";
import { slides } from "modules/about/page/components/SliderContent";
import { CommonHeader1, CommonHeader4, CommonParagraph3 } from "components";
import { TeamHeader } from "assets/content/team/TemHeader";

const TeamContent: React.FC = () => {
  return (
    <>
      <section className="relative space-y-4" id="about-carousel">
        <Carousel slides={slides} />
      </section>
        <div className="flex flex-col items-center text-center justify-end md:mt-12 mt-6">
          <CommonHeader1 className="font-bold text-yellow-300 mb-4">
            {TeamHeader.titel}
          </CommonHeader1>
          <CommonHeader4 className=" font-bold mx-auto mb-2">
            {TeamHeader.subTitel}
          </CommonHeader4>

          <CommonParagraph3 className="mx-auto font-light">
            {TeamHeader.description}
          </CommonParagraph3>
        </div>
      <ManagementTeam />
      <ProductionTeam />
      <TechnologyTeam />
    </>
  );
};
export default TeamContent;
