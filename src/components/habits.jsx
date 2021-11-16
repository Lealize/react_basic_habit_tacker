import React from 'react';
import Habit from './habit/habit';

const Habits = ({ habits, onIncrement, onDecrement, onDelete }) => {
    return (
        <>
            {Object.keys(habits).map((key) => (
                <Habit
                    key={habits[key].id}
                    habit={habits[key]}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
};

export default Habits;
