import { AndroidStoreImage, AppleStoreImage, GirlRunningImage } from "assets";
import { RedirectToAppStore, RedirectToGooglePlay } from "utils/helpers/URLs";

const DownloadOptionSection: React.FC = () => {
  return (
    <div className="w-full relative">
      <img
        src={GirlRunningImage}
        alt="Girl Running"
        loading="lazy"
        className="w-full h-auto object-cover"
      />
      <section
        className="absolute top-0 left-0 flex flex-col justify-center md:justify-start pt-2 sm:pt-10 md:pt-10  lg:pt-32 4xl:pt-60 5xl:pt-70 px-6 md:px-16 mr-16 text-black max-w-xl 4xl:max-w-5xl"
        id="about-download-option"
      >
        <p className="text-[12px] font-light sm:text-lg md:text-lg lg:text-3xl 4xl:text-5xl lg:mb-6 mb-2 leading-relaxed max-w-60 sm:max-w-80 lg:max-w-full">
          Download the <strong className="font-semibold">Educare Skill App</strong> and make learning
          Dzongkha a fun and exciting adventure.
        </p>
        <div className="flex flex-row gap-2 md:gap-4">
          <a href={RedirectToAppStore.linkTo} target="_blank">
            <img
              src={AppleStoreImage}
              alt="Apple Store"
              loading="lazy"
              className="h-[22px] sm:h-10 lg:h-14 4xl:h-20 5xl:h-24 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition"
            />
          </a>
          <a href={RedirectToGooglePlay.linkTo} target="_blank">
            <img
              src={AndroidStoreImage}
              alt="Android Store"
              loading="lazy"
              className="h-[22px] sm:h-10 lg:h-14 4xl:h-20 5xl:h-24 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default DownloadOptionSection;
