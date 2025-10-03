import { useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import BlogCard from "./BlogCard";

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  const relatedBlogs = blogs.filter((blog) => !blog.featured).slice(0, 3);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 container mx-auto">
      {/* Blog Header */}
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between lg:gap-6 mb-12 border border-[#EFF0F6]">
        <div className="w-full lg:w-1/2 p-4 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-sm text-gray-500">{blog.date}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 leading-snug">
            {blog.title}
          </h1>
        </div>

        <div className="p-4">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-[384px] h-[284px] rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose max-w-4xl mx-auto prose-p:text-gray-700 prose-h2:text-gray-900 prose-li:text-gray-600">
        {blog.content.map((section, index) => (
          <div key={index} className="mb-10 ">
            {section.heading && (
              <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
            )}
            {section.text && (
              <p className="text-gray-700 mb-4 leading-relaxed">
                {section.text}
              </p>
            )}
            {section.list && (
              <ul className="list-disc list-inside space-y-1">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.image && (
              <img
                src={section.image}
                alt="Blog Content"
                className="rounded-lg mt-6 w-full"
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-16">
        <h1 className="text-lg md:text-3xl font-semibold text-gray-900 mb-6 text-center">
          Related Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
