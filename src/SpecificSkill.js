import React from 'react';
import styles from './SpecificSkill.module.css';

function SpecificSkill() {
    return (
        <div className={styles.container}>
            <img src="" alt="logoSkill"/>
            <span>React</span>
            <div className={styles.description}>Подробное описание навыка</div>
        </div>
    );
}

export default SpecificSkill;
