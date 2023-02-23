import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import s from './Todolist.module.css';

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
    changeCheck: (id: string, newIsDone: boolean) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState('')
    const [error, setError] = useState<'Ошибка!!!' | ''>('');
    const [filteredButton, setFilteredButton] = useState('All');

    const addTask = () => {
        if (title.trim() === '') {
            setTitle('')
            setError('Ошибка!!!')
            return
        }
        props.addTask(title.trim());
        setTitle('');

    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError('');
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter('all');
        setFilteredButton('All');
    }

    const onActiveClickHandler = () => {
        props.changeFilter('active');
        setFilteredButton('Active');
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed');
        setFilteredButton('Completed');
    }

    const onChangeBoxHandler = (id: string, currentIsDone: boolean) => {
        props.changeCheck(id, currentIsDone)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   className={error ? `${s.error} ${s.input}` : s.input}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHandler}
            />
            <button onClick={addTask} disabled={title.trim() === ''}>+</button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id} className={t.isDone ? s.isDoneStyle : ''}>
                        <input type="checkbox" onChange={ (event) => onChangeBoxHandler(t.id, event.currentTarget.checked) } checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button
                className={filteredButton === 'All' ? s.activeFilter : ''}
                onClick={onAllClickHandler}>All
            </button>
            <button className={filteredButton === 'Active' ? s.activeFilter : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={filteredButton === 'Completed' ? s.activeFilter : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
