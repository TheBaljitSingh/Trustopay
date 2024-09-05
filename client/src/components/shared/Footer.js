import React from 'react';
import twitterImg from "../../assets/images/twitter.svg";
import youtubeImg from "../../assets/images/youtube.svg";
import linkedinImg from "../../assets/images/linkedin.svg";

import logo from "../../assets/images/trustopay.svg";

import googlePlay from "../../assets/images/googlePlay.png";
import appStore from "../../assets/images/appstore.png";

import Card from './socialCard';

function Footer() {
  return (
    <footer className="border-t-2">
      <div className="bg-gray-100">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className='text-gray-800 flex flex-row justify-center items-center gap-4'>
              <div className='flex flex-col'>
                <p className="font-semibold">Download Trustopay</p>
                <p className='font-semibold'>From Anywhere</p>
              </div>
              <div className="flex space-x-4">
                <img src={googlePlay} alt="Download on Play Store" className="w-24 hover:cursor-pointer" />
                <img src={appStore} alt="Download on App Store" className="w-24 hover:cursor-pointer" />
              </div>
            </div>

            <Card />
          </div>
          <div className="md:flex md:justify-between mt-4">
            <div className="mb-6 md:mb-0 space-y-2">
              <a href="/#" className="flex items-center">
                <img src={logo} className="h-8 me-3" alt="Trustopay Logo" />
              </a>
              <p className='text-gray-800 '>Your Shield for Secure Online Transactions.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:grid-cols-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Primary Pages</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/home" className="hover:underline">Home</a></li>
                  <li className="mb-4"><a href="/how-it-works" className="hover:underline">How It Works</a></li>
                  <li className="mb-4"><a href="/features" className="hover:underline">Features</a></li>
                  <li><a href="/pricing" className="hover:underline">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">About Us</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/company-overview" className="hover:underline">Company Overview</a></li>
                  <li className="mb-4"><a href="/team" className="hover:underline">Team</a></li>
                  <li className="mb-4"><a href="/careers" className="hover:underline">Careers</a></li>
                  <li><a href="/our-mission" className="hover:underline">Our Mission</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Payment Protection</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/buyers-protection" className="hover:underline">Buyers Protection</a></li>
                  <li><a href="/sellers-protection" className="hover:underline">Sellers Protection</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/case-studies" className="hover:underline">Case Studies</a></li>
                  <li className="mb-4"><a href="/faqs" className="hover:underline">FAQs</a></li>
                  <li><a href="/blogs" className="hover:underline">Blogs</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Support</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/contact-us" className="hover:underline">Contact Us</a></li>
                  <li className="mb-4"><a href="/help-center" className="hover:underline">Help Center</a></li>
                  <li><a href="/technical-support" className="hover:underline">Technical Support</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4"><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
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
      </div>
    </footer>
  );
}

export default Footer;
