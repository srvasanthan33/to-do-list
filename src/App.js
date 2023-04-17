import logo from "./logo.svg";
import "./App.css";
import ToDoComponent from "./components/ToDoComponent";
function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>To-Do-List</h1>
            </div>
            <div className="section">
                <ToDoComponent />
            </div>
        </div>
    );
}

export default App;
