import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import s from './App.module.css'

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
    changeIsDone: (taskID: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {

    const [newTasks, setnewTasks] = useState<string>('');
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setnewTasks(e.currentTarget.value)
    }
    const [error, setError] = useState('');
    const onKeyChange = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            if (newTasks.trim() !== '') {
                props.addTask(newTasks.trim());
                setnewTasks('');

            } else {
                setnewTasks('');
                setError('Title is required')
            }
        }
    }
    const onClickButtonHandler = () => {
        if (newTasks.trim() !== '') {
            props.addTask(newTasks.trim());
            setnewTasks('')

        } else {
            setnewTasks('')
            setError('Title is required')
        }
    }
    const allChangeFilterHandler = () => {
        props.changeFilter('all')
    }
    const activeChangeFilterHandler = () => {
        props.changeFilter('active')
    }
    const completedChangeFilterHandler = () => {
        props.changeFilter('completed')
    }

    const removeTaskHandler = (tid: string) => {
        props.removeTask(tid)
    }

    const MappedTask = props.tasks.map(t => {

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeIsDone(t.id, e.currentTarget.checked);

        }
        return (
            <li key={t.id}>
                <input type="checkbox"
                       onChange={onChangeHandler}
                       checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => {
                    removeTaskHandler(t.id)
                }}>x
                </button>
            </li>)
    })

const inputClass = error ? `${s.error} ${s.input}` : s.input;
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTasks} onChange={onChangeInputHandler} onKeyDown={onKeyChange}
            className={inputClass}/>
            <button onClick={onClickButtonHandler}>+</button>
            { error && <div className={s.error_message}>{error}</div>}
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
