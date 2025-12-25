import { DCDDPageWideBackGroundImage, FamilyWithPhoneImage } from "assets";
import { ForDCDDUsersContent } from "assets/content/about/About";
import { CommonHeader2, CommonParagraph1 } from "components";

const ForDCDDUsersReadMore: React.FC = () => {
  return (
    <>
      {/* {website} */}
      <div className="w-full hidden lg:flex justify-center items-center relative">
        <section id="registration-guid" className=" py-16 px-40 ">
          {ForDCDDUsersContent && (
            <div className=" pb-[350px] 2xl:pb-[800px]">
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
                <ol className="list-decimal list-inside space-y-2">
                  {ForDCDDUsersContent.guide.map((item, index) =>
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
                <p className="py-4 px-6 text-xl font-light text-customOriange-200">
                  {ForDCDDUsersContent.importentNote}
                </p>
              </div>
            </div>
          )}
          <div className="absolute -bottom-20 md:-bottom-[20rem] 2xl:-bottom-[20rem] right-3 w-full">
            <img
              src={FamilyWithPhoneImage}
              alt="ThreeCharacterImage"
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>
      {/* {small screen} */}
      <div className="lg:hidden">
        <div className="relative">
          <img src={DCDDPageWideBackGroundImage} alt="image" className="w-full" />
          <img
            src={FamilyWithPhoneImage}
            alt="imag"
            className="absolute -bottom-20 md:-bottom-36"
          />
        </div>

        <div className="w-full border border-[#981AF7] rounded-3xl shadow-md py-8 md:py-12 px-2 bg-blue-50 pb-24 md:pb-80 space-y-2">
          <h2 className="text-[#981AF7] text-center text-lg font-bold">
            {ForDCDDUsersContent.title}
          </h2>
          <p className="text-start">{ForDCDDUsersContent.description1}</p>
          <p className="text-start">{ForDCDDUsersContent.description2}</p>
          <ol className="list-decimal list-inside space-y-2 px-2">
            {ForDCDDUsersContent.guide.map((item, index) =>
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
          <p className="text-start text-customOriange-200">
                  {ForDCDDUsersContent.importentNote}
                </p>
        </div>
      </div>
    </>
  );
};
export default ForDCDDUsersReadMore;
