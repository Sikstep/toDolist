import React from "react";
import {FilterValuesType} from "./App";


type PropsToDoListType = {

    shapka2?: string,
    tasks: TaskType[],
    removeTask: (id: number) => void,
    changeFilter: (value: FilterValuesType) => void,


}

export type TaskType = { id: number, title: string, isDone: boolean }
export const ToDolist = (props: PropsToDoListType) => {
    return (
        <div className="App">
            <div>
                <h3>{props.shapka2}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((el) => {
                        return (
                            <li key={el.id}><input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={() => {
                                    props.removeTask(el.id)
                                }}>X
                                </button>
                            </li>
                        )
                    })}

                </ul>
                <div>
                    <button onClick={() => {
                        props.changeFilter("All")
                    }}>All
                    </button>
                    <button onClick={() => {
                        props.changeFilter("Active")
                    }}>Active
                    </button>
                    <button onClick={() => {
                        props.changeFilter("Completed")
                    }}>Completed
                    </button>
                </div>
            </div>
        </div>
    );
}

