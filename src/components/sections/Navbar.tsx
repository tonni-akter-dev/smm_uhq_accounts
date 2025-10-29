"use client";
import React from "react";
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import Ellipse from '../../app/assets/Ellipse.png';
import Ellipse1 from '../../app/assets/Ellipse1.png';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';

const Navbar = () => {
    type User = {
        name: string;
        role: "admin" | "user";
        profileImage?: string;
    };
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    console.log(user)
    useEffect(() => {
        // Get user from localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    return (
        // <nav className="text-white px-6 relative mt-8 ml-0">
        //     <div className="flex items-center justify-between">


        //         {/* Center - Nav Links (Desktop) */}
        //         <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
        //             <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
        //             <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
        //             <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
        //             <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
        //         </div>

        //         {/* Right - Desktop Buttons */}
        //         <div className="hidden md:flex items-center space-x-4">
        //             {!user && (
        //                 <Link href="/signup">
        //                     <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
        //                         Register
        //                     </button>
        //                 </Link>
        //             )}

        //             {user && (
        //                 <div className="relative">
        //                     <button
        //                         onClick={() => setDropdownOpen(!dropdownOpen)}
        //                         className="flex items-center space-x-2 focus:outline-none"
        //                     >
        //                         <Image
        //                             src={user.profileImage || "/monitor.png"}
        //                             alt="User"
        //                             width={30}
        //                             height={30}
        //                             className="rounded-full"
        //                         />
        //                         <FaChevronDown className="text-white" />
        //                     </button>

        //                     {/* Desktop Dropdown */}
        //                     {dropdownOpen && (
        //                         <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10 overflow-hidden">
        //                             <Link
        //                                 href={user.role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
        //                                 className="block px-4 py-2 text-white hover:bg-purple-600 transition-colors duration-200"
        //                             >
        //                                 Dashboard
        //                             </Link>
        //                             <div className="border-t border-gray-700"></div>
        //                             <button
        //                                 onClick={logout}
        //                                 className="w-full text-left px-4 py-2 text-white hover:bg-purple-600 transition-colors duration-200"
        //                             >
        //                                 Logout
        //                             </button>
        //                         </div>
        //                     )}
        //                 </div>
        //             )}
        //         </div>

        //         {/* Mobile Menu Toggle */}
        //         <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        //             {isOpen ? <X size={28} /> : <Menu size={28} />}
        //         </button>
        //     </div>

        //     {/* Mobile Menu */}
        //     {isOpen && (
        //         <div className="md:hidden mt-4 rounded-lg shadow-lg p-4 space-y-4">
        //             {/* Nav Links */}
        //             <Link href="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
        //             <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
        //             <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">Services</Link>
        //             <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact Us</Link>

        //             {/* Register Button */}
        //             {!user && (
        //                 <Link href="/signup">
        //                     <button className="w-full bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
        //                         Register
        //                     </button>
        //                 </Link>
        //             )}

        //             {/* Profile dropdown for mobile */}
        //             {user && (
        //                 <div className="relative">
        //                      <button
        //                         onClick={() => setDropdownOpen(!dropdownOpen)}
        //                         className="flex items-center space-x-2 focus:outline-none"
        //                     >
        //                         <Image
        //                             src={user.profileImage || "/monitor.png"}
        //                             alt="User"
        //                             width={30}
        //                             height={30}
        //                             className="rounded-full"
        //                         />
        //                         <FaChevronDown className="text-white" />
        //                     </button>

        //                     {dropdownOpen && (
        //                         <div className="mt-2 rounded-lg shadow-inner overflow-hidden">
        //                             <Link
        //                                 href={user.role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
        //                                 className="block px-4 py-2 text-white hover:bg-purple-600 transition-colors duration-200"
        //                             >
        //                                 Dashboard
        //                             </Link>
        //                             <div className="border-t border-gray-600"></div>
        //                             <button
        //                                 onClick={logout}
        //                                 className="w-full text-left px-4 py-2 text-white hover:bg-purple-600 transition-colors duration-200"
        //                             >
        //                                 Logout
        //                             </button>
        //                         </div>
        //                     )}
        //                 </div>
        //             )}
        //         </div>
        //     )}
        // </nav>
        <div className='container'>
            {/* <div className="logo1">
        <img src={Logo} alt="logo" className='logo' />
      </div> */}

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </div>

            <div className={`nav ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    {/* <li><Link href="/pricing">Pricing</Link></li>x */}
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
                {/* Mobile-only extras (visible only below 480px) */}
                <div className="mobile-extras">
                    <div className="ellipses">
                        <div className='ellipse'>
                            <Image src={Ellipse} alt="ellipse" />
                        </div>
                        <div className='ellipse1'>
                            <Image src={Ellipse1} alt="ellipse1" />
                        </div>
                    </div>
                    <div className="register">
                        <Link href="/signup">
                            <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Original elements (hidden below 480px) */}
            <div className="desktop-ellipses">
                <div className='ellipse'>
                    <Image src={Ellipse} alt="ellipse" />
                </div>
                <div className='ellipse1'>
                    <Image src={Ellipse1} alt="ellipse1" />
                </div>
            </div>

            <div className="desktop-register">
                <Link href="/signup">
                    <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
                        Register
                    </button>
                </Link>
            </div>

        </div>


    );
};

export default Navbar;
