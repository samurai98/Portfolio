import React from 'react';
import styles from './Projects.module.css';
import SpecificProject from './SpecificProject';
import Title from "../Title";

import Counter from '../img/projects/counter.PNG'

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>

                <Title title={'Мои работы'} />


                <div className={styles.listMyProjects}>
                    <SpecificProject title={'Social Network'}
                                     img={Counter}
                                     description={'Social Network Social Network Social Network'}/>
                    <SpecificProject title={'To Do List'}
                                     img={Counter}
                                     description={'Social Network Social Network Social Network'}/>
                    <SpecificProject title={'Counter'}
                                     img={Counter}
                                     link={'https://samurai98.github.io/Counter/'}
                                     description={'This is a simple counter on React and Redux!'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
