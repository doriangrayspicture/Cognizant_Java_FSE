import React from 'react';


export function OddPlayers({ teamPlayers }) { 
  const [first, , third, , fifth] = teamPlayers; 
  return (
    <div>
      <h3>Odd Players</h3>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}


export function EvenPlayers({ teamPlayers }) {
  const [, second, , fourth, , sixth] = teamPlayers;

  return (
    <div>
      <h3>Even Players</h3>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}


const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];


export const MergedIndianPlayers = [...T20Players, ...RanjiTrophyPlayers]; 


function IndianPlayers() {
  
  const baseIndianTeamForOddEven = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  return (
    <div>
      <h2>Indian Team</h2>
      <OddPlayers teamPlayers={baseIndianTeamForOddEven} />
      <hr />
      <EvenPlayers teamPlayers={baseIndianTeamForOddEven} />
      <hr />
      <h2>List of Indian Players Merged:</h2>
      <ul>
        {MergedIndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;