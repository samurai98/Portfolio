import React from 'react';
import styles from './SpecificProject.module.css';

function SpecificProject(props) {
    const backgroundImg = {
        backgroundImage: `url(${props.img})`
    };

    return (
        <div className={styles.container}>
            <div className={styles.backgroundImg} style={backgroundImg}>
                <a className={styles.btnLink} href={props.link} target="_blank">Смотреть</a>
            </div>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default SpecificProject;
