import React from 'react';

function Task({ task, onToggle, onDelete }) {
  return (
    <li>
      <div className="task-container">
        <input
          type="checkbox" style={{ width: '1.5em', height: '1.5em',color: '#4CAF50' }}
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? 'completed' : ''} style={{fontSize:'2em'}}>{task.text}</span>
        <span style={{ fontSize: '0.8em', color: '#888', marginLeft: '10px' }}>
          ({task.createdAt})
        </span>
      </div>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        🗑️
      </button>
    </li>
  );
}

export default Task;