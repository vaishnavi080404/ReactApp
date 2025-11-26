import React, { useState } from 'react';

function TaskInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your task here... (e.g., 'Conquer the world' or 'Buy milk')"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add the magic! ✨</button>
    </form>
  );
}

export default TaskInput;