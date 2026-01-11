import { EducareSkillContent, EducareSkillGroupContent } from "assets/content/about/About";
import { CommonHeader2, CommonParagraph1 } from "components";
import { useNavigate } from "react-router-dom";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

const EducareSkillSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      id="about-educare-skill"
      className="px-4 sm:px-8 md:px-16 lg:px-14 md:pb-16 pb-6"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 3xl:gap-16 4xl:gap-20">
        <div className="flex-1 md:text-center lg:text-left space-y-2 4xl:space-y-8">
          <CommonHeader2>{EducareSkillContent.title}</CommonHeader2>
          <h4 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl 6xl:text-[9.75rem] font-extralight italic">
            {EducareSkillContent.subTitle}
          </h4>
          <div className="space-y-4 4xl:space-y-8 pt-2">
            <CommonParagraph1>{renderTextWithLinks(EducareSkillContent.content1)}</CommonParagraph1>
            <CommonParagraph1>{renderTextWithLinks(EducareSkillContent.content2)}</CommonParagraph1>
            <CommonParagraph1>{renderTextWithLinks(EducareSkillContent.content3)}</CommonParagraph1>
          </div>
        </div>

        <div className="flex-1 ">
          <div className="grid md:grid-cols-2 gap-2">
            {EducareSkillGroupContent.map((items) => (
              <div
                className=" relative aspect-[9/5] w-full shadow-md transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl rounded-lg overflow-hidden"
                key={items.id}
                onClick={() =>  navigate(`/why-choose-us?tab=${items.redirectUrl}`)}
              >
                <img
                  src={items?.groupImage}
                  alt={`${items.info} icon`}
                  className="w-fullh-full object-cover object-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute p-2 inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent pointer-events-none md:p-4 ">
                  <img
                    src={items.groupIcon}
                    alt="icon"
                    className="size-9 4xl:size-16 p-2  rounded-full object-contain bg-white/90 md:mb-1 4xl:mb-4"
                  />
                  <h1 className=" text-white text-lg 2xl:text-2xl  3xl:text-3xl 4xl:text-4xl 5xl:text-5xl 6xl:text-6xl font-black drop-shadow-md tracking-wide">
                    {items.groupName}
                  </h1>
                  <h5 className="mb-[2px] 4xl:my-3 text-white text-[14px] 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl">
                    {items.eligibility}
                  </h5>
                  <p className="text-[12px] 2xl:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl 6xl:text-3xl text-gray-200 leading-tight font-bold">
                    {items.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducareSkillSection;
