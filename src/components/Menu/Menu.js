import React from 'react';
import NavMenu from './NavMenu';
import styles from './Menu.module.css';
import {connect} from "react-redux";

class Menu extends React.Component {

    state = {
        menu: false
    };

    burgerClick = () => {
        this.state.menu
            ? this.setState({menu: false})
            : this.setState({menu: true});
    };

    render() {
        let menuStyle = this.state.menu
            ? `${styles.menu_icon} ${styles.menu_icon_active}`
            : `${styles.menu_icon}`;
        return (
            <div onClick={this.burgerClick} className={styles.menu_icon_wrapper}>
                <div className={menuStyle}>
                    <div className={styles.header}>
                        <div className={styles.container}>
                            <NavMenu/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
