import React from 'react';
import styles from './navbar.module.css';

const Navbar = ({ totalCount }) => {
    return (
        <nav className={styles.nav}>
            <i className={`${styles.logo} fas fa-leaf`}></i>
            <h1 className={styles.title}>Habit Tracker</h1>
            <span className={styles.count}>{totalCount}</span>
        </nav>
    );
};

export default Navbar;
