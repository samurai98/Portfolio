import React from 'react';
import styles from './Projects.module.css';
import SpecificProject from './SpecificProject';

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.headMyProjects}>Мои работы</div>
                <div className={styles.listMyProjects}>
                    <SpecificProject/>
                    <SpecificProject/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
