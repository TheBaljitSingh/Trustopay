import React from 'react'

export const RevenueCard = ({
    title,
    showWarning,
    orderCount,
    amount

}) =>{
  return (
    <div className='bg-white shadow-md p-2 rounded pt-4  '>
        <div className='text-slate-800 '>
            {title}
            ?
        </div>
        <div className='flex justify-between mt-2'>
            <div className='font-bold text-2xl' >
              ₹ {amount}
            </div>
            {orderCount ? <div className='flex text-[#146be4] hover:cursor-pointer underline justify-center'>  {orderCount} order(s) <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </div>:null}

        </div>

    </div>
  )}
