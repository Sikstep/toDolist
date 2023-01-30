import React from 'react';
import './App.css';
import {ToDolist} from "./ToDoList";

function App() {
    const shapka1 = 'What to learn-1';
    const shapka11 = 'What to learn-11111111111111';
    const shapka2 = 'What to learn-22222222';
    const shapka22 = 'What to learn-2222222222222222222222';

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Lol", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false },
        { id: 4, title: "Yoo", isDone: false },
        { id: 5, title: "Lolz", isDone: false },
        { id: 6, title: "Yo2lose", isDone: false }
    ]

    return (
        <div className="App">
            <ToDolist shapka2={shapka11} tasks={tasks1}/>
            <ToDolist shapka={shapka2} tasks={tasks2}/>

        </div>
    );
}

export default App;
