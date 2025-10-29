'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Header = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full py-4 lg:px-6 flex justify-between items-center relative z-9999999">
            <div className="text-2xl font-bold text-purple-400"></div>

            <nav className="header_wrap hidden_clss hidden lg:flex space-x-[55px]">
                <Link href="/" className={`text-white text-xl ${pathname == '/' ? "active-link" : ""}`}>Home</Link>
                <Link href="/about" className={`text-white text-xl ${pathname == '/about' ? "active-link" : ""}`}>About Us</Link>
                <Link href="/services" className={`text-white text-xl ${pathname == '/services' ? "active-link" : ""}`}>Services</Link>
                <Link href="/contact" className={`text-white text-xl ${pathname == '/contact' ? "active-link" : ""}`}>Contact Us</Link>
            </nav>

            <button className="hidden_clss lg:flex hidden register_btn text-white font-bold py-2 px-4 rounded-full">
                Register
            </button>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white lg:hidden block_clss border border-[#FFFFFF26] rounded-full p-3"
            >
                {isOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>
            {isOpen && (
                <div className="absolute top-[70px] left-0 w-full block_clss sm_menu_bg flex  flex-col items-center py-6 space-y-6 lg:hidden">
                    <Link href="/" onClick={() => setIsOpen(false)} className={`text-white text-xl ${pathname == '/' ? 'active-link' : ''}`}>Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-white text-xl">About Us</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="text-white text-xl">Services</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white text-xl">Contact Us</Link>
                    <button onClick={() => setIsOpen(false)} className="register_btn text-white font-bold py-2 px-4 rounded-full">
                        Register
                    </button>
                </div>
            )}
        </header>
    )
}

export default Header