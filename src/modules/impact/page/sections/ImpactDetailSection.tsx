import React from "react";
import { TrendingUp, ShieldCheck } from "lucide-react";
import { CommonHeader3, CommonParagraph2 } from "components";
import {
  ImpactBottomSection,
  ImpactOfEducare,
} from "assets/content/impact/Impact";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";
const BottomSection: React.FC = () => {
  return (
    <>
      
        {ImpactBottomSection.map((items) => (
          <div  key={items.id} className={`border ${items.colorCode.border} rounded-[2rem] p-8 md:p-12 shadow-sm bg-white`}>
          <div
            className="flex flex-col md:flex-row items-start gap-6"
          >
            <div className={`p-3 ${items.colorCode.iconBG} rounded-full flex-shrink-0`}>
              <ShieldCheck className={`w-8 h-8 ${items.colorCode.text}`} />
            </div>
            <div className="space-y-4">
              <CommonHeader3 className={`font-bold ${items.colorCode.text}`}>
                {items.title}
              </CommonHeader3>
              <CommonParagraph2 className="text-gray-600 leading-relaxed">
               {items.description1}
              </CommonParagraph2>
              <CommonParagraph2 className="text-gray-800 leading-relaxed">
                 {renderTextWithLinks(items.description2)}
              </CommonParagraph2>
            </div>
          </div>
          </div>
        ))}
    </>
  );
};
export default function ImpactDetailSection() {
  return (
    <section className="py-16 px-4 max-w-7xl 3xl:max-w-full 3xl:px-36 mx-auto space-y-8 mb-24">
      {/* Top Row: Approach and Audience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ImpactOfEducare.map((items) => (
          <div
            className={`border ${items.colorCode.border} rounded-[2rem] p-8 shadow-sm bg-white`}
            key={items.id}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 ${items.colorCode.iconBG} rounded-full flex-shrink-0`}
              >
                <TrendingUp className={`w-6 h-6 ${items.colorCode.text}`} />
              </div>
              <div>
                <CommonHeader3 className={`font-bold ${items.colorCode.text} mb-2`}>
                  {items.title}
                </CommonHeader3>
                <CommonParagraph2 className="text-gray-600 leading-relaxed">
                  {items.description}
                </CommonParagraph2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Row: Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="border-t-4 border-blue-400 rounded-[2rem] p-8 text-center bg-white shadow-md">
          <span className="block text-4xl md:text-5xl font-black text-blue-600">
            PP-XII
          </span>
          <span className="text-gray-800 font-bold text-lg">
            Comprehensive Dzongkha Tutorials
          </span>
        </div>
        <div className="border-t-4 border-green-400 rounded-[2rem] p-8 text-center bg-white shadow-md">
          <span className="block text-4xl md:text-5xl font-black text-green-600">
            100,000+
          </span>
          <span className="text-gray-800 font-bold text-lg">Registered Users</span>
        </div>
        <div className="border-t-4 border-red-400 rounded-[2rem] p-8 text-center bg-white shadow-md">
          <span className="block text-4xl md:text-5xl font-black text-red-600">
            1000+
          </span>
          <span className="text-gray-800 font-bold text-lg">
           Entertaining and Impactful Episodes 
          </span>
        </div>
      </div>

      {/* Bottom Row: Safe Haven */}
      <BottomSection />
    </section>
  );
}
