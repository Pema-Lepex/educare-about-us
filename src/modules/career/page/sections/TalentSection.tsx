import React from "react";
import { CheckCircle2, Upload, MessageCircle } from "lucide-react";
import { offers, skills } from "assets/content/Career/Skills";
import {
  CommonHeader1,
  CommonHeader2,
  CommonHeader3,
  CommonHeader4,
  CommonParagraph1,
  CommonParagraph2,
} from "components";

export default function CreativeTalentSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Main Section Heading */}
      <CommonHeader1 className=" font-bold text-center text-[#1b364d] mb-8">
        We're Looking For Creative Talent
      </CommonHeader1>

      {/* 1. Areas of Interest Card (Purple Theme) */}
      <div className="border border-purple-300 rounded-2xl p-6 md:p-10 bg-white shadow-sm">
        <CommonParagraph1 className="text-gray-700 mb-8 ">
          If you are a creative maverick with an unquenchable desire to tell a
          story and are competent in any of the following areas, we'd love to
          hear from you.
        </CommonParagraph1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-purple-50 p-4 rounded-xl border border-purple-100"
            >
              <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <CommonParagraph2 className="text-gray-800 font-medium">
                {skill}
              </CommonParagraph2>
            </div>
          ))}
        </div>
      </div>

      {/* 2. How to Apply Card (Orange Theme) */}
      <div className="border border-customOriange-200 rounded-2xl p-6 md:p-10 bg-white shadow-sm">
        <CommonHeader4 className="font-semibold text-orange-500 mb-4">
          How to Apply
        </CommonHeader4>
        <CommonParagraph2 className="text-gray-600 mb-6 leading-relaxed md:max-w-2xl">
          Please submit your CV along with any relevant academic transcripts and
          certificate. We'll review your application and get back to you soon.
          Apply via provided link below.
        </CommonParagraph2>
        <button className="flex items-center gap-2 bg-[#1b364d] text-white px-6 py-3 rounded-lg hover:bg-[#254a69] transition-all shadow-md">
          <Upload className="w-4 h-4" />
          Submit Application
        </button>
      </div>

      {/* 3. What We Offer Card (Orange Theme) */}
      <div className="border border-customOriange-200 rounded-2xl p-6 md:p-10 bg-white shadow-sm">
        <CommonHeader4 className=" font-semibold text-orange-500 mb-6">
          What We Offer
        </CommonHeader4>
        <ul className="space-y-4">
          {offers.map((offer, index) => (
            <li
              key={index}
              className="flex gap-3 text-gray-700 leading-relaxed"
            >
              <span className="text-orange-500 font-bold">•</span>
              <CommonParagraph2>{offer}</CommonParagraph2>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Text */}
      <div className="text-center pt-8">
        <CommonParagraph2 className="text-gray-700 text-lg flex flex-col md:flex-row items-center justify-center gap-2">
          Have questions about joining our team?
          <span className="font-semibold text-[#1b364d] cursor-pointer hover:underline flex items-center gap-1">
            Feel free to reach out to us!
          </span>
        </CommonParagraph2>
      </div>
      <div className="w-full h-20"></div>
    </section>
  );
}
