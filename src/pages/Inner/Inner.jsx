import React from "react";
import { AboutMe } from "../../components/AboutMe/index";
import Experience from "../../components/Experience/Experience";
import { experienceData } from '../../components/Experience/ExperienceData'
import Education from "../../components/Education/Education";
import { educationData } from "../../components/Education/EducationData";
import { feedbackData } from "../../components/Feedback";
import { Feedback } from "../../components/Feedback";
import { Timeline } from "../../components/Timeline";
import { Address } from "../../components/Address";
import { Skills } from "../../components/Skills/Skills";
import { Portfolio } from '../../components/Portfolio/Portolio'
import { BackToTopButton } from '../../components/BackToTop/BackToTop'
import Button from '../../components/Button/Button'
import '../../assets/styles/components/global.scss'
import { Panel } from "../../components/Panel/Panel"
import SkillForm from "../../features/skills/skillsForm";

function Inner() {
  const goBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="app" style={{transition: '.3s'}}>
        <Panel />
      <div className="contentContainer">
        <Button text="Home" onClick={goBackToHome} className="backHome"/>
        <AboutMe />
        <Education data={educationData} />
        <Experience data={experienceData} />
        <SkillForm />
        <Skills />
        <Portfolio />
        <Feedback data={feedbackData} />
        <Timeline />
        <Address />

      </div>
      <BackToTopButton />
    </div>
  );
}

export default Inner;
