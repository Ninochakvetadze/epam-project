import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../Loading/Loading';


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
    <section className='educationWrapper' id='education'>
      <h2>Education</h2>
      {isLoading ? (
        <LoadingSpinner />
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
    </section>
  );
};

export default Education;
