import React from 'react'
import Header from '../components/shared/Header'

export default function B2C() {
  return (
    <>
    <Header/>
      <div className=' h-screen max-w-full flex flex-col md:flex-row pl-16 justify-center items-center'>
        {/* Left Side Content */}
        <div className="flex-1 items-center justify-center font-custom w-full md:w-1/2 space-y-6  md:ml-36 ">
          <div className='mb-4 animate-fade-up animate-once'>
            <h1 className="text-3xl md:text-7xl font-bold text-black mb-2">
            Scale Your B2C Worldwide
            </h1>
           
          </div>
          <p className=" animate-fade-up animate-once animate-delay-[500ms] text-gray-800 text-3xl font-bold">
          Secure Transactions, Built on Trust
          </p>
          <div className='space-y-6 animate-fade-up animate-once animate-delay-[500ms]'>

          
          <p className='font-normal font-sans text-xl text-black'>Rapid Payment Processing Across 173+ Countries Without Local Entities
          .</p>
          <p className='font-normal font-sans text-xl text-black '>Instantly access 80+ diverse local payment methods, manage multi-currency transactions, and ensure compliance.
          </p>
          </div>
          <div className='flex justify-start items-center'>
            <button
              type="button"
              className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-3xl border bg-gradient-to-r from-[#703893] to-[#3f4195]  border-gray-200  text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Explore Trustopay
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
          <div className='animate-fade-up animate-once animate-delay-[1000ms]  font-sans flex gap-4 w-full items-center text-gray-600 '>
          <div className='flex gap-2 items-center mt-4 '>
            <img 
              src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e2c634feddec420d2fd650_CB%20INSJGHS.svg" 
              alt="CB Insights Logo" 
              className='w-40 h-auto' 
            />
            <p className='text-lg font-normal'>TOP 100 Fintechs</p>
          </div>
          <div className='flex gap-2 items-center mt-4 '>
            <img 
              src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/659d468bdaad532c6fe82609_g2.svg" 
              alt="G2 Logo" 
              className='w-34 h-auto' 
            />
            <p className='text-md font-medium'>4.3 Rating</p>
          </div>
        </div>

        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2  flex justify-end items-center ">

        
          <div className=' rounded-bl-xl animate-fade-up hidden md:block animate-once w-[500px] h-[600px] bg-gradient-to-b from-[#703893] to-[#3f4195]'>
          </div>
          <div className=' absolute -translate-x-72 '>
          <img className=' w-[400px] h-[500px] items-center object-cover rounded-xl' src='https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/665fd296317531c068364cc8_img_saas-hero-image-p-800.webp' alt="" />

          </div>



         
        </div>

      </div>


    </>
  )
}
