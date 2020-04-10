import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <h2>Владислав Лешков</h2>
                <div className={styles.social}>
                    <img src="" alt="socialLogo"/>
                    <img src="" alt="socialLogo"/>
                    <img src="" alt="socialLogo"/>
                    <img src="" alt="socialLogo"/>
                </div>
                <p>© 2020 Все права защищены</p>
            </div>
        </div>
    );
}

export default Footer;
