import React from 'react';

export default function Section4() {
  return (
    <div className="bg-[#F2F2F2] h-auto">
      <div className="text-center">
        <div className="flex flex-col mt-12 px-4 py-8">
          <h2 className="text-3xl font-bold mb-4 text-[#0B3747] animate-fade-up animate-once animate-ease-in">
            Custom-Fit for Every Sector
          </h2>
          <p className="text-2xl mb-2 text-[#0B3747] animate-fade-up animate-once animate-ease-in">
          Trustopay bridges payment gaps across industries from fintech to second-hand goods.
             

          </p>
          <p className="text-2xl text-[#0B3747] animate-fade-up animate-once animate-ease-in">
          Our solutions address your unique industry needs, delivering secure and seamless transactions.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center gap-24 items-center flex-wrap mt-12">
        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Fintech', p1: 'Secures digital transactions and prevents fraud.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/664c18ee5ec4dc64f5867d95_travel-hero-image-p-800.webp' },
            { title: 'Ecommerce', p1: 'Smooth, secure payments with escrow protection.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6653c7146067bfa4a450c44a_img_hero_gaming.webp' },
            { title: 'IT Agencies', p1: 'Reliable payments and project management.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/665fd296317531c068364cc8_img_saas-hero-image-p-800.webp' },
            { title: 'Digital Marketing', p1: 'Easy payment collection and financial tracking.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6687e1871d4ae1461b838b0c_img_hero-fintech.webp' },
            { title: 'Freelancers', p1: ' milestone-based payments and reduced delays.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/665fd296317531c068364cc8_img_saas-hero-image-p-800.webp' },
            { title: 'Second-hand Goods', p1: 'Trusted transactions for pre-owned items.',  imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6684dbd4df6d281e89579cdb_img_digitalproducts-hero-image-p-500.webp' }
          ].map((member) => (
            <div key={member.title} className="relative  group w-[270px] h-[310px] overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-up animate-once animate-ease-in ">
              {/* Background Image */}
              <div className="absolute rounded-xl inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${member.imgSrc})` }} />

              {/* Initial Color Overlay */}
              <div className="absolute inset-0 bg-[#612d7b] opacity-60 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />

              {/* Header Title */}
              <h2 className='absolute text-white font-bold text-2xl top-0 left-0 w-full p-6 flex flex-col justify-end z-10 opacity-100 transform origin-left duration-300 ease-in-out group-hover:scale-150'>
                {member.title}
              </h2>

              {/* Description text (initially visible with slight overlay) */}
              <div className='text-white text-xl font-semibold absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end z-10 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100'>
                <p className="text-white text-2xl">{member.p1}</p>
                {/* <p className="text-white">{member.p2}</p> */}
                {/* <p className="text-white">{member.p3}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
