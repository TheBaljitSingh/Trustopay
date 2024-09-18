import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

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
                Grow Your E-commerce Business with Easebuzz
              </h2>
              <p className="text-lg leading-relaxed">
                Get a complete payment suite to manage payments, financial operations, refunds management, 
                auto-reminders, split payments, auto-reconciliation, cashback coupon features, banking cards 
                discount engine, disbursement of refunds, and real-time reporting for better sales.
              </p>
              <button
                type="button"
                className="text-black bg-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl font-medium text-base px-6 py-3"
              >
                Sign Up Now!
              </button>
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
            <img 
              src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/product-icons/Web_Store.svg" 
              alt="Webstore Icon" 
              className="h-12 w-12" // Control the size of the icon
            />
            <h3 className="text-2xl  font-semibold">Webstore</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              DIY online store builder
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Integrated payment gateway with 100+ payment modes
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Promotion and discount features are inbuilt
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Smart dashboard for reports and analysis with google analytics
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out">
            Know More →
          </button>
        </div>

        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
            <img 
              src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/product-icons/Web_Store.svg" 
              alt="Webstore Icon" 
              className="h-12 w-12" // Control the size of the icon
            />
            <h3 className="text-2xl  font-semibold">Webstore</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              DIY online store builder
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Integrated payment gateway with 100+ payment modes
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Promotion and discount features are inbuilt
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Smart dashboard for reports and analysis with google analytics
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out">
            Know More →
          </button>
        </div>
        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
            <img 
              src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/product-icons/Web_Store.svg" 
              alt="Webstore Icon" 
              className="h-12 w-12" // Control the size of the icon
            />
            <h3 className="text-2xl  font-semibold">Webstore</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              DIY online store builder
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Integrated payment gateway with 100+ payment modes
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Promotion and discount features are inbuilt
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Smart dashboard for reports and analysis with google analytics
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4">
            Know More →
          </button>
        </div>
        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
            <img 
              src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/product-icons/Web_Store.svg" 
              alt="Webstore Icon" 
              className="h-12 w-12" // Control the size of the icon
            />
            <h3 className="text-2xl  font-semibold">Webstore</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              DIY online store builder
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Integrated payment gateway with 100+ payment modes
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Promotion and discount features are inbuilt
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Smart dashboard for reports and analysis with google analytics
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out ">
            Know More →
          </button>
        </div>
        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
            <img 
              src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/product-icons/Web_Store.svg" 
              alt="Webstore Icon" 
              className="h-12 w-12" // Control the size of the icon
            />
            <h3 className="text-2xl  font-semibold">Webstore</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              DIY online store builder
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Integrated payment gateway with 100+ payment modes
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Promotion and discount features are inbuilt
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Smart dashboard for reports and analysis with google analytics
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out">
            Know More →
          </button>
        </div>
        <div className="bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center">
          <div className="inline-flex  w-full  mb-4 space-x-4 ">
            <img 
              src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/product-icons/Web_Store.svg" 
              alt="Webstore Icon" 
              className="h-12 w-12" // Control the size of the icon
            />
            <h3 className="text-2xl  font-semibold">Webstore</h3>
          </div>

          <ul className="text-gray-700 space-y-5 p-3">
            <li className="flex items-center gap-2  font-medium   ">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6" // Control the size of the checkmark
              />
              DIY online store builder
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Integrated payment gateway with 100+ payment modes
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Promotion and discount features are inbuilt
            </li>
            <li className="flex items-center gap-2">
              <img 
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/pricing/correct.svg" 
                alt="Check" 
                className="h-6 w-6"
              />
              Smart dashboard for reports and analysis with google analytics
            </li>
          </ul>

          {/* Action Button */}
          <button className="text-gray-700 font-bold hover:text-indigo-800 mt-6 transition duration-150 ease-in-out mb-4">
            Know More →
          </button>
        </div>

           
          </div>
        </div>


        <div className="h-[500px] flex items-center justify-center bg-gradient-to-r from-purple-200 to-blue-100 mb-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">
      Get more with Easebuzz E-commerce Payment Gateway
    </h2>
    <div className="flex space-x-12">
      {/* Card 1 */}
      <div className="flex flex-col items-left  text-left max-w-xs">
        <div className="h-16 w-16 flex justify-center items-center rounded-full border-2 border-blue-300 mb-4">
          <img className="h-10 w-10" src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/quick.svg" alt="Quick Onboarding Icon" />
        </div>
        <p className="font-bold text-lg">Quick Onboarding</p>
        <p className="text-gray-600">Go live instantly with an online KYC onboarding process</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col  items-left  text-left max-w-xs">
        <div className="h-16 w-16 flex justify-center items-center rounded-full border-2 border-blue-300  mb-4">
          <img className="h-10 w-10" src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/instant.svg" alt="Instant Settlements Icon" />
        </div>
        <p className="font-bold text-lg">Instant Settlements</p>
        <p className="text-gray-600">Experience same-day settlements (T+0) for continuous access to financial cash flow</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col  items-left  text-left max-w-xs">
        <div className="h-16 w-16 flex justify-center items-center rounded-full border-2 border-blue-300  mb-4">
          <img className="h-10 w-10" src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/auto.svg" alt="Webhook Notification Icon" />
        </div>
        <p className="font-bold text-lg">Auto reconciliation with Webhook Notification</p>
        <p className="text-gray-600">Receive notifications on payment status and other payment events via Webhook</p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col  items-left  text-left max-w-xs">
        <div className="h-16 w-16 flex justify-center items-center rounded-full border-2 border-blue-300  mb-4">
          <img className="h-10 w-10" src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/refund.svg" alt="Instant Refunds Icon" />
        </div>
        <p className="font-bold text-lg">Instant Refunds</p>
        <p className="text-gray-600">Initiate lightning-fast refunds directly through the dashboard or via APIs</p>
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
            <p className='text-4xl font-custom font-bold'>Manage discount coupons & cashback with our E-commerce payment gateway
            </p>
            <p><span className='font-bold'>Discount coupon engine</span> to create customisable discount coupons from the dashboard, manage their validity and offer discounts based on payment mode-wise and bank/card-wise.</p>
            <p><span className='font-bold'>Brand Coupons</span> allow customers to select, manage and customise cashback coupons during the checkout process.</p>
          </div>
        </div> 
        <div className='flex flex-row-reverse w-full  justify-center gap-8 '>
          <div className='w-1/2 h-auto'>
            <img className='h-80 w-full' src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case/customization.svg" alt="" />
          </div>
          <div className=' w-1/2 h-auto  space-y-10'>
            <p className='text-4xl font-custom font-bold'>Manage discount coupons & cashback with our E-commerce payment gateway
            </p>
            <p><span className='font-bold'>Discount coupon engine</span> to create customisable discount coupons from the dashboard, manage their validity and offer discounts based on payment mode-wise and bank/card-wise.</p>
            <p><span className='font-bold'>Brand Coupons</span> allow customers to select, manage and customise cashback coupons during the checkout process.</p>
          </div>
        </div>
        
        {/* <div className='relative flex flex-col space-y-8 justify-center items-center md:mx-36'>
            {/* First Section */}
           
      </div>

      <Footer/>

      </div>
    </>
  );
}
