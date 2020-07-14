import React from 'react';
import styles from './Contact.module.css';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

import {connect} from 'react-redux';
import {disabledButtonForm, sendEmail, updateEmailForm, updateMessageForm, updateNameForm} from '../../redux/reducer';

class Contact extends React.Component {

    sendMessageClick = (e) => {
        if(this.props.contact.name && this.props.contact.email && this.props.contact.message) {
            this.props.disabledButtonForm(true);
            this.props.sendEmail(this.props.contact.name, this.props.contact.email, this.props.contact.message);
        }
        else {
            e.preventDefault();
            alert('Please, fill in all fields of the form!');
        }
    };

    render() {
        let isDisabled = this.props.contact.buttonDisabled;

        return (
            <div id={'write'} className={styles.contacts}>
                <div className={styles.container}>
                    <Title title={'Contact me'}/>
                    <Fade right cascade>
                        <form className={styles.formWrapper} action="">
                            <input className={styles.formArea}
                                   placeholder='Your name'
                                   type='text'
                                   value={this.props.contact.name}
                                   onChange={(e) => this.props.updateNameForm(e.currentTarget.value)}/>
                            <input className={styles.formArea}
                                   placeholder='E-mail or Phone'
                                   type='text'
                                   value={this.props.contact.email}
                                   onChange={(e) => this.props.updateEmailForm(e.currentTarget.value)}/>
                            <textarea className={styles.messageArea}
                                      placeholder='Your message'
                                      value={this.props.contact.message}
                                      onChange={(e) => this.props.updateMessageForm(e.currentTarget.value)}> </textarea>
                            <button className={styles.btnSubmit}
                                    disabled={isDisabled}
                                    onClick={this.sendMessageClick}
                                    type='submit'>Send message
                            </button>
                        </form>
                    </Fade>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.reducer.portfolioData.contact
    }
};

export default connect(mapStateToProps, {
    updateNameForm, updateEmailForm, updateMessageForm, disabledButtonForm, sendEmail
})(Contact);
