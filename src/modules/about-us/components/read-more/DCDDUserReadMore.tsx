import { about1, about2 } from "assets";
import { AboutContent1, AboutContent2 } from "assets/content/about-us/AboutUs";
import { CommonParagraph } from "components";

const DCDDUserReadMore: React.FC = () => {
  return (
    <>
      <section className="px-4 sm:px-8 lg:px-16 py-10 space-y-10">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="flex-1 space-y-4">
            <img
              src={about1}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <CommonParagraph>
              <AboutContent1 />
            </CommonParagraph>
          </div>
          <div className="flex-1 space-y-4">
            <img
              src={about2}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <CommonParagraph>
              <AboutContent2 />
            </CommonParagraph>
          </div>
        </div>
      </section>
    </>
  );
};
export default DCDDUserReadMore;
