import React from 'react';
import LineImg from '../assets/Line.png';
import { useNavigate } from 'react-router-dom';
const HomeAbout = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-gray-50 pt-16 sm:py-12 px-6 sm:px-10 md:px-20 text-center font-manrope">
      {/* Small "About Us" Badge */}
      <p className="inline-block bg-gray-200 text-gray-600 text-sm py-1 px-3 rounded-full mb-4">
        About Us
      </p>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl  text-gray-900 mb-3 font-inter">
        Turning Your Vision
      </h2>

      {/* Subheading */}
      <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-8 max-w-3xl mx-auto">
        Unleash innovation and accelerate growth with our dynamic product.
      </p>

      {/* Description Box with side lines */}
      <div className="relative bg-white rounded-lg shadow-md p-6 md:p-10 max-w-7xl mx-auto text-gray-900 text-sm sm:text-base md:text-lg flex flex-col md:flex-row items-center md:justify-between">
        
        {/* Left Line - only visible on desktop */}
        <img
          src={LineImg}
          alt="Left Line"
          className="hidden md:block  mr-6"
        />

        {/* Text Content */}
        <div className="flex-1 text-left">
          <p className="mb-4">
            At Godhani Technology, we bring your ideas to life with cutting-edge IT solutions that drive innovation and growth. Whether it's a website, mobile app, AI software, or an e-commerce platform, we create digital solutions that transform businesses.
          </p>
          <p>
            Our expert team specializes in Web & App Design, AI & ML Development, UI/UX Design, and Custom Software Solutions. We ensure that your business gets the technological edge it deserves.
          </p>
        </div>

        {/* Right Line - only visible on desktop */}
        <img
          src={LineImg}
          alt="Right Line"
          className="hidden md:block  ml-6"
        />
      </div>
      <p className="inline-block bg-[#1c3446] text-white text-lg py-1 px-3 rounded-full my-10 cursor-pointer" onClick={()=>navigate("/contact")}>
        Contact Us
      </p>
    </section>
  );
};

export default HomeAbout;
