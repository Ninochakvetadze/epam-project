import {AboutMe} from "./components/AboutMe/index";
import Experience from "./components/Experience/Experience";
import {experienceData} from './components/Experience/ExperienceData'
import Education from "./components/Education/Education";
import { educationData } from "./components/Education/EducationData";
function App() {
  return (
    <div className="App">
      <AboutMe />
      <Education data={educationData} />
      <Experience data={experienceData} />
    </div>
  );
}

export default App;
