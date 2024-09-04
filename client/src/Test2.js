import React from 'react'

export default function Test2() {
  return (
    <>
    {/* menu bar */}

    {/* <style>
            {`

            @keyframes floating {
                0% { transform: translate(0,  0px); }
                50%  { transform: translate(0, 15px); }
                100%   { transform: translate(0, -0px); }    
            }

            .animated-image{
            animation: floating 3s infinite ease-in-out
            }
            `}
        </style> */}


    <div className='bg-[#FAFAFA] p-4' >
        <div className='flex justify-between'>
            <div><h3 className='text-xl font-semibold'>Overview</h3></div>
            <div><button>This Month</button></div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            <div className='bg-[#146EB4] shadow-md p-2 rounded-lg text-slate-100'> 
                <div className='inline-flex items-center gap-1'>
                <p>Next Payout </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

                </div>
                
                <p>2,234</p>
            </div>
            <div className=' p-2 bg-[#FFFFFF] shadow-md  rounded-lg'>
                <p>Amount Pending</p>
                <p>92,312</p>
            </div>
            <div className='p-2 bg-[#FFFFFF] shadow-md  rounded-lg'>
                <p>Amount Pending</p>
                <p>23,92,312</p>
            </div>

        </div>
        <div>
            <div className=''>
                <p>Transction | This month</p>
                <div className='space-x-2'>
                    <button className='bg-gray-200 text-slate-600 rounded-xl p-1'>payouts (22)</button>
                    <button className='bg-[#146Eb4] text-white rounded-xl p-1'>Refunds(6) </button>
                </div>
            </div>
        </div>
        <div className='bg-white rounded-xl h-screen p-2'>
            <div className='flex justify-between'>
            <div>search</div>
            <div>filters and download</div>
            </div>
            <div className='grid grid-cols-5'>
                <div>orderid</div>
                <div>orderid</div>
                <div>orderid</div>
                <div>orderid</div>
                <div>orderid</div>


            </div>

        </div>

    </div>


    </>
  )
}
