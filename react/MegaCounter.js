import React, { useState, useEffect, useRef } from 'react';

const MegaCounter = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isStopwatch, setIsStopwatch] = useState(true); // toggle mode
  const [time, setTime] = useState(0); // in milliseconds
  const [laps, setLaps] = useState([]);
  const [inputTime, setInputTime] = useState('00:00:10'); // default 10 sec countdown

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev =>
          isStopwatch ? prev + 10 : prev > 0 ? prev - 10 : 0
        );
      }, 10);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isStopwatch]);

  const formatTime = ms => {
    const milliseconds = ms % 1000;
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
  };

  const parseInputTime = str => {
    const [h, m, s] = str.split(':').map(Number);
    return ((h * 3600 + m * 60 + s) * 1000);
  };

  const handleStart = () => {
    if (!isStopwatch && time === 0) {
      setTime(parseInputTime(inputTime));
    }
    setIsRunning(true);
  };

  const handleStop = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
    setTime(isStopwatch ? 0 : parseInputTime(inputTime));
    setLaps([]);
  };

  const handleLap = () => {
    if (isStopwatch && isRunning) {
      setLaps(prev => [...prev, time]);
    }
  };

  const handleModeToggle = () => {
    setIsRunning(false);
    setLaps([]);
    setTime(0);
    setIsStopwatch(prev => !prev);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>MegaCounter</h2>

      <div style={styles.timeDisplay}>{formatTime(time)}</div>

      {!isStopwatch && (
        <input
          style={styles.input}
          value={inputTime}
          onChange={e => setInputTime(e.target.value)}
          placeholder="hh:mm:ss"
        />
      )}

      <div style={styles.buttonRow}>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        {isStopwatch && <button onClick={handleLap} disabled={!isRunning}>Lap</button>}
      </div>

      <button onClick={handleModeToggle} style={styles.modeButton}>
        Switch to {isStopwatch ? 'Countdown Timer' : 'Stopwatch'}
      </button>

      {laps.length > 0 && (
        <div style={styles.laps}>
          <h3>Laps</h3>
          <ul>
            {laps.map((lapTime, index) => (
              <li key={index}>
                Lap {index + 1}: {formatTime(lapTime)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
    background: '#f7f9fc',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    marginBottom: '16px'
  },
  timeDisplay: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '16px',
    fontFamily: 'Courier New, monospace'
  },
  input: {
    marginBottom: '12px',
    padding: '6px 12px',
    fontSize: '16px',
    width: '150px',
    textAlign: 'center'
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '10px'
  },
  modeButton: {
    marginTop: '12px',
    padding: '8px 14px',
    fontSize: '14px',
    background: '#0984e3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  laps: {
    marginTop: '20px',
    textAlign: 'left'
  }
};

export default MegaCounter;
