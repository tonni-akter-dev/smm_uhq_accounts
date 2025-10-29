import React from 'react';
import Image from 'next/image';
import Inst from '../../app/assets/Flip Hor.svg'
import Snap from '../../app/assets/Snap.svg'
import Facebook from '../../app/assets/facebook.svg'
import Youtube from '../../app/assets/Youtube.svg'
import Linkedin from '../../app/assets/Rotate Anti.svg'
import Youtube2 from '../../app/assets/youtube2.svg'
import Ball from '../../app/assets/Ball.png'
import X from '../../app/assets/X.svg'
const ToolsSection = () => {
    return (
        <div className="section7">
            <h2 className='head'>Our Platforms</h2>
            <div className="section7-content">
                <div className="social-grid">
                    <Image className='section7-img' src={Inst} alt="Instagram" />
                    <Image className='section7-img' src={Snap} alt="Snapchat" />
                    <Image className='section7-img' src={Facebook} alt="Facebook" />
                    <Image className='section7-img' src={Youtube} alt="YouTube" />
                    <Image className='section7-img' src={Linkedin} alt="LinkedIn" />
                    <Image className='section7-img' src={X} alt="X" />
                    <Image src={Ball} alt="" className='ball' />
                </div>
                <div className="text-content">
                    <button className="services-button">OUR Services</button>
                    <Image src={Youtube2} alt="youtube2" className='service-youtube2' />
                    <h1 className='head'>Explore Our Most Popular SMM Tools</h1>
                        <p className='para'>
                            At SMM VIP, we pride ourselves on delivering top-tier Social Media Marketing (SMM)
                            services designed to elevate your online presence and drive unparalleled engagement.
                            With our comprehensive suite of solutions, we empower businesses of all sizes to
                            harness the full potential of social media platforms.
                        </p>
                        <Image src={Ball} alt="" className='ball1' />
                        <div className="gradient-button-wrapper2">
                            <button className="seeallourservices">See All Our Services</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ToolsSection;