import React, { Component } from "react";
import "./ToDoComponent.css";
export class ToDoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            tasks: [],
            temp: ""
        };
    }
    ChangeHandler = event => {
        this.setState({
            temp: event.target.value
        });
        console.log(this.state.temp);
    };

    SubmitHandler = event => {
        this.setState({
           tasks.push(temp),
           temp : '',
           id: this.state.id + 1
        })
        event.preventDefault();
    };
    render() {
        return (
            <React.Fragment>
                <div className="adding">
                    <form onSubmit={this.SubmitHandler}>
                        <label>
                            <h3>Enter the task</h3>
                        </label>
                        <input className="task_input" type="text" onChange={this.ChangeHandler}></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <div className="added"></div>
            </React.Fragment>
        );
    }
}

export default ToDoComponent;
