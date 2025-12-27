import { DCDDTextImage, GiftIcon } from "assets";
import { GiftCouponLinkDetails } from "assets/content/about/About";
import { DCDDLOGO, DCDDNEWTextImage } from "assets/images/dcdd";
import { CommonHeader1, CommonHeader2, CommonParagraph1, CommonParagraph2 } from "components";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

const AccessContentInfoSection: React.FC = () => {
  return (
    <>
      <section
        id="access-content-info"
        className="px-4 sm:px-8 md:px-16 lg:px-14 md:pb-16 pb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 3xl:gap-12 items-stretch">
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
              className="bg-customOriange-200 text-white px-8 py-2 rounded-md xl:text-2xl 2xl:text-3xl md:text-base lg:text-xl text-base transition-all duration-300 ease-in-out hover:bg-orange-700 hover:shadow-lg hover:scale-105 my-6"
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
          <div className="border-t-8 rounded-xl border-[#215FF8] shadow-md p-6 flex flex-col items-center justify-center space-y-3 lg:space-y-8 3xl:space-y-12 h-full 3xl:px-10">
            <img src={GiftCouponLinkDetails.icon} alt="gifticon" className="size-[60px] md:size-[55px] xl:size-[150px] 2xl:size-[160px] 3xl:size-[250px]" />

            <a
              href={GiftCouponLinkDetails.linkToGiftCoupon}
              target="_blank"
              className="bg-[#215FF8] text-white px-8 py-2 rounded-md  xl:text-2xl 2xl:text-3xl lg:text-xl md:text-base text-base transition-all duration-300 ease-in-out hover:bg-[#1a4fd0] hover:shadow-lg hover:scale-105"
            >
              {GiftCouponLinkDetails.buttonName}
            </a>

            <h1 className="text-center text-2xl sm:text-4xl md:text-lg lg:text-5xl xl:text-[50px] 2xl:text-[60px] 3xl:text-[70px] font-extrabold">
              {GiftCouponLinkDetails.title}
            </h1>

            <p className="text-center text-base sm:text-lg md:text-xs lg:text-xl xl:text-2xl 2xl:text-4xl">
              {renderTextWithLinks(GiftCouponLinkDetails.info1)}
            </p>

            <p className="text-center  text-base sm:text-lg md:text-xs lg:text-xl  xl:text-2xl 2xl:text-4xl">
              {renderTextWithLinks(GiftCouponLinkDetails.info2)}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessContentInfoSection;
