import React from 'react';
import Habit from './habit/habit';

const Habits = ({ habits }) => {
    return (
        <>
            {Object.keys(habits).map((key) => (
                <Habit key={key} habit={habits[key]} />
            ))}
        </>
    );
};

export default Habits;
