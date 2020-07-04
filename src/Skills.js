import React from 'react';
import styles from './Skills.module.css';
import SpecificSkill from './SpecificSkill';
import Title from "./Title";

import html from './img/skills/html.svg';
import js from './img/skills/js.svg';
import react from './img/skills/react.svg';
import ts from './img/skills/ts.svg';

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>

                <Title title={'Мои скиллы'} />

                <div className={styles.listMySkills}>
                    <SpecificSkill skill={'HTML&CSS'} img={html}/>
                    <SpecificSkill skill={'JAVASCRIPT'} img={js}/>
                    <SpecificSkill skill={'REACT'} img={react}/>
                    <SpecificSkill skill={'TYPESCRIPT'} img={ts}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
