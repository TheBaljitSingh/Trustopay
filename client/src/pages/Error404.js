import React from 'react'
import Header from '../components/shared/Header'

export default function Error404() {
  return (
    <>
      <Header />
      <div className='min-h-screen flex justify-center items-center p-4'>
        {/* Left Side Content */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#703893] to-[#3f4195] text-transparent bg-clip-text mb-12 leading-tight">
          404 
        </h1>
      </div>
    </>
  )
}
