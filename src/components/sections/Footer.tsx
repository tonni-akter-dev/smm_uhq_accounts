


import React from 'react'
import Logo from '../../app/assets/UHQ SMM.png'
import linkedin from '../../app/assets/Linkedin.png'
import facebook from '../../app/assets/Facebook.png'
import twitter from '../../app/assets/Twitter.png'
import Link from 'next/link'
import Image from 'next/image'
import './footer.css'

const footer = () => {
  return (
    <div className="footer-image">
      <div className='footer-container'>
        <div className="footer-content">
          <div className="logo">
            <Image src={Logo} alt="logo" />
            <p>Build for Digital Growth</p>
          </div>

          <div className="links">
            <div>Quick Links</div>
            <li><Link href='/'>Home</Link></li>
            <li><Link href="browse-account">Browse Account</Link></li>
            <li><Link href="/aboutus">AboutUs</Link></li>
            <li><Link href="/contactus">Contact</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/faqs">FAQ</Link></li>
          </div>

          <div className="links">
            <div>Important Policies</div>
            <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/refund-policy">Refund Policy</Link></li>
            <li><Link href="/security-tips">Security Tips</Link></li>
          </div>

          <div className="links">
            <div>Connect With Us</div>
            <p>Phone: +123 456 789</p>
            <p>Email: @example.com</p>
            <div className="soical-links">
              <Image src={linkedin} alt="linkedin" />
              <Image src={facebook} alt="facebook" />
              <Image src={twitter} alt="twitter" />
            </div>
          </div>
        </div>

        {/* <img src={Ball2} alt="" className='ball3'/> */}
        <div className="copyright">
          <p className='copy-para'>Copyright&copy;2025 SMM Account. All right reserved.</p>
          {/* <img src={Ball3} alt=""   className='ball4'/> */}
        </div>

      </div>
    </div>

  )
}

export default footer
