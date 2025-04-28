import { useState } from "react";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState(["first", "second"]); // Initial tasks
    const [inputValue, setInputValue] = useState(""); // Input field state

    // Function to add a task
    const addTask = () => {
        if (inputValue.trim() !== "") {
            setTasks([...tasks, inputValue]);
            setInputValue(""); // Clear input field after adding
        }
    };

    // Function to delete a task
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const editTask = (index) => {
        deleteTask(index);
        setInputValue(tasks[index]);
    }

    return (
        <div className="container">
            {/* Input Field & Add Button */}
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a task..."
                    className="task-input"
                />
                <button onClick={addTask} className="add-button">Add</button>
            </div>

            {/* Task List */}
            {tasks.map((task, index) => (
                <div key={index} className="item">
                    <div className="item-text">{task}</div>
                    <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
                    <button onClick={() => editTask(index)} className="update-button">Update</button>
                </div>
            ))}
        </div>
    );
}

export default App;
