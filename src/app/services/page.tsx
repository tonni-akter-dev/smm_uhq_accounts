import React from 'react'
import ServiceBanner from './component/ServiceBanner'
import ServiceCard from './component/ServiceCard'
import Service from '../components/Service'
import Footer from '../components/Footer'

const Services = () => {
    return (
        <div className='overflow-hidden'>
            <ServiceBanner />
            <ServiceCard />

            <Service />
            <Footer />
        </div>
    )
}

export default Services