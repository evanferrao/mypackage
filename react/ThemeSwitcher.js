import React, { useState } from 'react';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.container}>
        <h1>🌓 Theme Switcher</h1>
        <p>The current theme is <strong>{darkMode ? 'Dark' : 'Light'}</strong>.</p>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
