import React from 'react'
import { RevenueCard } from './components/RevenueCard'


export default function Test3() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>    
        <RevenueCard

        title={"Nexy payout"}
        amount={"92,338"}
        orderCount={"13"}
        
        />
        <RevenueCard

        title={"left payout"}
        amount={"92,338"}

        />
        <RevenueCard

        title={"Profit payout"}
        amount={"92,338"}
        
        />
    </div>

  )
}
