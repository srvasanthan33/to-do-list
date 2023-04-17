import React from "react";
import { useState } from "react";
import "./ListComponent.css";

function ListComponent() {
    return (
        <>
            <Time />
            <br></br>
            <TaskManager />
        </>
    );
}

function Time() {
    const [Time, SetTime] = useState(new Date().toLocaleString());
    setTimeout(() => {
        SetTime(new Date().toLocaleString());
    }, 1000);
    return <div>{Time}</div>;
}

function TaskManager() {
    const AddTaskHandler = event => {
        event.preventDefault();
        Addtask(prev => {
            return prev.concat({ id: 3, name: "Written Notes", status: "Progress" });
        });
    };

    const [tasks, Addtask] = useState([
        { id: 1, name: "Buy Groceries", status: "Not Finished" },
        { id: 2, name: "Read Book", status: "Finished" }
    ]);

    return (
        <div>
            <form onSubmit={AddTaskHandler}>
                <legend>Add Task</legend>
                <input type="text" placeholder="Enter Task Name" />
                <button>Add</button>
            </form>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
                {tasks.map(ele => {
                    return (
                        <tr>
                            <td>{ele.name}</td>
                            <td>{ele.status}</td>
                        </tr>
                    );
                })}
            </table>
            <ul></ul>
        </div>
    );
}

export default ListComponent;
