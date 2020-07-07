import React from 'react';
import styles from './Contacts.module.css';
import Title from "../Title/Title";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <Title title={'Контакты'} />
                <form className={styles.formWrapper} action="">
                    <input className={styles.formArea} placeholder='Имя' type='text'/>
                    <input className={styles.formArea} placeholder='e-mail' type='text'/>
                    <textarea className={styles.messageArea} placeholder='Сообщение'></textarea>
                    <button className={styles.btnSubmit} type='submit'>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
