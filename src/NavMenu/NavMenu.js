import React from 'react';
import styles from './NavMenu.module.css';
import {Link, animateScroll as scroll} from 'react-scroll';
import Fade from 'react-reveal/Fade';

function NavMenu() {

    return (
        <div className={styles.navMenu}>
            <a href="#" className={styles.link}>
                <Link to='main'
                      smooth={true}
                      offset={-70}
                      duration={1000}>Home</Link>
            </a>
            <a href="#" className={styles.link}>
                <Link to='skills'
                      smooth={true}
                      offset={-70}
                      duration={1000}>Skills</Link>
            </a>

            <a href="#" className={styles.link}>
                <Link to='projects'
                      smooth={true}
                      offset={-70}
                      duration={1000}>Projects</Link>
            </a>

            <a href="#" className={styles.link}>
                <Link to='about'
                      smooth={true}
                      offset={-70}
                      duration={1000}>About me</Link>
            </a>

            <a href="#" className={styles.link}>
                <Link to='write'
                      smooth={true}
                      offset={-70}
                      duration={1000}>Write me</Link>
            </a>

            <a href="#" className={styles.link}>
                <Link to='contacts'
                      smooth={true}
                      offset={-70}
                      duration={1000}>Contacts</Link>
            </a>
        </div>
    );
}

export default NavMenu;
