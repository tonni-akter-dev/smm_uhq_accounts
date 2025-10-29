import React from 'react'
import Image from 'next/image'
import shadow from '../../../public/shadow-1.png';
import shadow3 from '../../../public/shadow3.png';
import Footer from '../components/Footer';
import ContactBanner from './components/ContactBanner';
import ContactForm from './components/ContactForm';
import layer3 from '../../../public/layer3.png';

const Contact = () => {
    return (
        <div>
            <div className='relative'>
                <ContactBanner />
                <div className='contact_layer absolute lg:bottom-[-21%] lg:left-[50%] z-10'>
                    <Image src={shadow} alt="" />
                </div>
            </div>
            <div className='relative'>
                <div>
                    <Image className='absolute right-[-31%] bottom-[0%] z-10' src={shadow3} alt="" />
                    <Image className='absolute right-0 bottom-[26%] z-10 opacity-[0.3] contact_layer' src={layer3} alt="" />
                </div>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact