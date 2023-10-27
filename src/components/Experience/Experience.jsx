import React from 'react';

const Experience = ({ data }) => {
  return (
    <div className="experienceList" id='experience'>
        <h1>Experience</h1>
      {data.map((experience, index) => (
        <div key={index} className="experienceList">
          <div className="experienceDetails">
            <p className="experienceCompany">{experience.info.company}</p>
            <p className="experienceDate">{experience.date}</p>
          </div>
          <div className="experienceInfo">
            <p className="experienceJob">{experience.info.job}</p>
            <p className="experienceDescription">{experience.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
