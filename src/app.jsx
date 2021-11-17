import React, { useState } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddform/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar/navbar';

const App = () => {
    const [habits, setHabits] = useState({
        // 1: {
        //     id: 1,
        //     text: 'Reading',
        //     count: 0,
        // },
        // 2: {
        //     id: 2,
        //     text: 'Running',
        //     count: 0,
        // },
        // 3: {
        //     id: 3,
        //     text: 'Singing',
        //     count: 0,
        // },
    });
    const [totalCount, setTotalCount] = useState(0);

    const handleSubmit = (habit) => {
        const updated = { ...habits };
        updated[habit.id] = habit;
        setHabits(updated);
    };

    const handleIncrement = (id) => {
        const updated = { ...habits };
        if (updated[id].count === 0) {
            setTotalCount(totalCount + 1);
        }
        updated[id].count++;
        setHabits(updated);
    };

    const handleDecrement = (id) => {
        const updated = { ...habits };
        if (updated[id].count === 0) return;
        updated[id].count--;
        if (updated[id].count === 0) {
            setTotalCount(totalCount - 1);
        }
        setHabits(updated);
    };

    const handleDelete = (id) => {
        const updated = { ...habits };
        if (updated[id].count > 0) {
            setTotalCount(totalCount - 1);
        }
        delete updated[id];
        setHabits(updated);
    };

    return (
        <>
            <Navbar totalCount={totalCount} />
            <HabitAddForm onSubmit={handleSubmit} />
            <Habits
                habits={habits}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
            />
        </>
    );
};

export default App;
