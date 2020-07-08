import React from 'react';
import styles from './Slogan.module.css';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <Title title={'Рассматриваю любые варианты работы'}/>
                <Fade left cascade>
                    <button className={styles.btnShow}>Нанять меня</button>
                </Fade>
            </div>
        </div>
    );
}

export default Slogan;
