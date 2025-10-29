import React from "react";
import Section4Img3 from '../../app/assets/section4img3.png'
import Image from "next/image";
import Red from '../../app/assets/Red.png'
import Section4 from '../../app/assets/section4.png'
import Section4Img2 from '../../app/assets/section4img2.png'
const WorkflowSection = () => {
  return (
    <div className="section4">
      <Image src={Red} alt="red" className='red' />
      <button className="section4">How its Work</button>
      <h1 className="section4 heading-container">
        Understanding How Our Powerful SMM System Works for You
      </h1>

      <div className="card-container">
        <div className="cards">
          <Image src={Section4} alt="section4" />
          <h2>Create An Account <br /> & Add Balance</h2>
          <p>
            Begin your journey with us by signing up and creating your account.
            Once registered, access your account by logging in. To get started,
            deposit funds.
          </p>
        </div>
        <div className="cards">
          <Image src={Section4Img2} alt="sectionimg2" />
          <h2>Select Your <br />Targeted Service</h2>
          <p>
            Select the services you need from either the Services page or the New
            Order section. Easily find and choose the desired services to fulfill
            your requirements.
          </p>
        </div>
        <div className="cards">
          <Image src={Section4Img3} alt="sectionimg4" />
          <h2>Provide Link, Quantity <br /> & Watch Results</h2>
          <p>
            Providing the correct links and quantities. Instantly view the total
            cost of your order before finalizing. After placing an order, just wait
            a few hours and watch the magic of SMM VIP.
          </p>
        </div>
      </div>

    </div>


  );
};

export default WorkflowSection;
