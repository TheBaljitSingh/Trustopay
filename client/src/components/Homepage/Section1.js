import React from 'react';
import tpHome from "../../assets/trustopay-Home-page.jpg";
import HDashboard from "../../assets/Hdashboard.png";
import Marquee from "react-fast-marquee";
import AnimatedCities from "../../utils/AnimatedCities";


export default function Section1() {
  return (
    <div className='h-auto'>
      <div className='flex flex-col md:flex-row items-start pl-16 mt-24'>
        {/* Left Side Content */}
        <div className="   flex-1 font-custom w-full md:w-1/2 space-y-6 justify-end md:ml-36 transform translate-y-24 md:-translate-y-8">
          <div className='mb-4 animate-fade-up animate-once'>
            <h1 className="text-6xl font-bold text-[#051B23] mb-2">
              Your Trusted Payment <span className='   decoration-blue-400 dark:decoration-blue-600'>Solution</span> for<br />  
            </h1>
           
            <h1 className=' mt-4 h-16 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-5xl text-[#0A86B7]'  ><AnimatedCities/></h1>
          </div>
          <p className=" animate-fade-up animate-once animate-delay-[500ms] text-gray-800 text-3xl font-bold">
          Secure Transactions, Built on Trust
          </p>
          <div className='space-y-6 animate-fade-up animate-once animate-delay-[500ms]'>

          
          <p className='font-normal font-sans text-xl text-[#051B23]'>Empower your business with Trustopay, the secure peer-to-peer payment platform.</p>
          <p className='font-normal font-sans text-xl text-[#051B23] '>Ensure safe and transparent payments, no matter the  <br />transaction </p>
          </div>
          <div className='flex justify-start items-center'>
            <button
              type="button"
              className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-3xl border border-gray-200 bg-[#051B23] text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Get Started
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

        <div className="absolute animate-fade-up animate-once hidden md:block  z-40  top-36 left-[840px] ">
        <div className="animated-image flex items-center relative mx-auto border-[#ECECEC] dark:border-[#ECECEC] mb-4 border-[8px] rounded-[2.5rem] h-[500px] w-[250px] shadow-xl">
          <div className="rounded-[2rem] overflow-hidden w-[234px] h-[488px] bg-white dark:bg-gray-800">
            <img src={tpHome} className="block w-full h-full" alt="Mobile Mockup" />
          </div>
        </div>
       </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 h-[500px] flex justify-end items-center relative md:mt-0 gap-4 ">

        <div className='w-10'>

        </div>
        <div className='animate-fade-left hidden md:block animate-once  w-90 shadow-md bg-white mb-12 rounded-xl '>
          <div className='flex justify-end items-center '>
            <img className=' w-full h-[550px] object-cover rounded-xl' src={HDashboard} alt="" />

          </div>


        </div>

         
        </div>

      </div>

      {/* Slider for Trusted By Companies */}
      <div className='h-40 p-2 bg-[#ffff]  -mt-60 md:mt-24 mb-8'>
        <p className='text-md font-semibold font-sans text-start ml-52 uppercase text-gray-600'>Trusted By</p>
        <div className='h-12 flex justify-center items-center mt-12'>
          {/* Slider component */}
          {/* <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap flex flex-row gap-8 justify-center items-center">
              <span className="text-xl mx-4"><img  src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Articulate%202.png" className='h-20 w-72 object-contain filter grayscale  ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/vihang-removebg-preview%202.png" className='h-14 w-36 object-contain filter grayscale  ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/assimulate-removebg-preview%202.png" className='h-14 w-36 object-contain filter grayscale  ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Mobilunity-removebg-preview%20(1)%202.png" className='h-14 w-36 object-contain filter grayscale  ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/creative_swatch%202.png" className='h-14 w-36 object-contain filter grayscale  ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Narraoone-removebg-preview%202.png" className='h-14 w-36 object-contain filter grayscale  ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Nextdev-removebg-preview%202.png" className='h-14 w-36 object-contain filter grayscale  ' alt="" /></span>
            </div>
            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row justify-center items-center gap-8">
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Articulate%202.png" className='h-14 w-36 object-contain filter grayscale ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/vihang-removebg-preview%202.png" className='h-14 w-36 object-contain filter grayscale ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/assimulate-removebg-preview%202.png" className='h-14 w-36 object-contain filter grayscale ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Mobilunity-removebg-preview%20(1)%202.png" className='h-14 w-36 object-contain filter grayscale ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/creative_swatch%202.png" className='h-14 w-36 object-contain filter grayscale ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Narraoone-removebg-preview%202.png" className='h-14 w-36 object-contain filter grayscale ' alt="" /></span>
              <span className="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Nextdev-removebg-preview%202.png" className='h-14 w-36 object-contain filter grayscale ' alt="" /></span>
            </div>
          </div> */}
          <Marquee>
            
            <div className='flex gap-4 content-center '>

              <img  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6614c57a268f59685bcc80a3_lapakgaming.webp"  className='filter grayscale h-24'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba4e26ee014753902fd96_teachmint.svg" className='filter grayscale h-24 ' alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba4779392e68e4f2a3957_thrillophilia-p-500.png" className='filter grayscale h-24'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba477ebace4f078c7d42b_82E.svg" className='filter grayscale h-24'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba47741ea3221d996c9a5_indiamart.webp" className='filter grayscale h-24'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba47741ea3221d996c998_global-TIX-p-500.png"  className='filter grayscale h-24' alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba477332e14d7a9eea9c9_culture%20holidays.webp" className='filter grayscale h-24'  alt="" />
            </div>
            
   
          </Marquee>
        </div>
      </div>
    </div>
  );
}

