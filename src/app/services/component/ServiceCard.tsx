import React from 'react'
import service1 from '../../../../public/service1.png'
import service2 from '../../../../public/service2.png'
import service3 from '../../../../public/service3.png'
import service4 from '../../../../public/service4.png'
import service5 from '../../../../public/service5.png'
import service6 from '../../../../public/service6.png'
import Image, { StaticImageData } from 'next/image'
import shadow3 from '../../../../public/shadow3.png';
import layer3 from '../../../../public/layer3.png';

interface Service {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
}

const ServiceCard = () => {
    const services: Service[] = [
        {
            id: 1,
            title: "Secure your digital identity",
            description: "Verified accounts with complete authentication",
            image: service1
        },
        {
            id: 2,
            title: "TikTok Creator Accounts",
            description: "High-exposure accounts with established followers",
            image: service2
        },
        {
            id: 3,
            title: "YouTube Monetized Channels",
            description: "Revenue-ready channels with monetization enabled",
            image: service3,
        },
        {
            id: 4,
            title: "Grow your influence instantly",
            description: "Established X (Twitter) accounts with high engagement",
            image: service4,
        },
        {
            id: 5,
            title: "Growth-Ready Instagram",
            description: "Aged Instagram accounts with organic following",
            image: service5,
        },
        {
            id: 6,
            title: "Pages with Fans",
            description: "Facebook pages with established community",
            image: service6,
        }
    ];

    return (
        <div className='relative mt-[105px] max-w-[1282px] w-full mx-auto px-4 sm:px-6 lg:px-8 mb-[140px]'>
            <div className='text-center mb-12 lg:mb-16 relative z-50'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] heading font-semibold text-[#CECECE] mb-6'>
                    Premium Social Media Accounts for Every Need
                </h1>
                <p className='text-[#898989B2] text-base sm:text-lg lg:text-xl max-w-5xl mx-auto'>
                    {`  Explore a curated selection of high-quality, aged, and verified social media accounts tailored for businesses, agencies, and individual creators. Whether you're scaling ad campaigns, automating growth, or building brand presence, UHQ Accounts delivers secure, ready-to-use profiles for every platform. Enjoy instant delivery, safe transactions, and accounts optimized for performance and authenticity.`}
                </p>
            </div>

            <div className='relative z-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-[120px]'>
                {services.map((service) => (
                    <div style={{
                        borderImage: 'linear-gradient(113.18deg, rgba(255, 255, 255, 0.5) -5.09%, rgba(255, 255, 255, 0) 55.69%), linear-gradient(287.9deg, rgba(255, 255, 255, 0.5) -6.1%, rgba(255, 255, 255, 0) 19.35%)',
                        borderImageSlice: '1'
                    }} className='transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/20  backdrop-blur-[15px] border-[0.85px] border-transparent service_card lg:h-[275px] h-full py-8 px-[50px]' key={service.id}>
                        <Image className='mb-3.5 ' src={service?.image} alt="" />
                        <h3 className='text-[22px] text-[#CECECE]  font-semibold mb-5'>{service?.title}</h3>
                        <p className='text-base text-[#9C9C9C] leading-[19px]'>{service?.description}</p>
                    </div>
                ))}
            </div>
            <div>
                <Image className='contact_layer absolute right-[-31%] bottom-[0%] z-10' src={shadow3} alt="" />
                <Image className='contact_layer absolute right-[-20%] bottom-[26%] z-10 opacity-[0.3]' src={layer3} alt="" />

            </div>
        </div>
    )
}

export default ServiceCard