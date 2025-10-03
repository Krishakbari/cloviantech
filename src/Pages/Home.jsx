import React from 'react'
import HomeMain1 from '../components/HomeMain1'
import HomeMain2 from '../components/HomeMain2'
import HomeAbout from '../components/HomeAbout'
import HomeContact from '../components/HomeContact'
import HomeClient from '../components/HomeClient'
import HomeServices from '../components/HomeServices'
import HomeCustomer from '../components/HomeCustomer'
import Contactus from '../components/Contactus'
const Home = () => {
  return (
    <div className='bg-gray-50'>
      <HomeMain1 />
      <HomeMain2 />
      <HomeAbout />
      <HomeContact/>
      <HomeClient/>
      <HomeServices/>
      <HomeCustomer/>
      <Contactus/>
    </div>
  )
}

export default Home
