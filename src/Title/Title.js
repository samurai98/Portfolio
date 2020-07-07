import React from 'react';
import styles from './Title.module.css';

function Skills(props) {
    return <div className={styles.headerTitle}>
        <div>{props.title}</div>
        <div className={styles.line}> </div>
    </div>
}

export default Skills;
