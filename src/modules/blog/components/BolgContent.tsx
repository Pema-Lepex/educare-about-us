import React from "react";
import { blogs } from "assets/content/blog/blogs";

const BlogSection: React.FC = () => {
  const featured = blogs[0];
  const others = blogs.slice(1);

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16 bg-white">
      {/* Section Head */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Insights & Stories
        </h2>
        <p className="text-gray-500 mt-2">
          Explore creative ideas, behind the scenes, and storytelling tips.
        </p>
      </div>

      {/* Featured Post */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-14">
        <img
          src={featured.image}
          alt={featured.title}
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="p-6 md:p-8 bg-white">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {featured.title}
          </h3>
          <p className="text-gray-600 mt-3">
            {featured.subject}
          </p>
        </div>

        <a
          href={`/detail/${featured.id}`}
          className="text-blue-600 font-medium hover:underline text-right block mb-4 mr-4"
        >
          Read More →
        </a>
      </div>

      {/* Grid Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((item, index) =>
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h4 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2">
                {item.subject}
              </p>

              {/* Read More inside the card */}
              <a
                href={`/detail/${item.id}`}
                className="text-blue-600 font-medium hover:underline mt-3 inline-block"
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
