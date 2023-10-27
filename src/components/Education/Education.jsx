import React, { useEffect, useState } from 'react';

const Education = () => {
  const [educationData, setEducationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/education') 
      .then((response) => response.json())
      .then((data) => {
        setEducationData(data.education);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching education data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Education</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {educationData ? (
            educationData.map((edu) => (
              <li key={edu.id}>
                {edu.date} - {edu.title}
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
