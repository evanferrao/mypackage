import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    if(value==="C"){
      const len = input.length;
      setInput(input.slice(0,len-1));
    }
    else if(value === "x^2"){
      setInput(Math.pow(input, 2).toString());
    }
    else if(value === "1/x"){
      setInput(1/eval(input).toString());
    }
    else{
      setInput(input + value);
    }



  };

  // Function to handle clearing the input
  const handleClear = () => {
    setInput('');
  };

  // Function to evaluate the expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); // Evaluating the input string
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <div class="upper" id="r1">
          <button onClick={handleClear}>↻</button>
          <button onClick={() => handleClick('C')}>←</button>
          <button onClick={() => handleClick('C')}>C</button>
          <button onClick={handleClear}>AC</button>
        </div>

        <div class="upper2">
            <button onClick={() => handleClick('7')}>mc</button>
            <button onClick={() => handleClick('8')}>m+</button>
            <button onClick={() => handleClick('9')}>m-</button>
            <button onClick={() => handleClick('/')}>mr</button>
        </div>

        <div class="lower">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('✓')}>✓</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>X</button>
          <button onClick={() => handleClick('x^2')}>x^2</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('1/x')}>1/x</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('+-')}>+-</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button id="equals" onClick={handleEvaluate}>=</button>
        </div>




      </div>
    </div>
  );
}

export default Calculator;