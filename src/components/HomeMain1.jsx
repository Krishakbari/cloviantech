import React from "react";

const HomeMain1 = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-8 sm:px-6 sm:py-18 md:py-36 font-inter ">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900  leading-snug md:leading-[1.2] max-w-4xl">
        Revolutionizing the Future with
        <br className="hidden sm:block" />
        <span className="block sm:mt-8 ">Cutting-Edge Technology</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
        Empowering Innovation for a Digital Tomorrow
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">

        <button className="px-6 py-2 bg-[#1c3446] text-white rounded-full font-medium hover:bg-[#152a37] transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default HomeMain1;
