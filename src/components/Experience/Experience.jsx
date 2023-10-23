import React from 'react';
import "../../assets/styles/components/global.scss";


const Experience = ({ data }) => {
  return (
    <div className="experienceList">
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
