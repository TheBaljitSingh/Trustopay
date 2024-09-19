import React, { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';
import ImageAutoSlider from "../utils/ImageAutoSlider"
import { FaAngleRight, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";





export default function AboutPage() {
  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState("https://trustopay.vercel.app/assets/images/image.jpeg");

  // Function to handle the click on a small image
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };



  const teamMembers = [
    {
      name: "Utkarsh ",
      role: "CFO ",
      imgSrc: "https://trustopay.vercel.app/assets/images/our%20team/Us.png", // replace with actual image path
    },
    {
      name: "Ankit Kumar",
      role: "CEO",
      imgSrc: "https://trustopay.vercel.app/assets/images/our%20team/As.png", // replace with actual image path
    },
    {
      name: "Ankit Kumar",
      role: "CTO & CEO",
      imgSrc: "https://trustopay.vercel.app/assets/images/our%20team/As.png", // replace with actual image path
    },
  ];

  return (
    <div className='h-90'>
      <PageHeader />

      <div style={{ 'clip-path': 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' }} className="flex bg-gradient-to-r from-[#703893] to-[#3f4195] h-[600px] w-full justify-center items-center"
      >

        <div className='flex justify-center items-center md:px-48 w-5/6 -translate-y-18'>
          <h1 className='text-4xl font-custom text-white font-semibold  leading-tight w-5/3 text-center'>Trustopay is India's Largest growing Startup solving all problem around the payments frauds through Escrow
          </h1>
        </div>


      </div>

      <div className='h-auto mb-24  px-8 md:px-48 space-y-8 flex flex-col justify-center items-center'>
        {/* Heading Section */}
        <h2 className='text-3xl font-custom text-center'>Our Gallery </h2>
        <p className='text-center text-gray-600'>
          Founded in the year 2024, Trustopay is a full-stack technology platform that has launched its operations in the year 2015. We are building an ecosystem of products and services to solve business problems around payment acceptance, payouts, and financial operations. The team at Easebuzz focuses on creating workflows that enable businesses to process digital payments and manage end-to-end financial operations through plug-and-play APIs.
        </p>
        {/* <img 
    src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/group.png" 
    alt="Easebuzz Team" 
    className="w-full md:w-5/6 rounded-lg"
  /> */}
        <div className='w-full md:w-5/6'>
          <ImageAutoSlider />
        </div>
      </div>

      {/* New section like the image */}
      <div className="w-full py-12 bg-gradient-to-r from-[#3f4195] to-[#3f4195] rounded-lg px-8 md:px-48 space-y-8">
        <div className='grid grid-cols-2 md:grid-cols-6 gap-8 text-center'>
          {/* Icon and Statistic Blocks */}
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/1.svg" alt="Calendar Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>2024</h3>
            <p className='text-white'>Founding year</p>
          </div>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/1.svg" alt="Clients Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>1,50</h3>
            <p className='text-white'>Happy clients</p>
          </div>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/1.svg" alt="API Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>10+</h3>
            <p className='text-white'>API plugins</p>
          </div>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/1.svg" alt="Transactions Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>1 k+</h3>
            <p className='text-white'>Transactions processed per day</p>
          </div>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/5.svg" alt="Money Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>$10 Bn+</h3>
            <p className='text-white'>Annual GTV</p>
          </div>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/5.svg" alt="Offices Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>2 Offices</h3>
            <p className='text-white'>Ahmedabad, Vadodara-HQ</p>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className='h-auto bg-gradient-to-b from-[#703893] to-[#3f4195] relative flex justify-center items-center py-24 px-48'>

        <div>
          <img className='absolute top-0 left-0 z-10' src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/matrix_pattern.svg" alt="" />
        </div>
        <div>
          <img className='absolute h-1/4 bottom-0 right-0 z-10 ' src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/our_mission_bg.png" alt="" />

        </div>
        <div className='flex justify-end w-1/2'>
          <img className='h-full w-full z-20' src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/tricolor_logo.png" alt="" />
        </div>
        <div className='flex w-1/2 flex-col justify-start  items-center z-20 space-y-12 text-white'>
          <div className='space-y-4'>
            <h2 className='font-custom text-4xl'>Our Vision</h2>
            <p className='font-medium' > Trustopay aims to reach a turnover of INR 5000 Crore by 2030, driven by innovation and excellence in payment solutions. We are committed to expanding our impact and redefining the payment landscape with cutting-edge technology.</p>
          </div>
          <div className=' space-y-4'>
            <h2 className='font-custom text-4xl '>Our Mission</h2>
            <p className='font-medium'>Our mission is to achieve INR 5000 Crore in turnover by 2030 through strategic growth, advanced technology, and exceptional service. We focus on building strong partnerships and delivering value to set new industry standards.</p>
          </div>
        </div>

      </div>


      <div class="flex flex-col h-[500px] md:flex-row items-center  md:items-start justify-center w-full p-12 pl-24">
      <div class="md:w-1/3 pr-8 flex flex-col justify-center  h-[400px] items-center ">
    <div class='h-1/2 flex items-start justify-center flex-col '>
      <h2 class="text-4xl font-bold mb-4">Our culture</h2>
      <p class="text-lg mb-4">
        At Trustopay, we care about making an impact that truly matters. Together, we foster a culture in which our people feel empowered to drive positive change every day.
      </p>
      <p class="text-lg">
        The culture at Trustopay is very inclusive and diverse. The innovation ethos at Trustopay empowers our employees to bring their best in solving deeper problems around the payments life cycle of varied businesses of the economy.
      </p>
    </div>
  </div>

      <div class="md:w-1/2 mt-6 md:mt-0 pr-12">
        <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/our-people-our-brand/culture-1.png" alt="Our People and Culture" class="w-full rounded-lg "/>
      </div>
    </div>



      {/* <div className='h-100  flex w-full px-48 py-24 space-x-2'>
            <div className='w-30 bg-red-400 flex flex-col items-center justify-center h-auto'>
            <h2 className='text-2xl font-custom '>Our Culture</h2>
              <p>At Easebuzz, we care about making an impact that truly matters. Together, we foster a culture in which our people feel empowered to drive positive change every day.</p>
              <p>The culture at Easebuzz is very inclusive and diverse. The innovation ethos at Easebuzz empowers our employees to bring their best in solving deeper problems around the payments life cycle of varied businesses of the economy.</p>
          
            </div>
          <div className='w-auto h-full '>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/our-people-our-brand/culture-1.png" alt="" />

          </div>
          
        </div>
         */}


<div className="w-full flex flex-col h-auto px-12 md:px-28 py-12 bg-white text-center">
  <div className="mb-8 flex justify-center">
    <h2 className="font-custom text-3xl md:text-4xl font-semibold leading-tight text-gray-900 md:w-1/2 ">
      Backed by some of the best investors in the business
    </h2>
  </div>

  <div className="flex flex-col md:flex-row w-full mt-6">
    <div className="flex w-full md:w-1/2 justify-center items-center px-4 md:px-12">
      <p className="text-lg leading-relaxed text-start text-gray-700">
        We are backed by Fintech world's most influential investors. Their encouragement is driving the innovations at Easebuzz and enabling us every day to solve the complex business use cases around payments and financial operations across varied sectors of the Indian Economy.
      </p>
    </div>

    <div className="flex flex-col w-full md:w-1/2 justify-between mt-8 md:mt-0 md:pr-24">
      <div className="flex justify-center md:justify-between space-x-6 mb-6">
        <div className="rounded-full w-24 h-24 border-2 border-gray-300 flex items-center justify-center">
          {/* Investor 1 Image */}
          <img src="https://planify-main.s3.amazonaws.com/media/blog/images/Funding-01_AJbxH1m.jpg" alt="Investor 1" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="rounded-full w-24 h-24 border-2 border-gray-300 flex items-center justify-center">
          {/* Investor 2 Image */}
          <img src="https://planify-main.s3.amazonaws.com/media/blog/images/Funding-01_AJbxH1m.jpg" alt="Investor 2" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="rounded-full w-24 h-24 border-2 border-gray-300 flex items-center justify-center">
          {/* Investor 3 Image */}
          <img src="https://planify-main.s3.amazonaws.com/media/blog/images/Funding-01_AJbxH1m.jpg" alt="Investor 3" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="rounded-full w-24 h-24 border-2 border-gray-300 flex items-center justify-center mr-4">
            {/* Investor 4 Image */}
            <img src="https://trustopay.vercel.app/assets/images/our%20team/Us.png" alt="Investor 4" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="font-medium text-gray-800">Amrish Rau</p>
        </div>

        <div className="flex items-center">
          <div className="rounded-full w-24 h-24 border-2 border-gray-300 flex items-center justify-center mr-4">
            {/* Investor 5 Image */}
            <img src="https://trustopay.vercel.app/assets/images/our%20team/Us.png" alt="Investor 5" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="font-medium text-gray-800">Jitendra Gupta</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="w-full h-auto px-12 py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Meet our leadership team</h2>
        <div className="flex justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:cursor-pointer rounded-lg shadow-lg w-72 bg-gray-50 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                className="w-full h-72 object-cover rounded-t-lg"
                src={member.imgSrc}
                alt={`${member.name}`}
              />
              <div className="bg-[#041440] text-white w-full p-4 flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
                <div className="flex space-x-4">
                  <FaLinkedin className="text-xl hover:text-gray-300 hover:cursor-pointer transition duration-200" />
                  <FaTwitter className="text-xl hover:text-gray-300 hover:cursor-pointer transition duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


 






      <div className='h-auto flex items-center justify-center py-24'>
        {/* Image and content container */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>

          {/* Image section */}
          <div>
            <img
              src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/PS.svg"
              alt="Payment Solutions Illustration"
              className="w-full max-w-sm mx-auto"
            />
          </div>

          {/* Text and button section */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Payment solutions that are easy to understand, and simple to use
            </h2>

            {/* Feature List */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              <ul className='text-lg text-gray-700 space-y-2'>
                <li className='flex items-center space-x-4'>
                  <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
                  <p>Quick onboarding</p>
                </li>
                <li className='flex items-center space-x-4'>
                  <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
                  <p>Quick onboarding</p>
                  <p>User Testimonials and Case Studies:</p> 
                </li>
                <li className='flex items-center space-x-4'>
                  <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
                  <p>Highlight Unique Features</p> 
                </li>
              </ul>
              <ul className='text-lg text-gray-700 space-y-2'>
                <li className='flex items-center space-x-4'>
                  <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
                  <p>Quick onboarding</p>
                </li>
                <li className='flex items-center space-x-4'>
                  <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
                  <p>Quick onboarding</p>
                  <p>Engage with Target Audience</p> 
                </li>
                <li className='flex items-center space-x-4'>
                  <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
                  <p>Offer Incentives</p> 
                </li>
              </ul>
            </div>

            {/* Sign Up Button */}
            <div>
              <button className='inline-flex items-center gap-1 bg-gradient-to-b from-[#703893] to-[#3f4195] hover:bg-[#703893] text-white py-3 px-8 rounded-xl text-lg  transition'>
                Download Our App <span><FaAngleRight /></span>

              </button>
            </div>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
}
