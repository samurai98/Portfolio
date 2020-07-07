import React from 'react';
import styles from './Footer.module.css';
import Title from '../Title/Title';

import linkedin from '../assets/img/contacts/linkedin.svg';
import tutby from '../assets/img/contacts/tutby.svg';
import email from '../assets/img/contacts/mail.svg';
import phone from '../assets/img/contacts/phone.svg';
import telegram from '../assets/img/contacts/telegram.svg';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title title={'Владислав Лешков'}/>
                <div className={styles.social}>
                    <div className={styles.blockLink}>
                        <a href="" target="_blank">
                            <img src={linkedin} alt='logo'/>
                        </a>
                    </div>
                    <div className={styles.blockLink}>
                        <a href="" target="_blank">
                            <img src={tutby} alt='logo'/>
                        </a>
                    </div>
                    <div className={styles.blockLink}>
                        <a href="" target="_blank">
                            <img src={email} alt='logo'/>
                        </a>
                    </div>
                    <div className={styles.blockLink}>
                        <a href="" target="_blank">
                            <img src={phone} alt='logo'/>
                        </a>
                    </div>
                    <div className={styles.blockLink}>
                        <a href="" target="_blank">
                            <img src={telegram} alt='logo'/>
                        </a>
                    </div>
                </div>
                <span className={styles.copyright}>© 2020 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
