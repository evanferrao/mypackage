import React, { useState } from 'react';
import './ColourPicker.css';

const ColourPicker = () => {
  const [color, setColor] = useState('#3498db'); // default color

  return (
    <div className="picker-container" style={{ backgroundColor: color }}>
      <div className="picker-card">
        <h2>Pick a Colour</h2>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <p className="hex-code">Hex Code: <strong>{color}</strong></p>
      </div>
    </div>
  );
};

export default ColourPicker;
