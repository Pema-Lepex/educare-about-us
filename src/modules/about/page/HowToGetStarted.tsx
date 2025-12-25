import MainLayout from "layouts/MainLayout";
import HowToGetStartedReadMore from "./read-more/HowToGetStartedReadMore";
import {  HTGSBGImage } from "assets";

const HowToGetStarted: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${HTGSBGImage})` }}
      >
        <HowToGetStartedReadMore />
      </div>
    </MainLayout>
  );
};
export default HowToGetStarted;
