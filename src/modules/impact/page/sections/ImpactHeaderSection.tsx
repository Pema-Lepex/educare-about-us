import { HMBGImage, HMK5Image, HMBGMobileImage, K5Image } from "assets";

const ImpactHeaderSection: React.FC = () => {
  return (
    <section>
  <div className="relative w-full">
    <img
      src={K5Image}
      alt="background"
      className="w-full h-auto min-h-[300px] object-cover bg-blue-400/90"
    />
    <div className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="w-1/2 md:w-2/5 text-left">
        <p className="text-[14px] sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl text-white mb-2 sm:mb-4 leading-tight">
          We need to be prepared for the future so that every one of us is
          equipped with the skills, competencies and experience to succeed
          and compete in the world. We must give utmost priority to skill,
          up-skill, and re-skill our people to make them world-ready.
        </p>
        <p className="text-[14px] sm:text-base md:text-base xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold text-yellow-400">
          - His Majesty The King of Bhutan, 2021 National Day Royal Address
        </p>
      </div>
      
    </div>
  </div>
</section>
  );
};

export default ImpactHeaderSection;