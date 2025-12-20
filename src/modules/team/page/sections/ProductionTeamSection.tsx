import { productionData } from 'assets/content/team/ProductionTeamInfo';
import React from 'react';
export default function ProductionTeam() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">
        Production Team
      </h2>

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
                <h3 className="text-xl font-semibold text-purple-600">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}