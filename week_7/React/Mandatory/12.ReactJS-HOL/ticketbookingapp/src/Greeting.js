import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      return (
        <div>
          <UserGreeting />
          {button}
        </div>
      );
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      return (
        <div>
          <GuestGreeting />
          {button}
        </div>
      );
    }
  }
}

export default Greeting;