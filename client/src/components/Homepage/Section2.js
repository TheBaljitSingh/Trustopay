import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section2() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='h-auto bg-gradient-to-b from-[#703893] to-[#3f4195]'>
      <div className='flex justify-center items-center'>
        <div className='mt-12'>
          <div className='flex flex-col justify-center items-center text-white space-y-4'>
            <h2
              ref={headerRef}
              className={`text-4xl font-custom ${
                headerInView ? 'animate-fade-up animate-once animate-ease-in' : 'opacity-0'
              }`}
            >
              Redefining Secure Digital Payments
            </h2>
            <p
              ref={headerRef}
              className={`text-2xl ${
                headerInView ? 'animate-fade-up animate-delay-500' : 'opacity-0'
              }`}
            >
              Simplify with Trustopay—your platform for seamless and safe transactions across India.
            </p>
            <button
              type="button"
              className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-3xl border border-gray-200 bg-white text-[#051B23] shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ${
                headerInView ? 'animate-fade-up animate-delay-500' : 'opacity-0'
              }`}
            >
              Learn More
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Content section with flexbox */}
          <div ref={contentRef} className={`mx-4 flex flex-wrap justify-center gap-4 p-8 ${ contentInView ? 'animate-fade-up animate-once animate-ease-in' : 'opacity-0' }`}>
            <div className='space-y-4'>
              {/* 1 */}
            <div className="overflow-hidden h-64 w-80 bg-gradient-to-b from-white to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5+ Partnered Banks</h2>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">•</span> Seamless Bank Connectivity
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">•</span> Multiple Banks Supported
                </li>
              </ul>
              <div className="flex justify-center">
                <img
                  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e78496161087c9f53b9427_img_alipay-scan.svg"
                  alt="QR Code"
                  className="transform scale-90 hover:scale-100 transition-transform duration-300"
                />
              </div>
            </div>

            {/* 2 */}
            <div className="overflow-hidden h-64 w-80 bg-gradient-to-b from-white to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Custom Contracts Creation</h2>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">•</span> Tailored Transaction Agreements
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">•</span> Clear, Transparent Terms
                </li>
              </ul>
              <div className="flex justify-center">
                <img
                  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e779404b53d101b9e3e839_Img_credit-cards.svg"
                  alt="QR Code"
                  className="transform scale-90 hover:scale-100 transition-transform duration-300"
                />
              </div>
            </div>
            </div>

            <div className='space-y-4'>
              {/* 3 */}
            <div className="overflow-hidden h-64 w-80 bg-gradient-to-b from-white to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Milestone-Based Payments</h2>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">•</span> Secure Payment Process
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">•</span> Funds Released Safely
                </li>
              </ul>
              <div className="flex justify-center">
                <img
                  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/663c92eaa6d410f9f25813bc_img_accounts-screen-p-500.webp"
                  alt="Payment Screen"
                  className="transform scale-90 hover:scale-100 transition-transform duration-300"
                />
              </div>
            </div>

            {/* 4 */}
            <div className="overflow-hidden h-64 w-80 bg-gradient-to-b from-white to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Fast Dispute Resolution</h2>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">•</span> Swift Conflict Handling
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">•</span> 3-Step Quick Resolution
                </li>
              </ul>
              <div className="flex justify-center">
                <img
                  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65f95da782671a4756e76d39_CREATE%20PAYOUTS%20(RESIZED).svg"
                  alt="Dispute Handling"
                  className="transform scale-90 hover:scale-100 transition-transform duration-300"
                />
              </div>
            </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
