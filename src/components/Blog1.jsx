import React from "react";

const Blog1 = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center py-8 px-4 sm:px-6 sm:py-16 md:py-24 font-inter max-w-7xl mx-auto">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900  leading-snug md:leading-[1.2] max-w-4xl">
                Discover Insights and Inspiration
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
                Explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.
            </p>
        </section>
    );
};

export default Blog1;
