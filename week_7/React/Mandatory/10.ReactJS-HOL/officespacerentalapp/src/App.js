import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";
  const jsxatt = <img src="https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg" width="25%" height="25%" alt="Office Space" />; 

  
  const offices = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Tech Hub", Rent: 75000, Address: "Bangalore" },
    { Name: "Innovate Co-work", Rent: 45000, Address: "Mumbai" },
    { Name: "Global HQ", Rent: 120000, Address: "Delhi" }
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{element} , at Affordable Range</h1>
      {jsxatt}

      
      {offices.map((office, index) => {
        const rentColor = {
          color: office.Rent <= 60000 ? 'red' : 'green'
        };
        return (
          <div key={index} style={{ marginBottom: '30px', border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
            <h1>Name: {office.Name}</h1>
            <h3 style={rentColor}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;