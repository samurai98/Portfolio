import React from 'react';
import styles from './Skills.module.css';
import SpecificSkill from './SpecificSkill';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';


class Skills extends React.Component {

    render() {

        const skills = this.props.skills.map(el => <SpecificSkill key={el.id} skill={el.title} img={el.logo}/>);

        return (
            <div id={'skills'} className={styles.skills}>
                <Fade bottom cascade>
                    <div className={styles.container}>
                        <Title title={'My skills'}/>
                        <div className={styles.listMySkills}>
                            {skills}
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        skills: state.reducer.portfolioData.skills
    }
};

export default connect(mapStateToProps)(Skills);
