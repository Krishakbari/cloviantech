import React from 'react'
import OurStory from '../components/OurStory'
import Values from '../components/Values'
import Contactus from '../components/Contactus'
import About1 from '../components/About1'

const AboutPage = () => {
  return (
    <div className='bg-gray-50'>
      <About1 />
      <OurStory />
      <Values />
      <Contactus />
    </div>
  )
}

export default AboutPage