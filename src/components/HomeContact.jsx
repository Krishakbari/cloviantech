import React from 'react'; 
import RightImg from '../assets/Right.png';

const HomeContact = () => {
  return (
    <section className="bg-gray-50 sm:py-8 pb-8 px-6 sm:px-10 md:px-20 font-manrope">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch">

        {/* Left Content */}
        <div className="md:w-2/3 p-6 md:p-12 flex flex-col justify-between">
          
          {/* Top - Mission */}
          <div>
            <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full mb-4 inline-block">
              Our Mission Statement
            </span>
          </div>

          {/* Middle - Description */}
          <div className="flex-grow flex flex-col justify-center">
            {/* Top short text */}
            <p className="text-gray-900 sm:text-4xl text-lg  mb-4 font-inter ">
              Empowering the world through transformative technology solutions
            </p>
            {/* Main paragraph */}
            <p className="text-gray-500 sm:text-lg text-base">
              We are dedicated to empowering individuals, businesses, and communities by providing innovative and cutting-edge technology solutions that unlock new possibilities and drive positive change. Our mission is to make technology accessible, reliable, and impactful, enabling our customers to thrive in the digital era and shape a better future for all.
            </p>
          </div>

          {/* Bottom - Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-[500px] sm:p-6 flex items-center justify-center">
          <img 
            src={RightImg} 
            alt="Contact Illustration" 
            className="w-full h-full object-cover rounded-2xl" 
          />
        </div>

      </div>
    </section>
  );
};

export default HomeContact;
