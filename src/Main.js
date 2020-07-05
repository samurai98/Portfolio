import React from 'react';
import styles from './Main.module.css';
import myPhoto from './img/myPhoto.jpg'

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
                    <img src={myPhoto}
                         alt="myPhoto"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
