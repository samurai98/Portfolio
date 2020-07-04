import React from 'react';
import styles from './Projects.module.css';
import SpecificProject from './SpecificProject';
import Title from "./Title";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>

                <Title title={'Мои работы'} />


                <div className={styles.listMyProjects}>
                    <SpecificProject/>
                    <SpecificProject/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
