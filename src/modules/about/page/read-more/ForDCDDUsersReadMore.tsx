import { DCDDPageWideBackGroundImage, FamilyWithPhoneImage, MonkeyAndDragonImage, ThreeCharacterImage } from "assets";
import { ForDCDDUsersContent } from "assets/content/about/About";
import { DCDDCharacterImage, DCDDShortTextImage } from "assets/images/dcdd";
import { CommonHeader2, CommonParagraph1 } from "components";
import {
  renderTextWithLinks,
} from "utils/helpers/renderTextWithLinks";

const ForDCDDUsersReadMore: React.FC = () => {
  return (
    <>
      {/* {website} */}
      <div className="w-full hidden lg:flex justify-center items-center relative">
        <section id="registration-guid" className=" py-16 px-40 lg:mb-[350px] xl:mb-[500px] 2xl:mb-[550px] 3xl:mb-[880px] 4xl:mb-[1390px]">
          {ForDCDDUsersContent && (
            <div className=" pb-[350px] 2xl:pb-[800px] ">
              <div className="w-[80%] mx-auto border border-customOriange-200 rounded-3xl shadow-md p-10 bg-blue-50 space-y-4  mb-20">
                <CommonHeader2 className="text-customOriange-200 text-center">
                  {ForDCDDUsersContent.title}
                </CommonHeader2>
                <CommonParagraph1>
                  {ForDCDDUsersContent.description1}
                </CommonParagraph1>
                <CommonParagraph1>
                  {ForDCDDUsersContent.description2}
                </CommonParagraph1>
                <CommonParagraph1>
                  {ForDCDDUsersContent.description3}
                </CommonParagraph1>
                <ol className="list-disc list-inside space-y-2">
                  <li className="text-gray-700 text-xs sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl  font-light">
                    {renderTextWithLinks(ForDCDDUsersContent.guide.guide1)}
                  </li>
                  <li className="text-gray-700 text-xs sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl  font-light">
                    {renderTextWithLinks(ForDCDDUsersContent.guide.guide2)}
                  </li>
                  <li className="text-gray-700 text-xs sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl  font-light">
                    {renderTextWithLinks(ForDCDDUsersContent.guide.guide3)}
                  </li>
                  <li className="text-gray-700 text-xs sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl  font-light">
                    {renderTextWithLinks(ForDCDDUsersContent.guide.guide4)}
                  </li>
                </ol>
                <div className="w-full flex justify-center py-4">
                  <a
                    href="https://www.educareskill.com/#/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative 3xl:text-2xl 2xl:text-xl xl:text-base  text-sm z-10 inline-flex justify-center items-center w-64 h-12  bg-customOriange-200 text-white rounded-md font-semibold transition-all duration-300 ease-in-out  hover:bg-orange-700 hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Sign Up
                  </a>
                </div>
               <div>
                 <CommonParagraph1 className="pt-4 px-6 text-xl font-light text-customOriange-200">
                  {ForDCDDUsersContent.importentNote1}
                </CommonParagraph1>
                <CommonParagraph1 className="pb-4 pt-2 px-6 text-xl font-light text-customOriange-200">
                  {renderTextWithLinks(ForDCDDUsersContent.importentNote2)}
                </CommonParagraph1>
               </div>
              </div>
            </div>
          )}
          <div className="absolute -bottom-20 md:-bottom-[20rem] lg:bottom-[130px] xl:bottom-[5rem] 2xl:bottom-[8rem] 4xl:-bottom-3 right-3 w-full ">
            <div className="relative w-full">
              {/* Background Family Image */}
              <img
                src={DCDDCharacterImage}
                alt="Family"
                className="h-auto w-full object-contain"
              />
              {/* Short Text Image Overlayed on Top */}
              <div className="absolute inset-0 flex items-center justify-center lg:-bottom-[500px] xl:-bottom-[600px] 2xl:-bottom-[950px]">
                 <img 
                    src={DCDDShortTextImage} 
                    alt="DCDD Info" 
                    className="drop-shadow-2xl 2xl:w-[1200px] 3xl:w-[1500px] 4xl:w-[2000px] h-auto" // Adjust width as needed
                 />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* {small screen} */}
      <div className="lg:hidden">
        <div className="relative">
          <img
            src={DCDDPageWideBackGroundImage}
            alt="image"
            className="w-full"
          />
          <img
            src={FamilyWithPhoneImage}
            alt="imag"
            className="absolute -bottom-20 md:-bottom-36"
          />
        </div>

        <div className="bg-white px-6 pt-9 md:pt-16">
          <div className="w-full border border-customOriange-200 rounded-3xl shadow-md py-8 md:py-12 px-2 bg-blue-50 space-y-2">
          <h2 className="text-customOriange-200 text-center text-lg font-bold">
            {ForDCDDUsersContent.title}
          </h2>
          <p className="text-start">{ForDCDDUsersContent.description1}</p>
          <p className="text-start">{ForDCDDUsersContent.description2}</p>
          <ol className="list-decimal list-inside space-y-2 px-2">
            <li className="text-gray-700 text-xs font-light">
              {renderTextWithLinks(ForDCDDUsersContent.guide.guide1)}
            </li>
            <li className="text-gray-700 text-xs font-light">
              {renderTextWithLinks(ForDCDDUsersContent.guide.guide2)}
            </li>
            <li className="text-gray-700 text-xs font-light">
              {renderTextWithLinks(ForDCDDUsersContent.guide.guide3)}
            </li>
            <li className="text-gray-700 text-xs font-light">
              {renderTextWithLinks(ForDCDDUsersContent.guide.guide4)}
            </li>
          </ol>
          <div className="w-full flex justify-center py-4">
            <a
              href="https://www.educareskill.com/#/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex justify-center items-center w-40 h-10  bg-customOriange-200 text-white rounded-md font-semibold transition-all duration-300 ease-in-out  hover:bg-hover:bg-orange-700 hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Sign Up
            </a>
          </div>
          <p className="text-start text-customOriange-200">
            {ForDCDDUsersContent.importentNote1}
          </p>
          <p className="text-start text-customOriange-200">
            {renderTextWithLinks(ForDCDDUsersContent.importentNote2)}
          </p>
        </div>
        <div className="w-full border border-customOriange-200 rounded-3xl shadow-md py-8 md:py-12 px-2 bg-primary-400 mt-4 mb-12 md:mb-20">
          <img src={DCDDShortTextImage} alt="dcdd image" className=""/>
        </div>
        </div>
      </div>
    </>
  );
};
export default ForDCDDUsersReadMore;
