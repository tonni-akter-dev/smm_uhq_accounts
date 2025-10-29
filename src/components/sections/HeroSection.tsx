import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from '../../app/assets/heroImage.png'
import Instagram2 from '../../app/assets/ist.png'
import Snap2 from '../../app/assets/Snap2.png'
import Linkedin2 from '../../app/assets/linkedin2.png'
import Navbar from "./Navbar";
// import Snap from '../../app/assets/snap.png'
import Logo from '../../app/assets/UHQ SMM.png';
// import Layer from '../../app/assets/Layer_1.png'
import './HeroSection.css'
import Boxes1 from '../../app/assets/Boxes1.png'
import Ellipse25 from '../../app/assets/Ellipse25.png'
const HeroSection = () => {
    return (
        <>
        <Navbar/>
            <div className="logo1">
                <Image src={Logo} alt="logo" />
            </div>
            <div className='home-container'>
                <div className="left">
                    <h1>Boost Your Social Media Presence</h1>
                    <p>
                        Take your social media to the next level with proven growth tools, authentic and powerful engagement, and an online presence that sets you apart from the competition and drives results.
                    </p>
                    <Image src={Linkedin2} alt="linkedin2" />
                    <div className="button">
                        <Link href='/login'>
                            <div>
                                <button className='create-account1'>Get Started</button>
                            </div>
                        </Link>
                        <Link href='/services'>
                            <div className="gradient-button-wrapper1">

                                <button className="get-discount1">View Services</button>

                            </div>
                        </Link>
                    </div>


                </div>
                <div className="right">

                    <Image src={HeroImage} alt="heroImage" />
                    <Image src={Instagram2} alt="instagram" className='insta' />
                </div>
                <Image src={Snap2} alt="snap2" />
            </div >
            <Image src={Boxes1} alt="boxes" className='boxes' style={{ position: 'absolute', zIndex: 0 }} />
            <Image src={Ellipse25} alt="ellipse23" className='ellipse23' style={{ "display": "block" }} />
      </>
    );
};

export default HeroSection;
