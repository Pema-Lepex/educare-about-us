import { AndroidStoreImage, AnimalImage, AppleStoreImage } from "assets";
import {
  HowToGetStartedContent,
  memebershipDetails,
  MemebershipImportantNotice,
} from "assets/content/about/About";
import { CommonHeader2, CommonHeader3, CommonParagraph1 } from "components";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

const HowToGetStartedReadMore: React.FC = () => {
  const redirectToAppStore = () => {
    window.location.href = "https://www.apple.com/app-store/";
  };
  const redirectToGooglePlay = () => {
    window.location.href = "https://play.google.com/store";
  };
  return (
    <section className="p-6 md:mb-14 mb-12" id="how-to-get-started">
      <div className="lg:flex relative">
        <div className="lg:flex lg:w-1/3"></div>
        <div className="flex-1 lg:w-2/3 w-full border border-customOriange-100 rounded-2xl bg-blue-50 text-center py-6 md:px-10 px-3 space-y-6 shadow-md">
          <CommonHeader2 className="text-customOriange-200">
            {HowToGetStartedContent.title}
          </CommonHeader2>
          <CommonParagraph1>
            {HowToGetStartedContent.description}
          </CommonParagraph1>
          <div className="border border-customOriange-100 rounded-2xl bg-white space-y-3 p-4 shadow-md">
            <CommonHeader3 className="">Membership Plan</CommonHeader3>
            <div className="">
              {memebershipDetails.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center md:px-0 px-12 "
                >
                  {item.packages.map((item) => (
                    <div key={item.id} className="grid md:grid-cols-3 md:space-y-0 space-y-4">
                      {item.imageSrc !== "" ? (
                        <img
                          src={item?.imageSrc}
                          alt={`${item.memebrshipType} Membership`}
                          className="w-auto h-34 sm:h-42 lg:h-60 rounded-lg object-cover"
                        />
                      ) : (
                        <></>
                      )}

                      <h3 className="text-xl font-bold">
                        {item.memebrshipType}
                      </h3>
                      <div className="text-center mb-3">
                        <p>Yearly: {item.yearlyCost}</p>
                        <p>Half-Yearly: {item.halfYearlyCost}</p>
                        <p>Monthly: {item.monthlyCost}</p>
                      </div>
                      <ul className="flex flex-wrap justify-center items-center space-x-1 text-sm text-gray-700">
                        {item.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="border border-customOriange-100 rounded-2xl bg-white space-y-3 p-4 shadow-md">
            {MemebershipImportantNotice && (
              <div>
                <CommonHeader3 className="">
                  {MemebershipImportantNotice.title}
                </CommonHeader3>
                <p
                  className="text-start 2xl:text-lg"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {renderTextWithLinks(MemebershipImportantNotice.notice)}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <h4 className="md:text-2xl text-basic md:px-12 px-2 font-light">
              The Educare Skill App is available on both the Play Store for
              Android devices and App Store for iOS devices.
            </h4>
            <div className="flex flex-row gap-4">
              <button onClick={redirectToAppStore}>
                <img
                  src={AppleStoreImage}
                  alt="Apple Store"
                  className="h-[22px] md:h-14 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition"
                />
              </button>
              <button onClick={redirectToGooglePlay}>
                <img
                  src={AndroidStoreImage}
                  alt="Android Store"
                  className="h-[22px] md:h-14 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition"
                />
              </button>
            </div>
          </div>
        </div>
        <img
          src={AnimalImage}
          alt="animalimage"
          className="lg:absolute lg:flex hidden"
        />
      </div>
    </section>
  );
};
export default HowToGetStartedReadMore;
