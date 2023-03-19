import './App.css';
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import AboutMe from '../AboutMe/AboutMe';

function App() {
  return (
    <div className="App h-full w-full">
      <Navbar/>
      <Intro/>
      <AboutMe/>
    </div>
  );
}

export default App;
