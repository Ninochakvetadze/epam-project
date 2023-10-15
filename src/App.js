import {Panel} from "./components/Panel";
import { AboutMe } from "./components/AboutMe/index";
import Experience from "./components/Experience/Experience";
import { experienceData } from './components/Experience/ExperienceData'
import Education from "./components/Education/Education";
import { educationData } from "./components/Education/EducationData";
import { feedbackData } from "./components/Feedback";
import { Feedback } from "./components/Feedback";
import { Timeline } from "./components/Timeline";
import { Address } from "./components/Address";


function App() {
  return (
    <div className="App">
      <Panel />
      <AboutMe />
      <Education data={educationData} />
      <Experience data={experienceData} />
      <Feedback data={feedbackData} />
      <Timeline />
      <Address />
    </div>
  );
}

export default App;
