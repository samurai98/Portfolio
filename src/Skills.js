import React from 'react';
import styles from './Skills.module.css';
import SpecificSkill from './SpecificSkill';

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.headMySkills}>Мои скиллы</div>
                <div className={styles.listMySkills}>
                    <SpecificSkill/>
                    <SpecificSkill/>
                    <SpecificSkill/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
