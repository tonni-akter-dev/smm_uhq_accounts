import React from "react";
import Image from "next/image";
import HeroImage1 from '../../app/assets/HeroImage1.png'
import Youtube2 from '../../app/assets/youtube2.svg'
import X2 from '../../app/assets/X2.svg'
const FeaturesSection = () => {
    return (
        <div className="section3">
                <div className="section3-left">
                    <Image src={HeroImage1} alt="" />
                </div>
                <div className="section3-right">
                    <h1>Advance SMM Panel for All Your Needs</h1>
                    <p>{`Our SMM panel is a powerful tool designed to help you increase your social media presence and reach. With features such as automatic post scheduling, real-time analytics, and targeted audience engagement, you can easily manage and grow your social media accounts. Whether you're a small business looking to expand your reach or an influencer looking to grow your following, our panel has the tools you need to succeed.`}</p>

                    <Image src={X2} alt="" className='X2' />
                    <Image src={Youtube2} className='youtube2' alt="youtube2" />
                </div>
            </div>

    );
};

export default FeaturesSection;
