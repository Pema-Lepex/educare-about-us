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
      </div>
    </MainLayout>
  );
};
export default GiftCoupon;
