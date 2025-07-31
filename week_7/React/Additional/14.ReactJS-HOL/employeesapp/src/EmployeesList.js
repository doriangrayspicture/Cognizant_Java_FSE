import React from 'react';
import EmployeeCard from './EmployeeCard';


function EmployeeList() {
  
  const employees = [
    { id: 1, name: 'Alice', designation: 'Software Engineer' },
    { id: 2, name: 'Bob', designation: 'UX Designer' },
    { id: 3, name: 'Charlie', designation: 'Project Manager' },
  ];

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          
        />
      ))}
    </div>
  );
}

export default EmployeeList;