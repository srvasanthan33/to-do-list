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
    const [tasks, Addtask] = useState([
        { id: 1, name: "Buy Groceries", status: "Not Finished" },
        { id: 2, name: "Read Book", status: "Finished" }
    ]);

    const [TaskName, setTaskName] = useState();
    const [StatusName, setStatusName] = useState("Not Finished");
    const [TaskId, setTaskId] = useState(3);

    const AddTaskHandler = event => {
        event.preventDefault();
        Addtask(prev => {
            return prev.concat({ id: TaskId, name: TaskName, status: StatusName });
        });

        //To increment the taskid
        setTaskId(previous => {
            return previous + 1;
        });
        console.log(tasks);
    };
    function TaskNameHandler(event) {
        setTaskName(event.target.value);
    }
    function OptionHandler(event) {
        setStatusName(event.target.value);
    }

    return (
        <div>
            <form onSubmit={AddTaskHandler}>
                <legend>Add Task</legend>
                <input type="text" placeholder="Enter Task Name" required onChange={TaskNameHandler} />
                <select onChange={OptionHandler}>
                    <option value="Not Finished">Not Finished</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Finished">Finished</option>
                </select>
                <button>Add</button>
            </form>

            <div className="taskList">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks.map(ele => {
                            return (
                                <tr key={ele.id}>
                                    <td>{ele.name}</td>
                                    <td>{ele.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListComponent;
