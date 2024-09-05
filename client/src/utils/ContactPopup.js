import React, { useState } from 'react';

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(false);
  };

  const handleClose = ()=>{
    setShowPopup(false);
  }
  return (
    showPopup && (
     
      <div className='  animate-fade-up animate-once animate-delay-[3000ms] fixed bottom-0 right-0 w-1/4 bg-gray-800 text-white p-6 flex items-center space-x-4 rounded-lg shadow-lg z-10'>
      {/* Close Button */}
      <button
        onClick={handleClose}
        className='absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition duration-300'
      >
        ✕
      </button>
      {/* Image Section */}
      <div>
        <img className='w-16 h-16' src="https://f.hubspotusercontent00.net/hubfs/7971209/Frame%202%20(4).png" alt="Help Icon" />
      </div>
      {/* Text Section */}
      <div className='flex flex-col'>
        <h2 className='text-lg font-semibold mb-2'>Need Help Securing Your Payment?</h2>
        <p className='text-sm mb-4'>No obligations, commitment-free</p>
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300'>
          Contact Us
        </button>
      </div>
    </div>
    )
  );
};

export default ContactPopup;

 // <div className="fixed bottom-0 right-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50">
        {/* <div className="text-sm">
          We use cookies to improve your experience. By continuing to use our site, you accept our use of cookies.
        </div>
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Accept
        </button> */}