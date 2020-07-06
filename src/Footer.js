import React from 'react';
import styles from './Footer.module.css';
import Title from './Title';

import linkedin from './img/contacts/linkedin.svg';
import tutby from './img/contacts/tutby.svg';
import email from './img/contacts/mail.svg';
import phone from './img/contacts/phone.svg';
import telegram from './img/contacts/telegram.svg';

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
