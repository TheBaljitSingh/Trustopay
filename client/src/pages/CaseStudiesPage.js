// src/pages/CaseStudiesPage.js
import React from 'react';
import CaseStudy from '../components/CaseStudy';
import caseStudies from '../data/caseStudies';
import Header from '../components/shared/PageHeader';

const CaseStudiesPage = () => {
  return (
    <>
    <Header/>
    <div className="case-studies-page p-8 bg-gray-300 min-h-screen pt-36">
      <h1 className="text-3xl font-bold mb-8 text-center">Case Studies</h1>
      <div className=" grid grid-cols-2 gap-8 mx-24  "  >
        {caseStudies.map((study, index) => (
          <  CaseStudy 
          key={index}
          companyName={study.companyName}
          description={study.description}
          image={study.image}
          keyTakeaways={study.keyTakeaways}

          />
        ))}
      </div>
    </div>
        </>
  );
};

export default CaseStudiesPage;
