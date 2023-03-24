import './App.css';
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import AboutMe from '../AboutMe/AboutMe';
import Timeline from '../Timeline/Timeline';

function App() {
  return (
    <div className="App h-full w-full px-5 lg:px-au">
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Timeline/>
    </div>
  );
}

export default App;
