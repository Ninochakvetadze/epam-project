import React, { useEffect, useState } from 'react';

const Education = () => {
  const [educationData, setEducationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/education') 
      .then((response) => response.json())
      .then((data) => {
        setEducationData(data.educations);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching education data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='educationWrapper'>
      <h2>Education</h2>
      {isLoading ? (
        <p>Loading...   </p>
      ) : (
        <ul className='educationList'>
          {educationData ? (
            educationData.map((edu) => (
              <li key={edu.id} className='educationItem'>
                <p className="eduDate">{edu.date}</p>
                <div className="educationDescription">
                  <p className="eduTitle">{edu.title}</p>
                  <p className="eduDiscription">{edu.discription}</p>
                </div>
              </li>
            ))
          ) : (
            <p>No education data available.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Education;
