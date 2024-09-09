import React from 'react'
import Card from '../components/shared/socialCard'
import logo from "../assets/images/trustopay.svg"

import googlePlay from "../assets/images/googlePlay.png"
import appStore from "../assets/images/appstore.png"


export default function Footer() {
  return (
    <div className='h-auto bg-gray-100'>
        <div className='h-40'>
        <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold mb-4">Our Strategic Investors</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <img className="fill-gray-100 h-10" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/659d87bc482ac5ec161cd638_rtp%20global.webp" alt="RTP Global"  />
          <img  className="fill-gray-100 h-10" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/659d87bcc06ff07c731fe36d_paypal.svg" alt="PayPal"  />
          <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e79e3d993a5d864517d739_sequoia.svg" alt="Sequoia" className="h-10" />
          <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e47f6b6d46ece1cdaca4b7_PEAK_XV_PARTNERS_Logo_POS_RGB%201.webp" alt="Peak XV" className="h-10" />
          <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e4800275867584b4dabdee_JanCap_Logo.webp" alt="January Capital" className="h-10" />
          <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/659d87bcf58221e3a12e5ed2_Saison%20Capital.webp" alt="Saison Capital" className="h-10" />
          <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e4807b140209a7c25a91ac_FM_Logo_DustyTurquoise_positive_RGB-1.webp" alt="Fundamental" className="h-10" />
        </div>
       
      </div>
      <div className=" border-t-2  ">
      

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
    {/* <div className="flex md:flex-row items-center"> */}
    <div className=" border-gray-300 py-4 flex justify-center">
          <p className="text-gray-500">© 2024 Tazapay. All rights reserved.</p>
          <p className="text-gray-500">Privacy Policy | Terms of Service</p>
    </div>
    {/* </div> */}
  </div>
      </footer>







    </div>
        </div>
        
        
    </div>
  )
}

<footer className="bg-gray-100 py-8">
      
    </footer>
