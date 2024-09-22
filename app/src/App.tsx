import React, { useEffect, useState } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from './components/Header';
import HeroText from './components/HeroText';
import AboutSection from './components/AboutSection';
import ScheduleSign from './components/Signs/ScheduleSign';
import Statistic from './components/Statistic';
import FAQSign from './components/Signs/FAQSign';
import SponsorSign from './components/Signs/SponsorSign';
import SponsorCard from './components/SponsorCard';
import logo from './assets/images/logo_5.png';
import FAQAccordian from './components/FAQAccordian';

const sponsors = [
  {
    name: 'Sponsor 1',
    logo: logo,
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 2',
    logo: logo,
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 3',
    logo: logo,
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 4',
    logo: logo,
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 5',
    logo: logo,
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 6',
    logo: logo,
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 7',
    logo: logo,
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 8',
    logo: logo,
    url: 'https://www.boilermake.org/'
  },
  {
    name: 'Sponsor 9',
    logo: logo,
    url: 'https://www.boilermake.org/'
  },
];

const questions = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Effect to update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='App'>
      <Parallax pages={isMobile ? 6.5 : 7.5} style={{ top: '0', left: '0' }} className="animation" key={isMobile ? 'mobile' : 'desktop'}>
        <ParallaxLayer offset={0.5} speed={0}>
          <div className="animation_layer parallax" id="about-background"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={0}>
          <div id="about">
            <div id="about-container">
              <h1 id="textblock-title">About</h1>
              <p id="textblock-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="cliff">
            <div className="container">
              {/* Header fixed at the top */}
              <Header isMobile={isMobile} />
              {/* Hero Text aligned to the right */}
              <div className={`${isMobile ? "pt-28" : "pt-40"} text-right`}>
                <HeroText isMobile={isMobile} />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.3}>
          <div className="animation_layer parallax" id="cloud2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.25}>
          <div className="animation_layer parallax" id="cloud4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.1}>
          <div className="animation_layer parallax" id="cloud5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.4}>
          <div className="animation_layer parallax" id="cloud3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 0.3 : 0.75} speed={0.3}>
          <div className="animation_layer parallax" id="cloud1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.15} speed={0.35}>
          <div className="animation_layer parallax" id="sun"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-left"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-right"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={0.1}>
          <div id='stat1'>
            <Statistic statistic='XX' variable='STATISTIC' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={0.1}>
          <div id='stat2'>
            <Statistic statistic='XX' variable='STATISTIC' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={0.1}>
          <div id='stat3'>
            <Statistic statistic='XX' variable='STATISTIC' />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <div id="schedule" className='h-full w-full'>
            <div className='w-1/3 h-1/3'>
              <ScheduleSign />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={0}>
          <div id="about" className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
            {/* First Column: FAQSign (1/3 of the screen) */}
            <div className="col-span-1 h-1/3 flex justify-center items-center">
              <AboutSection />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={0}>
          <div className="animation_layer parallax" id="road"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 3 : 4} speed={0}>
          <div id="faq" className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
            {/* First Column: FAQSign (1/3 of the screen) */}
            <div className="col-span-1 h-1/3 flex justify-center items-center">
              <FAQSign />
            </div>

            {/* Second and Third Column: FAQAccordian (2/3 of the screen) */}
            <div className="col-span-2 pt-24">
              <FAQAccordian questions={questions} />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 4 : 5} speed={0}>
          <div id="sponsors" className='h-full w-full'>
            <div className='w-1/3 h-1/2'>
              <SponsorSign />
            </div>
            {/* Sponsors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20 justify-items-center">
              {sponsors.map((sponsor, index) => (
                <SponsorCard sponsor={sponsor} key={index} />
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 5 : 6.5} speed={0}>
          <div id="footer">
            <div className="animation_layer parallax" id="footer-background"></div>
            <footer id='textblock-footer'>
              <div className='text-white'>
                Created With 💛 By&nbsp;
                <a id="textblock-boilermake" href="https://boilermake.org/" style={{ color: "white" }}>Boilermake</a>
              </div>
            </footer>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
