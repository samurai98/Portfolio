import React from 'react';
import styles from './NavMenu.module.css';
import {Link} from 'react-scroll';

function NavMenu() {

    return (
        <div className={styles.navMenu}>

            <Link className={styles.link}
                  to='main'
                  smooth={true}
                  offset={-70}
                  duration={1000}>Home</Link>

            <Link className={styles.link}
                  to='skills'
                  smooth={true}
                  offset={-70}
                  duration={1000}>Skills</Link>

            <Link className={styles.link}
                  to='projects'
                  smooth={true}
                  offset={-70}
                  duration={1000}>Projects</Link>

            <Link className={styles.link}
                  to='about'
                  smooth={true}
                  offset={-70}
                  duration={1000}>About me</Link>

            <Link className={styles.link}
                  to='write'
                  smooth={true}
                  offset={-70}
                  duration={1000}>Write me</Link>

            <Link className={styles.link}
                  to='contacts'
                  smooth={true}
                  offset={-70}
                  duration={1000}>Contacts</Link>

        </div>
    );
}

export default NavMenu;
