import { NonoImage } from "assets";
import { EducareSkillGuideContent } from "assets/content/about/About";
import { LearnMoreButton } from "components";
import { useNavigate } from "react-router-dom";

const GuideSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="px-4 sm:px-8 md:px-16 py-16" id="about-guide">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[200px] md:w-[440px] lg:w-[200px] xl:w-[250px] 2xl:w-[440px] 3xl:w-[644px] h-[200px] md:h-[440px] lg:h-[200px] xl:h-[250px] 2xl:h-[440px] 3xl:h-[644px] bg-[#F1E8FF] rounded-full" />
            </div>
            <img
              src={NonoImage}
              alt="Nono"
              className="relative md:w-[440px] lg:w-[200px] xl:w-[400px] 2xl:w-[440px] 3xl:w-[644px] h-auto object-contain z-10"
            />
          </div>
          <div className="flex-1 ">
            <div className="grid md:grid-cols-2 gap-2">
              {EducareSkillGuideContent.map((items) => (
                <div
                  className=" relative w-full transform transition duration-500 "
                  key={items.id}
                >
                  <img
                    src={items?.frame}
                    alt={`${items.info} icon`}
                    className="w-full h-auto object-cover object-center transform "
                  />
                  <div className="absolute top-[60px] md:top-2 xl:top-5 2xl:top-8 3xl:top-19  flex flex-col justify-center items-center  pointer-events-none md:p-10 space-y-2 3xl:space-y-2">
                    <div className="p-2 bg-white rounded-full flex items-center justify-center">
                      <img
                        src={items.icon}
                        alt={items.title}
                        className="size-9 md:size-9 lg:size-8 2xl:size-10 3xl:size-14 object-contain"
                      />
                    </div>

                    <h1 className=" text-white text-lg font-black drop-shadow-md 2xl:text-3xl xl:text-xl lg:text-base md:text-xs text-center">
                      {items.title}
                    </h1>
                    <p className="text-[14px] md:text-xs lg:text-base 3xl:text-xl  text-gray-200 font-light 2xl:px-10 lg:pb-0 pb-4 max-sm:px-6">
                      {items.info}
                    </p>
                  </div>
                  <div className="absolute inset-0 xl:bottom-5 2xl:bottom-8 3xl:bottom-10 flex flex-col justify-end items-center  pb-4">
                    <LearnMoreButton
                      onClick={() => navigate(items.href)}
                      className="bg-primary-500 text-white cursor-pointer"
                    >
                      Learn More
                    </LearnMoreButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GuideSection;
