import React from 'react';
import styles from './Contacts.module.css';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';
import * as axios from 'axios';

function Contacts() {

    let sendMessClick = (e) => {
        e.preventDefault(); // TODO ПОПРОБОВАТЬ БЕЗ НЕЁ КОГДА БУДЕТ СТОР
        axios.post('https://smtp-nodejs-server-portfolio.herokuapp.com/sendMessage', {
            name: 'TestPort with Heroku',
            contacts: 'ds@mail.ru',
            message: 'YRA!!!!!'
        })
            .then(() => {
                alert('Thanks! Your email has been sent!');
            });
    };


    return (
        <div id={'contacts'} className={styles.contacts}>
            <div className={styles.container}>
                <Title title={'Contact me'}/>
                <Fade right cascade>
                    <form className={styles.formWrapper} action="">
                        <input className={styles.formArea} placeholder='Your name' type='text'/>
                        <input className={styles.formArea} placeholder='E-mail' type='text'/>
                        <textarea className={styles.messageArea} placeholder='Your message'></textarea>
                        <button onClick={(e) => {
                            sendMessClick(e)
                        }} className={styles.btnSubmit} type='submit'>Send message
                        </button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;
