import React from "react";
import Link from "next/link";
import Arrow from '../../app/assets/arrow.png'
import BlueHexa from '../../app/assets/BlueHexa.png'
import Rectangle from '../../app/assets/Rectangle.png'
import Image from "next/image";
const ResellerSection = () => {
    return (
         <div className="section6">
                <div className="section6-left">
                    <h1>Empowering Resellers with the Fastest and Most Reliable SMM Panel</h1>
                    <p>
                       {` Discover unparalleled convenience and excellence in social media marketing with SMM VIP, the industry's foremost SMM panel for resellers. Our platform offers resellers a seamless experience, providing access to premium services and tools tailored to elevate your SMM ventures.`}
                    </p>
                    <div className="button">
                        <Link href='/signup'>
                            <div>
                                <button className='create-account' style={{ zIndex: 1, cursor: 'pointer' }}>Create Account</button>
                            </div>
                        </Link>
                        <div className="gradient-button-wrapper">
                            <button className="get-discount">Get Discounts</button>
                        </div>
                    </div>
                </div>

                <div className="section6-right">
                    <div className="feature-item">
                        <div className="feature-text">
                            <Image className="rectangle" src={Rectangle} alt="rectangle" />
                            <h4>Premium <br /> Services</h4>
                        </div>
                        <Image src={Arrow} alt="arrow" />
                    </div>

                    <div className="feature-item">
                        <div className="feature-text">
                            <Image className="rectangle" src={Rectangle} alt="rectangle" />
                            <h4>Seamless <br /> Integration</h4>
                        </div>
                        <Image src={Arrow} alt="arrow" />
                    </div>
                    <div className="feature-item">
                        <div className="feature-text">
                            <Image className="rectangle" src={Rectangle} alt="rectangle" />
                            <h4>Real-Time <br /> Analytics</h4>
                        </div>
                        <Image src={Arrow} alt="arrow" />
                    </div>
                    <div className="feature-item">
                        <div className="feature-text">
                            <Image className="rectangle" src={Rectangle} alt="rectangle" />
                            <h4>24/7 <br /> Support</h4>
                        </div>
                        <Image src={Arrow} alt="arrow" />
                    </div>

                </div>
                <Image src={BlueHexa} alt="" className='layer' />
            </div>


    );
};

export default ResellerSection;
