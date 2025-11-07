import { landing1, landing2, landing3, landing4, landing5, landing6, landing7, landing8, landing9, landing10 } from "assets";
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
    <>
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-primary-50 ">
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
                className="overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl"
                style={{
                  animation: `fadeIn 0.5s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <img
                  className="w-full h-40 sm:h-30 md:h-40 object-cover"
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default PersonalizedLearningSection;
