import React from 'react'
import about from '../../../../public/about_img.png';
import Image from 'next/image';

const InsideAccounts = () => {
    return (
        <div className='about lg:px-[140px] px-5 mt-10 lg:mt-40 lg:mb-[188px] mb-10 relative z-50 '>
            <div className="flex lg:flex-row flex-col lg:gap-[170px]  gap-10 items-center about_section">
                <div className='max-w-[715px] w-full'>
                    <h3 className='text-[40px] font-extrabold mb-[34px] '>Inside UHQ Accounts</h3>
                    <p className='mb-16 text-[#898989B2]  text-xl'>{`At UHQ Accounts, we empower digital creators, marketers, and entrepreneurs with premium, aged social media accounts. Our platform is built on trust, speed, and authenticity—ensuring every user gets exactly what they need to grow online without compromise. We’re more than just a marketplace; we’re your digital growth partner.`}</p>
                    <div className='flex gap-5  mb-[38px]'>
                        <button className="emp_btn1_bg text-white text-xl font-semibold">
                            Our Mission
                        </button>
                        <button className="emp_btn1_bg1 text-white text-xl font-semibold">
                            Our Vision
                        </button>
                    </div>
                    <p className=' text-[#898989B2]  text-xl'>To deliver verified, aged, and clean social media accounts with unmatched speed and reliability. We aim to simplify account access for businesses and creators, while providing world-class support, transparency, and ongoing innovation.</p>
                </div>
                <div>
                    <Image className='h-full' src={about} alt="" />
                </div>
            </div>
        </div>
    )
}

export default InsideAccounts