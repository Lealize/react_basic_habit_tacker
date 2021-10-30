import React, { Component, createRef } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    handleAdd = (name) => {
        this.props.onAdd(name);
    };
    handleReset = () => {
        this.props.onReset();
    };
    render() {
        console.log('habits');
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map((habit) => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.handleReset}>
                    Reset All
                </button>
            </>
        );
    }
}

export default Habits;
