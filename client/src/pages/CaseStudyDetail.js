// src/pages/CaseStudyDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import caseStudies from '../data/caseStudies';
import Header from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCircleCheck, faMoneyBill, faMoneyBillTransfer, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';


const CaseStudyDetail = () => {
  const { caseStudyName } = useParams();

  const formattedCaseStudyName = caseStudyName.replaceAll('-', ' ');
  console.log(formattedCaseStudyName)

  const caseStudy = caseStudies.find(study => study.companyName.toLowerCase() === formattedCaseStudyName);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    // <div className="case-study-detail p-8 bg-gray-100 min-h-screen">
    //   <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    //     <img src={caseStudy.image} alt={`${caseStudy.companyName} logo`} className="w-full h-auto mb-4" />
    //     <h1 className="text-3xl font-bold mb-4">{caseStudy.companyName}</h1>
    //     <p className="text-gray-700 mb-6">{caseStudy.description}</p>
    //     <h3 className="font-semibold text-lg mb-2">Key Takeaways:</h3>
    //     <ul className="list-disc pl-5">
    //       {caseStudy.keyTakeaways.map((takeaway, index) => (
    //         <li key={index} className="text-gray-600">{takeaway}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    <>

      <Header />
      <div className='h-auto w-full flex flex-col px-48 pt-32 space-y-8'>
        <div className='felx justify-center items-center '>
          <h2 className='text-blue-700 text-center font-custom text-4xl'>Case Study
          </h2>
        </div>
        <div className='bg-red-400 flex items-center gap-12 px-24 rounded-xl h-60'>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/feesbuzz/case-study-parul/parul_logo.png" alt="" className='p-3' />
          </div>
          <div className='space-y-4'>
            <h2 className='text-2xl font-custom'>Parul University witnesses 60% improvement in fee collection cycle with Easebuzz payment solutions</h2>
            <p>Parul University comprises of 36 institutes with a plethora of diploma, undergraduate and post graduate programs in numerous disciplines. Offering a range of over 450 uniquely structured programs, designed to suit the career prospects of every student aspirant.</p>
          </div>


        </div>
        <div className='h-auto w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Business Objective / Problem Statement -
          </h2>

          {/* Main container */}
          <div className='flex items-start  justify-between mt-2 space-x-4'>

            {/* Left part (details) */}
            <div className='w-3/5  p-2 '>
              <p>Parul University basic requirement was to deploy a system which manages the entire administration system digitally and make education fee collection faster, and easier for students as well as the accounts department of the university.</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>

              </ul>
            </div>

            {/* Right part (image) */}
            <div className='w-2/5'>
              <img
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/feesbuzz/case-study-parul/building_image.png"
                alt="Parul University Building"
                className='p-2 w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>
        </div>


        <div className='h-auto w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Comprehensive solution-
          </h2>

          {/* Main container */}
          <div className='flex items-start  justify-between mt-2 space-x-4'>

            {/* Left part (details) */}
            <div className='w-1/2  p-2 '>
              <p>FeesBuzz helped Parul university to collect fees from students on a single link and splitting it to academic & hostel fees with automatic recocnciliation. With EasyCollect they were able to send payment links with payment reminders to all the fee defaulters.

              </p>

            </div>

            {/* Right part (image) */}
            <div className='w-1/2'>
              <p>Slices helped to split payment batch and course wise. The integration of payment gateway and payment links helped with fee collection for college events with customised & detailed description of event/activity.

              </p>

            </div>
          </div>
        </div>

        <div className='h-auto w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Product Offered-
          </h2>

          {/* Main container */}
          <div className="flex items-center justify-between px-48 mt-2 divide-x-2">

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faMoneyCheck} />
              <span className="ml-2">Product</span>
            </li>

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faMoneyBill} />
              <span className="ml-2">Product</span>
            </li>

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
              <span className="ml-2">Product</span>
            </li>

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faBagShopping} />
              <span className="ml-2">Product</span>
            </li>

          </div>


        </div>



      </div>





      <Footer />

    </>


  );
};

export default CaseStudyDetail;
