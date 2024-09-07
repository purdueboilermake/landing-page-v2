import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      <Parallax pages={5} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={1} speed={0}>
          <div className="animation_layer parallax" id="about">
            <div id="about-container">
              <h1 id="textblock-title">About</h1>
              <p id="textblock-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="cliff"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={0.1}>
          <div className="animation_layer parallax" id="clouds"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.35}>
          <div className="animation_layer parallax" id="sun"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-left"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.3}>
          <div className="animation_layer parallax" id="mini-cloud-right"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.1}>
          <div className="animation_layer parallax" id="stat1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.1}>
          <div className="animation_layer parallax" id="stat2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.1}>
          <div className="animation_layer parallax" id="stat3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <div id="schedule">
            <div id="textblock-container">
              <h1 id="textblock-title">Schedule</h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <div id="info">
            <div id="textblock-container">
              <h1 id="textblock-title">FAQ/Sponsors</h1>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0}>
          <div id="footer">
            <div id="textblock-container">
              <h1 id="textblock-title">Moving Footer</h1>
            </div>
            <footer id='textblock-footer'>Created With 💛 By&nbsp;<a id="textblock-boilermake" href="https://boilermake.org/">Boilermake</a></footer>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
