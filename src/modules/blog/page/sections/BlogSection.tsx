import React from "react";
import { ArrowRight } from "lucide-react";
import {
  blogHeader,
  blogPosts,
  featuredPosts,
} from "assets/content/blog/BlogContents";
import { Blog1 } from "assets";
import {
  CommonHeader1,
  CommonHeader3,
  CommonHeader4,
  CommonParagraph2,
  CommonParagraph3,
} from "components";

export default function BlogSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <CommonHeader1 className=" font-black text-[#1b364d] tracking-tight uppercase">
          {blogHeader.header}
        </CommonHeader1>
        <CommonParagraph2 className="text-cyan-700 mt-2 ">
          {blogHeader.description}
        </CommonParagraph2>
      </div>

      {/* Featured Blog Post */}
      <div className="mb-8 border border-customOriange-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
        {featuredPosts.map((items) => (
          <div key={items.id} className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={items.image}
                alt="Bringing Ideas to Life"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <CommonHeader4 className="font-bold text-gray-900 mb-4">
                {items.title}
              </CommonHeader4>
              <CommonParagraph2 className="text-gray-600 mb-6 leading-relaxed">
                {items.excerpt}
              </CommonParagraph2>
              <a
                href="#"
                className="text-blue-600 font-semibold flex items-center gap-2 hover:underline group"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Grid for Other Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border border-customOriange-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <CommonHeader4 className=" font-bold text-gray-900 mb-2">
                {post.title}
              </CommonHeader4>
              <CommonParagraph2 className="text-gray-600 mb-6 flex-grow">
                {post.excerpt}
              </CommonParagraph2>
              <a
                href="#"
                className="text-blue-600 font-semibold flex items-center gap-2 hover:underline group text-sm"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-28"></div>
    </section>
  );
}
