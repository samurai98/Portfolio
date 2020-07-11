import React from 'react';
import styles from './Skills.module.css';
import SpecificSkill from './SpecificSkill';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

import html from '../assets/img/skills/html.svg';
import js from '../assets/img/skills/js.svg';
import react from '../assets/img/skills/react.svg';
import ts from '../assets/img/skills/ts.svg';

function Skills() {
    return (
        <div id={'skills'} className={styles.skills}>
            <Fade bottom cascade>
                <div className={styles.container}>
                    <Title title={'My skills'}/>
                    <div className={styles.listMySkills}>
                        <SpecificSkill skill={'HTML&CSS'} img={html}/>
                        <SpecificSkill skill={'JAVASCRIPT'} img={js}/>
                        <SpecificSkill skill={'REACT'} img={react}/>
                        <SpecificSkill skill={'TYPESCRIPT'} img={ts}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
