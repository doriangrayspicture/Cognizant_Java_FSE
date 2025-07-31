import React from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.invokeMultipleMethods = this.invokeMultipleMethods.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrementCount() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  sayHello() {
    alert("Hello!");
  }

  staticMessage() {
    alert("This is a static message.");
  }

  invokeMultipleMethods() {
    this.incrementCount();
    this.sayHello();
    this.staticMessage();
  }

  sayWelcome(message) {
    alert(message);
  }

  handleSyntheticEvent(event) {
    alert("I was clicked! Event type: " + event.type);
    console.log(event);
  }

  render() {
    return (
      <div style={{ textAlign: 'left', marginTop: '50px', marginLeft: '50px' }}>
        <div>
          <h2>Counter: {this.state.count}</h2>
          <button onClick={this.incrementCount} style={{ margin: '10px 10px 10px 0' }}>Increment</button>
          <button onClick={this.decrementCount} style={{ margin: '10px' }}>Decrement</button>
        </div>
        
        <div>
          <button onClick={this.invokeMultipleMethods} style={{ margin: '10px 10px 10px 0' }}>Increase (Multiple Methods)</button>
        </div>
        
        <div>
          <button onClick={() => this.sayWelcome('Welcome to Event Examples!')} style={{ margin: '10px 10px 10px 0' }}>Say Welcome</button>
        </div>
        
        <div>
          <button onClick={this.handleSyntheticEvent} style={{ margin: '10px 10px 10px 0' }}>OnPress (Synthetic Event)</button>
        </div>
        
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;