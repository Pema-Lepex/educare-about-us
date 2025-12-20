import {
  EducareSkillContent,
  EducareSkillGroupContent,
} from "assets/content/about/About";
import { CommonHeader, CommonParagraph } from "components";

const EducareSkillSection: React.FC = () => {
  return (
    <section
      id="about-educare-skill"
      className="px-4 sm:px-8 md:px-16 lg:px-14 md:pb-16 pb-6"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
        <div className="flex-1 md:text-center lg:text-left space-y-2">
          <CommonHeader>{EducareSkillContent.title}</CommonHeader>
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-extralight italic">
            {EducareSkillContent.subTitle}
          </h4>
          <div className="space-y-4 pt-2">
            <CommonParagraph>{EducareSkillContent.content1}</CommonParagraph>
            <CommonParagraph>{EducareSkillContent.content2}</CommonParagraph>
          </div>
        </div>

        <div className="flex-1 ">
          <div className="grid md:grid-cols-2 gap-2">
            {EducareSkillGroupContent.map((items) => (
              <div
                className=" relative aspect-[9/5] w-full shadow-md transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl rounded-lg overflow-hidden"
                key={items.id}
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
                    className="size-9 p-2  rounded-full object-contain bg-customOriange-100 md:mb-1"
                  />
                  <h1 className=" text-white text-lg font-black drop-shadow-md tracking-wide uppercase">
                    {items.groupName}
                  </h1>
                  <h5 className="mb-[2px] text-white text-[14px] ">
                    {items.eligibility}
                  </h5>
                  <p className="text-[12px] text-gray-200 leading-tight font-bold">
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
