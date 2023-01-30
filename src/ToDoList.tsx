import React from "react";

type PropsToDoListType = {
    shapka?: string,
    shapka2?: string,
    tasks: TaskType[],

}

type TaskType = { id: number, title: string, isDone: boolean }
export const ToDolist = (props: PropsToDoListType) => {
    return (
        <div className="App">
            <div>
                <h3>{props.shapka}</h3>
                <h3>{props.shapka2}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((el) => {
                        return (
                            <li key={el.id}><input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span></li>
                        )
                    })}

                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}

