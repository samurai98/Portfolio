import React from 'react';
import styles from './SpecificProject.module.css';
import Fade from 'react-reveal/Fade';

function SpecificProject(props) {
    const backgroundImg = {
        backgroundImage: `url(${props.img})`
    };

    return (
        <Fade right cascade>
            <div className={styles.container}>
                <div className={styles.backgroundImg} style={backgroundImg}>
                    <a className={styles.btnLink} href={props.link} target="_blank">Смотреть</a>
                </div>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.description}>{props.description}</span>
            </div>
        </Fade>
    );
}

export default SpecificProject;
