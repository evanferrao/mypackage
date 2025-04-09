import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="count-display">{count}</div>
      <div className="counter-controls">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement} disabled={count <= 0}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
