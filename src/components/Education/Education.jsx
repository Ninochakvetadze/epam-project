import React from 'react';

const Education = ({ data }) => {
  return (
    <div className="educationList">
        <h1 className='educationTitle'>Education</h1>
      {data.map((education, index) => (
        <div key={index} className="educationItem">
          <p className='educationDate' >{education.date}</p>
          <p className='educationTitle'>{education.title}</p>
          <p className='educationCompany'>{education.company}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;