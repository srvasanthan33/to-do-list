import logo from "./logo.svg";
import "./App.css";
import ToDoComponent from "./components/ToDoComponent";
import ListComponent from "./components/ListComponent";

function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>To-Do-List</h1>
                <h4>by Vasanthan</h4>
            </div>
            <div className="section">
                <ListComponent />
            </div>
        </div>
    );
}

export default App;
