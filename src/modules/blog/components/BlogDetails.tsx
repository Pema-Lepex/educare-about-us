import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "assets/content/blog/blogs";

const BlogDetail: React.FC = () => {
  const navigation = useNavigate();
  const handleClickToBlog = () => {
    "/blog";
  };
  const { id } = useParams();
  const blog = blogs.find(b => b.id.toString() === id);

  if (!blog) {
    return (
      <section className="w-full py-40 text-center text-gray-500 text-xl">
        Blog not found.
      </section>
    );
  }

  return (
    <section className="w-full px-4 md:px-10 lg:px-40 py-20 bg-white">
      {/* Back Button */}
      <a
        href="/blog"
        className="text-gray-600 hover:text-gray-900 inline-flex items-center mb-10"
      >
        ← Back to Blogs
      </a>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-10">
        {blog.title}
      </h1>

      {/* Banner Image */}
      <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm mb-12">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[350px] md:h-[500px] object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="text-gray-800 text-xl leading-relaxed space-y-6">
        {(blog.content || blog.subject).split("\n").map((para:string, index:number) =>
          <p key={index}>
            {para.trim()}
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogDetail;
