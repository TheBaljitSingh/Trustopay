import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';
import { FaGithub } from 'react-icons/fa'
import { TbApi } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBagShopping, faBullhorn, faCartShopping, faComputer, faCookie, faExchangeAlt, faLaptopCode, faMoneyBillWave, faPlay, faUserTie, faVideo, faWallet } from '@fortawesome/free-solid-svg-icons';
import CaseStudyDetail from './CaseStudyDetail';
import { faCircleCheck, faMoneyBill, faMoneyBillTransfer, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

import desktop from "../assets/desktop.png"
import eCommerce from "../assets/shopping-cart.png"
import freelancer from "../assets/freelancer.png"
import fintech from "../assets/fintech.png"
import goods from "../assets/goods.png"
import campaign from "../assets/campaign.png"


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
                  className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none  rounded-xl font-medium text-base px-6 py-3"
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
                {/* <FontAwesomeIcon icon={faCartShopping} className='fa fa-2xl' /> */}
                <img src={eCommerce} alt="" className='h-8 w-8' />


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
              <button className="text-gray-700 font-bold inline-flex hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4 items-center justify-center">
                Know More
                <FontAwesomeIcon icon={faArrowRight} className="pl-2 fa-md pt-1" />
              </button>
            </div>

            <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
              <div className="inline-flex  w-full  mb-4 space-x-4 ">
                {/* <FontAwesomeIcon icon={faLaptopCode} className='fa fa-2xl' /> */}
                <img src={desktop} alt="" className='h-8 w-8' />
                {/* <a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a> */}

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
              <button className="text-gray-700 font-bold inline-flex hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4 items-center justify-center">
                Know More
                <FontAwesomeIcon icon={faArrowRight} className="pl-2 fa-md pt-1" />
              </button>
            </div>
            <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
              <div className="inline-flex  w-full  mb-4 space-x-4 ">
                {/* <FontAwesomeIcon icon={faBullhorn} className='fa fa-2xl' /> */}
                <img src={campaign} alt="" className='h-8 w-8' />

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
              <button className="text-gray-700 font-bold inline-flex hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4 items-center justify-center">
                Know More
                <FontAwesomeIcon icon={faArrowRight} className="pl-2 fa-md pt-1" />
              </button>
            </div>
            <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
              <div className="inline-flex  w-full  mb-4 space-x-4 ">
                {/* <FontAwesomeIcon icon={faUserTie} className='fa fa-2xl' /> */}
                <img src={freelancer} alt="" className='h-8 w-8' />

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
              <button className="text-gray-700 font-bold inline-flex hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4 items-center justify-center">
                Know More
                <FontAwesomeIcon icon={faArrowRight} className="pl-2 fa-md pt-1" />
              </button>

            </div>
            <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
              <div className="inline-flex  w-full  mb-4 space-x-4 ">
                {/* <FontAwesomeIcon icon={faExchangeAlt} className='fa fa-2xl' /> */}
                <img src={goods} alt="" className='h-8 w-8' />

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
              <button className="text-gray-700 font-bold inline-flex hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4 items-center justify-center">
                Know More
                <FontAwesomeIcon icon={faArrowRight} className="pl-2 fa-md pt-1" />
              </button>
            </div>
            <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
              <div className="inline-flex  w-full  mb-4 space-x-4 ">
                {/* <FontAwesomeIcon icon={faMoneyBillWave} className='fa fa-2xl' /> */}
                <img src={fintech} alt="" className='h-8 w-8' />

                <h3 className="text-2xl  font-semibold">Fintech</h3>
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
              <button className="text-gray-700 bottom font-bold inline-flex hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4 items-center justify-center">
                Know More
                <FontAwesomeIcon icon={faArrowRight} className="pl-2 fa-md pt-1" />
              </button>
            </div>


          </div>
        </div>


        <div className="h-[500px] flex items-center justify-center bg-gradient-to-r from-[#EFFFFA] to-[#EFFFFA] mb-4">
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

            {/* <div style={{'clip-path': 'polygon(100% 0, 100% 54%, 0 100%, 0 54%)'}} className='h-[500px]  w-full'>

            </div> */}
 <div className='relative h-[600px]  flex justify-center items-center w-full'>
  {/* Pseudo-element using ::before */}
  <div style={{'clipPath': 'polygon(100% 10%, 100% 75%, 0 98%, 0 30%)'}} className='absolute top-0 left-0 w-full h-full bg-gray-200 z-[-1]'>
    
  </div>

  {/* Main Content */}
  <div className='w-full flex justify-between items-center px-48 relative z-10'>
    <div className='w-5/2 h-full pl-24'>
      <img
        src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/usecase-real-estate/case-study-section/dlf_building.png"
        alt="Girl in a jacket"
        className="rounded-lg h-full w-[400px] shadow-lg"
      />
    </div>
    <div className='ml-12 w-1/2 px-12 py-2 items-start'>
      <div className='space-y-8'>
        <h2 className='text-3xl font-semibold font-custom mb-4'>
          A Seamless Transaction Process for E-Commerce Payments
        </h2>
        <div className='flex flex-col'>
          <p className='text-md font-medium text-gray-600 mb-2'>
            Trustopay offers a streamlined and efficient payment process for e-commerce platforms, ensuring smooth transactions from start to finish. Our solution simplifies payment collection with minimal friction, enhancing the overall user experience and allowing businesses to focus on growth while we handle the complexities of payment processing securely and reliably.
          </p>
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

        

      </div>


      <div className='flex w-full items-center justify-center h-auto  py-12  '>

        <p className='text-4xl  font-custom bg-gradient-to-r from-[#703893] to-[#3f4195] text-transparent bg-clip-text '>Case Study</p>
      </div>
      <div className='    bg-gray-200 flex mx-24 items-center gap-12 px-24 rounded-xl h-60'>
        <div>
          <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/feesbuzz/case-study-parul/parul_logo.png" alt="" className='p-3' />
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl font-custom'>Parul University witnesses 60% improvement in fee collection cycle with Easebuzz payment solutions</h2>
          <p>Parul University comprises of 36 institutes with a plethora of diploma, undergraduate and post graduate programs in numerous disciplines. Offering a range of over 450 uniquely structured programs, designed to suit the career prospects of every student aspirant.</p>
        </div>


      </div>



      <div className='h-auto  py-12 px-48 space-y-12'>

        <div className='h-auto w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Business Objective / Problem Statement -
          </h2>

          {/* Main container */}
          <div className='flex items-start  justify-between mt-2 space-x-4'>

            {/* Left part (details) */}
            <div className='w-3/5  p-2 '>
              <p>Parul University basic requirement was to deploy a system which manages the entire administration system digitally and make education fee collection faster, and easier for students as well as the accounts department of the university.</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>

              </ul>
            </div>

            {/* Right part (image) */}
            <div className='w-2/5'>
              <img
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/feesbuzz/case-study-parul/building_image.png"
                alt="Parul University Building"
                className='p-2 w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>
        </div>

        <div className='h-auto w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Comprehensive solution-
          </h2>

          {/* Main container */}
          <div className='flex items-start  justify-between mt-2 space-x-4'>

            {/* Left part (details) */}
            <div className='w-1/2  p-2 '>
              <p>FeesBuzz helped Parul university to collect fees from students on a single link and splitting it to academic & hostel fees with automatic recocnciliation. With EasyCollect they were able to send payment links with payment reminders to all the fee defaulters.

              </p>

            </div>

            {/* Right part (image) */}
            <div className='w-1/2'>
              <p>Slices helped to split payment batch and course wise. The integration of payment gateway and payment links helped with fee collection for college events with customised & detailed description of event/activity.

              </p>

            </div>
          </div>
        </div>

        <div className='h-40 w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Product Offered-
          </h2>

          {/* Main container */}
          <div className="flex h-full items-center justify-between px-48 mt-2 divide-x-2">

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faMoneyCheck} className='fa fa-2xl' />
              <span className="ml-2 text-md font-custom">Product</span>
            </li>

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faMoneyBill} className='fa fa-2xl' />
              <span className="ml-2 text-md font-custom">Product</span>
            </li>

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faMoneyBillTransfer} className='fa fa-2xl' />
              <span className="ml-2 text-md font-custom">Product</span>
            </li>

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faBagShopping} className='fa fa-2xl' />
              <span className="ml-2 text-md font-custom">Product</span>
            </li>

          </div>


        </div>

        <div className='h-auto w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Benefits Realised-
          </h2>

          {/* Main container */}
          <div className='flex items-start  justify-between mt-2 space-x-4'>

            {/* Left part (details) */}
            <div className='w-1/2  p-2 '>
              <ul className='mt-2 space-y-8'>
                <div className='flex items-center gap-2'>

                  <FontAwesomeIcon icon={faCircleCheck} className='fa fa-lg' />
                  <li>
                    <span className=''>Difficulty in splitting fees between departments as per batches or courses</span>
                  </li>
                </div>
                <div className='flex items-center gap-2'>

                  <FontAwesomeIcon icon={faCircleCheck} className='fa fa-lg' />
                  <li>
                    <span className=''>Difficulty in splitting fees between departments as per batches or courses</span>
                  </li>
                </div>


              </ul>

            </div>

            {/* Right part (image) */}
            <div className='w-1/2 p-2'>
              <ul className='mt-2 space-y-2'>
                <div className='flex items-center gap-2'>

                  <FontAwesomeIcon icon={faCircleCheck} className='fa fa-lg' />
                  <li>
                    <span className=''>Difficulty in splitting fees between departments as per batches or courses</span>
                  </li>
                </div>



              </ul>

            </div>
          </div>
        </div>


        <div className='h-30 w-full px-2'>
          {/* Impact Created Heading */}
          <h2 className='text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Impact Created-
          </h2>

          {/* Impact Created Stats */}
          <div className='flex h-full items-center justify-between p-8 mt-2 space-x-4 px-24'>
            <div className='text-center flex flex-col'>
              <h3 className='text-4xl font-bold'>60%</h3>
              <p className='text-xl line-clamp-2'>Improvement in fees collection cycle</p>
            </div>
            <div className='text-center flex flex-col'>
              <h3 className='text-4xl font-bold'>70%</h3>
              <p className='text-xl line-clamp-2'>Operational cost reduction</p>
            </div>
            <div className='text-center flex flex-col'>
              <h3 className='text-4xl font-bold'>90%</h3>
              <p className='text-xl line-clamp-2'>Reduction in efforts of manual reconciliation of fees</p>
            </div>
          </div>

          {/* Customer Testimonials Heading */}
          <h2 className='text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2 mt-6'>
            What customers say about us -
          </h2>

          {/* Customer Testimonial */}
          <div className='flex items-center p-8 justify-between mt-4 '>
            <div className='w-1/5'>
              {/* Replace this with actual image */}
              <img src='https://trustopay.vercel.app/assets/images/our%20team/Us.png' className='rounded-xl ' />
            </div>
            <div className='flex items-center mt-4 ml-4'>

              <div className='ml-4 w-4/5 pl-12'>
                <p className='italic text-gray-600'>
                  "We have seen immense improvement in our fees collection process with Easebuzz as they have automated and digitized reconciliation for us..."
                </p>
                <div className='flex items-center mt-2'>
                  {/* University Logo */}
                  <img
                    src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/testimonial/parul_logo.png"
                    alt="Parul University Logo"
                    className='w-auto h-12 mr-2'
                  />
                  {/* Name and Title */}
                  <div>
                    <p className='font-bold'>
                      Pinak Agrawal
                    </p>
                    <p className='text-sm'>
                      Operations Officer - Branding & Media Relations<br />
                      Parul University
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pb-12 ">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/secured-complained.svg" alt="PCI-DSS Level 1" className="w-12 h-12" />
            </div>
            <p className="font-bold text-center">Secured and compliant with PCI-DSS Level 1</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/customer-support.svg" alt="Customer Support" className="w-12 h-12" />
            </div>
            <p className="font-bold text-center">24*7 Customer Support</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/integration-with-tally.svg" alt="Seamless Integration" className="w-12 h-12" />
            </div>
            <p className="font-bold text-center">Seamless integration with Tally and other ERPS</p>
          </div>
        </div>

      </div>


      <Footer />
    </>
  );
}
