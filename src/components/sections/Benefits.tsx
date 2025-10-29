import React from "react";
import Ball2 from '../../app/assets/Section5ball.png'
import Dots from '../../app/assets/dots.png'
import Section5 from '../../app/assets/section5.png'
import Section5Img1 from '../../app/assets/section5img1.png'
import Section5Img2 from '../../app/assets/section5img2.png'
import Section5Img3 from '../../app/assets/section5img3.png'
import Image from "next/image";
const Benefits = () => {
  return (
    <div className="section5">
      <button className="section5">Why Choose Us</button>
      <h1 className="section5">
        The Benefits of Choosing Our  Advanced SMM Panel Services
        <Image src={Ball2} alt="ball2" className='ball2' />
        <Image src={Dots} alt="dots" className='dots' />
      </h1>

      <div className="card-container2">
        <div className="cards2">
          <Image src={Section5} alt="section5" />
          <h2>Quality</h2>
          <p>
          {`  Experience excellence with our high-quality SMM services. At SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.`}
          </p>
        </div>
        <div className="cards2">
          <Image src={Section5Img1} alt="sectionimg1" />
          <h2>Affordability</h2>
          <p>
            {`Experience excellence with our high-quality SMM services. At SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.`}
          </p>
        </div>
        <div className="cards2">
          <Image src={Section5Img2} alt="sectionimg2" />
          <h2>Speed</h2>
          <p>
         {`Experience excellence with our high-quality SMM services. At SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.`}
          </p>
        </div>
        <div className="cards2">
          <Image src={Section5Img3} alt="sectionimg3" />
          <h2>Usability</h2>
          <p>
            {`Experience excellence with our high-quality SMM services. At SMM VIP, we're committed to delivering top-tier solutions that elevate your online presence and engagement, ensuring exceptional results for your brand.`}
          </p>
        </div>
      </div>
    </div>

  );
};

export default Benefits;
