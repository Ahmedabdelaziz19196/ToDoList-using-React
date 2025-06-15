import "./App.css";
import ToDoList from "./Components/ToDoList";

function App() {
    return (
        <div
            className="App"
            style={{
                backgroundColor: "#17191b ",
                minHeight: "100vh",
                fontFamily: "Cairo",
            }}
        >
            <ToDoList />
        </div>
    );
}

export default App;
