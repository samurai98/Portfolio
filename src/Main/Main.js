import React from 'react';
import styles from './Main.module.css';
import myPhoto from '../assets/img/myPhoto.jpg'

function Main() {
    return (
        <div id={'main'} className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <span>I am <span>Vladislav Leshkov</span></span>
                    <h1>front-end developer</h1>
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
