import { ExploreEducareSkillContent } from "assets/content/about/About";
import { CommonHeader2, CommonParagraph1 } from "components";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

const EndorsementSection: React.FC = () => {
  return (
    <section
      id="about-mission"
      className="px-4 sm:px-8 md:px-16 lg:px-14 md:py-16 py-6"
    >
      {ExploreEducareSkillContent && (
        <div className="border-t-8 lg:space-y-5 border-customOriange-200 rounded-2xl shadow-sm shadow-primary-200 p-4 md:p-8 4xl:p-14 text-center space-y-2">
          <CommonHeader2 >{renderTextWithLinks(ExploreEducareSkillContent.title)}</CommonHeader2>
          <CommonParagraph1 className="whitespace-break-spaces">{renderTextWithLinks(ExploreEducareSkillContent.content1)}</CommonParagraph1>
          <CommonParagraph1 className="whitespace-break-spaces">{renderTextWithLinks(ExploreEducareSkillContent.content2)}</CommonParagraph1>
          <CommonParagraph1 className="whitespace-break-spaces">{renderTextWithLinks(ExploreEducareSkillContent.content3)}</CommonParagraph1>
          <CommonParagraph1 className="whitespace-break-spaces">{renderTextWithLinks(ExploreEducareSkillContent.content4)}</CommonParagraph1>
        </div>
      )}
    </section>
  );
};
export default EndorsementSection;