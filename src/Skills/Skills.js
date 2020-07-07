import React from 'react';
import styles from './Skills.module.css';
import SpecificSkill from './SpecificSkill';
import Title from "../Title/Title";

import html from '../assets/img/skills/html.svg';
import js from '../assets/img/skills/js.svg';
import react from '../assets/img/skills/react.svg';
import ts from '../assets/img/skills/ts.svg';

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
