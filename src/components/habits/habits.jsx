import React from 'react';
import styles from './habits.module.css';
import Habit from '../habit/habit';

const Habits = ({
    habits,
    onIncrement,
    onDecrement,
    onDelete,
    onResetClick,
    onDelAllClick,
}) => {
    return (
        <>
            <ul className={styles.ul}>
                {Object.keys(habits).map((key) => (
                    <Habit
                        key={habits[key].id}
                        habit={habits[key]}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
            <button onClick={onResetClick}>Reset All</button>
            <button onClick={onDelAllClick}>Delete All</button>
        </>
    );
};

export default Habits;
