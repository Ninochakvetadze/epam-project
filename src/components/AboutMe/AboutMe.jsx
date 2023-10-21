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
    <div>
      <Box title="About Me" content="I am Nino Chakvetadze, junior Front-end developer and Psycho-social Specialist
        My adventure in IT began in 2022 - I've started learning HTML/CSS courses. After that, I've completed
        JavaScript/React courses and have got some certifications. I've also completed some online courses on
        Udemy, FreeCodeCamp and LinkedIn online platform.
        Currently, I'm involved in Front-end Development course on EPAM and StrategEast.
        As my profession requires a continuous learning process, I continue to work hard to master this impressive
        possibilities, that IT technology gives to us." />
    </div>
  );
};

export {AboutMe}
