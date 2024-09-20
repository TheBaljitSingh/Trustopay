// src/components/CaseStudy.js
import React from 'react';
import { Link } from 'react-router-dom';


const CaseStudy = ({ companyName, description, image, keyTakeaways }) => {
  return (
    <Link to={`/case-study/${companyName.replace(/\s+/g, '-').toLowerCase()}`} >
    <div    className="case-study p-6 rounded-lg shadow-lg max-w-xl   hover:cursor-pointer ">
      <img src={image} alt={`${companyName} logo`} className="mx-auto justify-center  h-40 mb-4" />
      <h2 className="text-xl font-bold mb-2">{companyName}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div>
        <h3 className="font-semibold text-lg mb-2">Key Takeaways:</h3>
        <ul className="list-disc pl-5">
          {keyTakeaways.map((takeaway, index) => (
            <li key={index} className="text-gray-600">{takeaway}</li>
          ))}
        </ul>
      </div>
    </div>
    </Link>
  );
};

export default CaseStudy;
