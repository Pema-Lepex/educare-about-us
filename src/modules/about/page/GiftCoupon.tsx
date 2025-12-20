import MainLayout from "layouts/MainLayout";
import { RegistrationGuideBGImage } from "assets";
import GiftCouponReadMore from "./read-more/GiftCouponReadMore";

const GiftCoupon: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${RegistrationGuideBGImage})` }}
      >
        <GiftCouponReadMore />
      </div>
    </MainLayout>
  );
};
export default GiftCoupon;
