import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import AboutMe from '../AboutMe/AboutMe';
import Timeline from '../Timeline/Timeline';
import { ContactUs } from '../Contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { scrollTo } from '../../../Utils/window.utils';
function App() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);
  return (
    <div className="App h-full w-full px-5 lg:px-auto scroll-smooth">
      <div onClick={() => scrollTo('#header')} className={showScrollTopButton ? 'scroll-top-button' : 'hidden'}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Timeline />
      <ContactUs />
    </div>
  );
}

export default App;

