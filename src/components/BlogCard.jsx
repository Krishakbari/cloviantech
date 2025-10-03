const BlogCard = ({ blog }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative overflow-hidden"
      onClick={() => window.location.href = `/blogs/${blog.id}`}
      >
        <img
          src={blog.image}
          alt={blog.title}
          
          className="w-full h-30 md:h-56 lg:h-85 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content Section */}
      <div className="p-5 md:p-6">
        {/* Category Badge */}
        <span className="inline-block bg-[#18384F] text-white text-xs md:text-sm font-normal px-3 py-1.5 rounded-full mb-2 md:mb-3 tracking-wide">
          {blog.category}
        </span>
        
        {/* Title */}
        <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 leading-tight group-hover:text-gray-800 transition-colors duration-200">
          {blog.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-1 md:mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>
        
        {/* Read More Button */}
        <div className="text-right">
          <button 
            className="inline-flex items-center text-gray-600 hover:text-[#18384F] font-semibold text-xs md:text-sm transition-colors duration-200 underline decoration-1 underline-offset-2 hover:decoration-[#18384F]/50"
            aria-label={`Read more about ${blog.title}`}
            onClick={() => window.location.href = `/blogs/${blog.id}`}
          >
            Read more
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;