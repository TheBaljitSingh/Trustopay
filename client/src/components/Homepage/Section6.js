import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section6() {
  const [activeSection, setActiveSection] = useState('first');
  const [flash, setFlash] = useState(false);

  const handleClick = (section) => {
    setFlash(true); // Trigger the flash effect
    setTimeout(() => {
      setFlash(false); // Remove the flash effect after the transition
      setActiveSection(section); // Change the active section
    }, 300); // 300ms matches the duration of the transition
  };

  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className='bg-white font-custom h-auto min-h-screen flex flex-col justify-between'>
      <div>
        {/* Main Section */}
        <div className='h-1/4 flex flex-col justify-center items-center py-12'>
          <h2 className='font-bold text-3xl  bg-gradient-to-r from-[#703893] to-[#703893]  bg-clip-text text-transparent'>Integration Made Easy for Every Business</h2>
          <p className='font-light w-2/3 text-xl text-center text-gray-600 mt-4'>
            We guarantee a swift and seamless setup, getting you up and running in no time.
          </p>
        </div>

        {/* Buttons Section */}
        <div className='flex justify-center space-x-8'>
          <button
            className={`py-3 px-10 text-xl font-medium transition-all duration-300 ${
              activeSection === 'first' ? ' text-black' : 'text-gray-600'
            }`}
            onClick={() => handleClick('first')}
          >
            API Integration
          </button>
          <button
            className={`py-3 px-10 text-xl font-medium transition-all duration-300 ${
              activeSection === 'second' ? ' text-black' : 'text-gray-600'
            }`}
            onClick={() => handleClick('second')}
          >
            Low-code Solution
          </button>
        </div>

        {/* Content Section */}
        <div className={`mt-12 px-8 mx-12 md:mx-80 transition-opacity duration-300 ${flash ? 'opacity-50' : 'opacity-100'}`}>
          {activeSection === 'first' && (
            <div
              ref={firstSectionRef}
              className={`grid grid-cols-1 gap-y-8 mx-auto transition-transform duration-700 ${
                firstSectionInView ? 'transform-none opacity-100' : 'transform translate-y-12 opacity-0'
              }`}
            >
              {/* First Row */}
              <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
                <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">White Label & Native Solutions</h3>
                  <h4 className="text-lg text-gray-300">Your Brand, Our Technology</h4>
                  <p className="text-gray-200">
                    Experience fully customizable integration that mirrors your brand identity, ensuring a consistent user experience.
                  </p>
                </div>
                <div className="flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
                  <img
                    className="object-cover h-full max-h-64 rounded-lg"
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed4673761f210afc4174_img_solutions-mobile_1.webp"
                    alt="First Option"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
                <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">Second Option Details</h3>
                  <p className="text-gray-200">
                    Additional information about the first option, showcasing its benefits and customization potential.
                  </p>
                </div>
                <div className="flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
                  <img
                    className="object-cover h-full max-h-64 rounded-lg"
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed46883e3c62c8f0a020_img_solutions-mobile_2.webp"
                    alt="Second Option"
                  />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'second' && (
            <div
              ref={secondSectionRef}
              className={`grid grid-cols-1 gap-y-8 mx-auto transition-transform duration-700 ${
                secondSectionInView ? 'transform-none opacity-100' : 'transform translate-y-12 opacity-0'
              }`}
            >
              {/* First Row */}
              <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
                <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">White Label & Native Solutions</h3>
                  <h4 className="text-lg text-gray-300">Your Brand, Our Technology</h4>
                  <p className="text-gray-200">
                    Experience fully customizable integration that mirrors your brand identity, ensuring a consistent user experience.
                  </p>
                </div>
                <div className="flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
                  <img
                    className="object-cover h-full max-h-64 rounded-lg p-4"
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed8efea70242584aa1e8_img_solutions-payment-link-illust-p-800.webp"
                    alt="First Option"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
                <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">White Label & Native Solutions</h3>
                  <h4 className="text-lg text-gray-300">Your Brand, Our Technology</h4>
                  <p className="text-gray-200">
                    Experience fully customizable integration that mirrors your brand identity, ensuring a consistent user experience.
                  </p>
                </div>
                <div className="flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
                  <img
                    className="object-cover h-full max-h-64 rounded-lg p-4"
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed8e3e3a56e7d3b1fc8c_img_solutions-code-illust-p-800.webp"
                    alt="Second Option"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Center Button */}
      <div className='mt-4'>
        <div className='flex justify-center items-center mb-12'>
          <button
            type="button"
            className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-[#8965e4] text-white shadow-lg hover:bg-[#032A38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#032A38] transition-all duration-300"
          >
            Contact Sales
            <svg
              className="shrink-0 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin
              >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

