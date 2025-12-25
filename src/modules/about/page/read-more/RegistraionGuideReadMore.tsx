import { RegistrationGuideBGImage, ThreeCharacterImage } from "assets";
import { RegistrationGuideContent } from "assets/content/about/About";
import { CommonHeader2, CommonParagraph1 } from "components";

const RegistraionGuideReadMore: React.FC = () => {
  return (
    <>
      {/* {website} */}
      <div className="w-full hidden lg:flex justify-center items-center relative">
        <section id="registration-guid" className=" py-16 px-40 ">
          {RegistrationGuideContent && (
            <>
              <div className="w-[90%] mx-auto border border-[#981AF7] rounded-3xl shadow-md p-10 bg-blue-50 space-y-4 min-h-[1000px] mb-20">
                <CommonHeader2 className="text-[#981AF7] text-center">
                  {RegistrationGuideContent.title}
                </CommonHeader2>
                <CommonParagraph1>
                  {RegistrationGuideContent.description}
                </CommonParagraph1>
                <ol className="list-decimal list-inside space-y-2">
                  {RegistrationGuideContent.guide.map((item, index) =>
                    Object.values(item).map((step, stepIndex) => (
                      <li
                        key={`${index}-${stepIndex}`}
                        className="text-gray-700 text-lg font-light"
                      >
                        {step}
                      </li>
                    ))
                  )}
                </ol>
              </div>
            </>
          )}
          <div className="absolute -bottom-20 md:-bottom-40 2xl:-bottom-80 right-3">
            <img src={ThreeCharacterImage} alt="ThreeCharacterImage" />
          </div>
        </section>
      </div>
      {/* {small screen} */}
      <div className="lg:hidden">
        <img src={RegistrationGuideBGImage} />
        <div className="w-full border border-[#981AF7] rounded-3xl shadow-md py-4 px-2 bg-blue-50 pb-24 md:pb-24">
          <h2 className="text-[#981AF7] text-center text-lg font-bold">
            {RegistrationGuideContent.title}
          </h2>
          <p className="text-start">{RegistrationGuideContent.description}</p>
          <ol className="list-decimal list-inside space-y-2 px-2">
            {RegistrationGuideContent.guide.map((item, index) =>
              Object.values(item).map((step, stepIndex) => (
                <li
                  key={`${index}-${stepIndex}`}
                  className="text-gray-700 text-xs font-light"
                >
                  {step}
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    </>
  );
};
export default RegistraionGuideReadMore;
