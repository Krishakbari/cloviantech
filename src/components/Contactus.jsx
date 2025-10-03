import React from 'react';
import contactbg from '../assets/backgrounf.png'; // Background image
import emailPic from '../assets/Email.png'; // Email icon

const Contactus = () => {
    return (
        <section
            className="mt-4 h-[500px] w-full font-manrope px-4 sm:px-12 sm:mb-16 mb-8 bg-gray-50"
        >
            <div
                className="w-full h-full rounded-2xl flex items-center justify-center"
                style={{
                    backgroundImage: `url(${contactbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="max-w-3xl w-full mx-auto text-center text-white px-4">
                    {/* Email Icon */}
                    <div className="mb-6 flex justify-center">
                        <img src={emailPic} alt="email icon" className="w-12 h-12" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                        Do cool things with us.
                    </h2>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg text-gray-200 mb-8">
                        Stay in the loop with updates from our team and community. Once a month.
                    </p>

                    {/* Email Input + Button */}
                    <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-64 px-4 py-3 rounded-full text-gray-900 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-9 py-3 rounded-full bg-[#112D3B] text-white font-semibold hover:bg-[#0d232f] transition border border-white"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactus;
