import React from 'react';
import pinkEclipse from '../../../public/ecc.png';
import linkdin from '../../../public/linkdin.png';
import ghost from '../../../public/ghost.png';
import laptop from '../../../public/laptop.png';
import mobile_laptop from '../../../public/mobile_laptop.png';
import logo from '../../../public/logo.png';
import logo1 from '../../../public/banner_sm_logo.png';
import objectImage from '../../../public/object.png';
import Image from 'next/image';
import Header from './Header';

const Banner = () => {
    return (
        <div className="banner lg:px-[106px] banner_px px-4 pt-[92px] pb-[162px] text-white relative overflow-hidden">
            <div className='absolute top-0 left-[-10%] z-10'>
                <Image src={pinkEclipse} alt="" />
            </div>
            <Header />

            <main className=" lg:pr-[70px] banner_flex flex lg:flex-row flex-col justify-between relative z-50 lg:pt-[148px] bg_vector lg:mt-[-90px] md:pb-[64px]">
                <div className='banner_logo absolute top-[70px] left-[115px] z-10'>
                    <Image className='md:block hidden' src={logo} alt="" />
                    <Image className='block md:hidden' src={logo1} alt="" />
                </div>
                <div className='pt-[60px] banner_text_wrap'>
                    <h1 className="banner_header lg:pl-[125px] pl-4 font-black mb-4 ">
                        Boost Your Social <br /> Media Presence
                    </h1>
                    <div className=' banner_p flex gap-10 items-start pl-4 lg:pl-[38px]'>
                        <Image className='md:block hidden' src={linkdin} alt="" />
                        <p className="text-sm md:text-xl max-w-[296px] md:max-w-[606px] w-full">
                            Take your social media to the next level with proven growth tools, authentic engagement, and a powerful online presence that sets you apart from the competition and drives real results.
                        </p>
                    </div>
                    <div className="space-x-4 flex lg:flex-row flex-col banner_btn lg:mt-[88px] lg:pl-[120px]">
                        <button className="btn_bg text-white text-xs flex justify-center items-center md:text-xl font-semibold">
                            Get Started
                        </button>
                        <button className="btn_bg1 text-xs flex justify-center items-center md:text-xl font-semibold">
                            View Services
                        </button>
                    </div>
                </div>
                <div className='laptop_img'>
                    <Image className='md:block hidden' src={laptop} alt="" />
                    <Image className='block md:hidden' src={mobile_laptop} alt="" />
                </div>

            </main>
            <div className='absolute right-[3%]  z-20 bottom-[35%] md:bottom-[40%]'>
                <Image src={objectImage} alt="" />
            </div>

            <div className='absolute ghost right-[39%] bottom-[92px] z-10'>
                <Image src={ghost} alt="" />
            </div>


        </div>
    );
};

export default Banner;