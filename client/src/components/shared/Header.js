import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5"; // Import close icon
import { BiSolidLeftArrowCircle } from "react-icons/bi";


function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu visibility
  const navigate = useNavigate(); // Use navigate to handle redirections

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 10 && scrollTop > lastScrollTop) {
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

  const handleDropdownClick = (path) => {
    navigate(path); // Navigate to the selected path
    setDropdownOpen(false); // Close the dropdown
  };

  return (
    <header className={ `w-full bg-white sticky left-0 top-0 z-50 py-4 transition-all duration-300 shadow-md ease-in-out  ${!showHeader && `-translate-y-24 opacity-50` }`}>
      <nav className="container mx-auto flex justify-between px-2 md:px-14 gap-4">
        {/* Mobile menu icon */}
        <div className='flex md:hidden items-center'>
          <IoMenu size={36} className="text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>

        <div className="text-2xl font-bold text-black">
          <Link to="/">
            <img className='mt-5 w-96 md:w-32' src='https://trustopay.vercel.app/assets/images/trustopay_logo_m%201.png' alt="Logo" />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center font-semibold">
          <Link className="text-lg text-gray-700 hover:text-blue-700" to="/">Home</Link>
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center text-lg text-gray-700 hover:text-blue-700">
              Product <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-2">
                <ul className="py-2 text-gray-700">
                  <li><a onClick={() => handleDropdownClick('/genuine')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Genuine</a></li>
                  <li><a onClick={() => handleDropdownClick('/product/b2')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">B2</a></li>
                  <li><a onClick={() => handleDropdownClick('/product/b2b')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">B2B2</a></li>
                  <li><a onClick={() => handleDropdownClick('/product/b2c')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">B2C</a></li>
                  <li><a onClick={() => handleDropdownClick('/product/escrow')} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Escrew</a></li>
                </ul>
              </div>
            )}
          </div>
          <Link className="text-lg text-gray-700 hover:text-blue-700" to="/about">About</Link>
          <Link className="text-lg text-gray-700 hover:text-blue-700" to="/contact">Contact</Link>
        </div>

        <div className="flex md:flex md:space-x-4">
          <button className="hidden md:block border bg-gradient-to-r from-[#703893] to-[#3f4195]   text-white  border-indigo-600  hover:bg-indigo-600 hover:text-white py-2 px-4 rounded">
            Notify me
          </button>
            <button className="w-full md:w-28 bg-gradient-to-r from-[#703893] to-[#3f4195]   inline-block text-white hover:bg-indigo-700 py-2 px-4 rounded">
              Contact Us
            </button>
           

        </div>
      </nav>

      {/* Mobile menu with sliding animation */}
      <div className={`fixed top-0 left-0 w-64 h-full text-white bg-gradient-to-r from-[#703893] to-[#3f4195] shadow-lg transition-transform transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        {/* Header Section with Logo and Close Button */}
        <div className="flex flex-col justify-center bg-white h-24 p-4 shadow-md">
          
          {/* Logo */}
           <div className="flex justify-end items-end">
            {/* Close Button */}
            <IoClose  className="text-[#703893] cursor-pointer" size={25} onClick={() => setMobileMenuOpen(false)} />
          </div>
          <div className="flex justify-center items-center mt-2">
            <img src="https://trustopay.vercel.app/assets/images/trustopay_logo_m%201.png" alt="Logo" className="h-10 w-auto" />
          </div>
         
        </div>

        {/* Navigation Menu */}
        <ul className="flex flex-col p-4 space-y-4 mt-6">
          <li><Link className="block py-2 pl-6 text-lg font-semibold hover:text-gray-200 transition" to="/">Home</Link></li>
          <li><a onClick={() => handleDropdownClick('/genuine')} className="block py-2 pl-6 text-lg font-semibold hover:text-gray-200 transition">Genuine</a></li>
          <li><a onClick={() => handleDropdownClick('product/b2')} className="block py-2 pl-6 text-lg font-semibold hover:text-gray-200 transition">B2</a></li>
          <li><a onClick={() => handleDropdownClick('product/b2b')} className="block py-2 pl-6 text-lg font-semibold hover:text-gray-200 transition">B2B</a></li>
          <li><a onClick={() => handleDropdownClick('product/b2c')} className="block py-2 pl-6 text-lg font-semibold hover:text-gray-200 transition">B2C</a></li>
          <li><Link className="block py-2 pl-6 text-lg font-semibold hover:text-gray-200 transition" to="/about">About</Link></li>
          <li><Link className="block py-2 pl-6 text-lg font-semibold hover:text-gray-200 transition" to="/contact">Contact</Link></li>
        </ul>
      </div>


    </header>
  );
}

export default Header;
