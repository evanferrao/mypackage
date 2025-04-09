import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskTracker.css';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: input.trim(), completed: false }
      ]);
      setInput('');
    }
  };

  const toggleTask = id => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="task-tracker">
      <h2>📋 Task Tracker</h2>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="counts">
        ✅ Completed: {completedCount} | ⏳ Pending: {pendingCount}
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskTracker;
