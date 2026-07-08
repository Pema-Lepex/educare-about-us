import React from "react";
import { HTGSBGImage } from "assets";
import FAQContentSection from "modules/faq/page/section/FAQContentSection";

const FAQPage: React.FC = () => {
  return (
    <div
      className="w-full  bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${HTGSBGImage})` }}
    >
      <FAQContentSection />
    </div>
  );
};

export default FAQPage;
