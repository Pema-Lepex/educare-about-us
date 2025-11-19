import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "assets/content/blog/blogs";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) return <p className="p-10 text-center">Blog not found.</p>;

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-16 bg-white">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
      />

      <h1 className="text-3xl md:text-4xl font-bold mt-8 text-gray-900">
        {blog.title}
      </h1>

      <p className="text-gray-600 mt-3 text-xl">
        {blog.subject}
      </p>

      <p className="mt-6 text-gray-700 leading-relaxed text-lg">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetails;
