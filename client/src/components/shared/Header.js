import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu, } from "react-icons/io5"; // Import close icon
import { PiLineVerticalBold } from "react-icons/pi";
// import TPlogo from "../../../../../../Desktop/tp_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCode, faCheckCircle, faMobileAlt, faLock, faMoneyBillWave, faShoppingCart, faLaptopCode, faBullhorn, faUserTie, faExchangeAlt, faPlug } from '@fortawesome/free-solid-svg-icons';



function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [dropdownButton, setDropdownButton] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Default to false (closed)
  const navigate = useNavigate(); // Use navigate to handle redirections


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > 200 && scrollTop > lastScrollTop) {
        setShowHeader(true); // Hide header on scroll down
      } else if (scrollTop < 250) {
        setShowHeader(false); // Show header on scroll up
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
      document.body.style.overflow = 'scrollY';
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
    // setDropdownOpen(false); // Close the dropdown
    // setMobileMenuOpen(false); // Close mobile menu after selecting
  };

  const handleDropDownButtonClick = (id) => {
    // Toggle the dropdown
    setDropdownButton(prev => (prev === id ? "" : id));
  };

  const handleMenuDropDownClick = (menu) => {
    setDropdownOpen(prev => (prev === menu ? "" : menu));

  }

  return (
    <>
      {/* Header */}
      <header className={`w-full  sticky left-0 top-0 z-50 py-4 bg-white transition-all duration-200  ease-in-out ${showHeader && `bg-transparent shadow-md`}`}>
        <nav className="container h-18 mx-auto flex items-center justify-between px-2 md:px-14 gap-4">

          {/* Mobile menu icon */}
          <div className="flex md:hidden items-center transform translate-x-4 translate-y-1">
            <div
              className="flex flex-col space-y-1 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"

            >
              {/* transform  translate-y-2 delay-100 rotate-45  */}
              <div className={`bg-black h-1 w-8 rounded-full transition-all duration-700 ${mobileMenuOpen ? ' animate-translate-rotate' : ` animate-reverse-translate-rotate`}    `}></div>
              <div className={`bg-black h-1 w-8 rounded-full transition-opacity  delay-300 ease-in ${mobileMenuOpen ? 'opacity-0' : ' opacity-100'}`}></div>
              <div className={`bg-black h-1 w-8 rounded-full transition-all duration-700  ${mobileMenuOpen ? 'animate-translate-rotate2 ' : `animate-reverse-translate-rotate2`}`}></div>
            </div>
          </div>



          {/* Logo */}
          <div className="text-2xl flex items-center font-bold text-black">
            <Link to="/">
              <img className="mt-2 md:w-32" src="https://trustopay.vercel.app/assets/images/trustopay_logo_m%201.png" alt="Logo" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center font-semibold">
            <Link className="text-lg text-gray-700 hover:text-gray-500" to="/">Home</Link>
            <div
              onMouseEnter={() => handleMenuDropDownClick('products')}
              className="relative">
              <button className="flex items-center text-lg text-gray-700 hover:text-gray-500">
                Product <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
              </button>
              {dropdownOpen == 'products' && (
                 <div 
                 onMouseLeave={() => handleMenuDropDownClick("")} 
                 onMouseEnter={() => handleMenuDropDownClick('products')} 
                 className="absolute bg-white shadow-lg rounded-lg mt-2 w-[200px]"
               >
                 <ul className="py-2 text-gray-700">
                   <li>
                     <a 
                       onClick={() => handleDropdownClick('/product/b2')} 
                       className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                     >
                       <FontAwesomeIcon icon={faPlug} className="mr-2" /> API
                     </a>
                   </li>
                   <li>
                     <a 
                       onClick={() => handleDropdownClick('/genuine')} 
                       className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                     >
                       <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Genuine
                     </a>
                   </li>
                   <li>
                     <a 
                       onClick={() => handleDropdownClick('/product/b2b')} 
                       className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                     >
                       <FontAwesomeIcon icon={faMobileAlt} className="mr-2" /> Trustopay App
                     </a>
                   </li>
                   <li>
                     <a 
                       onClick={() => handleDropdownClick('/product/escrow')} 
                       className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                     >
                       <FontAwesomeIcon icon={faLock} className="mr-2" /> Digital Escrow
                     </a>
                   </li>
                 </ul>
               </div>
              )}
            </div>
            <div onMouseEnter={() => handleMenuDropDownClick('usecases')}
              className="relative">
              <button
                className={`flex  items-center text-lg text-gray-700 hover:text-gray-500`}>
                Use Cases <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
              </button>
              {dropdownOpen == 'usecases' && (
                <div onMouseLeave={() => handleMenuDropDownClick("")} onMouseEnter={() => handleMenuDropDownClick('usecases')} className="absolute bg-white shadow-lg rounded-lg mt-2 w-[200px]">
                  <ul className="py-2 text-gray-700">
                    <li>
                      <a onClick={() => handleDropdownClick('/usecases')} className="flex items-center md:block px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" /> Fintech
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleDropdownClick('/usecases')} className="flex items-center md:block px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> E-Commerce
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleDropdownClick('/usecases')} className="flex items-center md:block px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <FontAwesomeIcon icon={faLaptopCode} className="mr-2" /> IT Agencies
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleDropdownClick('/usecases')} className="flex items-center md:block px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <FontAwesomeIcon icon={faBullhorn} className="mr-2" /> Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleDropdownClick('/usecases')} className="flex items-center md:block px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <FontAwesomeIcon icon={faUserTie} className="mr-2" /> Freelancers
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleDropdownClick('/usecases')} className="flex items-center md:flex px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" /> Second-hand Goods
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link className="text-lg text-gray-700 hover:text-gray-500" to="/about">About</Link>
            <Link className="text-lg text-gray-700 hover:text-gray-500" to="/contact">Contact</Link>
            <Link className="text-lg text-gray-700 hover:text-gray-500" to="/case-study">Case Studies</Link>

          </div>


          {/* Buttons */}
          <div className="flex md:space-x-4">
            <button className="hidden md:block border text-black border-indigo-600 py-2 px-4 rounded">
              <p className="text-lg md:text-md inline-block font-medium bg-gradient-to-r from-[#703893] to-[#3f4195] text-transparent bg-clip-text">Login</p>
            </button>
            <button className="w-full md:w-32 bg-gradient-to-r from-[#703893] to-[#3f4195] inline-block text-white py-2 px-4 rounded">
              <p className="text-lg md:text-lg text-wrap inline-block font-medium">Sign Up</p>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu with sliding animation   bg-gradient-to-r from-[#703893] to-[#3f4195]*/}
      <div className={`fixed top-0 mt-18 left-0 w-full h-screen text-black bg-white shadow-lg transition-transform duration-1000 delay-200 ease-out  transform ${mobileMenuOpen ? 'translate-y-0  ' : '-translate-y-full'} z-40 md:hidden`}>
        <div className='h-24'>
        </div>
        {/* Mobile Navigation Menu */}
        {/* <ul className="flex flex-col p-4 space-y-4 mt-6">
            <div className='h-8'></div>
            <li><Link className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition" to="/">Home</Link></li>
            <li><a onClick={() => handleDropdownClick('/genuine')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">Genuine</a></li>
            <li><a onClick={() => handleDropdownClick('/product/b2')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">B2</a></li>
            <li><a onClick={() => handleDropdownClick('/product/b2b')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">B2B</a></li>
            <li><a onClick={() => handleDropdownClick('/product/b2c')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">B2C</a></li>
            <li><a onClick={() => handleDropdownClick('/product/escrow')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">Escrow</a></li>
            <li><a onClick={() => handleDropdownClick('/legal/privacypolicy')} className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition">Privacy Policy</a></li>

            <li><Link className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition" to="/about">About</Link></li>
            <li><Link className="block py-2 pl-4 text-lg font-semibold hover:text-gray-200 transition" to="/contact">Contact</Link></li>
          </ul> */}

        <div className=' space-y-6 mx-8'>

          <div className='flex  justify-between items-center  ' onClick={(event) => handleDropDownButtonClick('products')} >
            <button data-dropdown-toggle="dropdownDivider" class="text-black    font-semibold rounded-lg text-md  py-2.5 text-center inline-flex items-center  " type="button">Products

            </button>
            <svg class={`w-2.5 h-2.5 ms-3 transform ${dropdownButton === 'products' ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>

          </div>
          <div class={`z-10  rounded-lg  w-full space-y-4 ${dropdownButton == "products" ? "block" : "hidden"} `}>
            <h2 className='text-xl font-bold' >Our Products</h2>
            <div className='felx flex-col space-y-10'>
              <div className='space-y-2' onClick={() => handleDropdownClick('/product/b2b')} >
                <p className='text-md font-semibold'>B2B</p>
                <p className='text-md'>Accepts Payments  from 173+ countries with no local entities</p>
              </div>
              <div className='space-y-2' onClick={() => handleDropdownClick('/product/b2c')}>
                <p className='text-md font-semibold' >B2C</p>
                <p className='text-md'>Accepts Payments  from 173+ countries with no local entities</p>
              </div>
              <div className='space-y-2' onClick={() => handleDropdownClick('/product/b2')}>
                <p className='text-md font-semibold'>B2</p>
                <p className='text-md'>Accepts Payments  from 173+ countries with no local entities</p>
              </div>
            </div>

          </div>

          <div className='flex justify-between items-center ' onClick={() => handleDropdownClick('/product/escrow')} >
            <button id="dropDownbutton2" data-dropdown-toggle="dropdownDivider" class="text-black    font-semibold rounded-lg text-md  py-2.5 text-center inline-flex items-center  " type="button">Escrow

            </button>
            {/* <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg> */}
          </div>

          <div className='flex justify-between items-center ' onClick={(event) => handleDropDownButtonClick('Solutions')} >
            <button id="dropDownbutton3" data-dropdown-toggle="dropdownDivider" class="text-black    font-semibold rounded-lg text-md  py-2.5 text-center inline-flex items-center " type="button">Solutions

            </button>
            <svg class={`w-2.5 h-2.5 ms-3 transform ${dropdownButton === 'Solutions' ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </div>
          <div class={`z-10  rounded-lg  w-full space-y-4 ${dropdownButton == "Solutions" ? "block" : "hidden"} `}>
            <h2 className='text-xl font-bold' >Our Solutions</h2>
            <div className='felx flex-col space-y-10'>
              <div className='space-y-2' >
                <p className='text-md font-semibold'>use our api</p>
                <p className='text-md'>suitable for b2b and b2c</p>
              </div>
              {/* <div className='space-y-2'>
                  <p className='text-md font-semibold'>payment Gateway</p>
                  <p className='text-md'>Accepts Payments  from 173+ countries with no local entities</p>
                </div>
                <div className='space-y-2'>
                  <p className='text-md font-semibold'>payment Gateway</p>
                  <p className='text-md'>Accepts Payments  from 173+ countries with no local entities</p>
                </div> */}
            </div>
          </div>
          <div className='flex    justify-between items-center ' onClick={(event) => handleDropDownButtonClick('Developrs')} >
            <button id="dropDownbutton3" data-dropdown-toggle="dropdownDivider" class="text-black    font-semibold rounded-lg text-md  py-2.5 text-center inline-flex items-center " type="button">Developrs

            </button>
            <svg class={`w-2.5 h-2.5 ms-3 transform ${dropdownButton === 'Developrs' ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </div>
          <div class={`z-10  rounded-lg  w-full space-y-4 ${dropdownButton == "Developrs" ? "block" : "hidden"} `}>
            <h2 className='text-xl font-bold' >Our Dev API</h2>
            <div className='felx flex-col space-y-10'>
              <div className='space-y-2' >
                <p className='text-md font-semibold'>use our api</p>
                <p className='text-md'>suitable for Ecommerce and b2c</p>
              </div>

            </div>
          </div>


          <div className='flex    justify-between items-center '>
            <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-black    font-semibold rounded-lg text-md  py-2.5 text-center inline-flex items-center  " type="button">Login

            </button>

          </div>

        </div>
        <div className='h-12'>

        </div>
        <div className='flex  justify-center  ' >
          <p className='text-md font-normal'>© 2024 Trustopay, All right reserved</p>
        </div>



      </div>
    </>
  );
}

export default Header;
