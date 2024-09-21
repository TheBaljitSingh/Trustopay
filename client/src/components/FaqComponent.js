import React from 'react';
import Faq from 'react-faq-component';
import { IoIosArrowDown } from "react-icons/io";

const FaqComponent = () => {

  const data = {
    rows: [
      {
        title: "What is Trustopay?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        title: "How Trustopay will help you?",
        content: "Phasellus bibendum ipsum at viverra egestas."
      },
      {
        title: "How Trustopay is Different from other platform?",
        content: "Donec tempor tellus sed cursus finibus."
      },
      {
        title: "What are the payout options for receiving my payments?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]
  };

  const styles = {
    bgColor: 'white',
    titleTextColor: "#703893",
    rowTitleColor: "#000000",
    rowContentColor: "#241512",
    arrowColor: "#0f3c53",
    rowTitleTextSize: '18px',
    rowContentTextSize: '16px',
    titleTextSize: '24px'
  };

  const config = {
    animate: true,
    arrowIcon: <IoIosArrowDown />,
    openOnStart: 0,
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:space-x-12 md:mx-36 ">
        <div className="lg:w-1/3 mb-8 lg:mb-0 flex flex-col-reverse md:flex-col gap-y-8 md:gap-y-0">
          <h2 className="text-[#000000] flex text-3xl font-bold mb-4 ">Frequently Asked Questions</h2>
          <div className='flex justify-center lg:justify-start'>
            {/* <button
              type="button"
              className="py-3 px-4 flex items-center gap-x-2 text-sm font-medium rounded-3xl border bg-[#8965e4] text-white shadow-lg hover:bg-[#703893] border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8965e4] transition"
            >
              Book a Demo
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button> */}
          </div>
        </div>

        <div className="lg:w-2/3  ">
          <Faq styles={styles} config={config} data={data} />
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
