import { CloudeFrameImage, GiftLineImage, GirlPointImage } from "assets";
import { GiftCouponContent } from "assets/content/about/About";
import { CommonHeader, CommonParagraph } from "components";

const GiftCouponReadMore: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <section className="py-16 w-[70%] ">
        <div className="border border-blue-600 bg-blue-100 py-4  rounded-xl shadow-md relative pb-24 mb-24">
          <div className="w-full relative">
            <img
              src={GiftLineImage}
              alt="giftlineimage"
              className="w-full h-auto"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2 text-center">
              <CommonHeader className="text-blue-700">
                {GiftCouponContent.title}
              </CommonHeader>
              <p className="text-xl font-light">{GiftCouponContent.subtitle}</p>
            </div>
            
          </div>
          <div className="px-6 space-y-4">
              <CommonParagraph>{GiftCouponContent.description}</CommonParagraph>
              <div className="bg-white rounded-2xl p-4">
                <h4 className="text-xl font-semibold text-blue-500">{GiftCouponContent.buyerGuide.heading}</h4>
                <ol className="list-decimal list-inside space-y-2">
                  {GiftCouponContent.buyerGuide.steps.map((item, index) =>
                    Object.values(item).map((step, stepIndex) => (
                      <li
                        key={`${index}-${stepIndex}`}
                        className="text-gray-700 text-lg font-light"
                      >
                        {step}
                      </li>
                    ))
                  )}
                </ol>
              </div>
            </div>
          <div className="px-6 pt-6 space-y-4">
              <div className="bg-white rounded-2xl p-4">
                <h4 className="text-xl font-semibold text-blue-500">{GiftCouponContent.buyerGuide.heading}</h4>
                <ol className="list-decimal list-inside space-y-2">
                  {GiftCouponContent.recipientGuide.steps.map((item, index) =>
                    Object.values(item).map((step, stepIndex) => (
                      <li
                        key={`${index}-${stepIndex}`}
                        className="text-gray-700 text-lg font-light"
                      >
                        {step}
                      </li>
                    ))
                  )}
                </ol>
              </div>
            </div>
            <div className="absolute  -bottom-10 left-1/2 -translate-x-1/2 ">
              <img src={CloudeFrameImage} alt="image" className=""/>
            </div>
        </div>
      </section>
    </div>
  );
};
export default GiftCouponReadMore;
