import React from 'react';
import styles from './SpecificProject.module.css';

function SpecificProject() {
    return (
        <div className={styles.container}>
            <img src="" alt="logoProject"/>
            <span>Название проекта</span>
            <div className={styles.description}>Краткое описание</div>
        </div>
    );
}

export default SpecificProject;
