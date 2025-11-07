import {
  about1,
  about2,
  landing1,
  landing10,
  landing2,
  landing3,
  landing4,
  landing5,
  landing6,
  landing7,
  landing8,
  landing9,
  missionVideo,
} from "assets";
import {
  AboutContent1,
  AboutContent2,
  PersonalizedLearningContent,
} from "assets/content/about-us/AboutUs";
import { EducareMissionContent } from "assets/content/VissionAndMission";
import { CommonHeader, CommonParagraph } from "components";

const AboutUsContent: React.FC = () => {
  const listOfImages = [
    landing1,
    landing2,
    landing3,
    landing4,
    landing5,
    landing6,
    landing7,
    landing8,
    landing9,
    landing10,
  ];
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
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-gray-50">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-10">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <CommonHeader>{PersonalizedLearningContent.title}</CommonHeader>
            <CommonParagraph>
              {PersonalizedLearningContent.content}
            </CommonParagraph>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {listOfImages.slice(0, 8).map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-40 sm:h-30 md:h-40 object-cover transform hover:scale-105 transition-transform duration-500"
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="m-10 space-y-4">
        <div className=" flex justify-center my-4 space-x-2">
          <div className="w-1/2 space-y-4">
            <img
              src={about1}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <CommonParagraph>
              <AboutContent1 />
            </CommonParagraph>
          </div>
          <div className="w-1/2 space-y-4">
            <img
              src={about2}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <CommonParagraph>
              <AboutContent2 />
            </CommonParagraph>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsContent;
