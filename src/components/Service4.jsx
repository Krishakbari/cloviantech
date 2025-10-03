import React from 'react'

const features = [
  {
    title: 'Flexible Work Environment',
    text: 'Enjoy the freedom to work from anywhere in the world, whether it’s the comfort of your home office or the excitement of a new city. Embrace a work-life balance that suits your needs.'
  },
  {
    title: 'Cultural Diversity',
    text: 'Experience the richness of working with a global team. Collaborate with professionals from different backgrounds, cultures, and perspectives, fostering creativity, innovation, and personal growth.'
  },
  {
    title: 'Professional Development',
    text: 'Gain access to a wide range of learning and development opportunities. From training programs to conferences, sharpen your skills and expand your knowledge to stay ahead in the ever-evolving industry.'
  },
  {
    title: 'Travel Opportunities',
    text: 'Embark on exciting journeys and visit different locations as part of your job. Engage in on-site collaborations, attend conferences, or simply enjoy the experience of working in diverse environments.'
  },
  {
    title: 'Global Networking',
    text: 'Connect with professionals from around the world and build a vast network. Exchange ideas, share experiences, and create meaningful connections that can open doors to future collaborations and career growth.'
  },
  {
    title: 'Competitive Compensation',
    text: 'Benefit from a competitive compensation package that recognizes your skills and contributions. Enjoy the perks of a global company that values your expertise and rewards you accordingly.'
  }
]

const Service4 = () => {
  return (
    <section className="w-full bg-gray-50 pb-12 pt-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
            <hr className="border-gray-200 mb-3" />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service4
