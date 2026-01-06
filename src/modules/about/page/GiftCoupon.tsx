import MainLayout from "layouts/MainLayout";
import { HTGSBGImage } from "assets";
import GiftCouponReadMore from "./read-more/GiftCouponReadMore";

const GiftCoupon: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${HTGSBGImage})` }}
      >
        <GiftCouponReadMore />
        <div className="xl:h-32 2xl:h-36 3xl:h-40 4xl:h-[30rem]"/>
      </div>
    </MainLayout>
  );
};
export default GiftCoupon;
