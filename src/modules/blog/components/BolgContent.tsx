import React from "react";
import { blogs } from "assets/content/blog/blogs";

const BlogSection: React.FC = () => {
  const featured = blogs[0];
  const others = blogs.slice(1);

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-20 bg-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
          Insights & Stories
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Explore creative ideas, behind the scenes, and storytelling tips.
        </p>
      </div>

      {/* Featured Blog */}
      <div className="relative mb-20 border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <div className="flex flex-col md:flex-row">
          {/* IMAGE */}
          <div className="md:w-1/2 overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-80 md:h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* CONTENT */}
          <div className="md:w-1/2 p-10 flex flex-col">
            <h3 className="text-4xl font-light text-gray-900 leading-tight">
              {featured.title}
            </h3>

            <p className="text-gray-700 mt-6 text-lg leading-relaxed">
              {featured.subject}
            </p>

            <a
              href={`/detail/${featured.id}`}
              className="mt-auto pt-8 text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-lg transition-all"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>

      {/* Grid Posts*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {others.map((item, index) =>
          <div
            key={index}
            className="border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover transition-transform duration-700 hover:scale-110"
            />

            <div className="p-6">
              <h4 className="text-2xl font-light text-gray-900">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.subject}
              </p>

              <a
                href={`/detail/${item.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium mt-5 inline-block transition-all"
              >
                Read More →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
