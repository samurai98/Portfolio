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
                <div className={styles.projectImg}>
                    <div className={styles.backgroundImg} style={backgroundImg}> </div>
                    <a className={styles.btnLink} href={props.link} target='_blank'>Tap to view</a>
                </div>

                <span className={styles.title}>{props.title}</span>
                <span className={styles.description}>
                    {props.description}<br/><br/>
                    <span>Tap on the image to view it!</span><br/>
                    <span>You can see source code <a href={props.code} target='_blank'>here</a>.</span>
                </span>
            </div>
        </Fade>
    );
}

export default SpecificProject;
