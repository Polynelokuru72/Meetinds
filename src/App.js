import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add task to the list
  const addTask = () => {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask(''); // Clear input
    }
  };

  // Remove task from the list
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1); // Remove task by index
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={task} 
          onChange={handleInputChange} 
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
