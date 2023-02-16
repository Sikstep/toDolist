import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    const [newTasks, setnewTasks] = useState<string> ('');
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setnewTasks(e.currentTarget.value)
    }
    const onKeyChange = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(newTasks);
            setnewTasks('');
        }
    }
    const onClickButtonHandler = () => {
        props.addTask(newTasks);
        setnewTasks('')
    }
    const allChangeFilterHandler = () => {
        props.changeFilter("all")
    }
    const activeChangeFilterHandler = () => {
        props.changeFilter("active")
    }
    const completedChangeFilterHandler = () => {
        props.changeFilter("completed")
    }

    const tsarChangeFilterHandler = (valueFilter:FilterValuesType) => {
        props.changeFilter(valueFilter)
    }

    const removeTaskHandler = (tid: string) => {
        props.removeTask(tid)
    }

    const MappedTask = props.tasks.map(t => {

            return (
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={()=>{removeTaskHandler(t.id)}}>x</button>
                </li>)})


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTasks} onChange={onChangeInputHandler} onKeyPress={onKeyChange} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
        <ul>
            {MappedTask}
        </ul>
        <div>
            <button onClick={allChangeFilterHandler}>All</button>
            <button onClick={activeChangeFilterHandler}>Active</button>
            <button onClick={completedChangeFilterHandler}>Completed</button>
        </div>
    </div>
}
