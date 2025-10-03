import React from 'react';

// Data for the FAQ items
const faqData = [
  {
    question: "What is included in the startup website template?",
    answer: "Our startup website template includes a range of essential features and components, such as responsive design, customizable layouts, pre-built sections, integration with popular CMS platforms, and access to a library of high-quality images and icons.",
  },
  {
    question: "Can I customize the template to match my brand’s identity?",
    answer: "Absolutely! Our startup website template provides easy customization options, allowing you to personalize the colors, fonts, logo, and overall look and feel to align with your brand identity. You can create a unique and captivating online presence that reflects your startup’s vision.",
  },
  {
    question: "Is the template optimized for search engines (SEO)?",
    answer: "Yes, our startup website template is designed with SEO best practices in mind. It includes clean code structure, fast loading times, meta tag optimization, and schema markup implementation. These elements contribute to better search engine visibility, helping your website rank higher in search results and attract more organic traffic.",
  },
  {
    question: "Do you offer support and updates for the template?",
    answer: "Absolutely! We provide dedicated customer support to address any queries or concerns you may have while working with our startup website template. Additionally, we regularly release updates to ensure compatibility with the latest web technologies, security patches, and feature enhancements, ensuring your website stays up-to-date and optimized.",
  },
];

const Contact3 = () => {
  return (
    <section className="bg-gray-50 sm:pt-0 pt-8 sm:pb-8  px-4 sm:px-8 lg:px-16 font-manrope">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center sm:mb-12 mb-6">
          <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-1 rounded-full">
            FAQs
          </span>
          <h2 className="text-3xl md:text-5xl  text-gray-800 mt-4 font-inter">
            Answers to some of your questions
          </h2>
          <p className="mt-4 text-gray-600">
            Don't find the answers you were looking for? Contact us at{' '}
            <a href="mailto:futuresphere@gmail.com" className="text-gray-800 font-semibold hover:underline">
              futuresphere@gmail.com
            </a>
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-2">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact3;
