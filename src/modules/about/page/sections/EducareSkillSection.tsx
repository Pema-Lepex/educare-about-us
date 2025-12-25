import {
  EducareSkillContent,
  EducareSkillGroupContent,
} from "assets/content/about/About";
import { CommonHeader2, CommonParagraph1 } from "components";
import { useNavigate } from "react-router-dom";

const EducareSkillSection: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = (groupName: string) => {
    const tabMapping: Record<string, string> = {
      "Chey Chey": "cheychey",
      "Educare Kids": "kids",
      "Primary Level": "primary",
      "Intermediate Level": "intermediate",
    };

    const activeTab = tabMapping[groupName] || "cheychey";
    navigate(`/why-choose-us?tab=${activeTab}`);
  };
  return (
    <section
      id="about-educare-skill"
      className="px-4 sm:px-8 md:px-16 lg:px-14 md:pb-16 pb-6"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
        <div className="flex-1 md:text-center lg:text-left space-y-2">
          <CommonHeader2>{EducareSkillContent.title}</CommonHeader2>
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-extralight italic">
            {EducareSkillContent.subTitle}
          </h4>
          <div className="space-y-4 pt-2">
            <CommonParagraph1>{EducareSkillContent.content1}</CommonParagraph1>
            <CommonParagraph1>{EducareSkillContent.content2}</CommonParagraph1>
          </div>
        </div>

        <div className="flex-1 ">
          <div className="grid md:grid-cols-2 gap-2">
            {EducareSkillGroupContent.map((items) => (
              <div
                className=" relative aspect-[9/5] w-full shadow-md transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl rounded-lg overflow-hidden"
                key={items.id}
                onClick={() => handleNavigation(items.groupName)}
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
                  <h1 className=" text-white text-lg 2xl:text-2xl font-black drop-shadow-md tracking-wide uppercase">
                    {items.groupName}
                  </h1>
                  <h5 className="mb-[2px] text-white text-[14px] 2xl:text-lg">
                    {items.eligibility}
                  </h5>
                  <p className="text-[12px] 2xl:text-base text-gray-200 leading-tight font-bold">
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
