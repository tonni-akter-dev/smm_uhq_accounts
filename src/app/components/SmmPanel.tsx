import React from 'react'
import smm from '../../../public/smm.png'
import smm_bg from '../../../public/smm_bg.png'
import smm_sm_bg from '../../../public/smm_sm_bg.png'
import layer from '../../../public/layer-2.png'
import shadow from '../../../public/shadow-2.png'
import X from '../../../public/X.png'
import Image from 'next/image'

const SmmPanel = () => {
    return (
        <div className='lg:pt-[100px] lg:px-[230px] px-4 relative mt-8 lg:mt-[100px] smm_panel_wrapper'>
            <div className="flex flex-col-reverse lg:flex-row lg:items-start items-center justify-center relative z-50">
                <Image src={smm} className=" smm_img lg:mx-start md:mx-auto" alt="" />
                <div className="mt-[-57px] md:mt-10 lg:mt-[-57px] smm_header">
                    <h1 className="text-[24px] md:text-[40px] lg:text-[60px] font-extrabold leading-[120%]">
                        Advanced SMM Panel <br /> for All Your Needs
                    </h1>
                    <p className="mt-8 lg:mt-[100px] text-[#898989B2] text-sm md:text-xl w-full lg:w-[596px]">
                        {`Our SMM panel is a powerful tool designed to help you increase your social media presence and reach. With features such as automatic post scheduling, real-time analytics, and targeted audience engagement, you can easily manage and grow your social media accounts. Whether you're a small business looking to expand your reach or an influencer looking to grow your following, our panel has the tools you need to succeed.`}
                    </p>
                </div>
            </div>

            <Image className='absolute z-10 top-0 lg:block hidden smm_bg' src={smm_bg} alt="" />
            <Image className='absolute z-10 top-0 lg:hidden block smm_bg' src={smm_sm_bg} alt="" />
            <Image className='absolute x_img right-[97px] bottom-[10%] z-50' src={X} alt="" />
            <Image className='absolute right-0 bottom-[-80%]' src={layer} alt="" />
            <Image className='absolute left-0 bottom-[-200%]' src={shadow} alt="" />
        </div>
    )
}

export default SmmPanel