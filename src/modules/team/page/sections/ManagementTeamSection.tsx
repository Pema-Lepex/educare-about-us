import { managementData } from 'assets/content/team/ManagementTeamInfo';
import { CommonHeader2, CommonHeader4, CommonParagraph2 } from 'components';
import React from 'react';

export default function ManagementTeam() {
  return (
    <section className="md:py-16 py-4 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <CommonHeader2 className=" font-bold text-center text-orange-600 md:mb-12 mb-6">
        Management Team
      </CommonHeader2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {managementData.map((member, index) => (
          <div 
            key={index} 
            className={`${member.fullWidth ? "md:col-span-2" : "col-span-1"}`}
          >
            <div className="h-full border border-orange-400 rounded-2xl p-8 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-50 rounded-lg">
                  {member.icon}
                </div>
                <CommonHeader4 className=" font-semibold text-orange-500">
                  {member.title}
                </CommonHeader4>
              </div>
              <CommonParagraph2 className="text-gray-600 leading-relaxed ">
                {member.description}
              </CommonParagraph2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}