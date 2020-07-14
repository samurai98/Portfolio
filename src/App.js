import React from 'react';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import Particles from 'react-particles-js';
import {connect} from 'react-redux';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="portfolio">
                    <Particles className={'particles'}
                               params={this.props.portfolioData.particlesSettings}/>
                    <Menu/>
                    <Main photo={this.props.portfolioData.myPhoto}/>
                    <Skills/>
                    <Projects/>
                    <AboutMe/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        portfolioData: state.reducer.portfolioData
    }
};

export default connect(mapStateToProps)(App);
