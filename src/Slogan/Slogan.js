import React from 'react';
import styles from './Slogan.module.css';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

function Slogan() {
    return (
        <div id={'about'} className={styles.slogan}>
            <div className={styles.container}>
                <Title title={'More about me'}/>
                <Fade left cascade>
                    <button className={styles.btnShow}>Show</button>
                </Fade>
            </div>
        </div>
    );
}

export default Slogan;
