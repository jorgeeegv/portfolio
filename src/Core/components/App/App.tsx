import './App.css';
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import AboutMe from '../AboutMe/AboutMe';
import Timeline from '../Timeline/Timeline';
import { ContactUs } from '../Contact/Contact';

function App() {
  return (
    <div className="App h-full w-full px-5 lg:px-auto scroll-smooth">
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Timeline/>
      <ContactUs/>
    </div>
  );
}

export default App;
