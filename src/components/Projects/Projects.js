import React from 'react';
import styles from './Projects.module.css';
import SpecificProject from './SpecificProject';
import Title from '../Title/Title';
import {connect} from 'react-redux';

class Projects extends React.Component {


    render() {

        const projects = this.props.projects.map(el => <SpecificProject key={el.id}
                                                                        title={el.title}
                                                                        img={el.img}
                                                                        description={el.description}
                                                                        link={el.link}/>);

        return (
            <div id={'projects'} className={styles.projects}>
                <div className={styles.container}>
                    <Title title={'My Works'}/>
                    <div className={styles.listMyProjects}>
                        {projects}
                    </div>
                </div>
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        projects: state.reducer.portfolioData.projects
    }
};

export default connect(mapStateToProps)(Projects);
