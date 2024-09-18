import React, { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';
import ImageAutoSlider from "../utils/ImageAutoSlider"
import { FaAngleRight, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Blog() {


    const blogPosts = [
        {
          title: 'Blog Post 1',
          description: 'This is a description for blog post 1.',
          imageUrl: 'https://i.gadgets360cdn.com/large/galaxy_S24_plus_samsung_1726634293128.jpg?downsize=950:*',
        },
        {
          title: 'Blog Post 2',
          description: 'This is a description for blog post 2.',
          imageUrl: 'https://i.gadgets360cdn.com/large/galaxy_S24_plus_samsung_1726634293128.jpg?downsize=950:*',
        },
        {
          title: 'Blog Post 3',
          description: 'This is a description for blog post 3.',
          imageUrl: 'https://i.gadgets360cdn.com/large/galaxy_S24_plus_samsung_1726634293128.jpg?downsize=950:*',
        },
       
      ];

      const featuredPost = {
        title: 'Featured Blog Post',
        description: 'This is a detailed description of the featured blog post. It provides insights and valuable information on the topic discussed.',
        imageUrl: 'https://i.gadgets360cdn.com/large/discord_end_to_end_1726643332249.jpg?downsize=950:*',
        buttonText: 'Read More',
      };

  return (
    <>
     <div className='h-90'>
      <PageHeader />

      <div style={{ 'clip-path': 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)' }} className="flex bg-gradient-to-r from-[#703893] to-[#3f4195] h-[600px] w-full justify-center items-center"
      >

        <div className='flex justify-center items-center md:px-48 w-5/6 -translate-y-18'>
          <h1 className='text-4xl font-custom text-white font-semibold  leading-tight w-5/3 text-center'>Blog Posts by <span className='underline  underline-offset-8'>Trustopay</span>
          </h1>
        </div>


      </div>



      <div className='h-auto mb-24  px-8 md:px-48 space-y-8 flex flex-col justify-center items-center'>

      <div className="container mx-auto p-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <img
          src={featuredPost.imageUrl}
          alt={featuredPost.title}
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
          <p className="text-gray-700 mb-6">{featuredPost.description}</p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {featuredPost.buttonText}
          </a>
        </div>
      </div>
    </div>
    </div>

      <div className='h-auto mb-24  px-8 md:px-48 space-y-8 flex flex-col justify-center items-center'>
        {/* Heading Section */}

        <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Blog Posts</h2>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
      
     
      </div>





      <Footer />
    </div>
    </>
  )
}
