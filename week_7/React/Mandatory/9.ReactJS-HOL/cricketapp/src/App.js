import React from 'react';
import ListofPlayers from './ListOfPlayers';

import IndianPlayers, { OddPlayers, EvenPlayers, MergedIndianPlayers } from './IndianPlayers';
import './App.css'; 

function App() {
  const flag = true; 
  
  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 }
  ];

  
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6']; 

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers /> 
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <OddPlayers teamPlayers={IndianTeam} />
        <hr />
        <h1>Even Players</h1>
        <EvenPlayers teamPlayers={IndianTeam} />
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ul>
          {MergedIndianPlayers.map((player, index) => (
            <li key={index}>Mr. {player}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;