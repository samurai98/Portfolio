import React from 'react';
import styles from './SpecificSkill.module.css';

function SpecificSkill(props) {
    return (
        //
            <div className={styles.skill}>
                <div className={styles.icon}>
                    <img src={props.img} alt='logo'/>
                </div>
                <h3 className={styles.skillTitle}>{props.skill}</h3>
            </div>
       // </Fade>
    );
}

export default SpecificSkill;
