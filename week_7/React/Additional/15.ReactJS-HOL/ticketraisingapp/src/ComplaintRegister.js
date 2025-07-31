import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleNameChange = (event) => {
    setEmployeeName(event.target.value);
  };

  const handleComplaintChange = (event) => {
    setComplaint(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const transactionId = Math.floor(Math.random() * 1000); 

    
    const message = `Thanks ${employeeName}\nYour Complaint was Submitted.\nTransaction ID is: ${transactionId}`;

    
    alert(message);

   
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div>
      <h2>Register your complaints here!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="employeeName"
            value={employeeName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="complaint">Complaint:</label>
          <textarea
            id="complaint"
            name="complaint"
            value={complaint}
            onChange={handleComplaintChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;