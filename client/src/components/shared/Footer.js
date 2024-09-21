import React from 'react';
import linkedinImg from "../../assets/images/linkedin.svg"; // Assuming you have this image
import facebookImg from "../../assets/images/twitter.svg"; // Assuming you have this image
import logo from "../../assets/images/trustopay.svg"; // Your logo

function Footer() {
  return (
    <footer className="border-t-2 max-w-full">
  <div className="bg-gray-100 md:pt-24 ">
    <div className="mx-auto w-full p-4 py-6  lg:py-8 md:pt-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mx-auto md:mx-36">
        <div className="col-span-2 md:col-span-1 md:text-left  flex flex-col ">
          <a href="/#" className="flex items-center justify-center md:justify-start mb-4">
            <img src={logo} className="h-10" alt="Trustopay Logo" />
          </a>
          <p className="text-gray-800 text-center md:text-left">
            Your Shield for Secure Online Transactions.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Products</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-2"><a href="#" className="hover:underline">Payment Gateway</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Global Business Account</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Payouts</a></li>
            <li><a href="/product/escrow" className="hover:underline">Escrow</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Solutions</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-2"><a href="/usecases" className="hover:underline">Travel</a></li>
            <li className="mb-2"><a href="/usecases" className="hover:underline">Online Gaming</a></li>
            <li className="mb-2"><a href="/usecases" className="hover:underline">eCommerce Platforms</a></li>
            <li><a href="/usecases" className="hover:underline">Fintech</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
            <li className="mb-2"><a href="/usecases" className="hover:underline">Case Studies</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Guides</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-2"><a href="/about" className="hover:underline">Team</a></li>
            <li className="mb-2"><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li className="mb-2"><a href="/legal/privacypolicy" className="hover:underline">Responsible Disclosure</a></li>

            <li className="mb-2"><a href="/legal/privacypolicy" className="hover:underline">Privacy Policy</a></li>

          </ul>
        </div>
      </div>

      <hr className="my-4 h-1 w-full border-gray-400 rounded md:my-8 sm:mx-auto" />

      <div className="flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center mx-auto md:mx-36 text-center md:text-left ">
        <span className="text-sm  text-gray-500">
          © 2024 <a href="https://trustopay.com/" className="hover:underline">Trustopay</a>. All Rights Reserved.
        </span>
        <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-start">
          <a href="https://www.linkedin.com/company/trustopayy/" className="text-gray-500 hover:text-gray-900">
            <img src={facebookImg} alt="Facebook" className="w-6" />
          </a>
          <a href="https://www.linkedin.com/company/trustopayy/"  className="text-gray-500 hover:text-gray-900">
            <img src={linkedinImg} alt="LinkedIn" className="w-6" />
          </a>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500 md:text-center text-left  mx-auto md:mx-32">
        Trustopay Innovation Ltd. is licensed by the Monetary Authority of Singapore (MAS) as a Major Payment Institution (Licence No. PS20200638), authorizing a broad range of payment services including cross-border transactions. <a href="#" className="text-blue-500 hover:underline">Licence details.</a>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
