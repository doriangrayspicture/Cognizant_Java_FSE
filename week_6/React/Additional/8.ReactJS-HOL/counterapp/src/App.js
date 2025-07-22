import React from 'react';
import './App.css';

class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  updateEntry() {
    this.setState(prevState => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState(prevState => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      // Add a container div with flexbox properties
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ marginRight: '50px' }}>
          <button onClick={this.updateEntry} style={{ backgroundColor: 'lightgreen', padding: '10px 20px', fontSize: '18px' }}>
            Login
          </button>
          <span> {this.state.entrycount} People Entered!!!</span>
        </div>
        <div>
          <button onClick={this.updateExit} style={{ backgroundColor: '#ffcccb', padding: '10px 20px', fontSize: '18px' }}>
            Exit
          </button>
          <span> {this.state.exitcount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;