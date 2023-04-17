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
    const [tasks, Addtask] = useState([]);
    // { id: 0, name: "Buy Groceries", status: "Not Finished" }

    const [TaskName, setTaskName] = useState();
    const [StatusName, setStatusName] = useState("Not Finished");
    const [TaskId, setTaskId] = useState(1);

    const AddTaskHandler = event => {
        event.preventDefault();
        Addtask(prev => {
            return prev.concat({ id: TaskId, name: TaskName, status: StatusName });
        });

        //To increment the taskid
        setTaskId(previous => {
            return previous + 1;
        });
        setTaskName("");

        //console.log(tasks);
    };
    function TaskNameHandler(event) {
        setTaskName(event.target.value);
    }
    function OptionHandler(event) {
        setStatusName(event.target.value);
    }
    function DeleteHandler(event) {
        let taskID = event.target.id;
        let del_ind = 0;
        for (let i in tasks) {
            if (tasks[i].id == taskID) {
                del_ind = i;
            }
        }
        console.log(del_ind);
        Addtask(function (k) {
            return k.filter(function (e) {
                return e.id != taskID;
            });
        });
        //deleting the particular task using filter
    }

    return (
        <div>
            <form onSubmit={AddTaskHandler}>
                <legend>Add Task</legend>
                <input value={TaskName} type="text" placeholder="Enter Task Name" required onChange={TaskNameHandler} />
                <select value={StatusName} onChange={OptionHandler}>
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
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks.map(ele => {
                            return (
                                <tr className="TASK" key={ele.id}>
                                    <td>{ele.name}</td>
                                    <td className="taskstatus">{ele.status}</td>
                                    <td>
                                        <button id={ele.id} onClick={DeleteHandler} key={ele.id}>
                                            Delete
                                        </button>
                                    </td>
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
