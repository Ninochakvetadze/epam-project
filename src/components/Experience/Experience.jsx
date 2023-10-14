import React from 'react';

const Experience = ({ data }) => {
  return (
    <div className="experienceList">
        <h1 className='experienceTitle'>Experience</h1>
      {data.map((experience, index) => (
        <div key={index} className="experienceItem">
          <h3 className="experienceDate">{experience.date}</h3>
          <div className="experienceInfo">
            <h4 className="experienceCompany">{experience.info.company}</h4>
            <p className="experienceJob">{experience.info.job}</p>
            <p className="experienceDescription">{experience.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
