// src/pages/CaseStudiesPage.js
import React from 'react';
import CaseStudy from '../components/CaseStudy';
import caseStudies from '../data/caseStudies';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';

const CaseStudiesPage = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-full overflow-hidden">
      <PageHeader />

      <div 
        style={{ 'clip-path': 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }} 
        className="flex bg-gradient-to-r from-[#703893] to-[#3f4195] h-[600px] w-full justify-center items-center"
      >
        <div className="flex justify-center items-center p-8 min-h-screen pt-36">
          <h1 className="text-5xl font-bold mb-8 text-center text-white leading-tight">
            Case Studies
          </h1>
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-12 py-12 ">
        {caseStudies.map((study, index) => (
          <CaseStudy
            key={index}
            companyName={study.companyName}
            description={study.description}
            image={study.image}
            keyTakeaways={study.keyTakeaways}
            className="hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          />
        ))}
      </div>

      <div className="h-24"></div>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
