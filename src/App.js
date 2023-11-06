import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(currentValue);
        setDisplayValue(result.toString());
        setCurrentValue(result.toString());
        setOperator('');
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (value === 'C') {
      setDisplayValue('0');
      setCurrentValue('');
      setOperator('');
    } else {
      if (displayValue === '0' || operator) {
        setCurrentValue(value);
      } else {
        setCurrentValue(currentValue + value);
      }
      setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }
  };

  return (
    <div className={`calculator ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {['7', '8', '9', 'C', '6', '5', '4', '/', '3', '2', '1', '*', '0', '.', '=', '+'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
