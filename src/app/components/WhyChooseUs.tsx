import Image from 'next/image'
import React from 'react'
import b1 from '../../../public/b1.png'
import b2 from '../../../public/b2.png'
import b3 from '../../../public/b3.png'
import b4 from '../../../public/b4.png'
import benefit from '../../../public/benefit.png'
import benefit1 from '../../../public/choose_sm.png'
import why_right_sm from '../../../public/why_right_sm.png'
import why_pink from '../../../public/why_pink.png'
import why_pink1 from '../../../public/why_pink1.png'

const WhyChooseUs = () => {
    return (
        <div className='lg:mt-[150px] relative flex flex-col justify-center items-center lg:mb-[200px]'>
            <div className='how_ItWorks'>Why Choose Us</div>
            <h1 className='heading lg:text-start text-center text-[60px] font-black mb-[55px] lg:mb-[90px]'>The Benefits of Choosing <br className='lg:hidden block' /> Our <br className='lg:block hidden' /> Advanced SMM Panel Services</h1>
            <div className='whychoose lg:px-[235px] px-4 relative z-50'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[46px] benefit_wrapper'>
                    <div className='benefit_card w-[328px]'>
                        <div className='p-6 flex justify-end'>  <Image className='mb-11' src={b1} alt="" /></div>
                        <div className='pl-7 pb-[38px] pr-3'>
                            <h5 className='text-[30px] font-semibold mb-3'> Quality</h5>
                            <p className='text-base '>{`Experience excellence with our high-quality SMM services. At SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand`}.</p>
                        </div>
                    </div>
                    <div className='benefit_card w-[328px]'>
                        <div className='p-6 flex justify-end'>  <Image className='mb-11' src={b2} alt="" /></div>
                        <div className='pl-7 pb-[38px] pr-3'>
                            <h5 className='text-[30px] font-semibold mb-3'> Affordability</h5>
                            <p className='text-base '>{`Experience excellence with our high-quality SMM services. At SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.`}</p>
                        </div>
                    </div>
                    <div className='benefit_card w-[328px]'>
                        <div className='p-6 flex justify-end'>  <Image className='mb-11' src={b3} alt="" /></div>
                        <div className='pl-7 pb-[38px] pr-3'>
                            <h5 className='text-[30px] font-semibold mb-3'> Speed</h5>
                            <p className='text-base '>{`Experience excellence with our high-quality SMM services. At SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.`}</p>
                        </div>
                    </div>
                    <div className='benefit_card w-[328px]'>
                        <div className='p-6 flex justify-end'>  <Image className='mb-11' src={b4} alt="" /></div>
                        <div className='pl-7 pb-[38px] pr-3'>
                            <h5 className='text-[30px] font-semibold mb-3'> Quality</h5>
                            <p className='text-base '>{`Experience excellence with our high-quality SMM services. At SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Image className='md:block hidden absolute left-0 top-[6%]' src={benefit} alt="" />
            <Image className='md:hidden block absolute left-0 top-[-3%]' src={benefit1} alt="" />
            <Image className='md:hidden block absolute right-0 top-[-3%] z-10' src={why_right_sm} alt="" />
            <Image className='md:hidden block absolute right-0 top-[45%] z-10' src={why_pink} alt="" />
            <Image className='md:hidden block absolute left-0 bottom-[10%] z-10' src={why_pink1} alt="" />
        </div>
    )
}

export default WhyChooseUs