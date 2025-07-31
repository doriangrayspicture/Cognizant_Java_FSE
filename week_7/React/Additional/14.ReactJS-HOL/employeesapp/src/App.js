import React, { useState } from 'react'; 
import './App.css';
import EmployeeList from './EmployeesList';
import ThemeContext from './ThemeContext';  

function App() {
  
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme}`}>
        <h1>Employee Management Application</h1>
        <button onClick={toggleTheme} className={`btn btn-${theme}`}>
          Toggle Theme to {theme === 'light' ? 'Dark' : 'Light'}
        </button>
        
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;