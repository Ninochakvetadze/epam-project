import React from 'react';

const Box = ({ title, content }) => {
  return (
    <div className='aboutMeContainer'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div id='about'>
      <Box title="About Me" content="I am Nino Chakvetadze. The Psycho-Social Service Specialist. I worked as a Psycho-Social Service Specialist dor five years, in M. Iashvili Children's Central Hospital and each day in the hospital was the new challenge, the new adventure for me. The child and family-centered care, offered by us, decreases healthcare-related stress, supports normal development and recovery process. During these years, I've been in different activities such as the Mentorship and the Fellowship programs by the Georgian Association for the Care og Children's Health (GACCH). I, also have participated in the webinars, which were held by the Association of Child Life Proffesionals (ACLP), and I've got some certifications. For now, I try to learn new profession such as Front-end Development. I passed several courses: HTML; JavaScript/React and etc..  As all profession requires a continuous, active learning process, I work hard to improve my skills, knowledge and experience."/>
    </div>
  );
};

export {AboutMe}
