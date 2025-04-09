import React, { useState, useRef } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const inputRef = useRef();

  const addTodo = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask('');
    inputRef.current.focus();
  };

  const toggleTodo = index => {
    setTodos(prev =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = index => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <div className="todo-container">
      <h2>🗒️ Todo List</h2>
      <div className="todo-input">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.length === 0 && <p>No tasks yet!</p>}
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
