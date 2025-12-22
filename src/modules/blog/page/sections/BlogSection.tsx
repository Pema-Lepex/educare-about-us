import React from "react";
import { ArrowRight } from "lucide-react";
import { blogHeader, blogPosts, featuredPosts } from "assets/content/blog/BlogContents";
import { Blog1 } from "assets";

export default function BlogSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#1b364d] tracking-tight uppercase">
          {blogHeader.header}
        </h2>
        <p className="text-cyan-700 mt-2 text-lg">
          {blogHeader.description}
        </p>
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
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {items.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {items.excerpt}
              </p>
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
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {post.title}
              </h4>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {post.excerpt}
              </p>
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
