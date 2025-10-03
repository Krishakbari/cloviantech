import React, { useState } from "react";
import profile1 from '../assets/pp1.png'
import profile2 from '../assets/pp2.png'
import profile3 from '../assets/pp3.png'
import profile4 from '../assets/pp4.png'

const testimonials = [
    {
        name: "Ava Martinez",
        position: "Operations Manager, ZenithCore Solutions",
        text: "Clovian Tech Solutions helped us streamline our internal workflows beyond our expectations. Their team's responsiveness and custom-built automation tools have significantly improved our daily operations. We’re extremely happy with the results.",
        image: profile1,
    },
    {
        name: "Liam Patel",
        position: "Co-Founder, Nexvia Labs",
        text: "Working with Clovian Tech Solutions was a seamless experience. Their attention to detail and ability to translate complex needs into simple solutions made all the difference for our team. Highly recommended!",
        image: profile3,
    },
    {
        name: "Maya Chen",
        position: "Product Lead, OrbitEdge Innovations",
        text: "The UI/UX expertise at Clovian Tech Solutions helped us transform our platform into something our users truly enjoy. Their design thinking approach added real value to our product experience.",
        image: profile2,
    },
    {
        name: "Noah Kim",
        position: "Data Analyst, BrightLink Systems",
        text: "Clovian Tech Solutions delivered a powerful analytics dashboard that brought clarity to our data. Their commitment to quality and collaboration exceeded our expectations.",
        image: profile4,
    },
];


const HomeCustomer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const testimonial = testimonials[currentIndex];

    return (
        <section className="mt-4 pb-12 px-4 sm:px-12 font-manrope bg-gray-50">
            <div className="text-center mb-8">
                <span className="text-sm text-purple-400 bg-purple-100 px-3 py-1 rounded-full inline-block mb-2">
                    Testimonials
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
                    1M+ Global Customers
                </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start p-6 sm:p-10 space-y-6 md:space-y-0 md:space-x-6 relative">
                {/* Left Image */}
                {/* Left Image */}
                <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-2xl"
                    />
                </div>


                {/* Right Content */}
                <div className="flex-1 text-left">
                    <p className="text-gray-500 mb-4 sm:text-lg text-sm">{testimonial.text}</p>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>

                    {/* Arrows */}
                    <div
                        className="
        flex space-x-4
        mt-4
        md:absolute md:bottom-6 md:right-6
        md:mt-0
        justify-center md:justify-end
        w-full md:w-auto
    "
                    >
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                        >
                            &#8592;
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition"
                        >
                            &#8594;
                        </button>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default HomeCustomer;
