import React, { useState } from 'react';

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="animate-fade-up animate-once animate-delay-[3000ms] fixed bottom-0 right-0 w-full md:w-1/4 bg-gradient-to-r from-[#703893] to-[#3f4195] text-white p-6 flex items-center space-x-4 rounded-l-xl shadow-lg z-50 max-w-full overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition duration-300"
        >
          ✕
        </button>

        {/* Image Section */}
        <div>
          <img
            className="w-16 h-16"
            src="https://f.hubspotusercontent00.net/hubfs/7971209/Frame%202%20(4).png"
            alt="Help Icon"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Need Help Securing Your Payment?</h2>
          <p className="text-sm mb-4">No obligations, commitment-free</p>
          <button className="bg-white hover:bg-gray-400 text-black font-bold py-2 px-6 rounded-full transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    )
  );
};

export default ContactPopup;
