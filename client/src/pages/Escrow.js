import React from 'react'
import Header from '../components/shared/Header'
import Footer from "../components/shared/Footer"
import { BiQuestionMark } from 'react-icons/bi'

export default function Escrow() {
  return (
    <>
      <Header />
      <div className=' h-screen max-w-full  flex flex-col md:flex-row pl-16 justify-center items-center'>
        {/* Left Side Content */}
        <div className="flex-1 items-center justify-center font-custom w-full md:w-1/2 space-y-6  -translate-y-16 md:ml-36 ">
          <div className='mb-4 animate-fade-up animate-once'>
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-2">
              Protect Your Payments with Digital Escrow
            </h1>

          </div>
          {/* <p className=" animate-fade-up animate-once animate-delay-[500ms] text-gray-800 text-3xl font-bold">
          Secure Transactions, Built on Trust
          </p> */}
          <div className='space-y-6 flex flex-col gap-2 animate-fade-up animate-once animate-delay-[500ms]'>


            {/* <p className='font-normal font-sans text-xl text-black'>Rapid Payment Processing Across 173+ Countries Without Local Entities
          .</p>
          <p className='font-normal font-sans text-xl text-black '>Instantly access 80+ diverse local payment methods, manage multi-currency transactions, and ensure compliance.
          </p> */}

            <div className='flex items-center gap-2'>
              <div>
                <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ebfb9ea396ab9597e95508_escrow-intro-shield.eea8d1b.svg" alt="" />
              </div>
              <div>
                <p>Trustopay's escrow protects buyers and sellers by holding the buyer's funds in an escrow account until the seller fulfils their obligations.</p>
              </div>
            </div>
            <div className='flex  items-center gap-2 '>
              <div>
                <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ebfb9ea396ab9597e95508_escrow-intro-shield.eea8d1b.svg" alt="" />
              </div>
              <div>
                <p>Get the flexibility to create an escrow on Tazapay's dashboard or integrate it with your platform.
                </p>
              </div>
            </div>
            <div className='flex  items-center gap-2'>
              <div>
                <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dca05d564ae2c370d071cb_tazapay-protection.svg" alt="" />
              </div>
              <div>
                <p>Trustopay</p>
                <p>Trustopay Shield</p>
              </div>
            </div>
          </div>
          <div className='flex justify-start items-center gap-4'>
            <button
              type="button"
              className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border-2 hover:text-white   border-[#703893] hover:bg-gradient-to-l from-[#703893] to-[#3f4195] shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Enquiry about Escrewy

            </button>
            <button
              type="button"
              className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border bg-gradient-to-l from-[#703893] to-[#3f4195]  border-gray-200  text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Create an Escrow

            </button>
          </div>
          <div className='animate-fade-up animate-once animate-delay-[1000ms]  font-sans flex gap-4 w-full items-center text-gray-600 '>
            {/* <div className='flex gap-2 items-center mt-4 '>
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
          </div> */}
          </div>

        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2  flex justify-end items-center ">


          {/* <div className=' rounded-bl-xl animate-fade-up hidden md:block animate-once w-[500px] h-[600px] bg-gradient-to-b from-[#703893cf] to-[#3f4095b1]'>
          </div> */}
          <div className=' flex justify-end  ml-12 animate-fade-left'>
            <img className=' md:w-[800px]  h-auto  items-center object-cover rounded-xl' src='https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ebf92e7129fa4e65835c95_Escrow-map.006d026.svg' alt="" />

          </div>




        </div>

      </div>

      <div className='min-h-screen bg-gradient-to-b from-[#703893] to-[#3f4195] max-w-full overflow-hidden'>
        <div className='flex justify-center items-center h-24'>
          <h2 className='text-3xl md:text-5xl font-custom text-white text-center'>
            How Does Escrow Work
          </h2><BiQuestionMark size={62} color='white' />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:mx-64'>
          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>1</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>2</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>3</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>4</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>5</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>6</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>
        </div>
      </div>


      <div className='min-h-screen bg-white max-w-full overflow-hidden mx-0 md:mx-36 p-8  space-y-24'>

        <div className='text-center mb-12 space-y-8'>
          <h2 className='text-xl w-full md:text-5xl font-bold bg-gradient-to-r from-[#703893] to-[#3f4195]  text-transparent bg-clip-text'>
            Collect and Disburse to 173+ Markets with One Tazapay Account
          </h2>
          <p className='font-normal text-xl md:text-3xl bg-gradient-to-r from-[#703893] to-[#3f4195]  text-transparent bg-clip-text mt-4'>
            Simple payment links and API integration
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Card 1 */}
          <div className='bg-white rounded-xl shadow-lg p-6'>
            <div className='flex items-center mb-4'>
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd780d0c09ce710db55e81_icon-large-localBank.svg" alt="icon" className='w-12 h-12' />
              <h3 className='ml-4 font-semibold text-lg text-gray-700'>
                Pay with Local Bank Account
              </h3>
            </div>
            <div className='flex items-center space-x-2 mb-4'>
              <span className='bg-[#703893] text-white text-xs font-medium px-2.5 py-0.5 rounded'>Lowest FX</span>
              <span className='bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded'>No Chargebacks</span>
            </div>
            <div className='flex items-center mb-4'>
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd7bce916442c31dddbb72_icon-paymentMethod-bankTransfer.svg" alt="icon" className='w-10 h-10' />
            </div>
              <p className=' text-md font-medium '>Available in 40+ countries</p>
            <p className='text-md font-medium'>
              Same day to 2 days settlement
            </p>
          </div>

          {/* card 2 */}
          <div className='bg-white rounded-xl shadow-lg p-6'>
            <div className='flex items-center mb-4'>
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd780d0c09ce710db55e81_icon-large-localBank.svg" alt="icon" className='w-12 h-12' />
              <h3 className='ml-4 font-semibold text-lg text-gray-700'>
                Pay with Local Bank Account
              </h3>
            </div>
            <div className='flex items-center space-x-2 mb-4'>
              <span className='bg-[#703893] text-white text-xs font-medium px-2.5 py-0.5 rounded'>Lowest FX</span>
              <span className='bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded'>No Chargebacks</span>
            </div>
            <div className='flex items-center mb-4'>
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd7bce916442c31dddbb72_icon-paymentMethod-bankTransfer.svg" alt="icon" className='w-10 h-10' />
            </div>
              <p className=' text-md font-medium '>Available in 40+ countries</p>
            <p className='text-md font-medium'>
              Same day to 2 days settlement
            </p>
          </div>


            {/* card 3 */}
          <div className='bg-white rounded-xl shadow-lg p-6'>
            <div className='flex items-center mb-4'>
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd780d0c09ce710db55e81_icon-large-localBank.svg" alt="icon" className='w-12 h-12' />
              <h3 className='ml-4 font-semibold text-lg text-gray-700'>
                Pay with Local Bank Account
              </h3>
            </div>
            <div className='flex items-center space-x-2 mb-4'>
              <span className='bg-[#703893] text-white text-xs font-medium px-2.5 py-0.5 rounded'>Lowest FX</span>
              <span className='bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded'>No Chargebacks</span>
            </div>
            <div className='flex items-center mb-4'>
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd7bce916442c31dddbb72_icon-paymentMethod-bankTransfer.svg" alt="icon" className='w-10 h-10' />
            </div>
              <p className=' text-md font-medium '>Available in 40+ countries</p>
            <p className='text-md font-medium'>
              Same day to 2 days settlement
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <button
              type="button"
              className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border-2 hover:text-white   border-[#703893] hover:bg-gradient-to-l from-[#703893] to-[#3f4195] shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Enquiry about Escrewy

            </button>
            <button
              type="button"
              className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border bg-gradient-to-l from-[#703893] to-[#3f4195]  border-gray-200  text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Create an Escrow

            </button>
          </div>
      </div>





      <Footer />
    </>
  )
}
