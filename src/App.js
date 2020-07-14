import React from 'react';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './App.css';
import Particles from 'react-particles-js';

const particlesOpt = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Particles className={'particles'}
                           params={particlesOpt}/>
                <Menu/>
                <Main/>
                <Skills/>
                <Projects/>
                <AboutMe/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
