import React from 'react'

const ContactForm = () => {
    return (
        <div className='relative z-50 px-4 sm:px-6 lg:px-8 lg:mt-[150px] mt-[55px] mb-10 '>
            <h1 className='text-center text-[#CECECE] heading text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-extrabold mb-6 sm:mb-8 lg:mb-10'>
                Get in Touch With Our Support <br className="hidden sm:block" /> Team
            </h1>
            <p className='text-center text-[#898989B2] text-base sm:text-lg lg:text-xl lg:mb-[60px] mb-8 max-w-4xl mx-auto'>
                {` Have a question or need help? Our team is available 24/7 to assist you via chat, email, or Telegram. Let's connect and get you the answers you need — fast.`}
            </p>
            <form className='max-w-[912px] w-full mx-auto' action="">
                <div className='mb-7 grid lg:grid-cols-2 grid-cols-1 gap-y-7 gap-x-4 sm:gap-x-8 lg:gap-x-[114px]'>
                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="fullName" className="text-sm sm:text-base">Full Name</label>
                        <input
                            id="fullName"
                            placeholder="Enter your full name"
                            type="text"
                            className='ps-5 w-full border border-[#757575] rounded-md h-12 sm:h-14 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="email" className="text-sm sm:text-base">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder='Enter your email address'
                            className='ps-5 w-full border border-[#757575] rounded-md h-12 sm:h-14 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="phone" className="text-sm sm:text-base">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder='Enter your phone number'
                            className='ps-5 w-full border border-[#757575] rounded-md h-12 sm:h-14 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="subject" className="text-sm sm:text-base">Subject</label>
                        <input
                            id="subject"
                            type="text"
                            placeholder='Subject'
                            className='ps-5 w-full border border-[#757575] rounded-md h-12 sm:h-14 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="message" className="text-sm sm:text-base">Message</label>
                    <textarea
                        id="message"
                        className='ps-5 w-full border border-[#757575] rounded-md mt-2 py-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500'
                        placeholder="Enter your message here..."
                    ></textarea>
                </div>
                <div className='flex justify-center mt-8 sm:mt-10 lg:mt-[52px]'>
                    <button
                        type="submit"
                        className='submit_btn btn_bg text-white bg-cover px-8 py-3 sm:px-10 sm:py-4 rounded-md hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm