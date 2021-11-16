import React from 'react';
import styles from './habit.module.css';

const Habit = ({ habit, onIncrement, onDecrement, onDelete }) => {
    const handleIncrement = () => {
        onIncrement(habit.id);
    };

    const handleDecrement = () => {
        onDecrement(habit.id);
    };

    const handleDelete = () => {
        onDelete(habit.id);
    };

    return (
        <div className={styles.habit}>
            <span className={styles.habitName}>{habit.text}</span>
            <span className={styles.habitCount}>{habit.count}</span>
            <button className={styles.increase} onClick={handleIncrement}>
                <i className="fas fa-plus"></i>
            </button>
            <button className={styles.decrease} onClick={handleDecrement}>
                <i className="fas fa-minus"></i>
            </button>
            <button className={styles.delete} onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Habit;
