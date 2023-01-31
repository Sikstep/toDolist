import React, {useState} from 'react';
import './App.css';
import {TaskType, ToDolist} from "./ToDoList";

export type FilterValuesType = "All" | "Completed" | "Active";

function App() {

    const shapka11 = 'What to learn-11111111111111';


    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Lol", isDone: false}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("All")

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "Completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === "Active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    return (
        <div className="App">
            <ToDolist shapka2={shapka11}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>

    );
}

export default App;
