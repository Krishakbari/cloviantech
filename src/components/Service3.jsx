import React from 'react'
import LeftImg from '../assets/Left.png'

const Service3 = () => {
  return (
    <section className="w-full sm:mt-10 pt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center sm:gap-10 gap-4">
        {/* Left Image (goes to bottom on mobile) */}
        <div className="w-full lg:w-1/2">
          <img
            src={LeftImg}
            alt="Team"
            className="w-full rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Right Text Section (on top in mobile) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Teams
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight font-inter">
            Perks That Go Beyond <br className="hidden sm:block" /> Borders
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-manrope">
            Experience a world of benefits with our global presence. Enjoy flexible work environments,
            cultural diversity, professional development opportunities, travel adventures, global networking,
            and competitive compensation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Service3
