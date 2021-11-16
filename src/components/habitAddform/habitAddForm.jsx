import styles from './habitAddForm.module.css';
import React, { useRef } from 'react';

const HabitAddForm = ({ onSubmit }) => {
    const inputRef = useRef();
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputRef.current.value === '') return;
        const habit = {
            id: Date.now(),
            text: inputRef.current.value,
            count: 0,
        };
        onSubmit(habit);
        formRef.current.reset();
    };

    return (
        <form
            ref={formRef}
            className={styles.inputForm}
            onSubmit={handleSubmit}
        >
            <input
                ref={inputRef}
                type="text"
                className={styles.input}
                autoFocus
            />
            <button className={styles.button}>Add</button>
        </form>
    );
};

export default HabitAddForm;
