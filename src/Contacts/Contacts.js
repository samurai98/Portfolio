import React from 'react';
import styles from './Contacts.module.css';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

function Contacts() {
    return (
        <div id={'contacts'} className={styles.contacts}>
            <div className={styles.container}>
                <Title title={'Контакты'}/>
                <Fade right cascade>
                    <form className={styles.formWrapper} action="">
                        <input className={styles.formArea} placeholder='Имя' type='text'/>
                        <input className={styles.formArea} placeholder='e-mail' type='text'/>
                        <textarea className={styles.messageArea} placeholder='Сообщение'></textarea>
                        <button className={styles.btnSubmit} type='submit'>Отправить</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;
