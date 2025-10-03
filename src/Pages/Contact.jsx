import React from 'react'
import Contact1 from '../components/Contact1'
import Contact2 from '../components/Contact2'
import Service5 from '../components/Service5'
import Contactus from '../components/Contactus'
import Contact3 from '../components/Contact3'

const Contact = () => {
  return (
    <div className='bg-gray-50 font-manrope'>
      <Contact1/>
      <Contact2/>
      {/* <Service5/> */}
      <Contact3/>
      <Contactus/>
    </div>
  )
}

export default Contact
