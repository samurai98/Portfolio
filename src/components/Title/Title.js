import React from 'react';
import styles from './Title.module.css';
import Fade from 'react-reveal/Fade';

function Skills(props) {
    return <Fade big cascade>
        <div className={styles.titleBlock}>
            <div>{props.title}</div>
            <div className={styles.line}></div>
        </div>
    </Fade>

}

export default Skills;
