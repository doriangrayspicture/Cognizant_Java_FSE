import logo from './logo.svg';
import React from 'react';
import Cart from './Cart';
import './App.css';

class OnlineShopping extends React.Component { // Renamed from App to OnlineShopping
  render() {
    const CartInfo = [
  { Itemname: "Laptop", Price: 80000 },
  { Itemname: "TV", Price: 120000 },
  { Itemname: "Washing Machine", Price: 50000 },
  { Itemname: "Mobile", Price: 30000 },
  { Itemname: "Fridge", Price: 70000 }
];
  return (
  <div className="mydiv"> 
    <h1>Items Ordered :</h1>
   
    <table border="1" style={{ width: '50%', margin: '0 auto', borderCollapse: 'collapse', border: '1px solid gray' }}>
      <thead>
        <tr style={{ backgroundColor: '#e0e0e0' }}> 
          <th style={{ padding: '8px', border: '1px solid gray' }}>Name</th>
          <th style={{ padding: '8px', border: '1px solid gray' }}>Price</th>
        </tr>
      </thead>
      
      <Cart item={CartInfo} /> 
    </table>
  </div>
);
  }
}
export default OnlineShopping;
