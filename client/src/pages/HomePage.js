import React from 'react'
import Header from '../components/shared/Header'
import Footer from "../components/shared/Footer"


import Section1 from "../components/Homepage/Section1"
import Section2 from '../components/Homepage/Section2'
import Section3 from "../components/Homepage/Section3"
import Section4 from "../components/Homepage/Section4"
import Section5 from "../components/Homepage/Section5"
import Section6 from "../components/Homepage/Section6"
import Section7 from "../components/Homepage/Section7"
import ContactPopup from '../utils/ContactPopup'


export default function HomePage() {

 
  return(
    <>
      <Header/>
      <ContactPopup/>

    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>

    <Footer/>

    </>

  )
  




  // const data = {
  //   title: "FAQ (Frequently Asked Questions)",
  //   rows: [
  //     {
  //       title: "how to use trustopay application ?",
  //       content: "Lorem ipsum dolor sit amet, consectetur "
  //     },
  //     {
  //       title: "Why should i use trustopay application ?",
  //       content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
  //     },
  //     {
  //       title: "how to use trustopay application ?",
  //       content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
  //     },
  //     {
  //       title: "how to use trustopay application ?",
  //       content: "v1.0.5 download from playstore"
  //     }]
  // }
  
  // const { ref: cardRef1, inView: inView1 } = useInView({ triggerOnce: false });
  // const { ref: cardRef2, inView: inView2 } = useInView({ triggerOnce: false});
  // const { ref: cardRef3, inView: inView3 } = useInView({ triggerOnce: false });
  // const { ref: cardRef4, inView: inView4 } = useInView({ triggerOnce: false });


//   return (
//     <div className='bg-[#FAFAFA] ' >
//       <Header/>
      
// {/* first section       */}
//     <div class="h-screen flex flex-col md:flex-row  items-center px-8  ml-36">
//   {/* <!-- Left Side Content --> */}
//   <div class="flex-1 w-1/2 space-y-6 justify-center ml-8  transform -translate-x-12 -translate-y-24">
//     <h1 class="text-5xl font-bold text-[#623F92]">
//       Secure Your Payments <br /> Grow Your Business
//     </h1>
//     <p class="text-gray-800 text-xl">
//       India’s Leading Escrow Platform For B2C and B2B Transaction.
//     </p>
//     <div class="flex items-center space-x-4">
//       {/* <img src="" alt="Partnered Agencies" class="h-16"/> */}
//       <div className='flex items-center space-x-[-20px]'>
//         <img src={person1} className='w-16 h-16 rounded-full object-cover' alt="" />
//         <img src={person2} className='w-16 h-16 rounded-full object-cover' alt="" />
//         <img src={person3} className='w-16 h-16 rounded-full object-cover' alt="" />
//       </div>


//       <div>
//         <p class="text-xl font-bold text-bluee">40+</p>
//         <p class="text-gray-600">Partnered agencies</p>
//       </div>
//     </div>
//       <p className="text-gray-600 text-md flex items-center ">
//         <PiBank size={20} className="mr-2" />
//         Your Money Is In RBI Licensed Bank
//       </p>

//     <div class="flex space-x-4 mt-4">
//       <a href="#">
//         <img src={googlePlay} alt="Get it on Google Play" class="h-10"/>
//       </a>
//       <a href="#">
//         <img src={appStore} alt="Download on the App Store" class="h-10"/>
//       </a>
//     </div>
//   </div>
  
//   {/* <!-- Right Side Image --> */}
//   <div class="w-1/2 mb-24 mt-8 md:mt-0 md:flex-1 flex justify-center mr-12">
//   <div class="relative flex justify-center items-center">
//     {/* <!-- Background Circle --> */}
//     <div class="absolute bg-red-500 rounded-full" styles="width: 80%; height: 80%;"></div>
//     <style>
//             {`

//             @keyframes floating {
//                 0% { transform: translate(0,  0px); }
//                 50%  { transform: translate(0, 15px); }
//                 100%   { transform: translate(0, -0px); }    
//             }

//             .animated-image{
//             animation: floating 3s infinite ease-in-out
//             }
//             `}
//         </style>
      
//     {/* <!-- Animated Floating Mobile Mockup --> */}
//     <div class="animated-image relative mx-auto border-gray-800 dark:border-gray-800 mb-4 bg-gray-800 border-[11px] rounded-[2.5rem] h-[500px] w-[250px]">
//       <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
//       <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
//       <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[13px] top-[178px] rounded-s-lg"></div>
//       <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[14px] top-[142px] rounded-e-lg"></div>
//       <div class="rounded-[2rem] overflow-hidden w-[232px] h-[472px] bg-white dark:bg-gray-800">
//         <img src={tpHome} class="block w-[232px] h-[472px]" alt="tpHome"/>
//         {/* https://s3-alpha-sig.figma.com/img/c4c2/6663/641a3c4fa61c7c6850177474455258f0?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKBj3-0QgwzGDSvWdQuFb1hEUZOdFiKJjIZuSMsRbkHm7-YHbgkZhU27MrmnOwu7Om5OrMbdqCia91WqstWS74thLey0s2t-wPzOZaQPJeobM9SB06IuyetTVnOiaRJ4LTxcX4C1naRtjaDdqvYoOssyDGh63i8SDtF5Ly-pZ9y7~0ofZLO63QrE~wWvGSxY8DYgOb0TlXWvg0rl5dC3EhU3La1oa9MNK6xVVYb4OqJvRRdhz8fpzx8GgDBpBpl08m~zOUQUIMDEMC63vWMJU2f4KBAtqoSH2z0lKezYnxWozX3BASV3ri9X7tyNaRrfVAFRvS2rRvNqUI8SgsMIHg__ */}
//       </div>
//     </div>
//   </div>
// </div>


// </div>

// {/* <div className='h-40 p-2 bg-[#FFFFFF] '>
//         <p className='text-2xl font-bold text-center'>Our Partnered Agencies</p>
//         <div className='h-12 flex justify-center items-center mt-12 '>
//           {/* Slider component can go here */}
//         <div class="relative flex overflow-x-hidden">
//           <div class="py-12 animate-marquee whitespace-nowrap flex flex-row gap-8 justify-center items-center">
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Articulate%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/vihang-removebg-preview%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/assimulate-removebg-preview%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4  "><img  src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Mobilunity-removebg-preview%20(1)%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/creative_swatch%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Narraoone-removebg-preview%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Nextdev-removebg-preview%202.png" className='h-14 w-36 object-contain' alt="" /></span>


//           </div>

//           <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row justify-center items-center gap-8">
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Articulate%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/vihang-removebg-preview%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/assimulate-removebg-preview%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4  "><img  src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Mobilunity-removebg-preview%20(1)%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/creative_swatch%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Narraoone-removebg-preview%202.png" className='h-14 w-36 object-contain' alt="" /></span>
//             <span class="text-xl mx-4"><img src="https://trustopay.vercel.app/assets/images/partnered%20agencies/Nextdev-removebg-preview%202.png" className='h-14 w-36 object-contain' alt="" /></span>

//           </div>
//         </div>


//         </div>
        
// </div> */}

// <div className="h-screen  sm:max-w-7xl mx-auto px-4 transform translate-y-24">
//   {/* Section Title */}
//   <div className="text-center mb-12">
//     {/* <p className="text-indigo-600 font-semibold mb-2">OUR SERVICES</p> */}
//     <h2 className="text-4xl text-indigo-600 font-bold">
//       Our Services
//     </h2>
//   </div>

//   {/* Cards Container */}
//   <div className="grid grid-cols-1 md:max-w-4xl md:grid-cols-2 gap-8 justify-items-center mx-auto">
//     {/* Card 1 */}
//     <motion.div
//       key="card-1"
//       ref={cardRef1}
//       className="flex flex-col items-center  p-6 border-2 bg-gray-50  rounded-xl max-w-sm"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 20 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ scale: 1.05 }}
//     >
//       <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#9747FFb1] rounded-full">
//         <img
//           src={s1}
//           alt="Transaction Icon"
//           className="w-8 h-8"
//         />
//       </div>
//       <h3 className="text-lg font-semibold text-gray-800 mb-2">
//         Secure Escrow
//       </h3>
//       <p className="text-gray-600 text-center">
//         Money held safely until both parties fulfill obligations.
//       </p>
//     </motion.div>

//     {/* Card 2 */}
//     <motion.div
//       key="card-2"
//       ref={cardRef2}
//       className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border-2 max-w-sm"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ scale: 1.05 }}
//     >
//       <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#9747FFb1] rounded-full">
//         <img
//           src={s2}
//           alt="Features Icon"
//           className="w-8 h-8"
//         />
        
//       </div>
//       <h3 className="text-lg font-semibold text-gray-800 mb-2">
//         Dispute Resolution
//       </h3>
//       <p className="text-gray-600 text-center">
//         Fair and fast resolution of disagreements.
//       </p>
//     </motion.div>

//     {/* Card 3 */}
//     <motion.div
//       key="card-3"
//       ref={cardRef3}
//       className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border-2 max-w-sm"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
//       transition={{ duration: 1.5 }}
//       whileHover={{ scale: 1.05 }}
//     >
//       <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#9747FFb1] rounded-full">
//         <img
//           src={s3}
//           alt="Investment Icon"
//           className="w-8 h-8"
//         />
//       </div>
//       <h3 className="text-lg font-semibold text-gray-800 mb-2">
//         Project Management
//       </h3>
//       <p className="text-gray-600 text-center">
//         Tools to streamline collaboration and track progress.
//       </p>
//     </motion.div>

//     {/* Card 4 */}
//     <motion.div
//       key="card-4"
//       ref={cardRef4}
//       className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border-2 max-w-sm"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 20 }}
//       transition={{ duration: 1.5 }}
//       whileHover={{ scale: 1.05 }}
//     >
//       <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#9747ffb1] rounded-full">
//         <img
//           src={s4}
//           alt="Payment Icon"
//           className="w-8 h-8"
//         />
//       </div>
//       <h3 className="text-lg font-semibold text-gray-800 mb-2">
//         Secure Payments
//       </h3>
//       <p className="text-gray-600 text-center">
//         Advanced encryption and fraud prevention, clear contracts and user agreements.
//       </p>
//     </motion.div>
//   </div>
// </div>





// {/* second section - have to fixed marque item*/}




// {/* third section */}

// {/* have to fix the alignment of horizontal line */}
// {/* <div className='h-50'> */}




// <div class="flex flex-col items-center space-y-4">
//   {/* <!-- Step Indicator --> */}
//   <h2 className="text-3xl font-semibold text-purple-700 mb-12">Trustopay Process Explained</h2>

//   <div class="flex items-center justify-center space-x-4">
//     {/* <!-- Step 1 --> */}
//     <div class="flex flex-col items-center space-y-2">
//       <div class="flex items-center justify-center w-12 h-12 bg-purple-600 text-white font-bold rounded-full">
//         1
//       </div>
//       {/* <span class="font-medium text-gray-800">Step 1</span> */}
//       <h3 class="text-lg font-semibold text-gray-800 text-center">Create Transaction</h3>
//       <p class="text-gray-600 text-left w-3/4">Agree on terms and create a secure transaction on the platform

// </p>
//     </div>

//     {/* <!-- Horizontal Line --> */}
//     <hr class="w-16 border-t-2 border-purple-600" />

//     {/* <!-- Step 2 --> */}
//     <div class="flex flex-col items-center space-y-2">
//       <div class="flex items-center justify-center w-12 h-12 bg-purple-600 text-white font-bold rounded-full">
//         2
//       </div>
//       {/* <span class="font-medium text-gray-800">Step 2</span> */}
//       <h3 class="text-lg font-semibold text-gray-800 text-center">Payment</h3>
//       <p class="text-gray-600 text-left w-3/4">Buyer Deposits Funds Into Trustopay Escrow Account.</p>
//     </div>

//     {/* <!-- Horizontal Line --> */}
//     <hr class="w-16 border-t-2 border-purple-600" />
              
//     {/* <!-- Step 3 --> */}
//     <div class="flex flex-col items-center space-y-2">
//       <div class="flex items-center justify-center w-12 h-12 bg-purple-600 text-white font-bold rounded-full">
//         3
//       </div>
//       {/* <span class="font-medium text-gray-800">Step 3</span> */}
//       <h3 class="text-lg font-semibold text-gray-800 text-center ">Confirmation</h3>
//       <p class="text-gray-600 text-left w-3/4 ">Seller Completes The Work/Delivers The Product.</p>
//     </div>
//   </div>
// </div>




// {/* </div> */}
//     <div className="h-90 max-w-7xl mx-auto py-16">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

//     <FeatureCard
// img={"https://trustopay.vercel.app/assets/images/trust%201.png"}
// title={"Trustopay Process Explainded"}
// desc={"Agree on terms and create a secure transaction on the platform"}

// />
// <FeatureCard
// img={"https://trustopay.vercel.app/assets/images/guarantee%201.png"}
// title={"Trustopay Process Explainded"}
// desc={"Agree on terms and create a secure transaction on the platform"}

// />    <FeatureCard
// img={"https://trustopay.vercel.app/assets/images/end-to-end%201.png"}
// title={"Trustopay Process Explainded"}
// desc={"Agree on terms and create a secure transaction on the platform"}

// />    <FeatureCard
// img={"https://trustopay.vercel.app/assets/images/cost%20effective.png"}
// title={"Trustopay Process Explainded"}
// desc={"Agree on terms and create a secure transaction on the platform"}

// />    <FeatureCard
// img={"https://trustopay.vercel.app/assets/images/help-desk%201.png"}
// title={"Trustopay Process Explainded"}
// desc={"Agree on terms and create a secure transaction on the platform"}

// />    <FeatureCard
// img={"https://trustopay.vercel.app/assets/images/conflict-resolution%201.png"}
// title={"Trustopay Process Explainded"}
// desc={"Agree on terms and create a secure transaction on the platform"}

// />
// </div>
//     </div>


//     <div className="flex flex-col md:flex-row items-center justify-around gap-12 p-8 bg-white">
//       {/* Image Section */}
//       <div className="flex justify-center">
//         <img
//           src="https://trustopay.vercel.app/assets/images/Online%20banking%20security%20with%20password%20verification.png"
//           alt="Fraud Illustration"
//           className="w-full max-w-md"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="max-w-lg">
//         <h2 className="text-2xl font-bold text-indigo-500 mb-6">
//           Lost Trust Is Costing India Billions
//         </h2>
//         <ul className="space-y-4">
//           <li className="flex items-start">
//             <div className="mr-4">
//               <img src="path_to_icon_1.png" alt="Fraud icon" className="w-8 h-8"/>
//             </div>
//             <p className="text-gray-600">
//               E-commerce fraud losses in India exceeded ₹1750+ crore($212 million) in just the first four months of 2024.
//             </p>
//           </li>
//           <li className="flex items-start">
//             <div className="mr-4">
//               <img src="path_to_icon_2.png" alt="Consumers icon" className="w-8 h-8"/>
//             </div>
//             <p className="text-gray-600">
//               78% of consumers are wary of online transactions due to fraud and scams.
//             </p>
//           </li>
//           <li className="flex items-start">
//             <div className="mr-4">
//               <img src="path_to_icon_3.png" alt="Listings icon" className="w-8 h-8"/>
//             </div>
//             <p className="text-gray-600">
//               42% of UK users have encountered fraudulent listings.
//             </p>
//           </li>
//           <li className="flex items-start">
//             <div className="mr-4">
//               <img src="path_to_icon_4.png" alt="Costs icon" className="w-8 h-8"/>
//             </div>
//             <p className="text-gray-600">
//               Businesses lose 4X more in operational costs for every $1 lost to fraud.
//             </p>
//           </li>
//         </ul>
//       </div>
//     </div>


//     <div className='h-70   mx-auto py-16 flex justify-evenly'>
//       <div>
//         <img src={faqImg} alt="faqImg" />

//       </div>

//       <div>

//         {/* this is for faq */}
//         <Faq data={data}/>

//       </div>

//     </div>

  




//     <Footer/>
//     </div>
//   )
}
