import React, {useState} from 'react';
import s from './App.module.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ]);


    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    let [filter, setFilter] = useState<FilterValuesType>('all');

    let tasksForTodolist = tasks;

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const addTask = (title: string) => {
        const newTask = {id: v1(), title: title, isDone: false};
        setTasks([newTask, ...tasks]);
    }


    const changeStatus = (taskID: string, isDone: boolean) => {
        let changeTask = tasks.find(t => t.id === taskID)
        if (changeTask) {
            changeTask.isDone = isDone;
        }
        setTasks([...tasks])

    }

    return (
        <div className={s.App}>
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeIsDone={changeStatus}/>
        </div>
    );
}

export default App;

