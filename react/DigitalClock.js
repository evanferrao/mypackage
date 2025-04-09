import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
  const getInitialTime = () => new Date();

  const getInitialTheme = () => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6 ? 'dark' : 'light'; // Dark after 6pm or before 6am
  };

  const [time, setTime] = useState(getInitialTime());
  const [theme, setTheme] = useState(getInitialTheme());
  const [userOverride, setUserOverride] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => date.toLocaleTimeString();
  const formatDate = (date) =>
    date.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return 'Good Morning ☀️';
    else if (hour < 18) return 'Good Afternoon 🌤️';
    else return 'Good Evening 🌙';
  };

  const toggleTheme = () => {
    setUserOverride(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`clock-container ${theme}`}>
      <button className="toggle-btn" onClick={toggleTheme}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>

      <div className="greeting">{getGreeting()}</div>
      <div className="time">{formatTime(time)}</div>
      <div className="date">{formatDate(time)}</div>
    </div>
  );
};

export default DigitalClock;
