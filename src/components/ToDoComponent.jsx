import React, { Component } from "react";
import "./ToDoComponent.css";
export class ToDoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,

            tasks: [
                { id: 1, name: "Homework" },
                { id: 2, name: "ClassWork" }
            ],
            temp: ""
        };
    }
    ChangeHandler = event => {
        this.setState({
            temp: event.target.value
        });
        //console.log(this.state.temp);
    };

    SubmitHandler = event => {
        let name_of_task = this.state.temp;
        alert(this.state.temp);
        //console.log("from submit" + this.state.tasks);
        //alert(`from state ${this.state.tasks[0].name} ${this.state.temp}`);
    };

    EditHandler = event => {
        let val = prompt("Edit");
    };
    render() {
        const { tasks, temp, id } = this.state;
        return (
            <React.Fragment>
                <div className="adding">
                    <form>
                        <label>
                            <h3>Enter the task</h3>
                        </label>
                        <input className="task_input" type="text" onChange={this.ChangeHandler}></input>
                        <button type="button" onClick={this.SubmitHandler}>
                            Add
                        </button>
                    </form>
                </div>
                {console.log("from tasks" + tasks)}
                <div className="added">
                    <table>
                        <th>
                            <td>
                                <h3>Id</h3>
                            </td>
                            <td>
                                <h3>Task Name</h3>
                            </td>
                        </th>

                        {tasks.map(ele => (
                            <tr key={ele.id}>
                                <td>
                                    <h3>{ele.id}</h3>
                                </td>
                                <td>
                                    <h3>{ele.name}</h3>
                                </td>
                                <td>
                                    <button type="text" onClick={this.EditHandler}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button type="text">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    {this.state.temp}
                </div>
            </React.Fragment>
        );
    }
}

export default ToDoComponent;
