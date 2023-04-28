import { useEffect, useState } from 'react';
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
      if (window.scrollY > 50) document.querySelector('.header')?.classList.add('header-deep')
      else document.querySelector('.header')?.classList.remove('header-deep');
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);
  return (
    <div className="App h-full w-full scroll-smooth">
      <div onClick={() => {
        if (window.innerWidth < 844) scrollTo('#header', 'start', 'start')
        else scrollTo('#intro', 'center', 'center')
      }
      } className={showScrollTopButton ? 'scroll-top-button' : 'hidden'}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div className='header bg-white'>
        <Navbar />
      </div>
      <div className='px-5 py-auto lg:py-auto md:py-auto md:px-auto lg:px-auto'>
        <div className='lg:py-52'>
          <Intro />
        </div>
        <div className='pt-60 mb-56 lg:py-52'>
          <AboutMe />
        </div>
        <div className='pt-60 pb-56 lg:py-52'>
          <Timeline />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default App;

