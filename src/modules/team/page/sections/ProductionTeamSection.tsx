import { productionData } from 'assets/content/team/ProductionTeamInfo';
import { CommonHeader2, CommonHeader4, CommonParagraph2 } from 'components';
import React from 'react';
export default function ProductionTeam() {
  return (
    <section className="md:py-16 py-4 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <CommonHeader2 className=" font-bold text-center text-purple-600 md:mb-12 mb-6">
        Production Team
      </CommonHeader2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {productionData.map((item, index) => (
          <div 
            key={index} 
            className={`${item.fullWidth ? "md:col-span-2" : "col-span-1"}`}
          >
            <div className="h-full border border-purple-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-50 rounded-lg">
                  {item.icon}
                </div>
                <CommonHeader4 className="font-semibold text-purple-600">
                  {item.title}
                </CommonHeader4>
              </div>
              <CommonParagraph2 className="text-gray-600 leading-relaxed ">
                {item.description}
              </CommonParagraph2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}