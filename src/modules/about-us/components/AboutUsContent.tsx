import { landing2, landing4, missionVideo, RightArrowIcon } from "assets";
import { EducareMissionContent } from "assets/content/VissionAndMission";
import HorizontalScroller from "./sections/HorizontalScroller";
import { Media } from "props/Commonprops";
import PersonalizedLearningSection from "./sections/PersonalizedLearningSection";
import DCDDUserSection from "./sections/DCDDUserSection";
import MembershipSection from "./sections/MembershipSection";
import FeedBackCarousel from "./FeedBackCarousel";
import { Menus } from "layouts/components/ManuList";
import { CommonHeader } from "components";
import { useNavigate } from "react-router-dom";

const AboutUsContent: React.FC = () => {
   const navigate = useNavigate();
  const listOfMedia: Media[] = [
    { type: "video", src: missionVideo },
    { type: "image", src: landing2 },
    { type: "video", src: missionVideo },
    { type: "image", src: landing4 },
  ];
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <section className="relative space-y-4">
        <div className="relative w-full h-auto max-h-[500px] overflow-hidden">
          <video
            className="w-full h-auto max-h-[500px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={missionVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {EducareMissionContent.title}
              </h2>
              <p className="text-xs md:text-2xl max-w-3xl mx-auto leading-relaxed">
                {EducareMissionContent.content}
              </p>
            </div>
          </div>
        </div>
      </section>
      <PersonalizedLearningSection />
      <HorizontalScroller mediaList={listOfMedia} />
      <DCDDUserSection />
      <HorizontalScroller mediaList={listOfMedia} />
      <MembershipSection />
      <FeedBackCarousel />
      <section className="my-10 text-center">
        <CommonHeader>Learn More About Educare</CommonHeader>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {Menus.filter(menu => menu.title.toLowerCase() !== "about").map((menu, index) => (
            <button
              key={index}
               onClick={() => handleNavigate(menu.ref)} 
              className="border border-gray-300 rounded-lg px-6 py-3 text-lg font-semibold 
                 text-gray-800 hover:bg-primary-100 hover:text-primary-700 
                 transition duration-200 ease-in-out shadow-sm 
                 flex items-center justify-center"
            >
              {menu.title} <RightArrowIcon className="ml-2 size-[20px]" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsContent;
