import {
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
} from "assets";
import { PersonalizedLearningContent } from "assets/content/about-us/AboutUs";
import { CommonHeader, CommonParagraph } from "components";

const PersonalizedLearningSection: React.FC = () => {
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
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-primary-50">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <CommonHeader>{PersonalizedLearningContent.title}</CommonHeader>
          <CommonParagraph>
            {PersonalizedLearningContent.content}
          </CommonParagraph>
        </div>

        <div className="flex-1 relative overflow-hidden min-h-[300px] md:h-[40vh]">
          <div className="w-full  relative overflow-hidden h-[300px] md:h-[40vh]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-scroll-grid">
              {[...listOfImages, ...listOfImages].map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl"
                >
                  <img
                    className="w-full h-40 object-cover opacity-80"
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-primary-50 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scrollGrid {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-grid {
          display: grid;
          grid-auto-rows: auto;
          animation: scrollGrid 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PersonalizedLearningSection;
