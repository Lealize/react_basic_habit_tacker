import React from 'react';
import styles from './habit.module.css';

const Habit = ({ habit }) => {
    return (
        <div className={styles.habit}>
            <span className={styles.habitName}>{habit.text}</span>
            <span className={styles.habitCount}>{habit.count}</span>
            <button className={styles.increase}>
                <i className="fas fa-plus"></i>
            </button>
            <button className={styles.decrease}>
                <i className="fas fa-minus"></i>
            </button>
            <button className={styles.delete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Habit;
