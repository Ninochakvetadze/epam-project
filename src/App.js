import {AboutMe} from "./components/AboutMe/index";
import Experience from "./components/Experience/Experience";
import {experienceData} from './components/Experience/ExperienceData'
import Education from "./components/Education/Education";
import { educationData } from "./components/Education/EducationData";
import { feedbackData } from "./components/Feedback";
import { Feedback } from "./components/Feedback";

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Education data={educationData} />
      <Experience data={experienceData} />
      <Feedback data={feedbackData} />
    </div>
  );
}

export default App;
