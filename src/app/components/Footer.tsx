import React from 'react'
import logo from '../../../public/footer_logo.png';
import Image from 'next/image';
import Link from 'next/link';

import fb from '../../../public/fb.png'
import linkd from '../../../public/linkd.png'
import twitter from '../../../public/twiter.png'
import footer_left from '../../../public/footer_left_layer.png'
import footer_right from '../../../public/footer_right_layer.png'
import footer_sm_logo from '../../../public/footer_sm_logo.png'
import footer_sm_shadow from '../../../public/footer_sm_shadow.png'
import footer_sm_bottom from '../../../public/footer_sm_bottom.png'

const Footer = () => {
  return (
    <div className='footer relative lg:px-[105px] px-4 pb-[35px] lg:pb-[100px] lg:pt-[150px] '>
      <div className='relative z-999999999 footer_bg flex lg:flex-row flex-col lg:pt-[137px] lg:pl-[94px]'>
        <div className='max-w-[600px] w-full lg:mb-0 mb-[60px] footer_first_section'>
          <Image className='footer_logo md:block hidden' src={logo} alt="" />
          <Image className='md:hidden block footer_logo' src={footer_sm_logo} alt="" />
          <p className='text-xl text-white '>Built for Digital Growth.</p>

        </div>

        <div className='lg:mr-[182px] lg:mb-0 mb-8 second_sec'>
          <h4 className='text-[22px] text-[#FEFFFF] font-medium mb-2.5'>Quick Links</h4>
          <ul className='flex flex-col gap-1'>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Home</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Browse Account</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> About Us</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Contact</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Reviews</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> FAQ</Link>
            </li>

          </ul>
        </div>
        <div className='lg:mr-[130px] lg:mb-0 mb-8 second_sec'>
          <h4 className='text-[22px] text-[#FEFFFF] font-medium mb-2.5'>Important Policies</h4>
          <ul className='flex flex-col gap-1'>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Terms & Conditions</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Privacy Policy</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Refund Policy</Link>
            </li>
            <li>
              <Link href={`#`} className='text-[#B1B1B1] text-base leading-[167%] '> Security Tips</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-[22px] text-[#FEFFFF] font-medium mb-2.5'>Connect With Us</h4>
          <div>
            <p className='text-[#B1B1B1] text-base leading-[167%] footr_p ' >Phone : +123 456 789</p>
            <p className='text-[#B1B1B1] text-base leading-[167%] footr_p ' >Email   : @example.com</p>
          </div>
          <div className='flex gap-5 mt-7 icons'>
            <Link href={`#`}><Image src={fb} alt="" /></Link>
            <Link href={`#`}><Image src={linkd} alt="" /></Link>
            <Link href={`#`}><Image src={twitter} alt="" /></Link>

          </div>
        </div>
      </div>

      <div className='flex justify-end lg:-mt-10 text-white mr-[66px] z-50 lg:relative' >
        <p className='text-white! font-medium  lg:mt-0 mt-5 text-base copyright '>Copyright ©2025 SMM Account. All right reserved</p>
      </div>
      <Image className='absolute right-0 top-0 z-10 lg:hidden block' src={footer_sm_shadow} alt="" />
      <Image className='absolute left-0 bottom-0 z-10 lg:hidden block' src={footer_sm_bottom} alt="" />
      <Image className='absolute left-0 bottom-0 lg:block hidden z-10' src={footer_left} alt="" />
      <Image className='absolute right-[0%] bottom-0  lg:block hidden z-10' src={footer_right} alt="" />
    </div>
  )
}

export default Footer