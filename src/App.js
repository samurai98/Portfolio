import React from 'react';
import Header from './Header';
import Main from './Main';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Slogan from './Slogan';
import Contacts from './Contacts';
import Footer from './Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="portfolio">
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
