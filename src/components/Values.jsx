import React from "react";
import v1 from "../assets/v1.svg";
import v2 from "../assets/v2.svg";
import v3 from "../assets/v3.svg";
import v4 from "../assets/v4.svg";
import v5 from "../assets/v5.svg";
import v6 from "../assets/v6.svg";

const Values = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <span className="bg-[#EBEBEB] text-gray-500 text-[14px] font-medium px-2.5 py-0.5 rounded-full">
          Our Values
        </span>
        <h2 className="text-3xl font-bold mt-2">
          Guided by Integrity and Purpose
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          At FutureSphere, we are driven by a strong set of values that shape
          every aspect of our business, ensuring transparency, ethical
          practices, and a shared commitment to making a positive impact.
        </p>
      </div>

      {/* Optional wrapper for slight border & rounding like in image */}
      <div className="bg-white p-4 md:p-6 shadow-md rounded-xl border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="relative bg-white p-6 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-15 h-15 bg-[#18384F] rounded-full blur-[80px]"></div>
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <img src={v1} alt="Integrity Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Integrity
              </h3>
              <p className="text-[#5E5C80] text-center">
                Upholding honesty and ethical conduct in everything we do, building
                trust with our stakeholders.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-6 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-15 h-15 bg-[#18384F] rounded-full blur-[80px]"></div>
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <img src={v2} alt="Innovation Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Innovation
              </h3>
              <p className="text-[#5E5C80] text-center">
                Embracing a culture of creativity and continuous improvement to
                drive groundbreaking solutions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-6 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-15 h-15 bg-[#18384F] rounded-full blur-[80px]"></div>
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <img src={v3} alt="Collaboration Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Collaboration
              </h3>
              <p className="text-[#5E5C80] text-center">
                Fostering a collaborative environment that encourages teamwork,
                diversity, and shared success.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white p-6 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-15 h-15 bg-[#18384F] rounded-full blur-[80px]"></div>
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <img src={v4} alt="Customer-centric Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Customer-centric
              </h3>
              <p className="text-[#5E5C80] text-center">
                Putting our customers at the heart of everything we do, delivering
                exceptional experiences and exceeding their expectations.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative bg-white p-6 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-15 h-15 bg-[#18384F] rounded-full blur-[80px]"></div>
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <img src={v5} alt="Sustainability Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Sustainability
              </h3>
              <p className="text-[#5E5C80] text-center">
                Operating with a focus on environmental and social responsibility,
                striving for a more sustainable future.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative bg-white p-6 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-15 h-15 bg-[#18384F] rounded-full blur-[80px]"></div>
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <img src={v6} alt="Excellence Icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Excellence
              </h3>
              <p className="text-[#5E5C80] text-center">
                Pursuing excellence in all aspects of our work, setting high
                standards and striving for continuous growth and improvement.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Values;
