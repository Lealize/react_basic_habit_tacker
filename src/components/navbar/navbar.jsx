import React from 'react';
import styles from './navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <i className={`${styles.logo} fas fa-leaf`}></i>
            <h1 className={styles.title}>Habit Tracker</h1>
            <span className={styles.count}>0</span>
        </nav>
    );
};

export default Navbar;
