import React from 'react';
import styles from './Contacts.module.css';
import Title from "./Title";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <Title title={'Контакты'} />
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;
