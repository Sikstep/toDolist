import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type ButtonNameType = 'All' | 'Active' | 'Completed'

function App() {

    // let tasks1 = [
    //     {id: 1, title: 'HTML&CSS', isDone: true},
    //     {id: 2, title: 'JS', isDone: true},
    //     {id: 3, title: 'ReactJS', isDone: false}
    // ]

    let [tasks1, setTasks1] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ])
    const removeTask = (TaskId: string) => {
        setTasks1(tasks1.filter((el) => {
            return el.id !== TaskId
        }))
    };

    const addTask = (title: string) => {
        let newTast = {id: v1(), title: title, isDone: false};
        let newTasts = [newTast, ...tasks1];
        setTasks1(newTasts)
    }

    
    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks1}
                removeTask={removeTask}
                addTask={addTask}
                />
        </div>
    );
}

export default App;
