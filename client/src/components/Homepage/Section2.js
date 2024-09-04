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
    <div className='h-auto bg-gradient-to-b from-[#051B23] to-neutral-500'>
      <div className='flex justify-center items-center'>
        <div className='mt-12'>
          <div className='flex flex-col justify-center items-center text-white space-y-4'>
            <h2
              ref={headerRef}
              className={`text-4xl font-custom ${
                headerInView ? 'animate-fade-up animate-once animate-ease-in' : 'opacity-0'
              }`}
            >
              Global Payment Collections Redefined
            </h2>
            <p
              ref={headerRef}
              className={`text-2xl ${
                headerInView ? 'animate-fade-up animate-delay-500' : 'opacity-0'
              }`}
            >
              Simplify with Tazapay— a unified platform for efficient worldwide payment collection.
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

          <div
            ref={contentRef}
            className={`grid grid-cols-2 gap-6 p-6 text-white mt-8 mb-12 ${
              contentInView ? 'animate-fade-up animate-once animate-ease-in' : 'opacity-0'
            }`}
          >
            {/* 1 */}
            <div className="overflow-hidden max-h-80 bg-gradient-to-b from-white to-green-200 p-6 rounded-xl shadow-lg w-96 mx-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Local Payment Methods</h2>
              <ul className="text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span> Available in 100+ countries
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Zero chargebacks
                </li>
              </ul>
              <div className="flex justify-center items-center">
                <div className='w-56'>
                  <img
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e78496161087c9f53b9427_img_alipay-scan.svg"
                    alt="QR Code"
                    className="transform translate-y-2"
                  />
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="overflow-hidden max-h-80 bg-gradient-to-b from-white to-green-200 p-6 rounded-xl shadow-lg w-96 mx-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Credit Cards</h2>
              <ul className="text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span> Available in 170+ countries
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Optimized for cross-border success rates
                </li>
              </ul>
              <div className="flex justify-center items-center">
                <div className='w-56'>
                  <img
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e779404b53d101b9e3e839_Img_credit-cards.svg"
                    alt="QR Code"
                    className="transform translate-y-2"
                  />
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="overflow-hidden max-h-80 bg-gradient-to-b from-white to-green-200 p-6 rounded-xl shadow-lg w-96 mx-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Global Business Account</h2>
              <ul className="text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span> Available in 35+ countries
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> No local entity Required
                </li>
              </ul>
              <div className="flex justify-center items-center">
                <div className='w-56 flex-1'>
                  <img
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/663c92eaa6d410f9f25813bc_img_accounts-screen-p-500.webp"
                    alt="QR Code"
                    className="transform translate-y-2 translate-x-6"
                  />
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="overflow-hidden max-h-80 bg-gradient-to-b from-white to-green-200 p-6 rounded-xl shadow-lg w-96 mx-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Payouts</h2>
              <ul className="text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span> Available in 70+ countries
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Competitive FX rates
                </li>
              </ul>
              <div className="flex justify-center items-center">
                <div className='w-56 flex-1'>
                  <img
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65f95da782671a4756e76d39_CREATE%20PAYOUTS%20(RESIZED).svg"
                    alt="QR Code"
                    className="transform translate-y-2 translate-x-6"
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
