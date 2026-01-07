import { AndroidStoreImage, AppleStoreImage, GirlRunningImage } from "assets";

const DownloadOptionSection: React.FC = () => {
  const redirectToAppStore = () => {
    window.location.href = "https://www.apple.com/app-store/";
  };
  const redirectToGooglePlay = () => {
    window.location.href = "https://play.google.com/store";
  };

  return (
    <div className="w-full relative">
      <img
        src={GirlRunningImage}
        alt="Girl Running"
        className="w-full h-auto object-cover"
      />
      <section
        className="absolute top-0 left-0 flex flex-col justify-center md:justify-start  lg:pt-32 4xl:pt-60 6xl:pt-80 px-6 md:px-16 mr-16 text-black max-w-xl 4xl:max-w-5xl"
        id="about-download-option"
      >
        <p className="text-[12px] md:text-lg lg:text-3xl 4xl:text-5xl mb-6 leading-relaxed">
          Download the <strong>Educare Skill App</strong> and make learning
          Dzongkha a fun and exciting adventure.
        </p>
        <div className="flex flex-row gap-4">
          <button onClick={redirectToAppStore}>
            <img
              src={AppleStoreImage}
              alt="Apple Store"
              className="h-[22px] md:h-10 lg:h-14 4xl:h-20 6xl:h-28 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition"
            />
          </button>
          <button onClick={redirectToGooglePlay}>
            <img
              src={AndroidStoreImage}
              alt="Android Store"
              className="h-[22px] md:h-10 lg:h-14 4xl:h-20 6xl:h-28 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DownloadOptionSection;
