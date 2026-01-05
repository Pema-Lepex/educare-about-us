import MainLayout from "layouts/MainLayout";
import HowToGetStartedReadMore from "./read-more/HowToGetStartedReadMore";
import { DoodleLessOpacityImage } from "assets";

const HowToGetStarted: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${DoodleLessOpacityImage})` }}
      >
        <HowToGetStartedReadMore />
      </div>
    </MainLayout>
  );
};
export default HowToGetStarted;
