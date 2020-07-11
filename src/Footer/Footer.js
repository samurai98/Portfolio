import React from 'react';
import styles from './Footer.module.css';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

import linkedin from '../assets/img/contacts/linkedin.svg';
import tutby from '../assets/img/contacts/tutby.svg';
import email from '../assets/img/contacts/mail.svg';
import phone from '../assets/img/contacts/phone.svg';
import telegram from '../assets/img/contacts/telegram.svg';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title title={'Vladislav Leshkov'}/>
                <Fade big cascade>
                    <div className={styles.social}>
                        <div className={styles.blockLink}>
                            <a href="https://www.linkedin.com/" target="_blank">
                                <img src={linkedin} alt='logo'/>
                            </a>
                        </div>
                        <div className={styles.blockLink}>
                            <a href="https://jobs.tut.by/resume/9bd6a49aff0383c2180039ed1f6e70376f5959" target="_blank">
                                <img src={tutby} alt='logo'/>
                            </a>
                        </div>
                        <div className={styles.blockLink}>
                            <a href="mailto:leshkov.1998@mail.ru" target="_blank">
                                <img src={email} alt='logo'/>
                            </a>
                        </div>
                        <div className={styles.blockLink}>
                            <a href="tel:+375298755838" target="_blank">
                                <img src={phone} alt='logo'/>
                            </a>
                        </div>
                        <div className={styles.blockLink}>
                            <a href="https://t.me/l_vladislav_l" target="_blank">
                                <img src={telegram} alt='logo'/>
                            </a>
                        </div>
                    </div>
                    <span className={styles.copyright}>© 2020 All Rights Reserved.</span>
                </Fade>
            </div>
        </div>
    );
}

export default Footer;
