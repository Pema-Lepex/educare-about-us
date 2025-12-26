import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Contact } from "assets";
import {
  CommonHeader1,
  CommonHeader4,
  CommonParagraph1,
  CommonParagraph2,
  CommonParagraph3,
} from "components";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto space-y-12">
      {/* 1. Header Section */}
      <div className="text-center">
        <CommonHeader1 className=" font-black text-[#1b364d] tracking-tight uppercase mb-2">
          CONTACT US
        </CommonHeader1>
        <CommonParagraph2 className="text-[#1b364d]/80 ">
          We'd love to hear from you. Get in touch with our team!
        </CommonParagraph2>
      </div>

      {/* 2. Top Content: Info and Office Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Contact Info Card */}
        <div className="border border-customOriange-200 rounded-[2rem] p-8 md:p-12 shadow-sm bg-white">
          <CommonHeader4 className="text-orange-500 font-bold mb-8">
            Get In Touch
          </CommonHeader4>

          <div className="space-y-8">
            {/* Visit Us */}
            <div className="flex gap-4">
              <div className="p-3 bg-blue-50 rounded-full h-fit">
                <MapPin className="w-5 h-5 text-[#1b364d]" />
              </div>
              <div>
                <CommonParagraph1 className="font-bold text-gray-900">
                  Visit Our Office
                </CommonParagraph1>
                <CommonParagraph3 className="text-gray-600">
                  Changzamtog, Thimphu
                </CommonParagraph3>
                <CommonParagraph3 className="text-gray-600">
                  Bhutan
                </CommonParagraph3>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex gap-4">
              <div className="p-3 bg-blue-50 rounded-full h-fit">
                <Phone className="w-5 h-5 text-[#1b364d]" />
              </div>
              <div>
                <CommonParagraph1 className="font-bold text-gray-900">
                  Call Us
                </CommonParagraph1>
                <CommonParagraph3 className="text-gray-600">
                  Toll-free number: <span className="font-bold">2016</span>
                </CommonParagraph3>
                <CommonParagraph3 className="text-gray-600">
                  Mobile number:  <span className="font-bold">+975 77718721</span>
                </CommonParagraph3>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex gap-4">
              <div className="p-3 bg-blue-50 rounded-full h-fit">
                <Mail className="w-5 h-5 text-[#1b364d]" />
              </div>
              <div>
                <CommonParagraph1 className="font-bold text-gray-900">
                  Email Us
                </CommonParagraph1>
                <CommonParagraph3 className="text-gray-600">
                  support@educareskill.com
                </CommonParagraph3>
                <CommonParagraph3 className="text-sm text-gray-400">
                  We'll respond as soon as possible.
                </CommonParagraph3>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex gap-4">
              <div className="p-3 bg-blue-50 rounded-full h-fit">
                <Clock className="w-5 h-5 text-[#1b364d]" />
              </div>
              <div>
                <CommonParagraph1 className="font-bold text-gray-900">
                  Office Hours
                </CommonParagraph1>
                <CommonParagraph3 className="text-gray-600">
                  Monday - Friday: 9:30 AM - 5:30 PM
                </CommonParagraph3>
                <CommonParagraph3 className="text-gray-600">
                  Saturday: 9:30 AM - 1:00 PM
                </CommonParagraph3>
                <CommonParagraph3 className="text-gray-600">
                  Sunday: Closed
                </CommonParagraph3>
              </div>
            </div>
          </div>
        </div>

        {/* Office Building Image */}
        <div className="rounded-[2rem] overflow-hidden shadow-sm h-full">
          <img
            src={Contact} // Replace with actual asset
            alt="iBEST Institute Building"
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>
      </div>

      {/* 3. Google Maps Section */}
      <div className="w-full h-[450px] rounded-[2rem] overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          title="Educare Skill Pvt Ltd Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.676060529613!2d89.6438489!3d27.4615683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1959932f5308b%3A0x97d7cd3fa717f8ef!2sEducare%20Skill%20Pvt%20Ltd!5e0!3m2!1sen!2sbt!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="w-full h-28"></div>
    </section>
  );
}
