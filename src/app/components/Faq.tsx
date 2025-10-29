import React from 'react';

const Faq = () => {
    return (
        <div className='lg:pl-[180px] px-[30px] lg:pr-[230px] relative faq_wrapper'>
            <div className='flex flex-col items-center justify-center'>
                <button className='how_ItWorks mb-10'>FAQS</button>
                <h1 className='text-[60px] font-medium capitalize mb-12 lg:mb-[150px] text-center heading'>Answers to the Most Common <br /> Questions from Our Users</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-start faq_grid gap-x-[264px]">
                {[
                    {
                        id: '01',
                        title: 'How fast will I receive my account after purchase?',
                        text: 'Instantly! Once payment is confirmed, account details are automatically delivered to your dashboard and email.',
                    },
                    {
                        id: '02',
                        title: 'Are all accounts verified and clean?',
                        text: 'Smm panel is a panel where you can buy social media ( Facebook, Twitter, Instagram, YouTube, Spotify, Tiktok, and other social media ) likes, followers, views, Comments, Subscribers, and as well as Website traffic. Customers choose the cheapest smm panel because of its cheap price, faster delivery, and all social media services available on 1 website.',
                    },
                    {
                        id: '03',
                        title: 'What payment methods are accepted?',
                        text: 'We accept secure payments via Crypto, Debit/Credit Cards, and supported wallets. All transactions are encrypted.',
                    },
                    {
                        id: '04',
                        title: 'What happens if an account has an issue after delivery?',
                        text: 'We offer a 48-hour replacement guarantee for any issues found with delivered accounts. Just contact our support team quickly.',
                    },
                ].map((faq) => (
                    <div
                        key={faq.id}
                        className="flex items-start gap-10 mb-9 lg:mb-[136px] h-full faq_number"
                    >
                        <h2 className="faq_text lg:text-[48px] text-[28px] shrink-0">{faq.id}.</h2>

                        <div className="flex flex-col max-w-[510px] w-full faq_question">
                            <div className="lg:grow faq_wrap">
                                <h1 className="text-xl md:text-4xl lg:text-[50px] font-semibold mb-[30px]">
                                    {faq.title}
                                </h1>
                                <p className="text-sm md:text-lg font-medium ">{faq.text}</p>
                            </div>
                            {(faq?.id === "01" || faq?.id === "02") && (
                                <div className="gradient-border-bottom bottom_border mt-5 lg:mt-6 w-full" />
                            )}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Faq;