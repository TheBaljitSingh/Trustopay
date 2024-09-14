import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5"; // Import close icon
import { BiSolidLeftArrowCircle } from "react-icons/bi";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Default to false (closed)
  const navigate = useNavigate(); // Use navigate to handle redirections

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 300 && scrollTop > lastScrollTop) {
        setShowHeader(false); // Hide header on scroll down
      } else if (scrollTop < lastScrollTop) {
        setShowHeader(true); // Show header on scroll up
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    // Disable scrolling when the mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset overflow on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const handleDropdownClick = (path) => {
    navigate(path); // Navigate to the selected path
    setDropdownOpen(false); // Close the dropdown
    setMobileMenuOpen(false); // Close mobile menu after selecting
  };

  return (
    <>
      {/* Header */}
      <header className={`w-full bg-white sticky left-0 top-0 z-50 py-4 transition-all duration-300 shadow-md ease-in-out ${!showHeader && `md:-translate-y-24 md:opacity-50`}`}>
        <nav className="container h-18 mx-auto flex items-center justify-between px-2 md:px-14 gap-4">
          
          {/* Mobile menu icon */}
          <div className="flex md:hidden items-center">
            <IoMenu size={42} className="text-2xl ml-2 md:ml-0 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
          </div>

          {/* Logo */}
          <div className="text-2xl flex items-center font-bold text-black">
            <Link to="/">
              <img className="mt-2 md:w-32" src="https://trustopay.vercel.app/assets/images/trustopay_logo_m%201.png" alt="Logo" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center font-semibold">
            <Link className="text-lg text-gray-700 hover:text-blue-700" to="/">Home</Link>
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-lg text-gray-700 hover:text-blue-700">
                Product <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
              </button>
              {dropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded-lg mt-2">
                  <ul className="py-2 text-gray-700">
                    <li><a onClick={() => handleDropdownClick('/genuine')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Genuine</a></li>
                    <li><a onClick={() => handleDropdownClick('/product/b2')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">B2</a></li>
                    <li><a onClick={() => handleDropdownClick('/product/b2b')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">B2B</a></li>
                    <li><a onClick={() => handleDropdownClick('/product/b2c')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">B2C</a></li>
                    <li><a onClick={() => handleDropdownClick('/product/escrow')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Escrow</a></li>
                  </ul>
                </div>
              )}
            </div>
            <Link className="text-lg text-gray-700 hover:text-blue-700" to="/about">About</Link>
            <Link className="text-lg text-gray-700 hover:text-blue-700" to="/contact">Contact</Link>
          </div>

          {/* Buttons */}
          <div className="flex md:space-x-4">
            <button className="hidden md:block border text-black border-indigo-600 py-2 px-4 rounded">
              <p className="text-lg md:text-md inline-block font-medium bg-gradient-to-r from-[#703893] to-[#3f4195] text-transparent bg-clip-text">Login</p>
            </button>
            <button className="w-full md:w-32 bg-gradient-to-r from-[#703893] to-[#3f4195] inline-block text-white py-2 px-4 rounded">
              <p className="text-lg md:text-lg text-wrap inline-block font-medium">Contact Us</p>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu with sliding animation   bg-gradient-to-r from-[#703893] to-[#3f4195]*/}
      <div className={`fixed top-0 mt-18 left-0 w-full h-screen text-white bg-gray-600 shadow-lg transition-transform ease-in delay-200 transform ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} z-40 md:hidden`}>
        {/* Mobile Navigation Menu */}
        <ul className="flex flex-col p-4 space-y-4 mt-6">
          <div className='h-8'></div>
          <li><Link className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition" to="/">Home</Link></li>
          <li><a onClick={() => handleDropdownClick('/genuine')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">Genuine</a></li>
          <li><a onClick={() => handleDropdownClick('/product/b2')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">B2</a></li>
          <li><a onClick={() => handleDropdownClick('/product/b2b')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">B2B</a></li>
          <li><a onClick={() => handleDropdownClick('/product/b2c')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">B2C</a></li>
          <li><a onClick={() => handleDropdownClick('/product/escrow')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">Escrow</a></li>
          <li><Link className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition" to="/about">About</Link></li>
          <li><Link className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
