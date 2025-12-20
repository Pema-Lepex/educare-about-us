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
            <div className="w-[440px] h-[440px] bg-[#F1E8FF] rounded-full" />
          </div>
          <img
            src={NonoImage}
            alt="Nono"
            className="relative w-[440px] h-auto object-contain z-10"
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
                  <div className="absolute inset-0 flex flex-col justify-center items-center  pointer-events-none md:p-10 space-y-2">
                    <h1 className=" text-white text-lg font-black drop-shadow-md">
                      {items.title}
                    </h1>
                    <p className="text-[14px] text-gray-200 font-bold">
                      {items.info}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end items-center  pb-5">
                    <LearnMoreButton onClick={()=>navigate(items.href)} className="bg-primary-500 text-white cursor-pointer">Learn More</LearnMoreButton>
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
