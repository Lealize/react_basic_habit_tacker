import React, { useState } from 'react';
import './app.css';
import Habits from './components/habits';

const App = (props) => {
    const [habits, setHabits] = useState({
        1: {
            text: 'Reading',
            count: 0,
        },
        2: {
            text: 'Running',
            count: 0,
        },
        3: {
            text: 'Singing',
            count: 0,
        },
    });

    return <Habits habits={habits} />;
};

export default App;
