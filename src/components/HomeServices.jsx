import React, { useState } from "react";
import RightImage from "../assets/Right2.png";
import service1 from "../assets/ser1.png"
import service2 from "../assets/ser2.png"
import service3 from "../assets/ser3.png"
import service4 from "../assets/ser4.png"
import service5 from "../assets/ser5.png"
import service6 from "../assets/ser6.png"
import service7 from "../assets/ser7.png"
import service8 from "../assets/ser8.png"

const servicesData = [
    {
        title: "Generative AI Solution",
        category: "Services",
        description:
            "Unlock creative potential and automate content creation with our Generative AI solutions. We harness advanced models to generate high-quality text, images, and code tailored to your brand's voice, helping you scale creativity, enhance customer engagement, and build next-generation applications.",
        image: service1,
    },
    {
        title: "Agentic AI & Automation",
        category: "Services",
        description:
            "Go beyond simple automation with intelligent AI agents that execute complex, multi-step tasks autonomously. We deploy digital agents to handle intricate workflows, from data processing to customer support, freeing up your team to focus on high-value strategic initiatives.",
        image: service2,
    },
    {
        title: "Machine Learning & Deep Learning",
        category: "Services",
        description:
            "Turn your data into your most valuable asset. Our Machine Learning and Deep Learning services uncover predictive insights hidden in your datasets. We build custom models for forecasting, recommendation engines, and fraud detection, enabling smarter, data-driven decisions.",
        image: service3,
    },
    {
        title: "Computer Vision Solutions",
        category: "Services",
        description:
            "Empower your systems to see and understand the world. We develop sophisticated Computer Vision solutions that analyze images and videos to automate tasks like quality control, object detection, and facial recognition, enhancing security and operational efficiency.",
        image: service4,
    },
    {
        title: "Cloud Computing Services",
        category: "Services",
        description:
            "Build a scalable, secure, and resilient infrastructure with our expert Cloud Computing services. We help you migrate, manage, and optimize your workloads on leading platforms like AWS and Azure, ensuring your business leverages the full potential of the cloud for agility and growth.",
        image: service5,
    },
    {
        title: "Website Development",
        category: "Services",
        description:
            "Create a powerful digital presence with a modern, responsive, and high-performance website. We specialize in building custom websites that are not only visually stunning but also SEO-friendly and optimized for conversions, delivering seamless user experiences that drive results.",
        image: service6,
    },
    {
        title: "Application Development",
        category: "Services",
        description:
            "Bring your ideas to life with our end-to-end application development services. We design and build intuitive, scalable, and secure mobile and web applications for any platform, ensuring your product meets user needs and aligns perfectly with your business goals.",
        image: service7,
    },
    {
        title: "Custom Software Development",
        category: "Services",
        description:
            "Solve your unique business challenges with software built specifically for you. When off-the-shelf solutions fall short, we create robust and scalable solutions that streamline your operations, boost productivity, and provide a lasting competitive advantage.",
        image: service8,
    },
];



const HomeServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
    };

    const service = servicesData[currentIndex];

    return (
        <section className="py-10 px-4 sm:px-12 font-manrope mt-10  ">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row md:justify-between p-6 sm:p-4 sm:pl-10 space-y-6 md:space-y-0 md:space-x-6 sm:pt-10">
                {/* Left Content */}
                <div className="flex-1 text-left">
                    <span className="text-sm sm:text-md text-purple-400 bg-purple-100 px-3 py-1 rounded-full inline-block mb-4">
                        {service.category}
                    </span>
                    <h2 className="text-2xl sm:text-4xl text-gray-900 mb-4 font-inter">
                        {service.title}
                    </h2>
                    <p className="text-gray-500 sm:mb-6 mb-2 sm:text-xl text-sm">
                        {service.description}
                    </p>

                    {/* Arrows */}
                    <div className="flex justify-start space-x-4 sm:mt-32 sm:justify-end">
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

                {/* Right Image */}
                <div className="md:w-[500px] flex items-center justify-center">
                    <img
                        src={service.image}
                        alt="Contact Illustration"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </section>

    );
};

export default HomeServices;
