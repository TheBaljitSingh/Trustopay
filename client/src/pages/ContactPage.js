import React, { useEffect, useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';
import GoogleMap from '../utils/GoogleMap';
import { IoMdArrowRoundForward } from "react-icons/io";


export default function ContactPage() {
 

  return (
    <div className=' w-full max-w-full overflow-hidden h-auto'>
      <PageHeader />

      <div
        style={{ 'clip-path': 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }}
        className="bg-gradient-to-r from-[#703893] to-[#3f4195] h-screen w-full flex justify-center items-center "
      >
        {/* Content that appears from top with animation */}
        {/* <div
          className={`flex flex-col justify-center items-center text-white w-full`}
        > */}
        <div className="flex flex-col items-center space-y-6 justify-center -translate-y-36 text-white">
          <h2 className="text-5xl font-bold">Get in touch!</h2>
          <p className="text-lg">Question not answered yet? We are here to help!</p>
        </div>


        {/* </div> */}
      </div>
      {/* <div> */}
      <div className="w-full left-0 right-0 -translate-y-[450px] max-w-lg mx-auto absolute">
  <form className="space-y-6 bg-white p-8 rounded-xl shadow-md">
    <div>
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
      <input
        type="text"
        id="name"
        className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
        placeholder="Your name"
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
      <input
        type="email"
        id="email"
        className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
        placeholder="name@example.com"
        required
      />
    </div>
    <div>
      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
      <input
        type="text"
        id="subject"
        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
        placeholder="How can we assist you?"
        required
      />
    </div>
    <div>
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your Message</label>
      <textarea
        id="message"
        rows="6"
        className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
        placeholder="Leave a comment..."
        required
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full py-3 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition duration-200"
    >
      Send Message
    </button>
  </form>
</div>


      <div className='mt-48  h-60 py-4 rounded-lg px-48 w-full flex justify-center items-center'>
        <div className='w-5/6 h-full bg-gradient-to-b  from-[#703893] to-[#3f4195]  flex justify-between  items-center space-x-8 p-12 rounded-xl'>
          <div className="text-white text-center space-y-6">
            <h2 className="text-4xl font-bold text-start">Scale-up your Business</h2>
            <p className="text-lg text-start">with Trustopay Payment Solutions Platform</p>
          </div>
          <div>
            <button className="bg-white text-blue-600 py-3 px-6 rounded-xl text-sm font-medium hover:bg-gray-100 transition duration-200">
              Sign Up for Free →
            </button>
          </div>
        </div>
      </div>

{/* map content */}
      <div className='w-full flex justify-center items-center py-12'> 

      <GoogleMap/>
        

      </div>

      <div className='  h-60 mb-14 rounded-lg px-48 w-full flex justify-center items-center'>
        <div className='w-5/6 h-full bg-gradient-to-b  from-[#703893] to-[#3f4195]  flex justify-between  items-center space-x-8 p-12 rounded-xl'>
          <div className="text-white text-center space-y-4">
            <h2 className="text-4xl font-bold text-start">Trustopay Support</h2>
            <p className="text-lg text-start w-5/6">For further help related to our products and services, please refer to our Helpdesk and Knowledge Base portal.</p>
          </div>
         <div className='flex justify-end w-1/2 '>
         <button className="bg-white text-blue-600 py-3 px-6 rounded-xl text-sm font-medium hover:bg-gray-100 transition duration-200">
              Sign Up for Free →
            </button>
         </div>

        </div>
      </div>




      <Footer />
    </div>
  );
}