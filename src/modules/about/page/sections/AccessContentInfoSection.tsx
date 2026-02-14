import { GC_New } from "assets";
import { GiftCouponLinkDetail } from "assets/content/about/About";
import { DCDDTextContents } from "assets/images/dcdd";
import { EducareSkillLogo } from "assets/images/educare-skill";
import { useState, useEffect } from "react";
import { useAuth } from "utils/helpers/AuthContext";
import {
  EducareSignUpLinkDetails,
  GiftCouponAuthenticatedLinkDetails,
  GiftCouponLinkDetails,
} from "utils/helpers/URLs";

const AccessContentInfoSection: React.FC = () => {
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getHref = () => {
    if (isMobile) {
      return GiftCouponAuthenticatedLinkDetails.linkTo;
    }
    return user?.name
      ? GiftCouponAuthenticatedLinkDetails.linkTo
      : GiftCouponLinkDetails.linkTo;
  };
  return (
    <>
      <section
        id="access-content-info"
        className="px-4 sm:px-8 md:px-16 lg:px-14 lg:pb-16 pb-1"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 3xl:gap-12 items-stretch">
          {/* Left card */}
          <div className="border-t-8 rounded-xl border-customOriange-200 shadow-md p-6 flex flex-col items-center justify-center h-full">
            <img
              src={EducareSkillLogo}
              alt="DCDD image"
              className="max-h-full md:w-[120px] lg:w-[200px] object-contain 4xl:w-[400px]"
            />
            <a
              href={EducareSignUpLinkDetails.linkTo}
              className=" bg-customOriange-200 text-white px-8 py-2 4xl:py-4 4xl:px-16 rounded-lg text-base md:text-base lg:text-xl  xl:text-2xl 2xl:text-3xl  3xl:text-4xl 4xl:text-5xl 5xl:text-6xl  transition-all duration-300 ease-in-out hover:bg-orange-700 hover:shadow-lg hover:scale-105 my-4 4xl:my-8"
            >
              {EducareSignUpLinkDetails.LinkFor}
            </a>
            <img
              src={DCDDTextContents}
              alt="DCDD image"
              className="max-h-full object-contain 4xl:w-[1200px]"
            />
          </div>

          {/* Right card */}
          <div
            className="border-t-8 rounded-xl border-[#215FF8] shadow-md p-6 flex flex-col items-center justify-center  space-y-3 lg:space-y-3
          2xl:space-y-3 3xl:space-y-2 h-full 3xl:px-10 4xl:space-y-5 5xl:space-y-6"
          >
            <img
              src={GiftCouponLinkDetail.icon}
              alt="gifticon"
              className="size-[60px] md:size-[60px] lg:size-[100px] xl:size-[120px] 2xl:size-[100px] 3xl:size-[100px] 4xl:size-[250px] 5xl:size-[300px] xl:mt-3"
            />
            <a
              href={getHref()}
              className="bg-[#215FF8] text-white px-8 py-2 4xl:py-4 4xl:px-16 rounded-lg text-base md:text-base lg:text-xl  xl:text-2xl 2xl:text-3xl  3xl:text-4xl 4xl:text-5xl 5xl:text-6xl transition-all duration-300 ease-in-out hover:bg-[#1a4fd0] hover:shadow-lg hover:scale-105"
            >
              {GiftCouponLinkDetail.buttonName}
            </a>
            <img
              src={GC_New}
              alt="DCDD image"
              className="max-h-full object-contain 4xl:w-[1200px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessContentInfoSection;
