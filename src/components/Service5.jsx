import React from "react";
import office1 from "../assets/office1.png";
import office2 from "../assets/office2.png";
import office3 from "../assets/office3.png";

const Service5 = () => {
  const offices = [
    {
      id: 1,
      image: office1,
      city: "San Francisco",
      address: "123 Main Street, Suite 200",
      phone: "(555) 123-4567",
    },
    {
      id: 2,
      image: office2,
      city: "New Mexico",
      address: "789 Canyon Road",
      phone: "(555) 555-1234",
    },
    {
      id: 3,
      image: office3,
      city: "London",
      address: "789 Oak Street, 4th Floor, Suite 402",
      phone: "+44 20 1234 5678",
    },
  ];

  return (
    <section className="bg-gray-50 py-4 sm:py-16 px-6 md:px-12 lg:px-20 font-manrope">
      {/* Top Section */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
          Our Offices
        </span>
        <h2 className="text-3xl md:text-4xl  text-gray-900 mt-4 font-inter ">
          Discover Our Global Network of Offices
        </h2>
        <p className="text-gray-600 mt-4 font-manrope">
          Experience our expansive network of offices across the world,
          connecting you to our exceptional services wherever you are.
        </p>
      </div>

      {/* Office Cards */}
      <div className="grid sm:gap-8 gap-4 sm:mt-12 mt-6  sm:grid-cols-2 lg:grid-cols-3">
        {offices.map((office) => (
          <div
            key={office.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
          >
            <img
              src={office.image}
              alt={office.city}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {office.city}
              </h3>
              <p className="text-gray-600 text-sm">{office.address}</p>
              <p className="text-gray-800 text-sm font-medium mt-1">
                {office.phone}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 sm:mt-12 mt-4">
        <button className="px-6 py-2 rounded-full bg-blue-800 text-white hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Service5;
