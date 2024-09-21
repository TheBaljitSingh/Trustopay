import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';
import {  FaGithub } from 'react-icons/fa'
import { TbApi } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faComputer, faCookie, faPlay, faVideo, faWallet} from '@fortawesome/free-solid-svg-icons';


export default function UseCases() {
  return (
    <>
      <div className="h-auto flex flex-col max-w-full overflow-hidden">
        <PageHeader />
        <div 
          style={{ 'clip-path': 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }} 
          className="flex bg-gradient-to-r from-[#703893] to-[#3f4195] h-[750px] w-full justify-center items-center"
        >
          <div className="mx-48 flex justify-between items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start w-1/2 space-y-8 text-white -translate-y-12">
              <h2 className="text-5xl font-bold leading-tight">
                Secure your transaction with Trustopay
              </h2>
              <p className="text-lg leading-relaxed">
              Trustopay provides a secure solution for handling online transactions, using escrow services to safeguard funds until the buyer and seller have both fulfilled their obligations. This approach minimizes the risk of fraud and ensures that payments are only released once all parties are satisfied, offering a safe and reliable experience for users.
              </p>
              <Link to="/contact" >
              <button
                type="button"
                className="text-black bg-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl font-medium text-base px-6 py-3"
              >
                Contact us
              </button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-1/2 flex justify-center items-center translate-x-12">
              <img
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/banner.svg"
                alt="Easebuzz Use Case Banner"
                className="w-full h-full max-w-lg"
              />
            </div>
          </div>
        </div>

        <div className="h-auto flex flex-col items-center justify-center bg-white py-16 px-4 sm:px-6 md:px-48 mb-4">
          <h2 className="text-4xl text-center font-custom text-gray-900 mb-4">
            Easebuzz offers full-stack payment solutions tailored to ecommerce businesses
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-6xl">
            Merchants can easily set up an online store, accept payments, issue refunds, and integrate a plug-and-play 
            API-based payment gateway with a customizable checkout page including discount coupons & cashback offers.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 p-2   sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Webstore Card */}
            <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
            {/* <img 
              src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/product-icons/Web_Store.svg" 
              alt="Webstore Icon" 
              className="h-12 w-12" // Control the size of the icon
            /> */}
            <FontAwesomeIcon icon={faCartShopping} className='fa fa-2xl' />

            <h3 className="text-2xl  font-semibold">E-commerce</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
               Shop anytime, anywhere.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Access a worldwide market.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Reduced overhead from no physical stores
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Reduced overhead from no physical stores
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out">
            Know More →
          </button>
        </div>

        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
          <FontAwesomeIcon icon={faComputer} className='fa fa-2xl' />

            <h3 className="text-2xl  font-semibold">IT Agencies</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              Tailored tech solutions for businesses.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Specialized in areas like cybersecurity and cloud.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Services grow with the company.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
               Ongoing technical maintenance.
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out">
            Know More →
          </button>
        </div>
        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
          <FontAwesomeIcon icon={faVideo} className='fa fa-2xl' />
            <h3 className="text-2xl  font-semibold">Digital Marketing</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              Reach specific audiences.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Higher ROI compared to traditional marketing.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
               Real-time analytics for performance.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Direct interaction with customers.
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4">
            Know More →
          </button>
        </div>
        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
          <FontAwesomeIcon icon={faPlay} className='fa fa-2xl' />
            <h3 className="text-2xl  font-semibold">Freelancers</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              Set your own schedule and work from anywhere.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Work across various industries.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Choose how many clients to take on.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
               Network to secure ongoing work.
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out ">
            Know More →
          </button>
        </div>
        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
          <FontAwesomeIcon icon={faCookie} className='fa fa-2xl' />
            <h3 className="text-2xl  font-semibold">Second-hand Goods</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
             Cheaper than new items.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Reduces waste and environmental impact.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
               Vintage and rare items.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
               Increased demand for affordable options.
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out">
            Know More →
          </button>
        </div>
        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
          <FontAwesomeIcon icon={faWallet} className='fa fa-2xl' />
            <h3 className="text-2xl  font-semibold">Fintech</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              Fast, secure payments with digital wallets.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Expands financial services to underserved areas.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
               Reduced costs with automation.
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Navigates complex compliance issues.
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4">
            Know More →
          </button>
        </div>

           
          </div>
        </div>


        <div className="h-[500px] flex items-center justify-center bg-gradient-to-b from-purple-200 to-purple-300 mb-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">
    Key Features of Trustopay
    </h2>
    <div className="flex space-x-12">
      {/* Card 1 */}
      <div className="flex flex-col items-left  text-left max-w-xs">
        <div className="h-16 w-16 flex justify-center items-center rounded-full border-2 border-blue-300 mb-4">
          <img className="h-10 w-10" src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/quick.svg" alt="Quick Onboarding Icon" />
        </div>
        <p className="font-bold text-lg">Secure Payment Processing</p>
        <p className="text-gray-600">Trustopay uses advanced encryption and fraud detection to secure transactions.</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col  items-left  text-left max-w-xs">
        <div className="h-16 w-16 flex justify-center items-center rounded-full border-2 border-blue-300  mb-4">
          <img className="h-10 w-10" src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/instant.svg" alt="Instant Settlements Icon" />
        </div>
        <p className="font-bold text-lg">Flexible Payment Options</p>
        <p className="text-gray-600">Trustopay supports diverse payment methods, including digital wallets and cards.</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col  items-left  text-left max-w-xs">
        <div className="h-16 w-16 flex justify-center items-center rounded-full border-2 border-blue-300  mb-4">
          <img className="h-10 w-10" src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/auto.svg" alt="Webhook Notification Icon" />
        </div>
        <p className="font-bold text-lg">User-Friendly Interface</p>
        <p className="text-gray-600">Trustopay offers an intuitive interface for easy transactions.</p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col  items-left  text-left max-w-xs">
        <div className="h-16 w-16 flex justify-center items-center rounded-full border-2 border-blue-300  mb-4">
          <img className="h-10 w-10" src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/refund.svg" alt="Instant Refunds Icon" />
        </div>
        <p className="font-bold text-lg">Real-Time Analytics</p>
        <p className="text-gray-600">Trustopay provides real-time analytics for optimizing payment strategies.</p>
      </div>
    </div>
  </div>
      </div>

    


      <div className='h-auto px-48 py-16  space-y-12'>
        <div className='flex w-full  justify-center gap-8 '>
          <div className='w-1/2 h-auto'>
            <img className='h-80 w-full' src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/coupon_engine.gif" alt="" />
          </div>
          <div className=' w-1/2 h-auto  space-y-10'>
            <p className='text-4xl font-custom font-bold'>The Most Reliable and Secure Payment Solution
            </p>
            {/* <p><span className='font-bold'>Discount coupon engine</span> to create customisable discount coupons from the dashboard, manage their validity and offer discounts based on payment mode-wise and bank/card-wise.</p>
            <p><span className='font-bold'>Brand Coupons</span> allow customers to select, manage and customise cashback coupons during the checkout process.</p> */}
            <p>Trustopay is a trusted and secure payment platform that adheres to the highest industry standards. Our platform is regularly audited to ensure compliance with financial regulations and security protocols. These thorough audits are conducted to protect user information, verify the safety and reliability of our services, and ensure adherence to payment processing regulations.

</p>
          </div>
        </div> 
        <div className='flex flex-row-reverse w-full  justify-center gap-8 '>
          <div className='w-1/2 h-auto'>
            <img className='h-80 w-full' src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/customization.svg" alt="" />
          </div>
          <div className=' w-1/2 h-auto  space-y-10'>
            <p className='text-4xl font-custom font-bold'>Secure Payments for Your Website, Marketplace, or App
            </p>
            <p><span className='font-bold'>Designed by Developers for Developers</span> Any business can easily integrate Trustopay’s secure payment solutions into their platform, as seamlessly as common payment methods like Stripe.</p>
            <p><span className='font-bold'>Ensuring Safety for Both Buyers and Sellers</span> With Trustopay, buyers benefit from secure transactions and protection through real-time payment monitoring. Sellers are safeguarded from chargebacks and fraud, ensuring a secure and reliable payment experience.</p>
          </div>
        </div>
        
        {/* <div className='relative flex flex-col space-y-8 justify-center items-center md:mx-36'>
            {/* First Section */}
           
      </div>


      <div className='h-[500px] bg-gray-300 flex justify-center items-center w-full  '>
      <div className='  w-full flex justify-between items-center px-48'>
        <div className='w-5/2 h-full pl-24'>
          <img
            src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/usecase-real-estate/case-study-section/dlf_building.png"
            alt="Girl in a jacket"
            
            
            className="rounded-lg h-full w-[400px] shadow-lg"
          />
        </div>
        <div className='ml-12 w-1/2 px-12 py-2 items-start'>
        <div className='space-y-8'>

          <h2 className='text-3xl font-semibold font-custom mb-4'>A Seamless Transaction Process for E-Commerce Payments</h2>
          <div className='flex flex-col'>
          <p className='text-md font-medium text-gray-600 mb-2'>Trustopay offers a streamlined and efficient payment process for e-commerce platforms, ensuring smooth transactions from start to finish. Our solution simplifies payment collection with minimal friction, enhancing the overall user experience and allowing businesses to focus on growth while we handle the complexities of payment processing securely and reliably.</p>
          
          </div>
          <div className='space-x-4 flex'>
          <button className='flex items-center px-6 py-2 border-2 hover:bg-gradient-to-r from-[#703893] to-[#3f4195] border-[#703893] text-[#703893] font-semibold rounded-full transition duration-300 hover:bg-[#703893] hover:text-white'>
             Learn More
          </button>
          <button className='flex items-center px-6 py-2 border-2 hover:bg-gradient-to-r from-[#703893] to-[#3f4195] border-[#703893] text-[#703893] font-semibold rounded-full transition duration-300 hover:bg-[#703893] hover:text-white'>
            Get Started Now
          </button>
        </div>
        </div>
        </div>
      </div>
      </div>

      <Footer/>

      </div>
    </>
  );
}
