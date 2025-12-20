import { managementData } from 'assets/content/team/ManagementTeamInfo';
import React from 'react';

export default function ManagementTeam() {
  return (
    <section className="md:py-16 py-4 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h2 className="md:text-4xl text-2xl font-bold text-center text-orange-600 md:mb-12 mb-6">
        Management Team
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {managementData.map((member, index) => (
          <div 
            key={index} 
            className={`${member.fullWidth ? "md:col-span-2" : "col-span-1"}`}
          >
            <div className="h-full border border-orange-100 rounded-2xl p-8 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-50 rounded-lg">
                  {member.icon}
                </div>
                <h3 className="text-xl font-semibold text-orange-500">
                  {member.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}