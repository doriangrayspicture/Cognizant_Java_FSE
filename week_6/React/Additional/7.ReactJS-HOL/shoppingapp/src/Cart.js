import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <tbody> {/* It's good practice to wrap table rows in a tbody */}
        {this.props.item.map((item, index) => { // Added index for key, but item.Itemname could also be used if unique
          return (
            <tr key={index}> {/* Always use a unique key when mapping lists */}
              <td>{item.Itemname}</td>
              <td>{item.Price}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default Cart;