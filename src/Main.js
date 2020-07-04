import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет</span>
                    <span>Я <span>Владислав Лешков</span></span>
                    <h1>front-end разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <img src="https://sun9-19.userapi.com/c857624/v857624028/1fcae9/kDNUxstuGc0.jpg"
                         alt="myPhoto"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
