
import React from 'react';
import { TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { CommonHeader3, CommonParagraph2} from 'components';

export default function ImpactDetailSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto space-y-8 mb-24">
      
      {/* Top Row: Approach and Audience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Approach */}
        <div className="border border-orange-200 rounded-[2rem] p-8 shadow-sm bg-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-50 rounded-full flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <CommonHeader3 className="font-bold text-orange-600 mb-2">Our Approach</CommonHeader3>
              <CommonParagraph2 className="text-gray-600 leading-relaxed">
                In accordance with this vision, Educare Skill aims to revolutionize the way people can learn our national language by creating content that simplifies Dzongkha and makes learning an engaging and interactive experience for everyone.
              </CommonParagraph2>
            </div>
          </div>
        </div>

        {/* Who We Help */}
        <div className="border border-purple-200 rounded-[2rem] p-8 shadow-sm bg-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-50 rounded-full flex-shrink-0">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <CommonHeader3 className="font-bold text-purple-600 mb-2">Who We Help</CommonHeader3>
              <CommonParagraph2 className="text-gray-600 leading-relaxed">
                Educare Skill has helped, and continues to help, students learn Dzongkha and prepare for their exams. Children can build a solid Dzongkha foundation, students can prepare for exams, and graduates can use it for their RCSE examinations.
              </CommonParagraph2>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-green-200 rounded-[2rem] p-8 text-center bg-white shadow-sm">
          <span className="block text-4xl md:text-5xl font-black text-green-600">50,000+</span>
          <span className="text-gray-800 font-bold text-lg">Downloads</span>
        </div>
        <div className="border border-red-200 rounded-[2rem] p-8 text-center bg-white shadow-sm">
          <span className="block text-4xl md:text-5xl font-black text-red-600">1000s</span>
          <span className="text-gray-800 font-bold text-lg">Daily Active Learners</span>
        </div>
        <div className="border border-blue-200 rounded-[2rem] p-8 text-center bg-white shadow-sm">
          <span className="block text-4xl md:text-5xl font-black text-blue-600">PP-XII</span>
          <span className="text-gray-800 font-bold text-lg">Complete Coverage</span>
        </div>
      </div>

      {/* Bottom Row: Safe Haven */}
      <div className="border border-orange-200 rounded-[2rem] p-8 md:p-12 shadow-sm bg-white">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="p-3 bg-orange-50 rounded-full flex-shrink-0">
            <ShieldCheck className="w-8 h-8 text-orange-500" />
          </div>
          <div className="space-y-4">
            <CommonHeader3 className="font-bold text-orange-600">A Safe Haven for Learning</CommonHeader3>
            <CommonParagraph2 className="text-gray-600 leading-relaxed">
              In a technologically driven world where everyone, including your child, has access to smartphones and devices, Educare Skill provides a safe haven, making screentime both productive and educational.
            </CommonParagraph2>
            <CommonParagraph2 className="text-gray-800 leading-relaxed">
              <span className="font-bold">Educare Skill is not just an online learning platform — it is a service to our nation.</span> We believe that the antidote to protecting our national identity lies in our national language, Dzongkha. We hope that by preserving our national language, our content will continue to help children and adults alike for generations to come.
            </CommonParagraph2>
          </div>
        </div>
      </div>

    </section>
  );
}