import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import Task from './components/Task';
import './index.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [toast, setToast] = useState({ message: '', show: false });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

    const addTask = (text) => {
    const now = new Date(); // Get the current date and time
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: now.toLocaleString(), // Store as a formatted string
    };
    setTasks([...tasks, newTask]);
    showToast('Task added!');
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    showToast('Task completed!');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    showToast('Task deleted!');
  };

  const showToast = (message) => {
    setToast({ message, show: true });
    setTimeout(() => {
      setToast({ message: '', show: false });
    }, 3000);
  };

  return (
    <div className="App">
      <div className="hero">
        <h1>TODO_LIST</h1>
        <p>Where Procrastination Goes to Die! 💀</p>
      </div>

      <div className="task-input-card">
        <h2>What's on your mind today? 🤔
</h2>
        <TaskInput onAdd={addTask} />
      </div>

      <div className="task-list-card">
        <h2>Your Awesome Tasks 🌟</h2>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleComplete}
              onDelete={deleteTask}
            />
          ))}
        </ul>
        {tasks.length === 0 && <p>🎯
<br></br>No tasks yet!<br></br>
Add your first task above and start conquering your day! 💪🌟</p>}
      </div>
      <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.message}</div>
    </div>
  );
}

export default App;