'use client'
import React from 'react'
import s1 from '../../../public/s1.png';
import s2 from '../../../public/s2.png';
import s3 from '../../../public/s3.png';
import s4 from '../../../public/s4.png';
import s5 from '../../../public/s5.png';
import s6 from '../../../public/s6.png';
import Image from 'next/image';
import Link from 'next/link';
import yt from '../../../public/youtube.png'
import ball from '../../../public/ball.png'
import faq_layer from '../../../public/faq_layer.png';
import faq_shadow from '../../../public/faq_shadow.png';
import { usePathname } from 'next/navigation';

const Service = () => {
  const pathname = usePathname();
  console.log(pathname, "SDFSD")
  return (
    <div className={`service_wrapper lg:px-[227px] px-4 lg:pt-[70px] relative z-50    ${pathname == '/services' ? "mb-10" : " lg:mb-[294px]"}`}>
      <div className="flex lg:flex-row flex-col justify-center items-center service_gap gap-[123px]">
        <div className='relative service_bg pl-[95px] pr-[74px] '>
          <p className='text-base font-medium pt-10 platform'>Our Platforms</p>
          <div className='pt-[50px] lg:pt-[99px] service_icons'>
            <div className='flex  lg:gap-[138px] icons'>
              <Link href={`#`}><Image src={s1} alt="" /> </Link>
              <Link href={`#`}><Image src={s2} alt="" /> </Link>
              <Link href={`#`}><Image src={s3} alt="" /> </Link>
            </div>
            <div className='flex  lg:gap-[138px] icons service_mt lg:mt-[97px]'>
              <Link href={`#`}><Image src={s4} alt="" /> </Link>
              <Link href={`#`}><Image src={s5} alt="" /> </Link>
              <Link href={`#`}><Image src={s6} alt="" /> </Link>
            </div>
          </div>
        </div>

        <Image className='absolute left-[130px] bottom-[20%] lg:block hidden' src={ball} alt="" />
        <div className='max-w-[590px] w-full'>
          <button className='how_ItWorks mb-10'>OUR Services</button>
          <h1 className='heading text-[60px] font-medium capitalize mb-7'>Explore Our Most <br /> Popular SMM Tools</h1>
          <p className='text-[#898989B2] font-medium md:text-lg text-sm mb-[37px]'>At SMM VIP, we pride ourselves on delivering top-tier Social Media Marketing (SMM) services designed to elevate your online presence and drive unparalleled engagement. With our comprehensive suite of solutions, we empower businesses of all sizes to harness the full potential of social media platforms.</p>
          <div>
            <button className="btn_bg1  text-white">
              See All Our Services
            </button>
            <Image className='absolute  lg:block hidden right-[130px] bottom-[10%] ' src={ball} alt="" />
          </div>
        </div>
      </div>
      <Image className='absolute yt_size right-7 top-[-7%] md:top-[20%]' src={yt} alt="" />

      {
        pathname == '/services' ? "" : <>
          <Image className='absolute top-[63%] opacity-[0.3] right-0 lg:block hidden' src={faq_layer} alt="" />
          <Image className='absolute top-0 right-0 lg:block hidden' src={faq_shadow} alt="" />
        </>
      }

    </div>
  )
}

export default Service 