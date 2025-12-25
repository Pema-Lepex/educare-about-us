import { EducareMissionContent } from "assets/content/VissionAndMission";
import { CommonHeader2, CommonParagraph1 } from "components";

const MissionSection: React.FC = () => {
  return (
    <section
      id="about-mission"
      className="px-4 sm:px-8 md:px-16 lg:px-14 md:py-16 py-6"
    >
      {EducareMissionContent && (
        <div className="border-t-8 border-customOriange-200 rounded-2xl shadow-sm shadow-primary-200 p-8 text-center space-y-2">
          <CommonHeader2 className="text-customOriange-200">
            {EducareMissionContent.title}
          </CommonHeader2>
          <CommonParagraph1>{EducareMissionContent.content}</CommonParagraph1>
        </div>
      )}
    </section>
  );
};
export default MissionSection;
