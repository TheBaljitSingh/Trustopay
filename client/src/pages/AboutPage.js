import React, { useState } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import manRunning from "../assets/man-running.png";

import Marquee from "react-fast-marquee";



export default function AboutPage() {
  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState("https://trustopay.vercel.app/assets/images/image.jpeg");

  // Function to handle the click on a small image
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div>
      <Header />
      
      {/* About Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-40 sm:pt-24 sm:pb-32 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                About <span className='text-[#9747ffcd]'>Trustopay</span>
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Our vision is to build a brand that could Illuminate Transactions and Eradicate Frauds
              </p>
              <p className="mt-4 text-xl text-gray-500">
                At Trustopay, we envision a future where financial transactions are not just secure but redefine the very essence of trust and transparency. Our vision is to create a payment platform that eliminates fraud and makes every transaction an experience of trust.
              </p>
            </div>
            
            {/* Image Gallery */}
            <div className="mt-10">
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="grid gap-4">
                    <div>
                      <img
                        className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                        src={selectedImage}
                        alt="Selected"
                      />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      {[
                        "https://trustopay.vercel.app/assets/images/image1.jpeg",
                        "https://trustopay.vercel.app/assets/images/image1.jpeg",
                        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                        "https://trustopay.vercel.app/assets/images/image1.jpeg"
                      ].map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer hover:opacity-75"
                          alt="gallery"
                          onClick={() => handleImageClick(src)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-100 py-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className='lg:w-1/2 flex justify-center mb-6 lg:mb-0'>
              <img 
                className='h-full w-auto max-w-full rounded-lg object-fill'
                src={manRunning}
                alt="About Trustopay" 
              />
            </div>

            {/* Text Section */}
            <div className='sm:max-w-lg lg:w-1/2 lg:pl-10'>
              <h1 className='text-4xl font-bold tracking-tight text-black sm:text-6xl'><span className='text-[#9747ffcd]'>Trustopay</span> Story</h1>
              <p className='mt-4 text-lg font-semibold text-gray-700'>
                A company people love to work for
              </p>
              <p className='mt-4 text-xl text-gray-500'>
                Our team is filled with ambitious, curious, and entrepreneurial people. We hire and nurture inquisitive, creative minds looking to flourish in a supportive and collaborative environment, certified by Flexa as a truly flexible company and rated #14 in the top 100 startups to work for in 2024 by Tempo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners */}
      <div className='h-screen py-16 '>
        <p className='text-2xl font-bold text-center'>Our Partnered Agencies</p>
        <div className='h-24  flex justify-center items-center mt-12'>
          {/* Slider component can go here */}
        <div class="relative flex overflow-x-hidden">
        <Marquee>
            
            <div className='flex gap-4 content-center '>

              <img  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6614c57a268f59685bcc80a3_lapakgaming.webp"  className='filter grayscale h-24'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba4e26ee014753902fd96_teachmint.svg" className='filter grayscale h-24 ' alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba4779392e68e4f2a3957_thrillophilia-p-500.png" className='filter grayscale h-24'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba477ebace4f078c7d42b_82E.svg" className='filter grayscale h-24'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba47741ea3221d996c9a5_indiamart.webp" className='filter grayscale h-24'  alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba47741ea3221d996c998_global-TIX-p-500.png"  className='filter grayscale h-24' alt="" />
              <img src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660ba477332e14d7a9eea9c9_culture%20holidays.webp" className='filter grayscale h-24'  alt="" />
            </div>
            
   
          </Marquee>

      
        </div>


        </div>
        <div className='flex flex-col h-2/4  justify-center items-center space-y-8 mt-36'>
          <p className='uppercase font-bold text-2xl'>OUR VISION</p>
          <p className='text-lg text-center text-gray-600 w-[32rem]'>
            We envision a future where every online transaction is secure, transparent, and worry-free
          </p>
          <div className='flex flex-wrap justify-center gap-4 mt-4'>
            {[
              "Trust & Transparency",
              "Security & Innovation",
              "Customer-Centricity",
              "Fairness & Impartiality"
            ].map((vision, index) => (
              <div key={index} className='bg-[#9747FF] w-48 h-24 rounded-md flex items-center justify-center text-white text-center'>
                {vision}
              </div>
            ))}
          </div>
        </div>
        </div>
        
        <div className="h-[400px] flex flex-col justify-center items-center">
  <p className="font-bold text-2xl text-center mb-8">Our Team</p>

  <div className="mx-auto h-[400px] flex justify-center gap-24 items-center flex-wrap">
    {[
      { name: 'Ankit Sharma', role: 'Heading Strategies', imgSrc: 'https://trustopay.vercel.app/assets/images/our%20team/As.png' },
      { name: 'Jainish Gupta', role: 'Heading Technology', imgSrc: 'https://trustopay.vercel.app/assets/images/our%20team/Js.png' },
      { name: 'Utkarsh Mishra', role: 'Operations and Finance', imgSrc: 'https://trustopay.vercel.app/assets/images/our%20team/Us.png' },
      { name: 'Sunish Gupta', role: 'Heading Banking', imgSrc: 'https://trustopay.vercel.app/assets/images/our%20team/sg.png' }
    ].map((member) => (
      <div key={member.name} className="relative group w-48 h-64 bg-white shadow-lg rounded-md overflow-hidden hover:cursor-pointer">
        <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gray-800 bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-bold text-white">{member.name}</p>
          <p className="text-sm text-white">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
  
</div>
<div className='h-50 w-full flex justify-center items-center '>
    <div className='flex flex-col h-2/4  justify-center items-center space-y-8 '>
          <p className='uppercase font-bold text-2xl'>Our Approach</p>
          <p className='text-lg text-center text-gray-600 w-[34rem]'>
          we ensure a secure transaction and protect user data from any fraud 
          </p>
          <div className='flex flex-wrap justify-center gap-4 mt-4'>
           

          <div className="flex justify-around gap-8 p-8">
      <div className="bg-[#9747FF] w-1/4 h-48 rounded-md flex flex-col items-center justify-center text-white text-center p-4 shadow-md">
        <p className="font-bold mb-2">Customer Focus</p>
        <p>Lorem ipsum dolor sit amet consectetur. Integer scelerisque ac velit neque.</p>
      </div>

      <div className="bg-[#9747FF] w-1/4 h-48 rounded-md flex flex-col items-center justify-center text-white text-center p-4 shadow-md">
        <p className="font-bold mb-2">Community</p>
        <p>Lorem ipsum dolor sit amet consectetur. Integer scelerisque ac velit neque.</p>
      </div>

      <div className="bg-[#9747FF] w-1/4 h-48 rounded-md flex flex-col items-center justify-center text-white text-center p-4 shadow-md">
        <p className="font-bold mb-2">Social Responsibility</p>
        <p>Lorem ipsum dolor sit amet consectetur. Integer scelerisque ac velit neque.</p>
      </div>
    </div>


          </div>
        </div>

  </div>
  {/* <div className='h-90 w-full'> */}
  <div className="max-w-8xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">People who have used Trustopay for their Payment Collection</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border-2 rounded-lg p-6 shadow-sm flex-col">
          <div className="flex items-center mb-4 ">
            <span className="text-green-500 text-xl">★★★★★</span>
            <p className="ml-2 font-bold">For Safeguarding funds</p>
          </div>
          <p className="text-gray-700 mb-4">Trustopay made buying a logo stress-free. My funds were secured until I received the perfect design. A game-changer for safe transactions!</p>
          <div className="flex items-center">
            <img src="https://trustopay.vercel.app/assets/images/our%20team/As.png" alt="Harsh Shinde" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-bold">Harsh Shinde</p>
              <p className="text-gray-500">Freelancer | Graphic Design</p>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-green-500 text-xl">★★★★★</span>
            <p className="ml-2 font-bold">For selling secondhand laptop</p>
          </div>
          <p className="text-gray-700 mb-4">Sold my laptop hassle-free with Trustopay. The buyer felt secure, and I got paid promptly. Trustopay is my go-to for secure transactions.</p>
          <div className="flex items-center">
            <img src="https://trustopay.vercel.app/assets/images/our%20team/Js.png" alt="Arpita Pal" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-bold">Arpita Pal</p>
              <p className="text-gray-500">Studying | OLX User</p>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-green-500 text-xl">★★★★★</span>
            <p className="ml-2 font-bold">My go-to platform for safety</p>
          </div>
          <p className="text-gray-700 mb-4">Trustopay gave my earphones a new owner without worries. The buyer felt confident, and I received my payment securely. A win-win!</p>
          <div className="flex items-center">
            <img src="https://trustopay.vercel.app/assets/images/our%20team/Us.png" alt="Arpit Sharma" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-bold">Arpit Sharma</p>
              <p className="text-gray-500">Teacher | OLX User</p>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-green-500 text-xl">★★★★★</span>
            <p className="ml-2 font-bold">I can honestly say, I’ve enjoyed</p>
          </div>
          <p className="text-gray-700 mb-4">Trustopay made buying a logo stress-free. My funds were secured until I received the perfect design. A game-changer for safe transactions!</p>
          <div className="flex items-center">
            <img src="https://trustopay.vercel.app/assets/images/our%20team/sg.png" alt="Gaurav Bariya" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-bold">Gaurav Bariya</p>
              <p className="text-gray-500">Freelancer | SEO Specialist</p>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-green-500 text-xl">★★★★★</span>
            <p className="ml-2 font-bold">10/10 would recommend</p>
          </div>
          <p className="text-gray-700 mb-4">Trustopay made buying a logo stress-free. My funds were secured until I received the perfect design. A game-changer for safe transactions!</p>
          <div className="flex items-center">
            <img src="https://trustopay.vercel.app/assets/images/our%20team/sg.png" alt="Vishal Singh" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-bold">Vishal Singh</p>
              <p className="text-gray-500">Manager | Parul University</p>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-green-500 text-xl">★★★★★</span>
            <p className="ml-2 font-bold">Creating a win-win for us</p>
          </div>
          <p className="text-gray-700 mb-4">Trustopay made buying a logo stress-free. My funds were secured until I received the perfect design. A game-changer for safe transactions!</p>
          <div className="flex items-center">
            <img src="https://trustopay.vercel.app/assets/images/our%20team/sg.png" alt="Vijay Soni" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-bold">Vijay Soni</p>
              <p className="text-gray-500">Art Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </div>


        
     

      <Footer />
    </div>
  );
}
