import React from 'react';
import styles from './Footer.module.css';
import Title from "./Title";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title title={'Владислав Лешков'} />
                <div className={styles.social}>
                    <img src="" alt="logo"/>
                    <img src="" alt="logo"/>
                    <img src="" alt="logo"/>
                    <img src="" alt="logo"/>
                </div>
                <p>© 2020 Все права защищены</p>
            </div>
        </div>
    );
}

export default Footer;
