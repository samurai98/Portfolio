import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <NavMenu/>
            </div>
        </div>
    );
}

export default Header;
