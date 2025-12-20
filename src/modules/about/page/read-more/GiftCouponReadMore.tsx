import {
  CloudeFrameImage,
  GiftLineImage,
  GirlPointImage,
  ManHoldingABabyImage,
} from "assets";
import { GiftCouponContent } from "assets/content/about/About";
import { CommonParagraph } from "components";

const GiftCouponReadMore: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden px-4">
      <section className="py-10 md:py-16 w-full max-w-[90%] lg:max-w-[70%] relative">
        
        <div className="border border-blue-600 bg-blue-100 py-4 rounded-xl shadow-md relative pb-16 md:pb-24 mb-32 md:mb-48 z-10">
          
          <div className="w-full relative">
            <img
              src={GiftLineImage}
              alt="giftlineimage"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2 text-center w-full px-2">
              <h1 className="text-[11px] md:text-[23px] lg:text-3xl xl:text-3xl text-blue-700 font-extrabold">
                {GiftCouponContent.title}
              </h1>
              <p className="text-[8px] md:text-xl font-light">{GiftCouponContent.subtitle}</p>
            </div>
          </div>

          <div className="px-4 md:px-6 space-y-4 mt-4">
            <div className="text-sm md:text-base">
                <CommonParagraph>{GiftCouponContent.description}</CommonParagraph>
            </div>
            
            <div className="bg-white rounded-2xl p-3 md:p-4">
              <h4 className="text-lg md:text-xl font-semibold text-blue-500">
                {GiftCouponContent.buyerGuide.heading}
              </h4>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                {GiftCouponContent.buyerGuide.steps.map((item, index) =>
                  Object.values(item).map((step, stepIndex) => (
                    <li
                      key={`${index}-${stepIndex}`}
                      className="text-gray-700 text-sm md:text-lg font-light"
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
              <h4 className="text-lg md:text-xl font-semibold text-blue-500">
                {GiftCouponContent.buyerGuide.heading}
              </h4>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                {GiftCouponContent.recipientGuide.steps.map((item, index) =>
                  Object.values(item).map((step, stepIndex) => (
                    <li
                      key={`${index}-${stepIndex}`}
                      className="text-gray-700 text-sm md:text-lg font-light"
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
          <img src={ManHoldingABabyImage} alt="image" className="h-auto w-full" />
        </div>

      </section>
    </div>
  );
};

export default GiftCouponReadMore;