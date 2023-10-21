import React from 'react';
import "../../assets/styles/components/global.scss"
const Education = ({ data }) => {
  return (
    <div className="educationDetails">
        <h1>Education</h1>
      {data.map((education, index) => (
        <div key={index} className="educationList">
          <div className="educationDate">
            <p >{education.dateFrom}</p>
            <span className="verticalLine"></span>
            <p >{education.dateTo}</p>
          </div>
          <div className="educationItem">
            <p className='educationTitle'>{education.title}</p>
            <p className='educationCompany'>{education.description}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Education;