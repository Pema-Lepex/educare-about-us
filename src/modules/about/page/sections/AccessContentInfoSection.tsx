import { DCDDTextImage, GiftIcon } from "assets";
import { GiftCouponLinkDetails } from "assets/content/about/About";
import { DCDDLOGO, DCDDNEWTextImage } from "assets/images/dcdd";
import { CommonHeader2, CommonParagraph2 } from "components";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

const AccessContentInfoSection: React.FC = () => {
  return (
    <>
      <section
        id="access-content-info"
        className="px-4 sm:px-8 md:px-16 lg:px-14 md:pb-16 pb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left card */}
          <div className="border-t-8 rounded-xl border-customOriange-200 shadow-md p-6 flex flex-col items-center justify-center h-full">
            <img
              src={DCDDLOGO}
              alt="DCDD image"
              className="max-h-full object-contain"
            />
            <a
              href={GiftCouponLinkDetails.linkToGiftCoupon}
              target="_blank"
              className="bg-customOriange-200 text-white px-8 py-2 rounded-md
             2xl:text-2xl lg:text-xl text-base
             transition-all duration-300 ease-in-out
             hover:bg-orange-700 hover:shadow-lg hover:scale-105 my-6"
            >
              DCDD Sign In
            </a>
            <img
              src={DCDDNEWTextImage}
              alt="DCDD image"
              className="max-h-full object-contain"
            />
          </div>

          {/* Right card */}
          <div className="border-t-8 rounded-xl border-[#215FF8] shadow-md p-6 flex flex-col items-center justify-center space-y-8 h-full">
            <img src={GiftCouponLinkDetails.icon} alt="gifticon" className="" />

            <a
              href={GiftCouponLinkDetails.linkToGiftCoupon}
              target="_blank"
              className="bg-[#215FF8] text-white px-8 py-2 rounded-md
             2xl:text-2xl lg:text-xl text-base
             transition-all duration-300 ease-in-out
             hover:bg-[#1a4fd0] hover:shadow-lg hover:scale-105"
            >
              {GiftCouponLinkDetails.buttonName}
            </a>

            <CommonHeader2 className="text-center">
              {GiftCouponLinkDetails.title}
            </CommonHeader2>

            <CommonParagraph2 className="text-center">
              {renderTextWithLinks(GiftCouponLinkDetails.info1)}
            </CommonParagraph2>

            <CommonParagraph2 className="text-center">
              {renderTextWithLinks(GiftCouponLinkDetails.info2)}
            </CommonParagraph2>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessContentInfoSection;
