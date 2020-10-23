import * as axios from 'axios';

import photo from '../assets/img/myPhoto.jpg';

import html from '../assets/img/skills/html.svg';
import js from '../assets/img/skills/js.svg';
import react from '../assets/img/skills/react.svg';
import ts from '../assets/img/skills/ts.svg';
import redux from '../assets/img/skills/redux.svg';

import counter from '../assets/img/projects/counter.PNG';
import todoList from '../assets/img/projects/ToDoList.PNG';
import socialNetwork from '../assets/img/projects/SocialNetwork.PNG';
import constructor from '../assets/img/projects/constructor.PNG';

export const UPDATE_NAME_FORM = 'Portfolio/src/redux/reducer/UPDATE-NAME-FORM';
export const UPDATE_EMAIL_FORM = 'Portfolio/src/redux/reducer/UPDATE-EMAIL-FORM';
export const UPDATE_MESSAGE_FORM = 'Portfolio/src/redux/reducer/UPDATE-MESSAGE-FORM';
export const DISABLED_BUTTON_FORM = 'Portfolio/src/redux/reducer/DISABLED-BUTTON-FORM';

const initialState = {
    portfolioData: {
        myPhoto: photo,
        skills: [
            {id: 1, title: 'HTML&CSS', logo: html},
            {id: 2, title: 'JAVASCRIPT', logo: js},
            {id: 3, title: 'REACT', logo: react},
            {id: 4, title: 'TYPESCRIPT', logo: ts},
            {id: 5, title: 'REDUX', logo: redux},
        ],
        projects: [
            {
                id: 1,
                title: 'Social Network',
                img: socialNetwork,
                description: 'Social network from React-Redux YouTube course \'The way of samurai\'.',
                link: 'https://samurai98.github.io/SocialNetwork_reactJS/',
                code: 'https://github.com/samurai98/SocialNetwork_reactJS'
            },
            {
                id: 2,
                title: 'To Do List',
                img: todoList,
                description: 'Your personal planning Board.',
                link: 'https://samurai98.github.io/ToDoList/',
                code: 'https://github.com/samurai98/ToDoList'
            },
            {
                id: 3,
                title: 'Counter',
                img: counter,
                description: 'This is a simple counter on React and Redux!',
                link: 'https://samurai98.github.io/Counter/',
                code: 'https://github.com/samurai98/Counter'
            },
            {
                id: 4,
                title: 'Constructor',
                img: constructor,
                description: 'Sites constructor in pure JS with using Classes and OOP!',
                link: 'https://constructor-leshk.web.app/',
                code: 'https://github.com/samurai98/constructor'
            }
        ],
        contact: {
            name: '',
            email: '',
            message: '',
            buttonDisabled: false
        },
        particlesSettings: {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                }
            }
        }
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME_FORM:
            return {
                ...state,
                portfolioData: {
                    ...state.portfolioData,
                    contact: {
                        ...state.portfolioData.contact,
                        name: action.newTitle
                    }
                }
            };
        case UPDATE_EMAIL_FORM:
            return {
                ...state,
                portfolioData: {
                    ...state.portfolioData,
                    contact: {
                        ...state.portfolioData.contact,
                        email: action.newTitle
                    }
                }
            };
        case UPDATE_MESSAGE_FORM:
            return {
                ...state,
                portfolioData: {
                    ...state.portfolioData,
                    contact: {
                        ...state.portfolioData.contact,
                        message: action.newText
                    }
                }
            };
        case DISABLED_BUTTON_FORM:
            return {
                ...state,
                portfolioData: {
                    ...state.portfolioData,
                    contact: {
                        ...state.portfolioData.contact,
                        buttonDisabled: action.isDisabled
                    }
                }
            };

        default:
            return state;
    }
};

// ActionCreators

export const updateNameForm = (newTitle) => ({type: UPDATE_NAME_FORM, newTitle});

export const updateEmailForm = (newTitle) => ({type: UPDATE_EMAIL_FORM, newTitle});

export const updateMessageForm = (newText) => ({type: UPDATE_MESSAGE_FORM, newText});

export const disabledButtonForm = (isDisabled) => ({type: DISABLED_BUTTON_FORM, isDisabled});

// Thunk

export const sendEmail = (name, email, message) => (dispatch) => {
    axios.post('https://smtp-nodejs-server-portfolio.herokuapp.com/sendMessage', {
        name: name,
        contacts: email,
        message: message
    })
        .then(() => {
            alert('Thanks! Your email has been sent!');
            dispatch(disabledButtonForm(false));
            dispatch(updateNameForm(''));
            dispatch(updateEmailForm(''));
            dispatch(updateMessageForm(''));
        });
};