import {Panel} from "../../components/Panel";
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
import '../../assets/styles/components/global.scss'

function Inner() {
  return (
    <div className="app">
      {/* <div className="innerNav">
      <Panel />  
      </div> */}
      <div className="contentContainer">
        <AboutMe />
        <Education data={educationData} />
        <Experience data={experienceData} />
        <Skills />
        <Portfolio />
        <Feedback data={feedbackData} />
        <Timeline />
        <Address />
      </div>
      
    </div>
  );
}

export {Inner};