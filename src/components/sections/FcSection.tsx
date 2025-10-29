import React from 'react';
import Question from '../../app/assets/question.png'
import Question2 from '../../app/assets/question2.png'
import Question3 from '../../app/assets/question3.png'
import Question4 from '../../app/assets/question4.png'
import Image from 'next/image';
const FcSection = () => {
  return (
    <div className="section8">
      <button className="faq">FAQS</button>
      <h1>Answers to the Most Common Questions from Our Users</h1>

      <div className="qa-grid">
        <div className="qa-item">
          <div className="qa-item-header">
            <Image src={Question} alt="question icon" />
            <h2>How fast will I receive my  account after  purchase?</h2>
          </div>
          <p>
            Instantly! Once payment is confirmed, account details are automatically delivered to your dashboard and email.
          </p>
        </div>

        <div className="qa-item">
          <div className="qa-item-header">
            <Image src={Question2} alt="question icon" />
            <h2>Are all accounts <br /> verified and clean?</h2>
          </div>
          <p>
            Smm panel is a panel where you can buy social media ( Facebook, Twitter, Instagram, YouTube, Spotify, Tiktok, and other social media ) likes, followers, views, Comments, Subscribers, and as well as Website traffic. Customers choose the cheapest smm panel because of its cheap price, faster delivery, and all social media services available on 1 website
          </p>
        </div>

        <div className="qa-item">
          <div className="qa-item-header">
            <Image src={Question3} alt="question icon" />
            <h2>What payment methods are accepted?</h2>
          </div>
          <p>
            We accept secure payments via Crypto, Debit/Credit Cards, and supported wallets. All transactions are encrypted.
          </p>
        </div>

        <div className="qa-item">
          <div className="qa-item-header">
            <Image src={Question4} alt="question icon" />
            <h2>What happens if an <br /> account has an issue <br /> after delivery?</h2>
          </div>
          <p>
            We offer a 48-hour replacement guarantee for any issues found with delivered accounts. Just contact our support team quickly.
          </p>
        </div>
      </div>
      {/* <img src={Ball3} alt="" className='homeballs1'/>
                       <img src={Ball4} alt=""   className='homeballs2'/> */}
      {/* <img src={RedCorner} alt=""  className='redCorner'/> */}
      {/* <img src={Ellipse25} alt="ellipse23" className='ellipse28' style={{"display": "block"}}/> */}


    </div>


  );
};

export default FcSection;