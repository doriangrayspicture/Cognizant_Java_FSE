import React, { useContext } from 'react'; 
import ThemeContext from './ThemeContext'; 
function EmployeeCard({ employee }) { 
  const theme = useContext(ThemeContext); 

  return (
    <div className={`employee-card card bg-${theme}`}> 
      <h3>{employee.name}</h3>
      <p>{employee.designation}</p>
      
      <button className={`btn btn-${theme}`}>
        View Details
      </button>
    </div>
  );
}

export default EmployeeCard;