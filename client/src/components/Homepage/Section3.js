import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section3() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: info1Ref, inView: info1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: info2Ref, inView: info2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="h-auto mx-24">
      <div className=' bg-white grid grid-rows-3 grid-flow-col gap-8 p-12 md:ml-16  '>

        {/* <!-- Section 1: Heading --> */}
        <div
  ref={headingRef}
  className={`row-span-1 text-wrap flex justify-start items-start ${headingInView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
>
  <h2 className="font-bold text-6xl bg-gradient-to-r from-[#703893] to-[#3f4195] text-transparent bg-clip-text flex items-start justify-center leading-tight">
    Empowering Safe Payments for All
  </h2>
</div>


        {/* <!-- Section 2: Image --> */}
        <div
          ref={imageRef}
          className={`bg-gray-100 w-4/3 h-4/3 h-full row-span-2 flex justify-center items-center rounded-lg shadow-md overflow-hidden ${imageInView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
        >
          <img className='rounded-xl object-cover w-auto h-full' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e55700997d6605ae8ce398_img_Empowering%20Your%20Global%20Ambitions-p-1080.webp" alt="Empowering Your Global Ambitions" />
        </div>

        {/* <!-- Section 3: Statistics/Marketing Info 1 --> */}
        <div
          ref={statsRef}
          className={`bg-[#f1f1f1]  row-span-1 col-span-2 rounded-xl shadow-md p-8 text-[#0B3747] w-5/6 ${statsInView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
        >
          <div className='flex flex-col  justify-center items-start space-y-4'>
            <h3 className='text-4xl font-bold bg-gradient-to-b from-[#703893] to-[#703893]  bg-clip-text text-transparent'>100% </h3>
            <p className='text-2xl font-bold  bg-gradient-to-r from-[#703893] to-[#3f4195]  bg-clip-text text-transparent'>Transaction Security</p>
            <p className='text-start text-black font-semibold w-full'>Ensuring every payment is protected with advanced encryption and escrow services.
            </p>
          </div>
        </div>

        {/* <!-- Section 4: Additional Info 1 --> */}
        <div
          ref={info1Ref}
          className={`bg-[#f1f1f1] row-span-1 col-span-2 rounded-xl shadow-md p-8 text-[#0B3747] w-5/6 ${info1InView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
        >
          <div className='flex flex-col justify-center items-start space-y-4'>
            <h3 className='text-4xl  font-bold bg-gradient-to-b from-[#703893] to-[#703893]  bg-clip-text text-transparent'>15 Lacs+ 
            </h3>
            <p className='text-2xl font-bold bg-gradient-to-r from-[#703893] to-[#3f4195]  bg-clip-text text-transparent'>Processed</p>
            <p className='text-start text-black font-semibold  w-full'>Over 15 lacs in transactions successfully handled, in over partnerships with 40 Agencies.
            </p>
          </div>
        </div>

        {/* <!-- Section 5: Additional Info 2 --> */}
        <div
          ref={info2Ref}
          className={` bg-[#f1f1f1] row-span-1 col-span-2 rounded-xl shadow-md p-8 text-[#0B3747]  w-5/6 ${info2InView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
        >
          <div className='flex flex-col justify-center items-start space-y-4'>
            <h3 className='text-4xl  font-bold bg-gradient-to-b from-[#703893] to-[#703893]  bg-clip-text text-transparent'>+80%</h3>
            <p className='text-2xl  font-bold bg-gradient-to-r from-[#703893] to-[#3f4195]  bg-clip-text text-transparent'>Higher success Rate</p>
            <p className='text-start text-black  font-semibold w-full'>With Trustopay achieve an 80% increase in conversion rates and business growth.</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center '>
        <button type="button" className="bg-[#703893] text-white shadow-lg hover:bg-[#8965e4] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-3xl border border-gray-200  focus:outline-none focus:bg-[#a097f3] disabled:opacity-50 disabled:pointer-events-none">
          Learn More
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
