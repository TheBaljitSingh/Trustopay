import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import chatDialogue from "../assets/chat-dialogue.svg";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center items-center text-center mt-10'>
        <h2 className='text-3xl font-bold text-gray-800 underline-offset-4 underline decoration-[#9747ffcd]'>Contact Us</h2>
        <p className='text-gray-600 mt-2'>Have a technical issue? Want to send feedback about a feature? Let us know!</p>
      </div>
      <div className='w-3/4 mx-auto mt-10 flex flex-col lg:flex-row items-center h-auto'>
        <div className='w-full lg:w-1/2 text-center mb-10 lg:mb-0 lg:mr-10'>

        <style>
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
        </style>

          <img src={chatDialogue} alt="Chat Illustration" className='animated-image w-full max-w-lg mx-auto '  />
        </div>

        <section className="bg-white shadow-lg rounded-lg p-6 lg:p-12 w-full flex-1 h-1/2">
          <div className="max-w-screen-md mx-auto">
            <h2 className="mb-4 text-2xl font-extrabold text-center text-gray-900">Get in Touch</h2>
            <form action="#" className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9747ffcd] focus:border-[#9747ffcd] block w-full p-2.5"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-[#9747ffcd] text-sm rounded-lg focus:ring-[#9747ffcd] focus:border-[#9747ffcd] block w-full p-2.5"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we assist you?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your Message</label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-sm font-medium text-white rounded-lg bg-[#9747FF] hover:bg-[#9747ffcd] focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
      
      <div className="mx-auto mt-10 text-center">
        <div className="flex flex-col md:flex-row items-center justify-around w-full p-6 bg-gray-50">
        <div className='w-full md:w-1/3 p-4'>
            <h4 className="font-semibold text-gray-800 text-lg">Email Us</h4>
            <p className="text-gray-600 mt-2">
                Drop your email at 
                <a href="mailto:info@Trustopay.com" className="text-blue-500 hover:underline"> info@Trustopay.com</a> 
                and you'll receive a reply in 24 hours.
            </p>
        </div>
        <div className='w-full md:w-1/3 p-4'>
            <h4 className="font-semibold text-gray-800 text-lg">Call Us</h4>
            <p className="text-gray-600 mt-2">
                Give us a ring at 
                <a href="tel:+917043507789" className="text-blue-500 hover:underline"> (+91 7043507789)</a>. 
                Available Monday to Friday from 9 AM to 5 PM.
            </p>
        </div>
        <div className='w-full md:w-1/3 p-4'>
            <h4 className="font-semibold text-gray-800 text-lg">Reach Us</h4>
            <p className="text-gray-600 mt-2">
                Vadodara Startup Studio, Above Diva Hospital Circle, VIP Rd, Karelibaug, Vadodara, Gujarat, 390022.
            </p>
        </div>
    </div>

      </div>
      <Footer/>
    </div>
  );
}
