import React from 'react'
import Image from 'next/image';
import arrow from '../../../public/arrow.png';
import emp_layer from '../../../public/emp_layer.png';
import emp_sm_shadow from '../../../public/emp_sm_shadow.png';
import emp_left_layer from '../../../public/emp_left_layer1.png';
import emp_left_shadow from '../../../public/emp_left_shadow.png';
import emp_right_shadow from '../../../public/emp_right_shadow.png';
import emp_right_layer from '../../../public/emp_right_layer.png';
import counter_layer_right_sm from '../../../public/counter_layer_right_sm.png'

const Empowering = () => {
    return (
        <div className='empowering_wrapper pt-[109px] lg:px-[230px] px-4 mb-20 lg:mb-[252px] relative'>
            <div className='pt-3 md:pt-[51px] pl-[22px] md:pl-[90px] emp_bg relative z-50'>
                <h1 className='heading text-[60px] font-medium mb-2.5 md:mb-10 lg:mb-[94px]'>Empowering Resellers with <br className="md:hidden block" /> the Fastest  <br className="md:block hidden" /> and Most Reliable SMM Panel</h1>
                <div className="flex md:flex-row flex-col gap-[95px] md:gap-[170px] emp_gap">
                    <p className="max-w-[722px] w-full emp_text_p" >{`Discover unparalleled convenience and excellence in social media marketing with SMM VIP, the industry's foremost SMM panel for resellers. Our platform offers resellers a seamless experience, providing access to premium services and tools tailored to elevate your SMM ventures.`}</p>
                    <div className='emp_list_wrapper'>
                        <div className='flex items-center justify-between emp_list mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-2.5 md:gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-7'>Premium <br /> Services</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                        <div className='flex items-center justify-between emp_list mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-2.5 md:gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-7'>Seamless  <br /> Integration</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                        <div className='flex items-center justify-between emp_list mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-2.5 md:gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-7'>Real-Time  <br /> Analytics</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                        <div className='flex items-center justify-between emp_list mb-[70px] w-[300px]'>
                            <div className='flex items-start gap-2.5 md:gap-5'>
                                <div className='grad_box'></div>
                                <h6 className='text-[24px] font-semibold leading-7'>24/7 Support</h6>
                            </div>
                            <Image src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="space-x-4 absolute bottom-[20%] md:bottom-[248px] emp_btn_pos">
                        <div className='emp_buttons'>
                            <button className="emp_btn1_bg text-white text-xl font-semibold">
                                Create Account
                            </button>
                            <button className="emp_btn1_bg1 text-white text-xl font-semibold">
                                Get Discounts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Image className='absolute left-0 bottom-[0%] z-10' src={emp_layer} alt="" />
            {/* left layer imag */}
            <Image className='lg:block hidden opacity-[0.3] absolute left-[-26%] bottom-[-36%] z-10' src={emp_left_layer} alt="" />

            <Image className='lg:block hidden absolute left-0 
            -bottom-full z-10' src={emp_left_shadow} alt="" />
            {/* left layer imag */}
            {/* left right imag */}
            <Image className='lg:block hidden absolute right-0 
            bottom-[-40%] z-10' src={emp_right_shadow} alt="" />
            <Image className='lg:block hidden opacity-[0.3] absolute right-[-0%] bottom-[-20%] z-10' src={emp_right_layer} alt="" />
            {/* left right imag */}


            <Image className="lg:hidden block absolute bottom-[46%] md:bottom-[0%] right-0 z-10" src={counter_layer_right_sm} alt="Facebook logo" />
            <Image className="lg:hidden block absolute bottom-[-19%] left-0 z-10" src={emp_sm_shadow} alt="Facebook logo" />

        </div>
    )
}

export default Empowering