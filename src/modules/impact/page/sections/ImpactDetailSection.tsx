import React from "react";
import { TrendingUp, ShieldCheck } from "lucide-react";
import { CommonHeader1, CommonHeader3, CommonParagraph1, CommonParagraph2, CommonParagraph3 } from "components";
import {
  ImpactBottomSection,
  ImpactOfEducare,
  ImpactTitle,
} from "assets/content/impact/Impact";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";
const BottomSection: React.FC = () => {
  return (
    <>
      
        {ImpactBottomSection.map((items) => (
          <div  key={items.id} className={`border ${items.colorCode.border} rounded-[2rem] p-4 md:p-6 lg:p-8 3xl:p-10 shadow-sm bg-white`}>
          <div
            className="flex flex-col lg:flex-row items-start gap-2 md:gap-4"
          >
            <div className={`p-3 ${items.colorCode.iconBG} rounded-full flex-shrink-0`}>
              <ShieldCheck className={`w-8 h-8 4xl:w-10 4xl:h-10 5xl:w-14 5xl:h-14 ${items.colorCode.text}`} />
            </div>
            <div className="space-y-4">
              <CommonHeader3 className={`font-bold ${items.colorCode.text}`}>
                {items.title}
              </CommonHeader3>
              <CommonParagraph1 className="text-gray-600 leading-relaxed">
               {items.description1}
              </CommonParagraph1>
              <CommonParagraph1 className="text-gray-800 leading-relaxed">
                 {renderTextWithLinks(items.description2)}
              </CommonParagraph1>
            </div>
          </div>
          </div>
        ))}
    </>
  );
};
export default function ImpactDetailSection() {
  return (
    <section className="py-8 xl:py-10 3xl:py-12 4xl:py-16 5xl:py-28 px-4 max-w-7xl 3xl:max-w-full 3xl:px-36 mx-auto space-y-8 xl:space-y-10 3xl:space-y-12 4xl:space-y-16 5xl:space-y-28 mb-24">
      {/* Top Row: Approach and Audience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {ImpactOfEducare.map((items) => (
          <div
            className={`border ${items.colorCode.border} rounded-[2rem] p-4 md:p-6 lg:p-8 3xl:p-10 shadow-sm bg-white`}
            key={items.id}
          >
            <div className="flex items-start flex-col lg:flex-row gap-2 md:gap-4">
              <div
                className={`p-3 ${items.colorCode.iconBG} rounded-full flex-shrink-0`}
              >
                <TrendingUp className={`w-6 h-6 4xl:w-10 4xl:h-10 5xl:w-14 5xl:h-14 ${items.colorCode.text}`} />
              </div>
              <div>
                <CommonHeader3 className={`font-bold ${items.colorCode.text} mb-2`}>
                  {items.title}
                </CommonHeader3>
                <CommonParagraph1 className="text-gray-600 leading-relaxed">
                  {items.description}
                </CommonParagraph1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Row: Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="border-t-4 border-blue-400 rounded-[2rem] p-8 text-center bg-white shadow-md">
          <span className="block text-4xl md:text-5xl font-black text-blue-600">
            PP-XII
          </span>
          <span className="text-gray-800 font-bold text-lg 2xl:text-xl 4xl:text-3xl">
            Comprehensive Dzongkha Tutorials
          </span>
        </div>
        <div className="border-t-4 border-green-400 rounded-[2rem] p-8 text-center bg-white shadow-md">
          <span className="block text-4xl md:text-5xl font-black text-green-600">
            100,000+
          </span>
          <span className="text-gray-800 font-bold text-lg 2xl:text-xl 4xl:text-3xl">Registered Users</span>
        </div>
        <div className="border-t-4 border-red-400 rounded-[2rem] p-8 text-center bg-white shadow-md">
          <span className="block text-4xl md:text-5xl font-black text-red-600">
            1000+
          </span>
          <span className="text-gray-800 font-bold text-lg 2xl:text-xl 4xl:text-3xl">
           Entertaining and Impactful Episodes 
          </span>
        </div>
      </div>

      {/* Bottom Row: Safe Haven */}
      <div className="space-y-2 3xl:space-y-6">
        {/* <CommonHeader1 className="text-primary-500">{ImpactTitle.title}</CommonHeader1> */}
        <CommonParagraph1 className="font-bold text-center">{ImpactTitle.description}</CommonParagraph1>
      </div>
      <BottomSection />
      <div className="4xl:h-[300px] 5xl:h-[500px] "/>
    </section>
  );
}
