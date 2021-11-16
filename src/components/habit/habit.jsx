import React from 'react';
import styles from './habit.module.css';

const Habit = (props) => {
    return (
        <div className={styles.habit}>
            <span className={styles.habitName}>Reading</span>
            <span className={styles.habitCount}>0</span>
            <button className={styles.increase}>
                <i class="fas fa-plus"></i>
            </button>
            <button className={styles.decrease}>
                <i class="fas fa-minus"></i>
            </button>
            <button className={styles.delete}>
                <i class="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Habit;
