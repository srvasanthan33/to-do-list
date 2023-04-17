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
                <select>
                    <option value="Not Finished">Not Finished</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Finished">Finished</option>
                </select>
                <button>Add</button>
            </form>

            <div className="taskList">
                <table>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>

                    {tasks.map(ele => {
                        return (
                            <tr>
                                <td></td>
                                <td>{ele.name}</td>
                                <td>{ele.status}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}

export default ListComponent;
