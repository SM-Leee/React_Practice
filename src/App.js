import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <MyComponent/>
      <br/>
      <br/>
      <EventPractice/>
      </React.Fragment>
    );
  }
}

export default App;
