import { AndroidStoreImage, AnimalImage, AppleStoreImage } from "assets";
import {
  HowToGetStartedContent,
  memebershipDetails,
  MemebershipImportantNotice,
} from "assets/content/about/About";
import { CommonHeader2, CommonHeader3, CommonParagraph1 } from "components";
import { useState } from "react";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

const HowToGetStartedReadMore: React.FC = () => {
  const [selectedType, setSelectedType] = useState(
    memebershipDetails[0].memnershipType
  );
  const redirectToAppStore = () => {
    window.location.href = "https://www.apple.com/app-store/";
  };
  const redirectToGooglePlay = () => {
    window.location.href = "https://play.google.com/store";
  };
  return (
    <section className="p-6 md:mb-20 mb-16" id="how-to-get-started">
      <div className="lg:flex relative">
        <div className="lg:flex lg:w-1/3"></div>
        <div className="flex-1 lg:w-2/3 w-full border border-customOriange-100 rounded-2xl bg-blue-50 text-center py-6 md:px-10 px-3 space-y-6 shadow-md">
          <CommonHeader2 className="text-customOriange-200">
            {HowToGetStartedContent.title}
          </CommonHeader2>
          <CommonParagraph1 className="">
            {renderTextWithLinks(HowToGetStartedContent.description1)}
          </CommonParagraph1>
          <a
            href="https://www.educareskill.com/#/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex 3xl:text-2xl 2xl:text-xl xl:text-base  text-sm justify-center items-center w-64 bg-customOriange-100 text-white px-5 py-2 xl:px-6 xl:py-3  rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-md hover:scale-105"
          >
            DCDD Sign In
          </a>

          <CommonParagraph1 className="">
            {renderTextWithLinks(HowToGetStartedContent.description2)}
          </CommonParagraph1>
          <a
            href="https://www.educareskill.com/#/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex 3xl:text-2xl 2xl:text-xl xl:text-base  text-sm justify-center items-center w-64 bg-[#215FF8] text-white px-5 py-2 xl:px-6 xl:py-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md hover:scale-105"
          >
            Sign Up
          </a>
          <div className="border border-customOriange-100 rounded-2xl bg-white md:space-y-5 space-y-4 p-4 shadow-md">
            <CommonHeader3 className="">Membership Plan</CommonHeader3>
            <div className="flex justify-center items-center gap-4">
              {memebershipDetails.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.memnershipType)}
                  className={`px-4 py-2 rounded-md border 3xl:text-2xl 2xl:text-xl xl:text-base  text-sm 
                ${
                  selectedType === type.memnershipType
                    ? "bg-primary-500 text-white"
                    : "bg-gray-200"
                }
            `}
                >
                  {type.memnershipType}
                </button>
              ))}
            </div>
            {memebershipDetails
              .filter(
                (items) =>
                  selectedType === null || items.memnershipType === selectedType
              )
              .map((items) => (
                <div className="grid md:grid-cols-3 gap-6" key={items.id}>
                  {items.packages.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-center md:px-0 px-6 pb-4  bg-blue-50 border border-customOriange-100  rounded-xl shadow-sm py-4"
                    >
                      {item.imageSrc !== "" && (
                        <img
                          src={item.imageSrc}
                          alt={`${item.memebrshipType} Membership`}
                          className="w-auto h-34 sm:h-42 lg:h-60 rounded-lg object-cover"
                        />
                      )}

                      <h3 className="text-xl 3xl:text-2xl font-bold mt-2">
                        {item.memebrshipType}
                      </h3>

                      <div className="text-center mb-3 text-base md:text-lg 3xl:xl">
                        <p>
                          Monthly:{" "}
                          <span className="font-semibold">
                            {item.monthlyCost}
                          </span>{" "}
                        </p>
                        <p>
                          Half-Yearly:{" "}
                          <span className="font-semibold">
                            {item.halfYearlyCost}
                          </span>
                        </p>
                        <p>
                          Yearly:{" "}
                          <span className="font-semibold">
                            {item.yearlyCost}
                          </span>
                        </p>
                      </div>

                      <ul className="text-sm md:text-lg 3xl:xl flex flex-wrap justify-center items-center space-x-1  text-gray-700 px-4 ">
                        {item.benefits.map((benefit, i) => (
                          <li key={i}>
                            {benefit}
                            {i < item.benefits.length - 1 && ","}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
          </div>
          <div className="border border-customOriange-100 rounded-2xl bg-white space-y-3 p-4 shadow-md">
            {MemebershipImportantNotice && (
              <div>
                <CommonHeader3 className="">
                  {MemebershipImportantNotice.title}
                </CommonHeader3>
                <p
                  className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {renderTextWithLinks(MemebershipImportantNotice.notice)}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <h4 className="md:text-2xl text-basic md:px-12 px-2 font-light xl:max-w-3xl">
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
          className="lg:absolute lg:flex hidden pointer-events-none lg:-left-24 xl:left-0 lg:bottom-0 3xl:w-[1200px] 2xl:w-[990px] xl:w-[840px] h-auto"
        />
      </div>
      <div className="h-0 lg:h-10 4xl:h-36 6xl:h-52">
      </div>
    </section>
  );
};
export default HowToGetStartedReadMore;
