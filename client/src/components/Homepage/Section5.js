import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section5() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className='h-[1400px]'>
      <div className='h-[800px]'>
        <div className='h-[400px] bg-[#EDFEF3] flex flex-col justify-center items-center space-y-6'>
          <h2 className='font-bold text-4xl'>Efficiency in Every Transaction</h2>
          <p className='flex font-normal w-3/4 text-xl text-center'>
          Trustopay offers comprehensive protection for your transactions, ensuring secure payments, fraud prevention, and seamless compliance.
          </p>
        </div>

        <div className='flex flex-col space-y-8 justify-center items-center'>
          {/* First Section */}
          <div
            ref={ref1}
            className={`w-3/4 flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-xl shadow-lg transform -translate-y-14 transition-opacity duration-1000 ${
              inView1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col items-start md:w-1/2 p-6">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e3f1148f07142b07ae0da3_icon-complaince.svg"
                alt="Vector Image"
                className="w-12 h-12 mb-4"
              />
              <div className='flex flex-col space-y-4'>
                <h2 className="text-2xl font-semibold mb-2">Streamlined Local Compliance
                </h2>
                <p className="text-gray-600">
                Effortlessly meet global and local standards with Trustopay. We manage the complexities, so you can focus on growing your business.

                </p>
              </div>
            </div>

            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e3f46e69c02bd90f4d9c55_illustration__global-compliance-simplified.svg"
                alt="Right Side Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Second Section */}
          <div
            ref={ref2}
            className={`w-3/4 flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-xl shadow-lg transform -translate-y-14 transition-opacity duration-1000 ${
              inView2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col items-start md:w-1/2 p-6">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e3f1148f07142b07ae0da3_icon-complaince.svg"
                alt="Vector Image"
                className="w-12 h-12 mb-4"
              />
              <div className='flex flex-col space-y-4'>
                <h2 className="text-2xl font-semibold mb-2">Advanced Risk Management
                </h2>
                <p className="text-gray-600">
                With Trustopay, your transactions are safeguarded by cutting-edge technology, reducing risks and enhancing security.

                </p>
              </div>
            </div>

            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e3f46e69c02bd90f4d9c55_illustration__global-compliance-simplified.svg"
                alt="Right Side Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Third Section */}
          <div
            ref={ref3}
            className={`w-3/4 flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-xl shadow-lg transform -translate-y-14 transition-opacity duration-1000 ${
              inView3 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col items-start md:w-1/2 p-6">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e3f1148f07142b07ae0da3_icon-complaince.svg"
                alt="Vector Image"
                className="w-12 h-12 mb-4"
              />
              <div className='flex flex-col space-y-4'>
                <h2 className="text-2xl font-semibold mb-2">Optimized Payment Solutions
                </h2>
                <p className="text-gray-600">
                Benefit from efficient payment processes and competitive rates with Trustopay, enhancing your financial performance and operational efficiency.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e3f46e69c02bd90f4d9c55_illustration__global-compliance-simplified.svg"
                alt="Right Side Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mb-8'>
          <button
            type="button"
            className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-3xl border border-gray-200 bg-[#051B23] text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Contact Sales
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
      </div>
    </div>
  );
}
