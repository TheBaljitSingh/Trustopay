import React from 'react';
import tpHome from "../../assets/trustopay-Home-page.jpg";
import HDashboard from "../../assets/Hdashboard.png";
import Marquee from "react-fast-marquee";
import AnimatedCities from "../../utils/AnimatedCities";

export default function Section1() {
  return (
    <div className='h-auto max-w-full overflow-hidden'>
      <div className='flex flex-col md:flex-row items-start px-4  md:px-0  mt-16 md:mt-24'>
        {/* Left Side Content */}
        <div className="flex-1 font-custom w-full md:w-1/2 space-y-4 md:space-y-6  justify-end md:ml-48 transform -translate-y-8 md:-translate-y-8">
          <div className='mb-2 md:mb-4 animate-fade-up animate-once max-w-full'>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
              Your Trusted Payment   
            </h1>
            <h1 className='text-4xl md:text-5xl font-bold text-black'>Solution for</h1>
           
            <h1 className='mt-2 md:mt-4  max-h-24 bg-gradient-to-r from-[#703893] to-[#3f4195] text-transparent bg-clip-text md:text-5xl flex items-center text-[#0A86B7] break-words'>
              <AnimatedCities />
            </h1>
          </div>
          <p className="  animate-fade-up animate-once animate-delay-[500ms] text-gray-800 text-2xl md:text-3xl font-bold">
          Secure Transactions, Built on Trust
          </p>
          <div className='space-y-6   animate-fade-up animate-once animate-delay-[500ms]'>
          <p className='font-normal font-sans text-xl text-black'>Empower your business with Trustopay, the secure peer-to-peer payment platform.</p>
          <p className='font-normal font-sans text-xl text-black '>Ensure safe and transparent payments, no matter the  <br />transaction </p>
          </div>
          <div className='flex justify-start items-center'>
            <button
            onClick={()=>window.location="https://play.google.com/store/apps/details?id=com.trustopay.android&hl=en"}
              type="button"
              className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-3xl border bg-gradient-to-r from-[#703893] to-[#3f4195]  border-gray-200  text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Download our App 
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
          <div className='animate-fade-up animate-once animate-delay-[1000ms]  font-sans flex flex-col items-start md:flex-row gap-4 w-full md:items-center text-gray-600 '>
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

        {/* Hide mobile image (tpHome) on mobile devices */}
        <div className="absolute animate-fade-up animate-once hidden md:block  z-40  top-36  md:left-[840px]   ">
          <div className="animated-image flex items-center relative mx-auto border-[#ECECEC] dark:border-[#ECECEC] mb-4 border-[8px] rounded-[2.5rem] h-[500px] w-[250px] shadow-xl">
            <div className="rounded-[2rem] overflow-hidden w-[234px] h-[488px] bg-white dark:bg-gray-800">
              <img src={tpHome} className="block w-full h-full" alt="Mobile Mockup" />
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 h-[500px] flex justify-end  items-center relative -mt-16 md:mt-0 gap-4">
          <div className=' hidden md:block md:w-10'></div>

          {/* Show HDashboard image on all screen sizes */}
          <div className='animate-fade-left w-full md:w-auto shadow-md md:shadow-md bg-white mb-12 rounded-xl'>
            <div className='flex justify-end items-center'>
              <img className='w-full h-[300px] md:h-[550px] object-cover rounded-xl' src={HDashboard} alt="Dashboard" />
            </div>
          </div>
        </div>
      </div>

      {/* Slider for Trusted By Companies */}
      <div className='h-40 p-2 bg-[#ffff]  -mt-20 md:mt-16 mb-8'>
        <p className='text-md font-semibold font-sans text-start ml-2 md:ml-52  uppercase text-gray-600'>Trusted By</p>
        <div className='h-12 flex justify-center items-center mt-12'>
          <Marquee>
            <div className='flex gap-4 content-center '>
              <img  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6614c57a268f59685bcc80a3_lapakgaming.webp"  className='filter grayscale md:h-24 h-12'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba4e26ee014753902fd96_teachmint.svg" className='filter grayscale md:h-24 h-12 ' alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba4779392e68e4f2a3957_thrillophilia-p-500.png" className='filter grayscale md:h-24 h-12'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba477ebace4f078c7d42b_82E.svg" className='filter grayscale md:h-24 h-12'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba47741ea3221d996c9a5_indiamart.webp" className='filter grayscale md:h-24 h-12'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba47741ea3221d996c998_global-TIX-p-500.png"  className='filter grayscale md:h-24 h-12' alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba477332e14d7a9eea9c9_culture%20holidays.webp" className='filter grayscale md:h-24 h-12'  alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
