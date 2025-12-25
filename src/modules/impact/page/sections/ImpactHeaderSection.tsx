import { HMBGImage, HMK5Image, HMBGMobileImage } from "assets";

const ImpactHeaderSection: React.FC = () => {
  return (
    <section>
      <div className="relative">
        <img
          src={HMBGImage}
          alt="background"
          className="hidden sm:block w-full object-cover bg-blue-400/90"
        />
        <img
          src={HMBGMobileImage}
          alt="background mobile"
          className="block sm:hidden w-full object-cover bg-blue-400/90"
        />
        <div className="flex md:hidden absolute bottom-0">
          <img
            src={HMK5Image}
            alt="king image"
            className="w-[20rem]  md:w-64 lg:w-[34rem] 2xl:w-[45rem] object-contain flex-shrink-0 lg:ml-[11rem] 2xl:ml-[15rem] "
          />
        </div>
        <div className="absolute top-10 md:top-auto md:bottom-0 left-1/3 md:left-0 w-[200px] md:w-full px-4 sm:px-8 md:px-12">
          <div className="flex flex-row justify-center items-center w-full gap-4 sm:gap-8 md:gap-12 flex-wrap sm:flex-nowrap">
            <img
              src={HMK5Image}
              alt="king image"
              className="w-20  md:w-64 lg:w-[34rem] 2xl:w-[45rem] object-contain flex-shrink-0 lg:ml-[11rem] 2xl:ml-[15rem] md:flex hidden"
            />
            <div className="flex-1 text-left">
              <p className="text-[7px] md:text-[15px] lg:text-xl text-white mb-3 sm:mb-4">
                We need to be prepared for the future so that every one of us is
                equipped with the skills, competencies and experience to succeed
                and compete in the world. We must give utmost priority to skill,
                up-skill, and re-skill our people to make them world-ready.
              </p>
              <p className="text-[8px] md:text-[15px] lg:text-lg font-bold text-yellow-400">
                - His Majesty The King of Bhutan, 2021 National Day Royal
                Address
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHeaderSection;