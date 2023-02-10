import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type ButtonNameType = 'All' | 'Active' | 'Completed'

function App() {

    // let tasks1 = [
    //     {id: 1, title: 'HTML&CSS', isDone: true},
    //     {id: 2, title: 'JS', isDone: true},
    //     {id: 3, title: 'ReactJS', isDone: false}
    // ]

    let [tasks1, setTasks1] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ])

    const removeTask = (TaskId: number) => {
        setTasks1(tasks1.filter((el) => {
            return el.id !== TaskId
        }))
    }

    // let [filterTask, setFilterTask] = useState<ButtonNameType>('All');
    //
    // const filteringTasks = (title: ButtonNameType) => {
    //     setFilterTask(title)
    // }
    //
    // let filteredTasks = tasks1;
    // // Если пришёл  Active то
    // if (filterTask === 'Active') {
    //     filteredTasks = tasks1.filter(el => el.isDone)
    // }
    // // Если пришёл  Completed то
    // if (filterTask === 'Completed') {
    //     filteredTasks = tasks1.filter(el => !el.isDone)
    // }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks1}
                removeTask={removeTask}
                />
        </div>
    );
}

export default App;
