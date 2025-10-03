import React from 'react';
import story from '../assets/story.jpg';

const OurStory = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* First Section: Text Left, Image Right */}
      <div className="shadow-md rounded-xl border border-gray-200">
        <div className='pl-4 mt-4'>
        <span className="bg-[#EBEBEB] text-gray-500 text-[14px] font-medium px-2.5 py-0.5 rounded-full">Our Story</span>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <p className="text-gray-700">
              In 2010, our founder, Vasily, faced a daunting challenge - preparing for the Law School Admission Test (LSAT) while juggling an internship and evening classes in different cities. The lack of time and a conducive study environment made it incredibly difficult for him to achieve his dream of becoming a lawyer.
            </p>
            {/* <p className="text-gray-700 mt-4">
              During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn’t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.
            </p> */}
          </div>
          <div className="md:w-1/2 p-4 order-1 md:order-2 justify-items-center">
            <img src={story} alt="Team working" className="shadow-md lg:h-[406px] lg:w-[561px] rounded-[32px]" />
          </div>
        </div>

        {/* Second Section: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <p className="text-gray-700">
              This success prompted Vasily to establish FutureSphere, an app development company with a strong focus on creating profitable and impactful applications. Building on their initial achievement, FutureSphere expanded their educational app portfolio to include exams such as SAT, GMAT, MCAT, and more, catering to the needs of a broader audience.
            </p>
            {/* <p className="text-gray-700 mt-4">
              As time went on, it became evident that the industry had much more to offer than just exam-focused applications. People began approaching FutureSphere, seeking guidance on how to develop their own apps, what it takes to succeed, and how to navigate the complex world of mobile applications. In response to this growing demand for expertise and support, FutureSphere expanded its services and evolved into a comprehensive resource for aspiring app creators - a company known as FutureSphere.
            </p> */}
          </div>
          <div className="md:w-1/2 p-4 order-1 md:order-2 justify-items-center">
            <img src={story} alt="Design workspace" className="shadow-md lg:h-[406px] lg:w-[561px] rounded-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;