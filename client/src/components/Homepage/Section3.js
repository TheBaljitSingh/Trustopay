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
    <div className="h-auto">
      <div className='transform translate-x-12 mx-auto bg-white grid grid-rows-3 grid-flow-col gap-8 p-24 md:mx-12'>

        {/* <!-- Section 1: Heading --> */}
        <div
          ref={headingRef}
          className={`row-span-1 flex justify-center items-center ${headingInView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
        >
          <div className='w-3/4 text-center'>
            <h2 className='font-bold text-5xl text-[#0B3747] leading-tight w-3/4'>Empowering Your Global Ambitions</h2>
          </div>
        </div>

        {/* <!-- Section 2: Image --> */}
        <div
          ref={imageRef}
          className={`bg-gray-100 row-span-2 flex justify-center items-center rounded-lg shadow-md overflow-hidden ${imageInView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
        >
          <img className='rounded-xl object-cover w-4/3 h-full' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e55700997d6605ae8ce398_img_Empowering%20Your%20Global%20Ambitions-p-1080.webp" alt="Empowering Your Global Ambitions" />
        </div>

        {/* <!-- Section 3: Statistics/Marketing Info 1 --> */}
        <div
          ref={statsRef}
          className={`bg-[#E8FEF0] row-span-1 col-span-2 rounded-lg shadow-md p-8 text-[#0B3747] w-5/6 ${statsInView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
        >
          <div className='flex flex-col justify-center items-start'>
            <h3 className='text-5xl font-bold text-[#FFAE79]'>173+</h3>
            <p className='text-lg'>Countries</p>
            <p className='text-start mt-2 w-1/2'>Access more buyers and unlock new segments anywhere, anytime; No need for local entities</p>
          </div>
        </div>

        {/* <!-- Section 4: Additional Info 1 --> */}
        <div
          ref={info1Ref}
          className={`bg-[#E8FEF0] row-span-1 col-span-2 rounded-lg shadow-md p-8 text-[#0B3747] w-5/6 ${info1InView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
        >
          <div className='flex flex-col justify-center items-start'>
            <h3 className='text-5xl font-bold text-[#FFAE79]'>75+</h3>
            <p className='text-lg'>Countries</p>
            <p className='mt-2 w-1/2'>Get access to uncaptured buyers across Asia, Europe, Latam, and Africa</p>
          </div>
        </div>

        {/* <!-- Section 5: Additional Info 2 --> */}
        <div
          ref={info2Ref}
          className={`bg-[#E8FEF0] row-span-1 col-span-2 rounded-lg shadow-md p-8 text-[#0B3747] w-5/6 ${info2InView ? 'opacity-100 animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}
        >
          <div className='flex flex-col justify-center items-start'>
            <h3 className='text-5xl font-bold text-[#FFAE79]'>+7%</h3>
            <p className='text-lg'>Higher Success Rates</p>
            <p className='text-start mt-2 w-1/2'>Increase your conversion rates to drive net new growth in business</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center transform -translate-y-12'>
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-3xl border border-gray-200 text-white bg-[#051B23] shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
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
