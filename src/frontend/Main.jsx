import React, { useState } from 'react';

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (taskName.trim() && taskDescription.trim()) {
      setTasks([...tasks, { name: taskName, description: taskDescription }]);
      setTaskName('');
      setTaskDescription('');
    }
  };

  const updateTask = () => {
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = { name: taskName, description: taskDescription };
      setTasks(updatedTasks);
      setEditingIndex(null);
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">To-Do List</h1>
      
      <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={addTask}>Add Task</button>
          <button className="btn btn-warning" onClick={updateTask} style={{ display: editingIndex !== null ? 'inline-block' : 'none' }}>Update Task</button>
        </div>
      </div>
      
      <div className="mt-4">
        <h2>Task List</h2>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{task.name}</strong>
                <p>{task.description}</p>
              </div>
              <button className="btn btn-sm btn-info" onClick={() => { setEditingIndex(index); setTaskName(task.name); setTaskDescription(task.description); }}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
