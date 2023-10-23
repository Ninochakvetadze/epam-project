import React from 'react';
import skillsData from './SkillsData';

function Skills() {
  return (
    <div className="langInfo">
      <h2>Skills</h2>
      {skillsData.map((lang, index) => {
        return (
          <div key={index} className="lang">
            <div
              className="lines"
              style={{
                border: "10px solid #26C17E",
                width: lang.level + "%",
              }}>
              <span>{lang.language} </span>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { Skills };
