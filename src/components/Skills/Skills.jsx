import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSkillsData } from '../../features/skills/SkillsAction';
import SkillForm from '../../features/skills/skillsForm';

function Skills() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkillsData());
  }, [dispatch]);

  const [skillsData, setSkillsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSkillFormOpen, setIsSkillFormOpen] = useState(false);

  useEffect(() => {
    fetch('/api/skills')
      .then((response) => response.json())
      .then((data) => {
        setSkillsData(data.skills);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching skills data:', error);
        setIsLoading(false);
      });
  }, []);

  const toggleSkillForm = () => {
    setIsSkillFormOpen(!isSkillFormOpen);
  };
  const updateSkillsData = (newSkillsData) => {
    setSkillsData(newSkillsData);
  };
  return (
    <section className="langInfo">
      <h2>Skills</h2>
      <button onClick={toggleSkillForm} className='openForm'>Open Edit</button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='skillsContainer'>
          <div className="skillsFormWrapper">
          {isSkillFormOpen && <SkillForm updateSkillsData={updateSkillsData} />}
          </div>
          {skillsData.length > 0 ? (
            skillsData.map((skill, index) => (
              <div key={index} className="lang">
                <div
                  className="lines"
                  style={{
                    border: "10px solid #26C17E",
                    width: skill.level + "%",
                  }}
                >
                  
                </div>               
              <span className='skillsDescription'>{skill.name} - {skill.level}%</span>

              </div>
            ))
          ) : (
            <p>No skills data available.</p>
          )}
        </div>
      )}

        
    </section>
  );
}

export { Skills };
