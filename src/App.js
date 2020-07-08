import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Slogan from './Slogan/Slogan';
import Contacts from './Contacts/Contacts';
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
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
