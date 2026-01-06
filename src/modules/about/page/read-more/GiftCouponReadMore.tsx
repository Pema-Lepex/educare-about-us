import {
  CloudeFrameImage,
  GiftIcon,
  GiftLineImage,
  GirlPointImage,
  ManHoldingABabyImage,
} from "assets";
import { GiftCouponContent } from "assets/content/about/About";
import { CommonHeader2, CommonParagraph1, CommonParagraph2 } from "components";

const GiftCouponReadMore: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden px-4">
      <section className="py-10 md:py-16 w-full max-w-[90%] lg:max-w-[70%] 4xl:max-w-[60%] relative">
        <div className="border border-blue-600 bg-blue-100 py-4 rounded-xl shadow-md relative pb-16 md:pb-24 mb-32 md:mb-48 z-10">
          <div className="w-full relative  overflow-hidden px-6 md:px-10 flex items-center justify-between gap-4">
            {/* Text Content Container */}
            <div className="flex flex-col items-center text-center space-y-1 md:space-y-6 flex-1 md:pb-6 pb-3">
              <h1 className="text-xl md:text-5xl lg:text-6xl 4xl:text-7xl text-[#3366FF] font-extrabold tracking-tight">
                {GiftCouponContent.title}
              </h1>
              <p className="text-[8px] md:text-2xl lg:text-2xl 2xl:3xl 3xl:text-4xl 4xl:text-4xl 5xl:text-6xl font-medium text-black ">
                {GiftCouponContent.subtitle}
              </p>

              <a
                href={GiftCouponContent.linkToGiftCoupon}
                target="_blank"
                className="bg-[#3366FF] text-white w-full md:py-3 py-2 4xl:py-4 5xl:py-6 rounded-lg
                 text-xs md:text-2xl 4xl:text-4xl 5xl:text-5xl font-semibold
                 transition-all duration-300 ease-in-out
                 hover:bg-[#1a4fd0] hover:shadow-lg hover:scale-105"
              >
                {GiftCouponContent.buttonName}
              </a>
            </div>

            {/* Icon Container */}
            <div className="flex justify-end relative lg:w-64 md:w-44 w-16">
              <img
                src={GiftIcon}
                alt="gift icon"
                className="lg:size-[200px] md:size-[150px] absolute 2xl:-top-[95px] 3xl:-top-[90px] 4xl:-top-[83px] 5xl:-top-[55px] lg:-top-[90px] md:-top-[35px] -top-5"
              />
            </div>

            {/* Bottom Border Line */}
            <div className="absolute bottom-0 left-0 w-full md:h-[6px] h-[3px] bg-blue-600"></div>
          </div>

          <div className="px-4 md:px-6 space-y-4 mt-4">
            <CommonHeader2 className="font-bold xl:max-w-2xl 3xl:max-w-5xl 5xl:max-w-7xl">
              {GiftCouponContent.subheader}
            </CommonHeader2>
            <div className="text-sm md:text-base">
              <CommonParagraph1>
                {GiftCouponContent.description}
              </CommonParagraph1>
            </div>

            <div className="bg-white rounded-2xl p-3 md:p-4">
              <CommonParagraph2 className="text-lg md:text-xl font-semibold text-blue-500">
                {GiftCouponContent.buyerGuide.heading}
              </CommonParagraph2>
              <ol className="list-disc list-inside space-y-2 5xl:space-y-7 mt-2">
                {GiftCouponContent.buyerGuide.steps.map((item, index) =>
                  Object.values(item).map((step, stepIndex) => (
                    <li
                      key={`${index}-${stepIndex}`}
                      className="text-gray-700 text-xs sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-5xl font-light"
                    >
                      {step}
                    </li>
                  ))
                )}
              </ol>
            </div>
          </div>

          <div className="px-4 md:px-6 pt-4 md:pt-6 space-y-4">
            <div className="bg-white rounded-2xl p-3 md:p-4">
              <CommonParagraph2 className="text-lg md:text-xl font-semibold text-blue-500">
                {GiftCouponContent.buyerGuide.heading}
              </CommonParagraph2>
              <ol className="list-disc list-inside space-y-2 5xl:space-y-7 mt-2">
                {GiftCouponContent.recipientGuide.steps.map((item, index) =>
                  Object.values(item).map((step, stepIndex) => (
                    <li
                      key={`${index}-${stepIndex}`}
                      className="text-gray-700 text-xs sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-5xl  font-light"
                    >
                      {step}
                    </li>
                  ))
                )}
              </ol>
            </div>
          </div>

          <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 w-3/4 md:w-auto">
            <img src={CloudeFrameImage} alt="image" className="w-full h-auto" />
          </div>
        </div>
        <div className="absolute bottom-5 -left-8 md:-left-16 lg:-left-48 w-24 md:w-48 lg:w-auto z-10">
          <img src={GirlPointImage} alt="image" className="h-auto w-full" />
        </div>

        <div className="absolute bottom-5 -right-8 md:-right-12 lg:-right-48 w-24 md:w-48 lg:w-auto z-10">
          <img
            src={ManHoldingABabyImage}
            alt="image"
            className="h-auto w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default GiftCouponReadMore;
