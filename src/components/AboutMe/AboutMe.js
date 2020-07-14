import React from 'react';
import styles from './AboutMe.module.css';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

class AboutMe extends React.Component {
    state = {
        isHidden: true
    };

    onShowAbout = () => {
        this.state.isHidden
            ? this.setState({isHidden: false})
            : this.setState({isHidden: true});
    };

    render() {
        let buttonName = this.state.isHidden ? 'Show' : 'Hide';
        let hideInfo = this.state.isHidden
            ? `${styles.moreInfo} ${styles.hideInfo}`
            : `${styles.moreInfo}`;

        return (
            <div id={'about'} className={styles.about}>
                <div className={styles.container}>
                    <Title title={'More about me'}/>
                    <Fade left cascade>
                        <div className={hideInfo}>
                            <p>Let me tell you a few words about myself. </p>
                            <p>My name is Vladislav, I was born in 1998. I come from Belarus and live
                                in <mark>Minsk</mark>.
                            </p>
                            <p>I am a student of the <mark>Belarusian state University of Informatics and
                                Radioelectronics</mark>,
                                faculty of engineering and Economics, in my fifth year.
                                I also studied at <mark>RS School and IT-incubator</mark>.
                            </p>
                            <p>I have experience as a sales Manager and content Manager. I am <mark>looking for a
                                job</mark> at the
                                moment.
                            </p>
                            <p>If we talk about my professional qualities, I have extensive technical knowledge and
                                attention to detail for <mark>bug-free software</mark>. A perfectionist by nature with
                                methodical testing ability and <mark>good communication skills</mark>. People who know
                                me well, say that I am
                                a <mark>reliable</mark> person.
                            </p>
                            <p>If you want to contact me, use the form below, or the links in the site's footer.</p>
                        </div>
                        <button onClick={this.onShowAbout} className={styles.btnShow}>{buttonName}</button>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default AboutMe;
