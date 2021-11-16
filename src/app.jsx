import React, { useState } from 'react';
import './app.css';
import Habits from './components/habits';

const App = (props) => {
    const [habits, setHabits] = useState({
        1: {
            id: 1,
            text: 'Reading',
            count: 0,
        },
        2: {
            id: 2,
            text: 'Running',
            count: 0,
        },
        3: {
            id: 3,
            text: 'Singing',
            count: 0,
        },
    });

    const handleIncrement = (id) => {
        const updated = { ...habits };
        updated[id].count++;
        setHabits(updated);
    };

    const handleDecrement = (id) => {
        const updated = { ...habits };
        updated[id].count =
            updated[id].count - 1 < 0 ? 0 : updated[id].count - 1;
        setHabits(updated);
    };

    const handleDelete = (id) => {
        const updated = { ...habits };
        delete updated[id];
        setHabits(updated);
    };

    return (
        <Habits
            habits={habits}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
        />
    );
};

export default App;
