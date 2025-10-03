import React from 'react'
import Service1 from '../components/Service1'
import Service2 from '../components/Service2'
import Service3 from '../components/Service3'
import Service4 from '../components/Service4'
import Service5 from '../components/Service5'
import Service6 from '../components/Service6'
import Service7 from '../components/Service7'
import Contactus from '../components/Contactus'

const Service = () => {
  return (
    <div className='bg-gray-50 font-manrope'>
      <Service1/>
      <Service2/>
      <Service3/>
      <Service4/>
      {/* <Service5/> */}
      <Service7/>
      <Service6/>
      <Contactus/>
    </div>
  )
}

export default Service
