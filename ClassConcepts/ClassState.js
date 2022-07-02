import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class User extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Rob', lastName: 'Stoelhorst' },
      company: 'Home',
    };
  }

  render() {
    // Callback function, This is the ideal format we should be writing setState code in Class components if you want to get the updated state at runtime
    // without if we would not be logging the updated state because of the asynchronous nature of Javascript
    const changeNameHandler = () => {
      this.setState(
        (state, props) => {
          return {
            name: { firstName: 'Tim', lastName: 'Spanky' },
          };
        },
        () => {
          console.log(this.state.name);
          console.log(this.state.company);
        }
      );
    };

    return (
      <div className="User">
        <header className="User-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi I am {this.state.name.firstName} {this.state.name.lastName}, I
            Work at {this.state.company}
          </p>
          <button onClick={changeNameHandler}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default User;
