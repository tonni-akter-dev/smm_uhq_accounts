import React from 'react'
import Banner from './components/Banner'
import Counter from './components/Counter'
import SmmPanel from './components/SmmPanel'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Empowering from './components/Empowering'
import Service from './components/Service'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Image from 'next/image'
import shadow from '../../public/shadow-1.png';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className='relative'>
        <Banner />
        <Counter />
        <div className='contact_layer absolute lg:bottom-[-21%] lg:left-[50%] z-10'>
          <Image src={shadow} alt="" />
        </div>
      </div>
      <SmmPanel />
      <HowItWorks />
      <WhyChooseUs />
      <Empowering />
      <Service />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home