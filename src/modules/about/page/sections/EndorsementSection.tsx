import { EducareMissionContent, EndorsementSectionContent } from "assets/content/VissionAndMission";
import { CommonParagraph1 } from "components";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

const EndorsementSection: React.FC = () => {
  return (
    <section
      id="about-mission"
      className="px-4 sm:px-8 md:px-16 lg:px-14 md:py-16 py-6"
    >
      {EndorsementSectionContent && (
        <div className="border-t-8 border-customOriange-200 rounded-2xl shadow-sm shadow-primary-200 p-4 md:p-8 4xl:p-14 text-center space-y-2">
          <CommonParagraph1 className="whitespace-break-spaces">{renderTextWithLinks(EndorsementSectionContent.content)}</CommonParagraph1>
        </div>
      )}
    </section>
  );
};
export default EndorsementSection;