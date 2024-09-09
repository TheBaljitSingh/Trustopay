import React from 'react';
import linkedinImg from "../../assets/images/linkedin.svg"; // Assuming you have this image
import facebookImg from "../../assets/images/twitter.svg"; // Assuming you have this image
import logo from "../../assets/images/trustopay.svg"; // Your logo

function Footer() {
  return (
    <footer className="border-t-2 max-w-full ">
      <div className="bg-gray-100 ">
        <div className="mx-auto w-full p-4 py-6 lg:py-8 ">
         

        {/* <hr className="my-4 h-1 w-full border-gray-400 rounded md:my-10 sm:mx-auto lg:my-8" /> */}

          <div className="grid grid-cols-2  md:grid-cols-5 gap-8 mx-48">
            <div className="col-span-2 md:col-span-1">
              <a href="/#" className="flex items-center">
                <img src={logo} className="h-8 mb-4" alt="Trustopay Logo" />
              </a>
              <p className="text-gray-800">Your Shield for Secure Online Transactions.</p>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Products</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4"><a href="#" className="hover:underline">Payment Gateway</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Global Business Account</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Payouts</a></li>
                <li><a href="#" className="hover:underline">Escrow</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Solutions</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4"><a href="#" className="hover:underline">Travel</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Online Gaming</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">eCommerce Platforms</a></li>
                <li><a href="#" className="hover:underline">Fintech</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4"><a href="#" className="hover:underline">FAQ</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Case Studies</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">Guides</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">About Us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4"><a href="#" className="hover:underline">Team</a></li>
                <li className="mb-4"><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Responsible Disclosure</a></li>
              </ul>
            </div>
          </div>

          <hr className="my-4 h-1 w-full border-gray-400 rounded md:my-10 sm:mx-auto lg:my-8" />


          <div className="flex justify-between items-center mx-48">
            <span className="text-sm text-gray-500">
              © 2024 <a href="https://trustopay.com/" className="hover:underline">Trustopay</a>. All Rights Reserved.
            </span>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <img src={facebookImg} alt="Facebook" className="w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <img src={linkedinImg} alt="LinkedIn" className="w-6" />
              </a>
            </div>
          </div>

          {/* Additional Footer Bottom Section */}
          <div className="mt-4 text-sm text-gray-500 text-center mx-48">
            Trustopay Innovation Ltd. is licensed by the Monetary Authority of Singapore (MAS) as a Major Payment Institution (Licence No. PS20200638), authorizing a broad range of payment services including cross-border transactions. <a href="#" className="text-blue-500 hover:underline">Licence details.</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
