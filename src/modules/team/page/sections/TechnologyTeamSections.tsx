import React from 'react';
import { Code, ArrowRight } from 'lucide-react';
import { CommonHeader2, CommonHeader4, CommonParagraph2 } from 'components';

export default function TechnologyTeam() {
  return (
    <section className="md:py-16 py-4 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <CommonHeader2 className="font-bold text-center text-blue-600 md:mb-12 mb-6">
        Technology Team
      </CommonHeader2>

      {/* Technology Card */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="border border-blue-200 rounded-2xl p-8 shadow-sm bg-white hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            {/* Blue icon and role title */}
            <div className="p-2 bg-blue-50 rounded-lg">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <CommonHeader4 className=" font-semibold text-blue-500">
              Software Developers
            </CommonHeader4>
          </div>
          <CommonParagraph2 className="text-gray-600 leading-relaxed ">
            Our dedicated team of software developers designs, develops, and maintains 
            our websites and applications, ensuring operations run smoothly and the 
            needs of users are met. They write clean, efficient code, troubleshoot 
            issues, and collaborate with teams to deliver reliable and scalable 
            digital solutions.
          </CommonParagraph2>
          
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col items-center text-center space-y-6">
        <CommonParagraph2 className="text-gray-700  font-medium">
          If you wish to join the team, click on the link below:
        </CommonParagraph2>
        
        <button className="flex items-center gap-2 bg-[#1b364d] text-white px-8 py-3 rounded-lg hover:bg-[#254a69] transition-colors duration-300 shadow-lg">
          Join Our Team
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className="w-full h-20"></div>
    </section>
  );
}