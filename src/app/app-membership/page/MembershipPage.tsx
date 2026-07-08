import React from "react";
import { DoodleLessOpacityImage } from "assets";
import HowToGetStartedReadMore from "modules/about/page/read-more/HowToGetStartedReadMore";

const MembershipPage: React.FC = () => {
  return (
    <div
      className="w-full  bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${DoodleLessOpacityImage})` }}
    >
      <HowToGetStartedReadMore />
    </div>
  );
};

export default MembershipPage;
