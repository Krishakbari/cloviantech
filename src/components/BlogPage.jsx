import React, { useState } from "react";
import BlogCard from "./BlogCard";
import FeaturedCard from "./FeaturedCard";
import { blogs } from "../data/blogData";
import Contactus from "./Contactus";
import Blog1 from "../components/Blog1";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All" },
    { name: "Healthcare" },
    { name: "Business" },
    { name: "Cloud Computing" },
    { name: "Development" },
  ];

  const featuredMain = blogs.find(
    (blog) => blog?.featured && blog?.type === "main"
  );

  const gridBlogs = blogs
    .filter((blog) => !blog.featured)
    .filter((blog) => {
      return activeCategory === "All" || blog.category === activeCategory;
    });

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <div className="bg-gray-50">
    <Blog1/>
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 container mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Insights and Inspiration
        </h1>
        <p className="text-[16px] text-gray-600">
          Explore our captivating blog filled with thought-provoking articles
          and inspiring content that will ignite your creativity and expand your
          knowledge.
        </p>
      </div>

      <div className="mb-12">
        <FeaturedCard blog={featuredMain} />
      </div>

      {/* Categories */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.name
                ? "bg-[#18384F] text-white"
                : "bg-[#EFF0F6] text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Grid of Blogs */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {gridBlogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
        {gridBlogs.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No blogs found in this category.
          </div>
        )}
      </div>
    </div>
    <Contactus/>
    </div>
  );
};

export default BlogPage;
