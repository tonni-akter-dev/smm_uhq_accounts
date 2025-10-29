'use client'
import React from 'react'
import Image from 'next/image'
import shadow from '../../../public/shadow-1.png';
import AboutBanner from './component/AboutBanner';
import InsideAccounts from './component/InsideAccounts';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation';
// import layer3 from '/public/layer3.png';

const About = () => {
    const pathname = usePathname()
    return (
        <div className='overflow-hidden'>
            <div className='relative'>
                <AboutBanner />
                <div className='contact_layer absolute lg:bottom-[-21%] lg:left-[50%] z-10'>
                    <Image src={shadow} alt="" />
                </div>
            </div>
            <div className='relative'>
                <InsideAccounts />

                <div className={` ${pathname == "/about" ? "lg:mb-10" : "lg:mb-[164px]"}  mb-[54px]`}>
                    <Counter />
                </div>
                <div>
                    {/* <Image className='contact_layer absolute right-0 bottom-[26%] z-10 opacity-[0.3]' src={layer3} alt="" /> */}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About