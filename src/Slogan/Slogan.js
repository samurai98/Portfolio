import React from 'react';
import styles from './Slogan.module.css';
import Title from '../Title/Title';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <Title title={'Рассматриваю любые варианты работы'} />
                <button className={styles.btnShow}>Нанять меня</button>
            </div>
        </div>
    );
}

export default Slogan;
