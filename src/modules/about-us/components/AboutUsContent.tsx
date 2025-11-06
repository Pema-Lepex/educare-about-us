import { about1, about2 } from "assets";
import {  AboutContent1, AboutContent2 } from "assets/content/about-us/AboutUs";

const AboutUsContent: React.FC = () => {
  return (
    <div className="m-10 space-y-4">
      <h1 className="text-5xl font-bold">About Us</h1>
      <div className=" flex justify-center my-4 space-x-2">
        <div className="w-1/2 space-y-4">
          <img
            src={about1}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-md"
          />
           <AboutContent1/>
        </div>
        <div className="w-1/2 space-y-4">
          <img
            src={about2}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <AboutContent2/>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
