import React from 'react';

class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };
    this.handleRupeesChange = this.handleRupeesChange.bind(this);
    this.handleEuroChange = this.handleEuroChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  euroToRupeesRate = 90;

  handleRupeesChange(event) {
    const rupeesValue = event.target.value;
    this.setState({
      rupees: rupeesValue,
      euro: (rupeesValue / this.euroToRupeesRate).toFixed(2)
    });
  }

  handleEuroChange(event) {
    const euroValue = event.target.value;
    this.setState({
      euro: euroValue,
      rupees: (euroValue * this.euroToRupeesRate).toFixed(2)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Converting ${this.state.rupees} Rupees to ${this.state.euro} Euro!`);
  }

  render() {
    return (
      <div style={{ textAlign: 'left', marginTop: '50px', marginLeft: '50px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}> {/* Changed margin and added textAlign: 'left' */}
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Indian Rupees:
              <input
                type="number"
                value={this.state.rupees}
                onChange={this.handleRupeesChange}
                style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Euro:
              <input
                type="number"
                value={this.state.euro}
                onChange={this.handleEuroChange}
                style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Convert
          </button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;