import React from 'react';
import styles from './NavMenu.module.css';
import {Link, animateScroll as scroll} from 'react-scroll';

function NavMenu() {

    return (
        <div className={styles.navMenu}>
            <a href="#" className={styles.link}>
                <Link to='main'
                      smooth={true}
                      offset={-70}
                      duration={1000}>Главная</Link>
            </a>
            <a href="#" className={styles.link}>
                <Link to='skills'
                      smooth={true}
                      offset={-70}
                      duration={1000}>Скиллы</Link>
            </a>

            <a href="#" className={styles.link}>
                <Link to='projects'
                      smooth={true}
                      offset={-70}
                      duration={1000}>Проекты</Link>
            </a>

            <a href="#" className={styles.link}>
                <Link to='contacts'
                      smooth={true}
                      offset={-70}
                      duration={1000}>Контакты</Link>
            </a>
        </div>
    );
}

export default NavMenu;
