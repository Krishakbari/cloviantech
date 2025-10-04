import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "../data/blogData"; // adjust path if different

const HomeBlog = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl  text-gray-900 mb-6 text-center">
        Latest Blogs
      </h2>

      {/* Blog Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default HomeBlog;
