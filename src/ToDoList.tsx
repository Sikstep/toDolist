import React, {useState} from 'react';
import {ButtonNameType} from './App';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void

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

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filteredTasks.map(el => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => {
                                props.removeTask(el.id)
                            }}>x
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

