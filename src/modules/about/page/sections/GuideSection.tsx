import { NonoImage } from "assets";
import { EducareSkillGuideContent } from "assets/content/about/About";
import { LearnMoreButton } from "components";
import { useNavigate } from "react-router-dom";

const GuideSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="px-4 sm:px-8 md:px-16 md:py-16 py-8" id="about-guide">
        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-16">
          <div className="relative flex-shrink-0 lg:w-1/3">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[170px] md:w-[240px] lg:w-[200px] xl:w-[250px] 2xl:w-[440px] 3xl:w-[644px]  4xl:w-[700px] 5xl:w-[800px] 6xl:w-[900px] h-[170px] md:h-[240px] lg:h-[200px] xl:h-[250px] 2xl:h-[440px] 3xl:h-[644px] 4xl:h-[700px] 5xl:h-[800px] 6xl:h-[900px] bg-[#F1E8FF] rounded-full" />
            </div>
            <img
              src={NonoImage}
              alt="Nono"
              className="relative w-full h-[15rem] md:h-[20rem] lg:h-auto object-contain z-10"
            />
          </div>
          <div className="flex-1  lg:w-1/3">
            <div className="grid md:grid-cols-2 gap-6 md:gap-7 lg:gap-10">
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
                  <div className="absolute top-[15px] md:-top-[19px] lg:-top-[30px] xl:-top-[24px] 2xl:-top-3 3xl:top-4 4xl:top-8 5xl:top-16  flex flex-col justify-center items-center  pointer-events-none md:p-10 space-y-2 3xl:space-y-2">
                    <div className="p-2 bg-white rounded-full flex items-center justify-center 4xl:mb-10">
                      <img
                        src={items.icon}
                        alt={items.title}
                        className="size-9 md:size-9 lg:size-5 xl:size-8 2xl:size-10 3xl:size-14 4xl:size-16 5xl:size-20 6xl:size-24 object-contain"
                      />
                    </div>

                    <div className="px-3 md:px-4 lg:px-1 xl:px-2 2xl:px-4 3xl:px-8 4xl:px-9 5xl:px-10 6xl:px-11 space-y-1 4xl:space-y-10 text-center">
                      <h1 className=" text-white text-lg font-black drop-shadow-md 6xl:text-6xl 5xl:text-5xl 4xl:text-4xl 2xl:text-3xl xl:text-lg lg:text-xs md:text-xs text-center">
                        {items.title}
                      </h1>
                      <p className="text-[14px] md:text-xs lg:text-[10px] xl:text-[14px] 2xl:text-[19px] 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl text-gray-200 font-light lg:pb-0 pb-4 max-sm:px-6">
                        {items.info}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 -bottom-8 md:-bottom-10 lg:-bottom-12 xl:-bottom-8 2xl:-bottom-8 3xl:-bottom-10 flex flex-col justify-end items-center  pb-4 z-50">
                    <LearnMoreButton
                      onClick={() => navigate(items.href)}
                      className="bg-primary-500 text-white cursor-pointer font-extralight text-base md:text-base lg:text-lg  xl:text-xl 2xl:text-2xl  3xl:text-3xl 4xl:text-4xl 5xl:text-5xl 6xl:text-6xl"
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
