import { HMBGImage, HMK5Image, HMBGMobileImage } from "assets";

const ImpactHeaderSection: React.FC = () => {
  return (
    <section>
      <div className="relative">
        {/* Background image */}
       <img
          src={HMBGImage}
          alt="background"
          className="hidden sm:block w-full object-cover bg-blue-400/90"
        />

        {/* Mobile background */}
        <img
          src={HMBGMobileImage}
          alt="background mobile"
          className="block sm:hidden w-full object-cover bg-blue-400/90"
        />
        <div className="absolute bottom-0 px-4 sm:px-8 md:px-12 w-full">
          <div className="flex flex-row justify-center items-center w-full gap-4 sm:gap-8 md:gap-12 flex-wrap sm:flex-nowrap">
            {/* Image */}
            <img
              src={HMK5Image}
              alt="king image"
              className="w-32 sm:w-48 md:w-64 lg:w-80 object-contain flex-shrink-0"
            />
            <div className="flex-1 max-w-full sm:max-w-3xl text-left">
              <p className="text-[] sm:text-base md:text-lg font-bold text-white mb-3 sm:mb-4">
                We need to be prepared for the future so that every one of us is
                equipped with the skills, competencies and experience to succeed
                and compete in the world. We must give utmost priority to skill,
                up-skill, and re-skill our people to make them world-ready.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-yellow-400">
                - His Majesty The King of Bhutan, 2021 National Day Royal Address
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHeaderSection;
