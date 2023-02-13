import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ButtonNameType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void

}

export function Todolist(props: PropsType) {

    let [filterTask, setFilterTask] = useState<ButtonNameType>('All');

    const filteringTasks = (title: ButtonNameType) => {
        setFilterTask(title)
    }

    let filteredTasks = props.tasks;
    // Если пришёл  Active то
    if (filterTask === 'Active') {
        filteredTasks = props.tasks.filter(el => el.isDone)
    }
    // Если пришёл  Completed то
    if (filterTask === 'Completed') {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }
    const [newTaskTitle, setNewTaskTitle] = useState<string>('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value);

    }

    const onClickButtonHandler = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.ctrlKey && e.charCode === 13) {onClickButtonHandler()}
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeInputHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={onClickButtonHandler}>+
                </button>
            </div>
            <ul>
                {filteredTasks.map(el => {
                    const onRemoveHandler = () => {
                        props.removeTask(el.id)
                    }
                    return (
                        <li key={el.id}>
                            <button onClick={onRemoveHandler}>x
                            </button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={() => {
                    filteringTasks(`All`)
                }}>All
                </button>
                <button onClick={() => {
                    filteringTasks('Active')
                }}>Active
                </button>
                <button onClick={() => {
                    filteringTasks('Completed')
                }}>Completed
                </button>
            </div>
        </div>
    );
};

