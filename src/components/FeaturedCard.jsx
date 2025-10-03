import React from "react";

const FeaturedCard = ({ blog }) => {
  console.log(blog);
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 lg:h-auto">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 lg:h-full object-cover p-6 rounded-[40px]"
        />
      </div>
      {/* Content Section */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center ">
        <span className="inline-block bg-[#18384F] text-white text-xs font-semibold px-2 py-1 rounded-full mb-4 self-start">
          {blog.category}
        </span>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <div className="text-right">
          <button className="text-gray-600 hover:text-gray-800 font-semibold self-start underline">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
