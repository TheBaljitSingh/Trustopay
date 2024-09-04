import React from 'react';
import twitterImg from "../../assets/images/twitter.svg"
import youtubeImg from "../../assets/images/youtube.svg"
import linkedinImg from "../../assets/images/linkedin.svg"

import logo from "../../assets/images/trustopay.svg"

import googlePlay from "../../assets/images/googlePlay.png"
import appStore from "../../assets/images/appstore.png"

import styled from "styled-components";
import Card from './socialCard';


function Footer() {
  return (
    <footer className=" border-t-2 ">
      

      <footer className="bg-gray-100">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="flex flex-col md:flex-row items-center justify-between w-full ">
      <div className='text-gray-800 flex flex-row justify-center items-center gap-4'>
        <div className='flex flex-col'>
        <p className="font-semibold">Download Trustopay</p>
        <p className='font-semibold'>From Anyware</p>
        </div>
        <div className="flex space-x-4 ">
          <img src={googlePlay} alt="Download on Play Store" className="w-24 hover:cursor-pointer" />
          <img src={appStore} alt="Download on App Store" className="w-24 hover:cursor-pointer" />
        </div>
      </div>

 
      <Card/>
    </div>
    <div className="md:flex md:justify-between mt-4">
      <div className="mb-6 md:mb-0 space-y-2">
        <a href="/#" className="flex items-center">
          <img src={logo} className="h-8 me-3" alt="Trustopay Logo" />
        </a>
        <p className='text-gray-800'>Your Shield for Secure Online Transactions.</p>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <a href="" className="hover:underline">Trustopay</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <a href="https://github.com/themesberg/flowbite" className="hover:underline">Github</a>
            </li>
            <li>
              <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div className="flex md:flex-row items-center">
    <div className="flex-1"></div> {/* Empty flex item for left spacing */}
    <span className="text-sm text-gray-500 text-center">
        © 2024 <a href="https://trustopay.com/" className="hover:underline">Trustopay</a>. All Rights Reserved.
    </span>
    <div className="flex-1"></div> {/* Empty flex item for right spacing */}
    </div>
  </div>
</footer>







    </footer>
  );
}

export default Footer;
